let ipt = document.getElementById("ipt");
let result = document.getElementById("result");
let ent = "";

function change() {
    ent = ipt.value ;
    let str = "";

    for( var i = 0; i<ent.length; i++) {
        str = ent[i]+ str;
    }
    
    result.innerText = str;
}  