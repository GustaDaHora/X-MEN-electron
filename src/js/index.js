const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () =>{
        personagem.classList.add('selecionado');
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        const personagemGrande = document.querySelector('.personagem-grande');

        const idPersonagem = personagem.attributes.id.value;

        personagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
    })
});

