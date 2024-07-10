/**
 * SpaceAPI Library 2.0.0
 * Copyright(c) 2012-2024 SpaceAPI, Inc.
 * licensing@widetech.com.co
 * http://www.widetech.com.co/license
 */



const SpaceAPI = (() => {
    const version = '2.0';
    const versionDetail = { major: 2, minor: 0, patch: 0 };

    const apply = (o, c, defaults) => {
        if (defaults) apply(o, defaults);
        if (o && c && typeof c == 'object') Object.assign(o, c);
        return o;
    };

    const getUrlWhiteBrand = () => {
        const patronIp = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
        if (location.hostname === "localhost") return `${location.protocol}//${location.hostname}/wt2013/`;
        if (["gps.shareservice.co", "gpspace.app", "gpspace.co"].includes(location.hostname) || patronIp.test(location.hostname)) return `${location.protocol}//${location.hostname}/${location.pathname.split('/')[1]}/`;
        return location.origin + "/";
    };

    const getTimeForURL = () => {
        const dt = new Date();
        return `${dt.getHours()}_${dt.getMinutes()}_${dt.getSeconds()}_${dt.getMilliseconds()}`;
    };

    const loadScript = (id, url, fn, useCache, params) => {
        const script = document.createElement("script");
        script.id = id;
        script.charset = "utf8";
        script.type = "text/javascript";
        script.onload = fn;

        script.src = useCache ? url + (params ? "?" + params : "") : `${url}?${params ? params + "&" : ""}cache=${getTimeForURL()}`;

        document.head.appendChild(script);
    };

    const removeScript = (id, fn) => {
        const script = document.getElementById(id);
        if (script) {
            fn();
            script.remove();
        }
    };

    const accessControl = (idControl) => SpaceAPI.SesInfo.AccessControl.includes(idControl);

    const formatDate = (strDate) => {
        if (!strDate) return "";
        const dt = new Date(strDate);
        const f = (d) => d < 10 ? '0' + d : d;
        return `${f(dt.getFullYear())}/${f(dt.getMonth() + 1)}/${f(dt.getDate())} ${f(dt.getHours())}:${f(dt.getMinutes())}:${f(dt.getSeconds())}`;
    };

    const convertToDate = (strDate) => {
        if (!strDate) return "";
        const milliseconds = parseInt(strDate.match(/\d+/)[0], 10);
        return new Date(milliseconds);
    };

    const eventHandler = (URL, ObjData, _headers) => {
        return fetch(URL, {
            method: 'POST',
            headers: _headers,
            credentials: 'include',
            body: ObjData
        })
        .then(response => response.clone().json())
        .catch(err => {
            console.error(err);
            alert(err);
        });
    };

    const textTranslation = (strLabel) => {
        const dataTranslations = JSON.parse(localStorage.DataTranslations || "{}");
        return (SpaceAPI && SpaceAPI.dataTranslations && SpaceAPI.dataTranslations[strLabel]) || dataTranslations[strLabel] || strLabel;
    };

    return {
        version,
        versionDetail,
        apply,
        getUrlWhiteBrand,
        getTimeForURL,
        loadScript,
        removeScript,
        accessControl,
        formatDate,
        convertToDate,
        eventHandler,
        textTranslation
    };
})();