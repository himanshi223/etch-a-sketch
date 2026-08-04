let container = document.querySelector(".grid-container");
let changeButton = document.querySelector(".change-grid");

function createGrid(side){
    container.textContent = "";
    if(side>100)
        return;
    for(i=0;i<side*side;i++){
        const div = document.createElement("div");
        div.style.width = `${960/side}px`;
        div.style.height = `${960/side}px`;
        container.appendChild(div);
    }
}

createGrid(16);

//the mechanism to draw
container.addEventListener("mouseover",(e)=>{
    e.target.classList.add("hovered");
    e.target.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    let currentOpacity = +e.target.style.opacity;
    if(currentOpacity<1){
        currentOpacity += 0.1;
        e.target.style.opacity = `${currentOpacity}`;
    }
    console
});

changeButton.addEventListener("click",(e)=>{
    const squares = prompt("Number of squares per side(Enter a value less than 100): ",16);
    createGrid(squares);
})


