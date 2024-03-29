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


// Feedback:

const feedbacks = [{
    nome: 'Alexandre Russi',
    cidade: 'São Paulo, Brasil · Ficou algumas noites',
    avaliacao: 'fevereiro de 2024',
    comentario: 'Estadia excelente. Local exatamente como descrito e o Lucas sempre responsivo. O Lucas (gerente) também muito simpático e prestativo. Recomendo o local!',
    foto: 'img/prof.jpg'
},
{
    nome: 'Beatriz Dantas',
    cidade: 'São Paulo, Brasil · Ficou algumas noites',
    avaliacao: 'março de 2024',
    comentario: 'Site ingrato.',
    foto: 'img/bia.jpg'
}
];

const areaFeedbacks = document.querySelector('#feedbacks');

window.onload = function renderizarFeedbacks() {
    feedbacks.forEach(elemento => {

const divPessoa = document.createElement('div');
divPessoa.classList.add('pessoa');


const fotoDaPessoa = document.createElement('img');
fotoDaPessoa.src = elemento.foto;
fotoDaPessoa.alt = "Foto de " + elemento.nome;
fotoDaPessoa.classList.add('perfil-img'); 

const nomeDaPessoa = document.createElement('h1');
        nomeDaPessoa.innerHTML = elemento.nome;

        divPessoa.appendChild(fotoDaPessoa);
        divPessoa.appendChild(nomeDaPessoa);
        areaFeedbacks.appendChild(divPessoa);

const cidadeDaPessoa = document.createElement('h3');
        cidadeDaPessoa.innerHTML = elemento.cidade;
        areaFeedbacks.appendChild(cidadeDaPessoa);

const avaliacaoDaPessoa = document.createElement('h4');
        avaliacaoDaPessoa.innerHTML = elemento.avaliacao;
        areaFeedbacks.appendChild(avaliacaoDaPessoa);



const comentarioDaPessoa = document.createElement('p');
        comentarioDaPessoa.innerHTML = elemento.comentario;
        areaFeedbacks.appendChild(comentarioDaPessoa);
    });
};

