/*
the size is not relative to its current size but its relative
to its initial size hence need to store a variable like this 
*/

/*
start 200px by 200px
grow but 10px
shrink by 5px
if get to 420px, go back to 200px

color from red, green , blue (reverse when shrink)
*/

class balloon{
    /*should it be static size ?*/
    static size = 200;
    static color = ["Red", "Green", "Blue"];
    static index = 0;
    /* have a global int for pointer and array of colors*/

    growballoon(){

        balloon.size += 10;
        let scale = balloon.size / 200
        if (balloon.size < 420 )
        {
            balloon.index += 1;
            let i = balloon.index % 3;
            document.getElementById("balloon").style.transform=`scale(${scale})`;
            document.getElementById("balloon").style.backgroundColor=`${balloon.color[i]}`;
            document.getElementById("balloon").style.clipPath='circle(50%)';
        }
        else if (balloon.size >= 420)
        {   
            balloon.size = 200;
            scale = balloon.size / 200;
            balloon.index = 0;
            let i = balloon.index % 3;
            document.getElementById("balloon").style.transform=`scale(${scale})`;
            document.getElementById("balloon").style.backgroundColor=`${balloon.color[i]}`;

        }
        console.log("grow", balloon);
    }

    shrinkballoon(){
        
        if (balloon.size > 200)
        {
            balloon.size -= 5;
            let scale = balloon.size / 200
            if (balloon.index == 0)
                balloon.index = 3;
            balloon.index -= 1;
            let i = balloon.index % 3;
            document.getElementById("balloon").style.backgroundColor=`${balloon.color[i]}`;
            document.getElementById("balloon").style.transform=`scale(${scale})`;
            document.getElementById("balloon").style.clipPath='circle(50%)';
        }
        else
            ;
        console.log("shr", balloon);
    }
}

let loon = new balloon();