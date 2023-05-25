function openMenu(){
    document.getElementById("mainMenu").style.width="480px";//VISTA CELULAR JS
    document.getElementById("mainMenu").style.display="flex";//VISTA CELULAR JS
    document.getElementById("mainMenu").style.height="1000px";//VISTA CELULAR JS
    document.getElementById("mainMenu").style.display="none";//VISTA CELULAR JS

}
function closeNav(){
    document,getElementById("mainMenu").style.width="Opx";//CERRAR VISTA CELULAR JS
    document,getElementById("mainMenu").style.transtion="O.9s all";//CERRAR VISTA CELULAR JS
    window.location.reload();//recargar ágina web f5
}