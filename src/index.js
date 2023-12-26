import analyzer from './analyzer.js';

const textarea=document.querySelector("textarea");

const botao=document.getElementById("reset-button");

function atualizaCaracter(){
    document.querySelector("li[data-testid='word-count']").textContent="Contagem de palavras: " + analyzer.getWordCount(textarea.value);
}
    textarea.addEventListener('input', atualizaCaracter);
    botao.addEventListener('click', () =>{
        textarea.value='';
        atualizaCaracter();


});

