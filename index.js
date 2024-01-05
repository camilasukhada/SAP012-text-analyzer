import analyzer from './analyzer.js'; // importa a const analyzer do analyzer.js.

const textarea=document.querySelector("textarea"); //pega os valores inseridos na textarea.

const botao=document.getElementById("reset-button"); //chama o botão de limpar a textarea.

function atualizaCaracter(){

  document.querySelector("li[data-testid='word-count']").textContent="Contagem de palavras: " + analyzer.getWordCount(textarea.value);

  document.querySelector("li[data-testid='character-count']").textContent="Contagem de caracteres: " + analyzer.getCharacterCount(textarea.value);

  document.querySelector("li[data-testid='character-no-spaces-count']").textContent="Contagem de caracteres excluindo espaços e sinais de pontuação: "+ analyzer.getCharacterCountExcludingSpaces(textarea.value);

  document.querySelector("li[data-testid='number-count']").textContent="Contagem de números: "+ analyzer.getNumberCount(textarea.value);

  document.querySelector("li[data-testid='number-sum']").textContent="Soma total de números: "+ analyzer.getNumberSum(textarea.value);

  document.querySelector("li[data-testid='word-length-average']").textContent="Comprimento médio das palavras: "+ analyzer. getAverageWordLength(textarea.value) +" caracteres.";
    
  // O "querySelector" é um seletor de DOM que retorna o primeiro elemento que corresponde ao seletor especificado (uma tag, uma class,
  // ou até um name) de um seletor HTML.
  // "textContent" é um atributo que faz a "manipulação dinâmica de DOM", trazendo o conteúdo de texto das li. Se coloca esse conteúdo
  // entre " " para ele se manter exibido na tela da usuária, com a atualização dos caracteres.
  // "analyzer.get..." invoca a função da const analyzer. Se não colocar o "(textarea.value)", retorna a função por extenso.

}

  
textarea.addEventListener('input', atualizaCaracter); 
// ao inserir valores na textarea as funções se atualizam e retornam na tela os contadores com as métricas atualizadas.


botao.addEventListener('click', () =>{
  textarea.value='';
  atualizaCaracter();
});//ao clicar no botão a textarea é esvaziada e zera as funções que retornam as métricas na tela.

