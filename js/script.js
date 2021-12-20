var c= "Admin";
var a= 123;
function iniciar() {
    const form = document.forms['formulario__login'];
    form.addEventListener('submit', e => {
        if (document.formulario__login.usuario.value == c && document.formulario__login.password.value == a) {
            console.log('HOLA')
            window.location.href= 'index.html';
        }
        else {
            console.log('INCORRECTO')
            window.location.href= 'Login.html';
        }
    })

}