function limpiar(){
    document.getElementById("Nota1").value="";//borrar contenido de nota1
    document.getElementById("Nota2").value="";//borrar contenido de nota2
    document.getElementById("Nota3").value="";//borrar contenido de nota3
    document.getElementById("Definitiva").value="";//borrar contenido input Definitiva
}
//
function promedio(){
    var n1=document.getElementById("Nota1").value;//Asignar contenido de nota1 (ingresado)
    var n2=document.getElementById("Nota2").value;//Asignar contenido de nota1 (ingresado)
    var n3=document.getElementById("Nota3").value;//Asignar contenido de nota1 (ingresado)
    var Definitiva=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;
    document.getElementById("Definitiva").value=Definitiva.toFixed(2);//para colocar formulario en 
}

