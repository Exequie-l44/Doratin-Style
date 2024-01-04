import '../css/style.css'
import {insertarFilaEnTabla} from './tabla-modificacion'


export  const form = document.getElementById("transaccionFormulario");

form.addEventListener( "submit", function(event) {

    event.preventDefault(); //previene el comportamiento por defecto de recargar la pagina de google
     //se llama el objeto formData que evalua el name de cada formulario
     let transaccionFormData = new FormData(form);
    insertarFilaEnTabla(transaccionFormData);


})


