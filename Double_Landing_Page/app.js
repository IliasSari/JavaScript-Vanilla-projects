const containerEl = document.querySelector(".container");

const leftEL = document.querySelector(".left");
const rightEL = document.querySelector(".right");

leftEL.addEventListener("mouseenter", ()=>{
    containerEl.classList.add("active-left");
})

leftEL.addEventListener("mouseleave", ()=>{
    containerEl.classList.remove("active-left");
})

rightEL.addEventListener("mouseenter", ()=>{
    containerEl.classList.add("active-right");
})

rightEL.addEventListener("mouseleave", ()=>{
    containerEl.classList.remove("active-right");
})