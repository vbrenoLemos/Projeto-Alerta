function navegarUrlAtividade(){
    window.location.href = 'Atividades.html'
}

function navegarUrlQuemSomos(){
    window.location.href = 'QuemSomos.html'
}

function ChatWhatsApp(){
    window.location.href = 'https://wa.me/558189543669'
}

function ChatEmail(){
    window.location.href = ''
}

// Função do header celular
const navMenu = document.querySelector('.navigation-links');

const menu = document.querySelector('.menu');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})