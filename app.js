//objeto literal cesta
const cesta={
    id: "cesta",
    movement: movCesta(),
}


//Movimiento de la cesta en el eje X
function movCesta(){
    document.addEventListener("keydown", (event)=>{

        switch (event.key){
            case "ArrowRigth": case "d":
                cesta.id.style.marginLeft+=5+"px";
                break;
            case "ArrowLeft": case "a":
                cesta.id.style.marginLeft-=5+"px";
        }
    });
}
console.log(cesta.id);