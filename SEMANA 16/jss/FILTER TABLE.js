function Buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datos");
    filter = input.value.toUpperCase(); //CONVERTIR TEXTO A MAYÚSCULA
    table = document.getElementById("tablaDatos");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";//BUSCAR EN COLUMNA NOMBRE
          } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }