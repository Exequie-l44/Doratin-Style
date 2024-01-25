

//escucha cuando el contenido del DOM se carga
document.addEventListener("DOMContentLoaded", function(event){
   //turnoObjetoArray trae la informacion del localStorage parseada
   let turnoObjetoArray = JSON.parse(localStorage.getItem("datosTurno"));
   //con el forEach recorro los turnos antes cargados y los inserta en la tabla
   turnoObjetoArray.forEach(
     function(arrayElemento){
         insertarFilaEnTabla(arrayElemento);
         console.log("Se insertaron los datos en la tabla");
   })
 
 })

 function insertarFilaEnTabla(turnoObjeto) {
    let nuevaTransanccionRowRef = document
      .getElementById("tablaTransaccion")
      .insertRow(-1); //Agrega una fila al final de la tabla con el -1
  
    let nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(0); //Agrega un nueva celda a la tabla
    //textContent remplaza en el html por el transaccionFormData.get que trae el name del formulario
  
    nuevoTipoCeldaRef.textContent = turnoObjeto["turnoFecha"];
  
    nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(1);
    nuevoTipoCeldaRef.textContent = turnoObjeto["turnoHora"];
  
    nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(2);
    nuevoTipoCeldaRef.textContent = turnoObjeto["turnoCliente"];
  
    nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(3);
    nuevoTipoCeldaRef.textContent = turnoObjeto["turnoServicio"];
  
    nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(4);
    nuevoTipoCeldaRef.textContent = turnoObjeto["turnoColaborador"];
  
    nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(5);
    nuevoTipoCeldaRef.textContent = turnoObjeto["turnoCajero"];
  
    nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(6);
    nuevoTipoCeldaRef.textContent = turnoObjeto["turnoMetodo"];
  
    nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(7);
    nuevoTipoCeldaRef.textContent = turnoObjeto["turnoDescuento"];
  
    nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(8);
    nuevoTipoCeldaRef.textContent = turnoObjeto["turnoTotal"];
  }