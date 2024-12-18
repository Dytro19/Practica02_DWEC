// Position variables
let X = 0;
let Y = 0;

// Window border X
windowX = window.innerWidth - 200;

//Start button
startbtn=document.getElementById("buttonStart");

//Window border X
windowX=window.innerWidth-200;

// Window resize
window.addEventListener("resize", () => {
    windowX = window.innerWidth - 1100;
});

// Window border X conditional
moveRight = true;
moveLeft = true;

//Literal object
const objBasket={
    id: document.getElementById("basket"),

    // Movement function
    moveBasket() {

        // Key event
        document.addEventListener("keydown", (event) => {

            const basket = document.getElementById("basket");

            // Movement conditions
            switch (event.key) {

                // Left movement
                case "ArrowLeft": case "a":

                    // Window colider Left conditional
                    if (moveLeft == true) {
                        X -= 0.25;
                        basket.style.marginLeft = X + "%";
                        colider();
                    }
                    break;

                // Right movement
                case "ArrowRight": case "d":

                    // Window colider Right conditional
                    if (moveRight == true) {
                        X += 0.25;
                        basket.style.marginLeft = X + "%";
                        colider();
                    }
                    break;
            }
        });
    },
}

// Window colider X
function colider() {

    // Window border
    if (X <= (22.75)) {
        moveRight = true;
    } else {
        moveRight = false;
    }

    if (X >= (-23)) {
        moveLeft = true;
    } else {
        moveLeft = false;
    }
}
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
    const fruitWidth = 50; //width of the fruits
    const fruitHeight = 50; //height of the fruits
    const fruitSpacing = 100; //horizontal space between fruits

    //initializing fruit positions in the center horizontally
    const startX = (window.innerWidth / 2) - ((fruitsCount - 1) * fruitSpacing) / 2; //center the fruits
    const fruitsElements = [];
    for (let i = 1; i <= fruitsCount; i++) {
        const fruit = document.getElementById(`fruit${i}`);
        fruit.style.left = `${startX + (i - 1) * fruitSpacing}px`; //spacing uniformly
        fruit.style.top = '0px'; //start at the top
        fruitsElements.push(fruit);
    }

    const basket = document.getElementById('basket');
    const basketWidth = basket.offsetWidth;
    const basketHeight = basket.offsetHeight;
    const basketY = window.innerHeight - basketHeight;

    //function to make a random fruit fall
    function fallFruit() {
        //select a random fruit to fall
        const randomFruit = Math.floor(Math.random() * fruitsCount);
        const fruit = fruitsElements[randomFruit];
        let currentTop = parseInt(fruit.style.top) || 0;

        if (currentTop < window.innerHeight - fruitHeight) { //if fruit hasn't reached the bottom
            fruit.style.top = currentTop + 5 + 'px'; //move fruit down
        } else {
            //reset to the top if fruit reaches bottom
            fruit.style.top = '0px';
            fruit.src = fruitsImages[Math.floor(Math.random() * fruitsImages.length)]; //randomize image
        }

        //check for collision with the basket
        checkCollision(fruit);
    }

    //function to check if a fruit has collided with the basket
    function checkCollision(fruit) {
        const fruitX = parseInt(fruit.style.left);
        const fruitY = parseInt(fruit.style.top) + fruitHeight;

        //check if the fruit is inside the basket area (horizontal and vertical collision)
        if (fruitY >= basketY && fruitY <= basketY + basketHeight &&
            fruitX + fruitWidth / 2 >= basket.offsetLeft &&
            fruitX + fruitWidth / 2 <= basket.offsetLeft + basketWidth) {

            //check if the fruit is a rock
            if (fruit.src.includes('rock')) {
                //show GAME OVER message
                alert("GAME OVER");
                //reset the game or stop fruit fall
                clearInterval(fallInterval);
            }

            //when fruit touches the basket, hide the fruit
            fruit.style.display = 'none'; //hide the fruit

            //after a short delay, reset the fruit to the top and make it visible again
            setTimeout(() => {
                fruit.style.display = 'block'; //make the fruit visible again
                fruit.style.top = '0px'; //reset fruit to the top
                fruit.src = fruitsImages[Math.floor(Math.random() * fruitsImages.length)]; //change image randomly
            }, 20);
        }
    }

    const fallInterval = setInterval(fallFruit, 20);
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
