import analyzer from './analyzer.js';

const textarea=document.querySelector("textarea");

const botao=document.getElementById("reset-button");

function atualizaCaracter(){

  document.querySelector("li[data-testid='word-count']").textContent="Contagem de palavras: " + analyzer.getWordCount(textarea.value);

  document.querySelector("li[data-testid='character-count']").textContent="Contagem de caracteres: " + analyzer.getCharacterCount(textarea.value);

  document.querySelector("li[data-testid='character-no-spaces-count']").textContent="Contagem de caracteres excluindo espaços e sinais de pontuação: "+ analyzer.getCharacterCountExcludingSpaces(textarea.value);

  document.querySelector("li[data-testid='number-count']").textContent="Contagem de números: "+ analyzer.getNumberCount(textarea.value);

  document.querySelector("li[data-testid='number-sum']").textContent="Soma total de números: "+ analyzer.getNumberSum(textarea.value);

  document.querySelector("li[data-testid='word-length-average']").textContent="Comprimento médio das palavras: "+ analyzer. getAverageWordLength(textarea.value) +" caracteres.";
    
}
    
textarea.addEventListener('input', atualizaCaracter);
botao.addEventListener('click', () =>{
  textarea.value='';
  atualizaCaracter();
});

