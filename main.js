const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
let size = 16;
container.style.gridTemplateColumns= "repeat(16, 1fr)"
container.style.gridTemplateRows = "repeat(16, 1fr)"

CreateDivs();

function CreateDivs() {
    for (let i = 0; i < size*size; i++) {
        const divs = document.createElement('div')
        divs.classList.add('grid')
        container.appendChild(divs)

        divs.addEventListener('mouseenter', () =>{
            divs.style.backgroundColor = "black"
        });

        btn.addEventListener('click', () => {
            divs.style.backgroundColor  = "white"
        });
    };
}

btn.addEventListener('click', () => {
    size = prompt("Introduce el  tamano de la cuadricula",16)
    if(size <= 100)
    {
        container.style.gridTemplateColumns= "repeat("+size+", 1fr)"
        container.style.gridTemplateRows = "repeat("+size+", 1fr)"
        CreateDivs();
    }else
    {
        alert("Intorduza un numero menor al 100")
    }
})