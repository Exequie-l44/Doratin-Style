let form = document.getElementById("transaccionFormulario");

form.addEventListener("submit", function (event) {
  event.preventDefault(); //previene el comportamiento por defecto de recargar la pagina de google
  //se llama el objeto formData que evalua el name de cada campo en el formulario
  let transaccionFormData = new FormData(form);
  let turnoObjeto = convertirFormDataEnObjeto(transaccionFormData);
  guardarTurnoComoObjeto(turnoObjeto);
  insertarFilaEnTabla(turnoObjeto);
  //reseteamos lo valores del formulario que pusimos antes
  form.reset(); 
});

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

 function convertirFormDataEnObjeto(transaccionFormData) {
  //obtenemos todos los valores de la tabla con el transaccionFromData.get()
  let turnoNumero = transaccionFormData.get("");
  let turnoFecha = transaccionFormData.get("fecha");
  let turnoHora = transaccionFormData.get("hora");
  let turnoCliente = transaccionFormData.get("cliente");
  let turnoColaborador = transaccionFormData.get("colaborador");
  let turnoServicio = transaccionFormData.get("servicio");
  let turnoCajero = transaccionFormData.get("cajero");
  let turnoMetodo = transaccionFormData.get("metodo");
  let turnoDescuento = transaccionFormData.get("descuento");
  let turnoTotal = transaccionFormData.get("pagoTotal");
  return {
    //devuelve un objeto con "clave" : valor para poder pasarlo a JSON
    turnoNumero: turnoNumero,
    turnoFecha: turnoFecha,
    turnoHora: turnoHora,
    turnoCliente: turnoCliente,
    turnoColaborador: turnoColaborador,
    turnoServicio: turnoServicio,
    turnoCajero: turnoCajero,
    turnoMetodo: turnoMetodo,
    turnoDescuento: turnoDescuento,
    turnoTotal: turnoTotal,
  };
}

function insertarFilaEnTabla(turnoObjeto) {
  let nuevaTransanccionRowRef = document
    .getElementById("tablaTransaccion")
    .insertRow(-1); //Agrega una fila al final de la tabla con el -1

  let nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(0); //Agrega un nueva celda a la tabla
  //textContent remplaza en el html por el transaccionFormData.get que trae el name del formulario
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoNumero"];

  nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(1);
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoFecha"];

  nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(2);
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoHora"];

  nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(3);
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoCliente"];

  nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(4);
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoServicio"];

  nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(5);
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoColaborador"];

  nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(6);
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoCajero"];

  nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(7);
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoMetodo"];

  nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(8);
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoDescuento"];

  nuevoTipoCeldaRef = nuevaTransanccionRowRef.insertCell(9);
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoTotal"];
}

function guardarTurnoComoObjeto(turnoObjeto) {
   // creamos un array basio para que no de un erro el local storage cuando este basio
   //JSON.parse devuelve el string en objeto y lo obtenemos del localstorage con un getItem 
    let miTurnoArray = JSON.parse(localStorage.getItem("datosTurno")) || [];
    miTurnoArray.push(turnoObjeto);
  //convierto el array miTurnoArray en un archivo JSON
  let turnoArrayJSON = JSON.stringify(miTurnoArray);
  //almacenon el objeto JSON  en el localstorage
  localStorage.setItem("datosTurno", turnoArrayJSON);
}
