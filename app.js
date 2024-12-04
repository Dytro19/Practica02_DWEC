//Position variables
let X=0;
let Y=0;

//Window border X
windowX=window.innerWidth-200;

//Window resize
window.addEventListener("resize",()=>{
    windowX=window.innerWidth-1100;

});

//Window border X conditional
moveRight=true;
movwLeft=true;

//Literal object
const objBasket={

    //Movement function
    moveBasket(){

        //Key event
        document.addEventListener("keydown", (event)=>{

            const basket=document.getElementById("basket");

            //Movement conditions
            switch (event.key){

                //Right movement
                case "ArrowRight": case "d":

                    //Window colider Right conditional
                    if(moveRight==true){
                        console.log(X);
                        X+=0.5;
                        basket.style.marginLeft=X+"%";
                        colider();
                        break;
                    }

                //Left movement
                case "ArrowLeft": case "a":

                    //Window colider Left conditional
                    if(moveLeft==true){
                        console.log(X);
                        X-=0.5;
                        basket.style.marginLeft=X+"%";
                        colider();
                        break;
                    }
            }
        });
    },
}

//Window colider X
function colider(){

    //Window border
    if (X<=23){
        moveRight = true;
    }

    else{
        moveRight = false;
    }

    if (X>=(-23)){
        moveLeft = true;
    }
    
    else{
        moveLeft = false;
    }
}

//Movement ejecution
objBasket.moveBasket();