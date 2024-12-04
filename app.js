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
                        X+=0.25;
                        basket.style.marginLeft=X+"%";
                        colider();
                        break;
                    }

                //Left movement
                case "ArrowLeft": case "a":

                    //Window colider Left conditional
                    if(moveLeft==true){
                        X-=0.25;
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
    if (X<=(22.75)){
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

function fruits(){
    const fruitsImages = [
        'Images/orange.png',
        'Images/banana.png',
        'Images/pineapple.png',
        'Images/strawberry.png',
        'Images/watermelon.png',
        'Images/rock.png',
    ];

    const randomImage = fruitsImages[Math.floor(Math.random() * fruitsImages.length)];

    let fallingInterval = setInterval(() => {
        const currentTop = parseInt(fruits.style.top); // Get the current top position
        fruits.style.top = currentTop + 5 + 'px'; // Move the fruit down
    }, 30);
    
    // Generate fruits periodically
    setInterval(createFruit, 1000);
}