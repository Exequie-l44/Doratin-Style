

 let form = document.getElementById("transaccionFormulario");

form.addEventListener( "submit", function(event) {

    event.preventDefault(); //previene el comportamiento por defecto de recargar la pagina de google
     //se llama el objeto formData que evalua el name de cada formulario
     let transaccionFormData = new FormData(form);
    insertarFilaEnTabla(transaccionFormData);


})

export function insertarFilaEnTabla(transaccionFormData){
  

    let nuevaTransanccionRowRef =  document.getElementById("tablaTransaccion").insertRow(-1); //Agrega una fila al final de la tabla con el -1
  
    let nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(0); //Agrega un nueva celda a la tabla 
    //textContent remplaza en el html por el transaccionFormData.get que trae el name del formulario
    nuevoTipoCeldaRef.textContent = new FormData(form).get("")
    
    nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(1);
    nuevoTipoCeldaRef.textContent = new FormData(form).get("fecha")
    
    nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(2);
    nuevoTipoCeldaRef.textContent = new FormData(form).get("cliente")
    
    nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(3);
    nuevoTipoCeldaRef.textContent = new FormData(form).get("hora")
    
    nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(4);
    nuevoTipoCeldaRef.textContent =new FormData(form).get("colaborador")
    
    nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(5);
    nuevoTipoCeldaRef.textContent = new FormData(form).get("cajero")
    
    nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(6);
    nuevoTipoCeldaRef.textContent = new FormData(form).get("metodo")
    
    nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(7);
    nuevoTipoCeldaRef.textContent =new FormData(form).get("descuento")
    
    nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(8);
    nuevoTipoCeldaRef.textContent = new FormData(form).get("pagoTotal")
  }
  


