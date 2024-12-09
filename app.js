//Position variables
let X=0;
let Y=0;

//Start button
startbtn=document.getElementById("buttonStart");

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
    id: document.getElementById("basket"),

    //Movement function
    moveBasket(){

        //Key event
        document.addEventListener("keydown", (event)=>{

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

//create random falling fruits
function fruits(){
    const fruitsImages = [
        'Images/orange.png',
        'Images/banana.png',
        'Images/pineapple.png',
        'Images/strawberry.png',
        'Images/watermelon.png',
        'Images/rock.png',
    ];

    const fruitsCount=6; //fruits id's

    function fruitsFall() {
        for (let i = 1; i <= fruitsCount; i++) {
            const fruits = document.getElementById(`fruits${i}`);
            let currentTop = parseInt(fruits.style.top);

            //change the fruit image randomly
            const randomImage = fruitsImages[Math.floor(Math.random() * fruitsImages.length)];

            //access the image inside the div
            const imgElement = document.getElementById(`fruits${i}-img`);
            if (currentTop < window.innerHeight - 50) { //50px is the size of the fruit
                fruits.style.top = currentTop + 5 + 'px'; //move the fruit down
            } else {
                fruits.style.top = '0px'; //if it reaches the bottom, reset it to the top
            }
        }
    }
    setInterval(fruitsFall, 30);
}


//Start button
startbtn.addEventListener("click",()=>{

    document.getElementById("start").style.display="none";
    start();
})

//All execution
function start(){

    //Movement ejecution
    objBasket.moveBasket();

    //call the function to start
    fruits();

}