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
document.addEventListener("DOMContentLoaded", function(_event){
  //turnoObjetoArray trae  TODA la informacion del localStorage parseada
  let turnoObjetoArray = JSON.parse(localStorage.getItem("datosTurno"));
  //con el forEach recorro los turnos antes cargados y los inserta en la tabla
  turnoObjetoArray.forEach(
    function(arrayElemento){
        insertarFilaEnTabla(arrayElemento);
        console.log("Se insertaron los datos en la tabla");
  })

})

function conseguitNuevoIdYturno(){
  //obtenemos un nuevo id oy turno del localStorage y si no hay le agregamos un 0 
  let idYturno = localStorage.getItem("idYturno") || "0";
  //pasasmos de string a numero desde el localStorage y le sumamos 1 con parse()
  let nuevoIdYturno = JSON.parse(idYturno) + 1;
  //lo guardamos en el localStorage con la clave idYturno
  localStorage.setItem("idYturno", JSON.stringify(nuevoIdYturno))
  return nuevoIdYturno;
}

 function convertirFormDataEnObjeto(transaccionFormData) {
  //obtenemos todos los valores de la tabla con el transaccionFromData.get()
  let turnoFecha = transaccionFormData.get("fecha");
  let turnoHora = transaccionFormData.get("hora");
  let turnoCliente = transaccionFormData.get("cliente");
  let turnoColaborador = transaccionFormData.get("colaborador");
  let turnoServicio = transaccionFormData.get("servicio");
  let turnoCajero = transaccionFormData.get("cajero");
  let turnoMetodo = transaccionFormData.get("metodo");
  let turnoDescuento = transaccionFormData.get("descuento");
  let turnoTotal = transaccionFormData.get("pagoTotal");
  let turnoId = conseguitNuevoIdYturno();
  return {
    //devuelve un objeto con "clave" : valor para poder pasarlo a JSON

    "turnoFecha": turnoFecha,
    "turnoHora": turnoHora,
    "turnoCliente": turnoCliente,
    "turnoColaborador": turnoColaborador,
    "turnoServicio": turnoServicio,
    "turnoCajero": turnoCajero,
    "turnoMetodo": turnoMetodo,
    "turnoDescuento": turnoDescuento,
    "turnoTotal": turnoTotal,
    "turnoId": turnoId
  };
}

function insertarFilaEnTabla(turnoObjeto) {
  let turnoTablaRef = document.getElementById("tablaTransaccion")
  let nuevoTurnoRowRef = turnoTablaRef.insertRow(-1) //Agrega una fila al final de la tabla con el -1
  nuevoTurnoRowRef.setAttribute("data-turno-Id",turnoObjeto ["turnoId"]);

  let nuevoTipoCeldaRef = nuevoTurnoRowRef.insertCell(0); //Agrega un nueva celda a la tabla
  //textContent remplaza en el html por el transaccionFormData.get que trae el name del formulario
  
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoFecha"];

  nuevoTipoCeldaRef = nuevoTurnoRowRef.insertCell(1);
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoHora"];

  nuevoTipoCeldaRef = nuevoTurnoRowRef.insertCell(2);
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoCliente"];

  nuevoTipoCeldaRef = nuevoTurnoRowRef.insertCell(3);
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoServicio"];

  nuevoTipoCeldaRef = nuevoTurnoRowRef.insertCell(4);
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoColaborador"];

  nuevoTipoCeldaRef = nuevoTurnoRowRef.insertCell(5);
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoCajero"];

  nuevoTipoCeldaRef = nuevoTurnoRowRef.insertCell(6);
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoMetodo"];

  nuevoTipoCeldaRef = nuevoTurnoRowRef.insertCell(7);
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoDescuento"];

  nuevoTipoCeldaRef = nuevoTurnoRowRef.insertCell(8);
  nuevoTipoCeldaRef.textContent = turnoObjeto["turnoTotal"];

  let nuevaCeldaBorrar = nuevoTurnoRowRef.insertCell(9);
  let botonBorrar = document.createElement("button");
  botonBorrar.classList.add('btn', 'btn-borrar')
  botonBorrar.textContent = "Eliminar";
  //appendChil agrega un etiqueta tipo hijo a la etiqueta padre en este caso al al td
  nuevaCeldaBorrar.appendChild(botonBorrar);

  botonBorrar.addEventListener("click", (event)=>{
    //obtenemos atravez del event las etiquetas padre hasta llegar al tr de la tabla en html
    let turnoRow = event.target.parentNode.parentNode;
    let turnoId = turnoRow.getAttribute("data-turno-id");
    turnoRow.remove();
    borrarTurnoObj(turnoId);

  })

}
//le paso como parametro el Id del turno q quiero eliminar 
function borrarTurnoObj(turnoId){
  //obtengo todas los turnos de la base de datos 
  let miTurnoArray = JSON.parse(localStorage.getItem("datosTurno"));
  //busco la posicion del turno que quiero borrar 
  let turnoIndexEnArray = miTurnoArray.findIndex(element => element.turnoId == turnoId);
  //elimino el elemento de esa posicion 
  miTurnoArray.splice(turnoIndexEnArray, 1)
    //convierto el array miTurnoArray en un archivo JSON
    let turnoArrayJSON = JSON.stringify(miTurnoArray);
    //almacenon el objeto JSON  en el localstorage
    localStorage.setItem("datosTurno", turnoArrayJSON);
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

