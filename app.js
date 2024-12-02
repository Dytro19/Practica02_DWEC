//Position variables
let X=0;
let Y=0;

//Window border X
windowX=window.innerWidth-25+"%";

//Window border X conditional
moveX=true;

//Literal object
const OBJbasket={
    //Movement function
    movebasket(){
        document.addEventListener("keydown", (event)=>{

            const basket=document.getElementById("basket");

            //Movement conditions
            switch (event.key){
                //Right movement
                case "ArrowRight": case "d":
                    X+=0.5;
                    basket.style.marginLeft=X+"%";
                    colider();
                    break;
                //Left movement
                case "ArrowLeft": case "a":
                    X-=0.5;
                    basket.style.marginLeft=X+"%";
                    colider();
                    break;
            }
        });
    },
}

//Window colider X
function colider(){
    if (windowX <= X){
        moveX = true;
    }
    if (0 >= X){
        moveX = false;
    }
}

//Movement exjecution
OBJbasket.movebasket();