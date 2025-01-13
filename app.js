// Position variables
let X = 0;
let Y = 0;

// Window border X
windowX = window.innerWidth - 200;

// Start button
startbtn=document.getElementById("buttonStart");

// Window resize
window.addEventListener("resize", () => {
    windowX = window.innerWidth - 1100;
});

// Window border X conditional
moveRight = true;
moveLeft = true;

// Score
var score = 0;

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
                        X -= 0.5;
                        basket.style.marginLeft = X + "%";
                        colider();
                    }
                    break;

                // Right movement
                case "ArrowRight": case "d":

                    // Window colider Right conditional
                    if (moveRight == true) {
                        X += 0.5;
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
    if (X <= (16.5)) {
        moveRight = true;
    } else {
        moveRight = false;
    }

    if (X >= (-16.5)) {
        moveLeft = true;
    } else {
        moveLeft = false;
    }
}

function fruits() {
    const fruitsImages = [
        'Images/orange.png',
        'Images/banana.png',
        'Images/pineapple.png',
        'Images/strawberry.png',
        'Images/watermelon.png',
        'Images/rock.png',
    ];

    const fruitWidth = 50; // Width of the fruits
    const fruitHeight = 50; // Height of the fruits

    const basket = document.getElementById('basket');
    const basketWidth = basket.offsetWidth;
    const basketHeight = basket.offsetHeight;
    const basketY = window.innerHeight - basketHeight;

    // Function to create a new fruit element
    function createFruit() {
        const fruit = document.createElement('img');
        fruit.src = fruitsImages[Math.floor(Math.random() * fruitsImages.length)];
        fruit.style.position = 'absolute';
        fruit.style.width = `${fruitWidth}px`;
        fruit.style.height = `${fruitHeight}px`;
        fruit.style.left = `${Math.random() * (window.innerWidth - 512 - fruitWidth)}px`;
        fruit.style.top = '0px';
        document.body.appendChild(fruit);
        return fruit;
    }

    // Function to make a random fruit fall
    function fallFruit(fruit) {
        const fallInterval = setInterval(() => {
            let currentTop = parseInt(fruit.style.top) || 0;
            if (currentTop < window.innerHeight - 5 - fruitHeight) { // If fruit hasn't reached the bottom
                fruit.style.top = currentTop + 5 + 'px'; // Move fruit down
            } else {
                // Remove fruit if it reaches the bottom
                document.body.removeChild(fruit);
                clearInterval(fallInterval);
                // Create a new fruit
                fallFruit(createFruit());
            }

            // Check for collision with the basket
            checkCollision(fruit, fallInterval);
        }, 20);
    }

    // Function to check if a fruit has collided with the basket
    function checkCollision(fruit, fallInterval) {
        const fruitX = parseInt(fruit.style.left);
        const fruitY = parseInt(fruit.style.top) + fruitHeight;

        // Check if the fruit is inside the basket area (horizontal and vertical collision)
        if (fruitY >= basketY && fruitY <= basketY + basketHeight &&
            fruitX + fruitWidth / 2 >= basket.offsetLeft &&
            fruitX + fruitWidth / 2 <= basket.offsetLeft + basketWidth) {

            // Check if the fruit is a rock
            if (fruit.src.includes('rock')) {
                // Show GAME OVER message
                alert("GAME OVER");
                // Reset the game or stop fruit fall
                clearInterval(fallInterval);
                return;
            }

            // When fruit touches the basket, hide the fruit
            if (!fruit.counted) { // Check if the fruit has already been counted
                fruit.style.display = 'none'; // hide the fruit

                // Update the score
                scoreUpdate();
                fruit.counted = true; // Mark the fruit as counted

                // Remove the fruit from the DOM to prevent multiple collisions
                setTimeout(() => {
                    document.body.removeChild(fruit);
                    fallFruit(createFruit());
                }, 20);
            }
        }
    }

    // Start by creating the first fruit
    fallFruit(createFruit());
}

// Start button
startbtn.addEventListener("click",()=>{

    document.getElementById("start").style.display="none";
    start();
})

// Score update
function scoreUpdate(){
    score += 100;
    console.log("Score updated: " + score);
    document.getElementById("Score").innerHTML ="Score: "+ score;
}










//All execution
function start(){

    //Movement ejecution
    objBasket.moveBasket();

    //Call the function to start
    fruits();

}
