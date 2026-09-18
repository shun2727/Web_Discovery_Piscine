/*
documents : current html webpage
body : body
style : css styles of that element
background-color : sel explanaitory
*/
class colorchange{
    static times = 1;

    changeColor(){
        colorchange.times++;
        let sum = colorchange.times + 1;
        let ans = sum % 3 ; 
    
        switch(ans){
            case(0) :
                document.body.style.backgroundColor = "yellow";
                break;
             case(1) :
                document.body.style.backgroundColor = "green";
                break;
             case(2) :
                document.body.style.backgroundColor = "red";
                break;
            default:
                document.body.style.backgroundColor = "black";
        }
    }
}

let changer = new colorchange();