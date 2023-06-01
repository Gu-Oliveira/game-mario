let mario = document.querySelector('.mario')
let btnPular = document.querySelector('.btn-pular')
let tubo = document.querySelector('.tubo')



function pular () {
    mario.classList.add('salto')
    
    setTimeout(()=>{
        mario.classList.remove('salto')
    },500)
}

// adicionando a tecla espaco para a funcao pular

document.addEventListener('keydown', (tecla)=>{
    if(tecla.key === ' '){
        pular();
    }
})

btnPular.addEventListener('click', pular)


/*
document.addEventListener("keyup", function(event) {
    console.log("Tecla pressionada:", event.key);
});
*/

/* validando se o mario bateu no obstaculo */

const loop = setInterval(()=>{

    const tuboPosicao = tubo.offsetLeft;
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '')

    if(tuboPosicao <= 120 && tuboPosicao > 0 && marioPosicao < 100){
        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosicao}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosicao}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '50px'
        
        clearInterval(loop)
    }

})



