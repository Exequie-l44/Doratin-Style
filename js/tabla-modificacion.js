import  {form} from "./formulario-modificacion";



export  function insertarFilaEnTabla(transaccionFormData){
  

  let nuevaTransanccionRowRef =  document.getElementById("tablaTransaccion").insertRow(-1); //Agrega una fila al final de la tabla con el -1

  let nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(0); //Agrega un nueva celda a la tabla 
  //textContent remplaza en el html por el transaccionFormData.get que trae el name del formulario
  nuevoTipoCeldaRef.textContent = new FormData(form).get("")
  
  nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(1);
  nuevoTipoCeldaRef.textContent = FormData(form).get("fecha")
  
  nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(2);
  nuevoTipoCeldaRef.textContent = FormData(form).get("cliente")
  
  nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(3);
  nuevoTipoCeldaRef.textContent = FormData(form).get("hora")
  
  nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(4);
  nuevoTipoCeldaRef.textContent = FormData(form).get("colaborador")
  
  nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(5);
  nuevoTipoCeldaRef.textContent = FormData(form).get("cajero")
  
  nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(6);
  nuevoTipoCeldaRef.textContent = FormData(form).get("metodo")
  
  nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(7);
  nuevoTipoCeldaRef.textContent = FormData(form).get("descuento")
  
  nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(8);
  nuevoTipoCeldaRef.textContent = FormData(form).get("pagoTotal")
}



