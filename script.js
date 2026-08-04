let container = document.querySelector(".grid-container");
let changeButton = document.querySelector(".change-grid");

function createGrid(side){
    if(side>100)
        return;
    for(i=0;i<side*side;i++){
        const div = document.createElement("div");
        container.appendChild(div);
    }
}

createGrid(16);

//the mechanism to draw

container.addEventListener("mouseover",(e)=>{
    e.target.classList.add("hovered");
})


changeButton.addEventListener("click",(e)=>{
    const squares = prompt("Number of squares per side: ",16);
    createGrid(squares);
})


