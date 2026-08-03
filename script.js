let container = document.querySelector(".grid-container");

for(let i=0;i<16*16;i++){
    let div = document.createElement("div");
    container.appendChild(div);
}

//the mechanism to draw

container.addEventListener("mouseover",(e)=>{
    e.target.style.backgroundColor = "blue";
})

