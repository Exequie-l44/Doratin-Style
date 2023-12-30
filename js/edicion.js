
const form = document.getElementById("transaccionFormulario");

form.addEventListener("submit",function(event){
    event.preventDefault(); //previene el comportamiento por defecto de recargar la pagina de google
    let transaccionFormData = new FormData(form); //se llama el objeto formData que evalua el name de cada formulario
    let tablatransaccionRe = document.getElementById("tablaTransaccion");

})




