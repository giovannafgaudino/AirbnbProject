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


// Menu:

let subMenu = document.getElementById("subMenu");
function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}

window.onclick = function(event) {
    if (!event.target.closest('.sub-menu-button')) {
        subMenu.classList.remove('open-menu');
    }
}


// Modal Imagens:


const images = [...document.querySelectorAll('.image')];

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.img-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.prev');
const rightArrow = document.querySelector('.next');

let index = 0; 

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
    let path = `img/img${i+1}.png`;
    largeImage.src = path;
    imageName.innerHTML = path;
    imageIndex.innerHTML = `0${i+1}`;
    index = i;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    if(index > 0){
        updateImage(index - 1);
    }
})

rightArrow.addEventListener('click', () => {
    if(index < images.length - 1){
        updateImage(index + 1);
    }
})




