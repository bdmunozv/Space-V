const SpaceAPI = {
    // Versión de SpaceAPI
    version: '2.0',
    versionDetail: { major: 2, minor: 0, patch: 0 },
    // Flag para indicar si SpaceAPI está listo
    isReady: false,
    // Almacenamiento interno para SpaceAPI
    _Storage: null,

    // Método para aplicar propiedades de un objeto a otro
    apply(o, c, defaults) {
        if (defaults) this.apply(o, defaults);
        if (o && c && typeof c === 'object') Object.assign(o, c);
        return o;
    },

    // Método para aplicar propiedades de un objeto solo si no están definidas en el objeto de destino
    applyIf(o, c) {
        if (o) {
            for (let p in c) {
                if (!this.isDefined(o[p])) o[p] = c[p];
            }
        }
        return o;
    },

    // Método para verificar si un valor está definido
    isDefined(v) {
        return typeof v !== 'undefined';
    },

    // Método para obtener la URL de la marca blanca
    getUrlWhiteBrand() {
        const patronIp = /^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/;
        if (location.hostname === "localhost") return `${location.protocol}//${location.hostname}/Space/`;
        if (["gps.shareservice.co", "gpspace.app", "gpspace.co"].includes(location.hostname)) return `${location.protocol}//${location.hostname}/${location.pathname.split('/')[1]}/`;
        if (patronIp.test(location.hostname)) return `${location.protocol}//${location.hostname}/${location.pathname.split('/')[1]}/`;
        return `${location.origin}/`;
    },

    // Método para obtener una cadena de tiempo
    getTimeForURL() {
        const dt = new Date();
        return `${dt.getHours()}_${dt.getMinutes()}_${dt.getSeconds()}_${dt.getMilliseconds()}`;
    },

    // Método para cargar un script de forma asíncrona
    async loadScript(id, url, fn, useCache, params) {
        if (!document.getElementById(id)) {
            const script = document.createElement("script");
            script.id = id;
            script.charset = "utf8";
            script.type = "text/javascript";

            // Manejadores de eventos para el evento onload o readystatechange
            script.onload = script.onreadystatechange = () => {
                if (!script.readyState || ['loaded', 'complete'].includes(script.readyState)) {
                    script.onload = script.onreadystatechange = null;
                    fn();
                }
            };

            // URL del script, con o sin caché
            script.src = useCache ? `${url}${params ? "?" + params : ""}` : params ? `${url}?${params}&cache=${this.getTimeForURL()}` : `${url}?cache=${this.getTimeForURL()}`;

            // Añadir el script al head del documento
            document.getElementsByTagName("head")[0].appendChild(script);
        } else {
            fn();
        }
    },

    // Método para eliminar un script cargado previamente
    removeScript(id, fn) {
        const script = document.getElementById(id);
        if (script) {
            fn();
            script.parentNode.removeChild(script);
        }
    },

    // Método para cargar una hoja de estilos de forma asíncrona
    loadCSS(id, url) {
        if (!document.getElementById(id)) {
            const cssLink = document.createElement("link");
            cssLink.id = id;
            cssLink.rel = "stylesheet";
            cssLink.type = "text/css";
            cssLink.href = url;
            document.head.appendChild(cssLink);
        }
    },

    // Método para eliminar una hoja de estilos cargada previamente
    removeCSS(id) {
        const cssLink = document.getElementById(id);
        if (cssLink) cssLink.parentNode.removeChild(cssLink);
    },

    // Método para verificar si un identificador de control está autorizado
    accessControl(idControl) {
        return this.SesInfo.AccessControl.includes(idControl);
    },

    // Método para formatear una cantidad de segundos en formato de hora
    formatHour(secs) {
        const strDenotation = secs < 0 ? "- " : "";
        const t = new Date(1970, 0, 1);
        t.setSeconds(secs);
        let s = t.toTimeString().substr(0, 8);
        if (secs > 86399) s = Math.floor((t - Date.parse("1/1/70")) / 3600000) + s.substr(2);
        return strDenotation + s;
    },

    // Método para formatear una fecha en formato específico
    formatDate(strDate) {
        if (!strDate) return "";
        const dt = new Date(strDate);
        const f = (d) => d < 10 ? '0' + d : d;
        return `${f(dt.getFullYear())}/${f(dt.getMonth() + 1)}/${f(dt.getDate())} ${f(dt.getHours())}:${f(dt.getMinutes())}:${f(dt.getSeconds())}`;
    },

    // Método para convertir una fecha de formato string a objeto Date
    convertToDate(strDate) {
        if (!strDate) return "";
        const milliseconds = parseInt(strDate.match(/\d+/)[0], 10);
        return new Date(milliseconds);
    },

    // Método para manejar eventos haciendo una solicitud fetch
    async EventHandler(URL, ObjData, _headers) {
        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: _headers,
                credentials: 'include',
                body: ObjData
            });
            return await response.json();
        } catch (err) {
            console.error(err);
            alert(err);
        }
    },

    // Método para traducir una etiqueta de texto
    TextTranslation(strLabel) {
        if (!localStorage.DataTranslations) {
            return strLabel;
        }

        this.dataTranslations = this.dataTranslations || JSON.parse(localStorage.DataTranslations);
        this.mostWanted = this.mostWanted || new Map();

        if (!this.mostWanted.has(strLabel)) {
            const translation = this.dataTranslations[strLabel];
            const translatedText = translation ? translation : strLabel;
            this.mostWanted.set(strLabel, translatedText);
            return translatedText;
        }
        return this.mostWanted.get(strLabel);
    }
};