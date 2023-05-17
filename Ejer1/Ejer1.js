let dv = document.getElementById("prt2");
dv.innerHTML = "Hoy es " + receiveDay();

function receiveDay() {
    let fec = new Date();
    let day = fec.getDay();

    switch(day){
        case 0:
            return "Domingo.";
        
        case 1:
            return "Lunes.";

        case 2:
            return "Martes.";
                
        case 3:
            return "Miercoles.";

        case 4:
            return "Jueves.";
                    
        case 5:
            return "Viernes.";

        case 6:
            return "Sabado.";
        }
}
