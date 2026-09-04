containerEl = document.querySelector(".container");

const carrers = ["Front end dev","back end dev","full stack dev"]

let carrerIndex = 0;

let characterIndex = 0;

updateText();

function updateText(){
characterIndex++;
containerEl.innerHTML = `
    <h1>I'm ${carrers[carrerIndex].slice(0,characterIndex)}</h1>
`;

if (characterIndex === carrers
    [carrerIndex].length){
        carrerIndex++;
        characterIndex = 0;
    }
    
if (carrerIndex === carrers.length)
{
    carrerIndex = 0;
}

    setTimeout(updateText, 200);
}