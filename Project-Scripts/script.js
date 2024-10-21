function navegarUrlAtividade(){
    window.location.href = 'Atividades.html'
}

function navegarUrlQuemSomos(){
    window.location.href = 'QuemSomos.html'
}

// Função do header celular
const navMenu = document.querySelector('.navigation-links');

const menu = document.querySelector('.menu');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})