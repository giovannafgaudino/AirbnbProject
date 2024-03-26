//Função de Favoritar

const [compartilhar, salvar] = document.querySelectorAll(".box-title--btn")
const svg = salvar.querySelector('svg')
// const buttonPhotos = document.querySelector(".btn-photos");
// const photos = document.querySelector("galery-wraper");

// const openClick = function (){
//     photos.classList.add("d-block");
// }

// const eventPhotos = function(event){
//     const clickOfElement = event.target.classList[0];
//     const classListNameArray = ['galery-close', 'galery-photos', 'galery-photos-content'];
//     const isClassList = classListNameArray.includes(clickOfElement);
//     if (isClassList){
//         photos.classList.remove('d-block');
//     }
// }

// buttonPhotos.addEventListener("click", openClick);
// photos.addEventListener("click", eventPhotos);


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


