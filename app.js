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
moveLeft=true;

//Literal object
const objBasket={

    //Movement function
    moveBasket(){

        //Key event
        document.addEventListener("keydown", (event)=>{

            const basket=document.getElementById("basket");

            //Movement conditions
            switch (event.key){

                //Left movement
                case "ArrowLeft": case "a":

                    //Window colider Left conditional
                    if(moveLeft==true){
                        X-=0.25;
                        basket.style.marginLeft=X+"%";
                        colider();
                    }
                    break;

                //Right movement
                case "ArrowRight": case "d":

                    //Window colider Right conditional
                    if(moveRight==true){
                        X+=0.25;
                        basket.style.marginLeft=X+"%";
                        colider();
                    }
                    break;
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

//create random falling fruits
function fruits() {
    const fruitsImages = [
        'Images/orange.png',
        'Images/banana.png',
        'Images/pineapple.png',
        'Images/strawberry.png',
        'Images/watermelon.png',
        'Images/rock.png',
    ];

    const fruitsCount = 6; //number of fruits
    const fruitWidth = 50; //width of each fruit
    const spacing = 100; //horizontal spacing between fruits

    //initialize the positions of the fruits
    const startX = (window.innerWidth / 2) - ((fruitsCount - 1) * spacing) / 2; //initial centered position
    for (let i = 1; i <= fruitsCount; i++) {
        const fruit = document.getElementById(`fruit${i}`);
        fruit.style.left = `${startX + (i - 1) * spacing}px`; //uniform spacing from the center
        fruit.style.top = '0px'; //ensure they start at the top
    }

    //function to make the fruits fall
    function fruitsFall() {
        for (let i = 1; i <= fruitsCount; i++) {
            const fruit = document.getElementById(`fruit${i}`);
            let currentTop = parseInt(fruit.style.top) || 0;

            if (currentTop < window.innerHeight - fruitWidth) { //50px is the fruit's size
                fruit.style.top = currentTop + 5 + 'px'; //move the fruit down
            } else {
                fruit.style.top = '0px'; //reset to the top
                fruit.src = fruitsImages[Math.floor(Math.random() * fruitsImages.length)]; //change image randomly
            }
        }
    }

    setInterval(fruitsFall, 30);
}

//call the function to start
fruits();


