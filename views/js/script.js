var a= "Admin";
var b= 123;
var c= "Secre";;
var d= "Lab";

function iniciar() {
    const form = document.forms['formulario__login'];
    form.addEventListener('submit', e => {
        if (document.formulario__login.usuario.value == a && document.formulario__login.password.value == b) {
            console.log('HOLA')
            window.location.href= 'index.html';
        }
        if (document.formulario__login.usuario.value == c && document.formulario__login.password.value == b) {
            console.log('HOLA')
            window.location.href= 'secretario.html';
        }
        if (document.formulario__login.usuario.value == d && document.formulario__login.password.value == b) {
            console.log('HOLA')
            window.location.href= 'laboratorista.html';
        }
        
    })

}dfdfdfdf