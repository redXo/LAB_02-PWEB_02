let dv = document.getElementById("prt2");

let today = new Date();
    let yearTO = today.getFullYear();
    let monthTO = today.getMonth();

let aqpDay = new Date(yearTO, 7, 15);

// Calcular los dias que aún no pasaron del presente mes
let PastDays = daysOfMonth(yearTO, monthTO) - today.getDate(); 

let daysFor;

if(today.getDay()>aqpDay.getDay() && monthTO>=aqpDay.getMonth()) {   // First case: Cuando ya paso el día de Arequipa(contar hasta el del siguiente año)
    aqpDay = new Date(yearTO+1, 7, 15);

    daysFor = PastDays + 14 + N_days(yearTO,aqpDay.getFullYear());
}
else if(aqpDay.getMonth()==monthTO) {                               // Second case: Cuando nos encontramos en el mismo mes del día de Arequipa
    daysFor = 14-today.getDate();
}
else if(aqpDay.getMonth()-monthTO==1) {                             // Third case: Cuando nos encontramos un mes antes del mes del día de Arequipa
    daysFor = PastDays + 14;
}
else {                                                              
    daysFor = PastDays + 14 + N_days(yearTO,aqpDay.getFullYear());
}

dv.innerHTML = `<p>Faltan <a id="cr"> ${daysFor} día(s)</a> para el aniversario de Arequipa.</p>`;

function N_days(y1, y2) {

    let totalMonths = 0;
    let totalDays = 0;

    if(y1 != y2) {
        totalMonths = 11-monthTO;
        for(var i = 0; i<7; i++) {
            totalDays = totalDays + daysOfMonth(aqpDay.getFullYear(),i);
        }
        for(var i = monthTO+1; i<12; i++) {
            totalDays = totalDays + daysOfMonth(yearTO,i);
        }
    }
    else {
        totalMonths = (7-monthTO-1);
    }

    for(var i = monthTO+1; i<7; i++) {
        totalDays = totalDays + daysOfMonth(yearTO,i);
    }

    return totalDays;
}

// Método para hallar el último dia del mes
function daysOfMonth(y, m) {
    return new Date(y, (m+1), 0).getDate();
}
