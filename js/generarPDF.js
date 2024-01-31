//codigo copiado
function generarPDF(event) {
  event.preventDefault();

  const str = recorrerTabla();


  const doc = new jsPDF();
  doc.text(10, 10, str);
  doc.save('lista-usuarios.pdf');
}

function recorrerTabla() {
  let str = ''

  const table = document.getElementById('tablaTransaccion')

  for (let i = 0; i <= table.rows.length-1; i++) {
      str += '\n'
      for (let j = 0; j <= table.rows[i].cells.length-1; j++) {
          if(j == 0) {
              str += '* '
          } else {
              let col = table.rows[i].cells[j].innerText
              str += `// ${col}`
          }    
      }
  }

  return str    
}
