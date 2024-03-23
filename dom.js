//Função de Favoritar

const [compartilhar, salvar] = document.querySelectorAll(".box-title--btn")
const svg = salvar.querySelector('svg')

if (localStorage.getItem('salvo')){
    svg.style.setProperty('fill','black')
} 

salvar.addEventListener("click", (e)=>{
    const svg = salvar.querySelector('svg')
    if (svg.style.fill === 'black'){
        svg.style.setProperty('fill','none')
        localStorage.clear('salvo')

    } else {
        svg.style.setProperty('fill','black')
        localStorage.setItem('salvo', 'true')
    }
    console.log(svg)

})

console.log(localStorage.getItem('salvo'))
