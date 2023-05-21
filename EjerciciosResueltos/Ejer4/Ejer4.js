let input = document.getElementById("ipt");
let result = document.getElementById("result");
let dom = "";

function getCode() {
    let url = input.value;
    dom = url.substring(0,8);

    if(dom=="https://"){
        url = url.substring(8,url.length);
    }

    let code = url.substring(url.indexOf("/")+1,url.indexOf("/")+13);
    code = code.replace(/-/g, "");

    result.innerHTML = '<p>Su código es: <span id="bl">' + code + '</span></p>';
}
