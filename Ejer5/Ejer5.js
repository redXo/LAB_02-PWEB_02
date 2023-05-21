let prt2 = document.getElementById("prt2");
let prt3 = document.getElementById("prt3");
let prt4 = document.getElementById("prt4");
let ipt = document.getElementById("ipt");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let result = document.getElementById("result");

let totalIpts = 0;

function create() {

    ipt.readOnly = true;   

    if(ipt.value<=0) {
        alert("Porfavor ingrese un numero mayor a 0.");
    }
    else if(!isNaN(parseInt(ipt.value)) === true) {
    
        for(let i = 0; i<ipt.value; i++) {
            var input = document.createElement("input");
                input.placeholder="(" + (i+1) + ")" + " only numbers ...";
                input.id = "ip" + i;
                input.type = "text";
                input.className = "inputs";
                prt4.appendChild(input);
                totalIpts = i;
        }

        btn1.disabled=true;

        var btn3 = document.createElement("button");
            btn3.className = "sumar";
            btn3.id = "sum";
            btn3.textContent = "SUMAR";
            prt4.appendChild(btn3);

            btn3.addEventListener("click", function sumar() {

                let go = true;
                let sum = 0;

                for(var j = totalIpts; j >= 0; j--) {
                    var input = document.getElementById("ip" + j);

                    if(isNaN(parseInt(input.value))){
                        alert("Porfavor ingrese un valor numérico.");
                        go = false;
                        break;
                    }

                    sum += parseInt(input.value);
                }

                if(go == true){
                    result.innerHTML = 'La suma es: <span>' + sum + '</span>';
                }
            });
    }
    else {
        alert("Porfavor ingrese un valor numérico.");
    }
}

function del() {

    for(let j = totalIpts; j >= 0; j--) {
        var input = document.getElementById("ip" + j);
        input.remove();
    }

    var btn3 = document.getElementById("sum");
    btn3.remove();

    btn1.disabled=false;
    ipt.value="";
    result.innerText = "";
    ipt.readOnly = false; 
}

