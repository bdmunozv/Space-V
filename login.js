const vueLogin = Vue.createApp({

    data(){
        return{
          traducciones:{
              titleLogin: {
                es:"Administración Remota - GPS",
                en: "Remote Administration - GPS", 
                pt: "Administração Remota - GPS", 
                zh:"远程管理 - GPS"},
              labelUser: {
                es:"Usuario",
                en: "User", 
                pt: "O usuário", 
                zh:"用户"},
              labelPassword: {
                es:"Contraseña",
                en: "Password", 
                pt: "Senha", 
                zh:"密码"},
              labelRememberMe: {
                es:"Recordar contraseña",
                en: "Remember password", 
                pt: "Lembrar senha", 
                zh:"记住密码"},
              labelButtonSend: {
                es:"Enviar",
                en: "Send", 
                pt: "Enviar",
                zh:"发送"},
              labelButtonLogin: {
                es:"Iniciar sesión",
                en: "Login", 
                pt: "Conecte-se",
                zh:"登录"},
              anchorDescoveryUs: {
                es:"Descubra nuestros productos",
                en: "Discover our products", 
                pt: "Descubra nossos produtos",
                zh:"发现我们的产品"},
              anchorPolicy: {
                es:"Términos y políticas de uso de la información",
                en: "Terms and policies of use of information", 
                pt: "Termos e políticas de uso de informações",
                zh: "信息使用条款和政策"},
              labelDerechosReservados: {
                es:"Todos los derechos reservados",
                en: "All rights reserved", 
                pt: "Todos os direitos reservados",
                zh:"版权所有"},
            },
            labels:{
              titleLogin: "",
              labelUser: "",
              labelPassword: "",
              labelRememberMe: "",
              labelButtonSend: "",
              labelButtonLogin: "",
              anchorDescoveryUs: "",
              anchorPolicy: "",
              labelDerechosReservados: "",
            },
            selLang: null,
            inputUser: "",
            inputPassword: "",
            eyeState: "eye-close",
            ispassword: "password",
            bolRememberMe: false,
            strCopyrightYear: new Date().getFullYear(),
            languages: [{
                ID: 'es',
                language: 'Español',
                imgLang: './src/img/login_light/espanol.png',
              }, {
                ID: 'en',
                language: 'English',
                imgLang: './src/img/login_light/ingles.png',
              }, {
                ID: 'pt',
                language: 'Português',
                imgLang: './src/img/login_light/portugues.png',
              }, {
                ID: 'zh',
                language: 'Mandarin',
                imgLang: './src/img/login_light/mandarin.png',
              }],
            
        }
    },
    mounted(){
      this.setTraductions('es');
      $(() => {
            $('#selLang').dxSelectBox({
              dataSource: this.languages,
              displayExpr: 'language',
              valueExpr: 'ID',
              value: this.languages[0].ID,
              fieldTemplate(data, container) {
                const result = $(`
                <div class='custom-item'>
                <div class='lang-name'><img alt='idioma' class='lang-label' src='${data ? data.imgLang : ''}' />
                    </div>
                </div>`);
                result
                  .find('.lang-name')
                  .dxTextBox({
                    value: data && data.language,
                    readOnly: true,
                  });
                container.append(result);
              },
              itemTemplate(data) {
                return `<div class='custom-item'>
                <div class='lang-name'><img alt='idioma' class='lang-options' src='${data.imgLang}' />
                ${data.language}</div>
                </div>   `;
              },
              onValueChanged(data) {
                vueLogin.setTraductions(data.value);
              }
            });  
          });

          
        },
        methods:{
            showPassword(e){
                if(e.type == "mousedown"){
                    this.eyeState = "eye-open";
                    this.ispassword = "text";
                }else{
                    this.eyeState = "eye-close";
                    this.ispassword = "password";
                }
            },
            Login(){
                console.log(this);
            },
            setTraductions(strLanguage){
              for (var clave in this.labels) {
                if (this.traducciones.hasOwnProperty(clave)) {
                  this.labels[clave] = this.traducciones[clave][strLanguage];
                }
              }
            },
        },

  }).mount('#appLogin')
  