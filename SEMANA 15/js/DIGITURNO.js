//FUNCTION PARA TURNOS PREFERENCIALES
function prefer(){
    let num=1;
    let res=true;//ciclo while verdadero del comienzo 
    while(num<=99 && res==true){
        nomuser=prompt("INGRESE SU NOMBRE DE USUARIO");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0'); 
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"E"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//incrementar turno 
        }else{
            alert("ERROR EN TURNO..");           
        }
    }
    }
//FUNCTION PARA TURNOS GENERALES
function user(){
    let num=1;
    let res=true;//ciclo while verdadero del comienzo 
    while(num<=99 && res==true){
        nomuser=prompt("INGRESE SU NOMBRE DE USUARIO");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0'); 
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"A"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//incrementar turno 
        }else{
            alert("ERROR EN TURNO..");           
        }
    }
    }
