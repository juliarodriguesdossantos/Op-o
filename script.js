let botaoAtivo = null;

function exibirImagem(opcao, botao) {
    let imagem = document.getElementById("imagem");
    let texto = document.getElementById("texto");
    
    if (opcao === 'sol'){
        imagem.src = "sol.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolhe o Sol! Uma estrela que ilumina o nosso dia."
        document.querySelector("body").style.background ="goldenrod";
    } else if (opcao === 'lua') {
        imagem.src = "lua.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Lua! Ela brilha durante a noite.";
        document.querySelector("body").style.background ="dimgray";
    } else if (opcao === 'estrela') {
        imagem.src = "estrela.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Estrela! Um dos pontos brilhantes no céu nortuno.";
        document.querySelector("body").style.background ="  darkslateblue";
    } else if (opcao === 'terra') {
        imagem.src = "terra.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Terra! nosso planeta.";
        document.querySelector("body").style.background ="aquamarine";
    } else if (opcao === 'jupiter') {
        imagem.src = "jupiter.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Jupiter! a maior planeta do nosso sistema.";
        document.querySelector("body").style.background ="fuchsia";
    } else {
        imagem.style.display = "none";
        texto.innerText = "Opção inválida.Escolha entre Sol, Lua ou Estrela."
     
    }

    if (botaoAtivo){
        botaoAtivo.classList.remove('active');
    }
    botao.classList.add('active');
    botaoAtivo = botao;
}