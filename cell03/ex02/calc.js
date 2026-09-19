function onSubmit(){

    let s = 0;

    var left = parseInt(document.getElementById("left").value);
    var right = parseInt(document.getElementById("right").value);
    var operator = document.getElementById("operator").value;

    switch (operator){
        case("+"):
            s = left + right;
            break;
        case("-"):
            s = left - right;
            break;
        case("*"):
            s = left * right;
            break;
        case("/")
            s = left / right;
            break;           
        case("%"):
            s = left % right;
            break;                                     
    }

    document.getElementById("ans").innerHTML = `${s}`


}



