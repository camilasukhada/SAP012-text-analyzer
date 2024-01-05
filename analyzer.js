
    
const analyzer = { 
  
  // Esta função deve retorna a contagem de palavras que se encontram no parâmetro 'text' de tipo 'string':
  getWordCount: (text) => {
    const words= text.trim().split(' '); 
    return words.length;  

    // O método "trim" retira os espaços do início e do fim da string.
    // O  método "split" "fatia" a string em array seguindo o regex
    // que determina que o breakpoint que separa um elemento da array é o espaço que separa antes e depois,
    // A propriedade "lenght" contém o comprimento da string, que vai retornar o número de elementos da array, que equivale a métrica
    // do número de palavras retornada na tela da usuária.
  
  },


  // Esta função retorna a contagem de caracteres que se encontram no parâmetro 'text' de tipo 'string':
  getCharacterCount: (text) => {
    return text.length;   

    //a propriedade "lenght" contém o comprimento da 'string', que equivale a métrica de número de caracteres retornada na tela da usuária.

  },


  // Esta função retorna a contagem de caracteres exluindo espaçoes e pontuações que se encontram no parâmetro 'text' de tipo 'string':
  getCharacterCountExcludingSpaces: (text) => {
    const textExcludingSpaces = text.replace(/[^\w]/g,'');
    const characterCountExcludingSpaces = textExcludingSpaces.length;
    return characterCountExcludingSpaces;

    // O método "replace" retorna uma nova string correspondente ao padrão determinado no regex, que é retirar espaços e pontuações.
    // A essa nova string é aplicada a propriedade "lenght" que contém o comprimento da string, que equivale a métrica de números de 
    // caracteres excluindo espaços e pontuações retornada na tela da usuária.

  },
   

  // Esta função retorna quantos números se encontram no parâmetro 'text' de tipo 'string':
  getNumberCount: (text) => {
    const number = text.match(/\b\d+(\.\d+)?\b/g);
    if (number) {
      return number.length;
    } else {
      return 0; 
    }

    // O método "match" retorna uma array correspondente ao padrão determinado no regex, que é trazer somente os números presentes da string numa lista.
    // Se 'number' existe (e ele só axiste se atender as condições do "match"), então a propriedade "lenght" traz o comprimento da string,
    // que vai retornar o número de elementos da array, que equivale a métrica do número de numerais retornada na tela da usuária.

  },


  // Esta função retorna a soma de todos os números que se encontram no parâmetro 'text' do tipo 'string': 
  getNumberSum: (text) => {
    const sumNumber = text.match(/\b\d+(\.\d+)?\b/g);
    if (sumNumber) {
      let result = 0;
      sumNumber.forEach((SumOfNumbers)=>{result+=Number(SumOfNumbers)})

      // O método "match" retorna uma array correspondente ao padrão determinado no regex, que é trazer somente os números presentes da string numa lista.
      // Se 'sumNumber' existe, o metódo "foreach" aplica a cada item da array a soma desses itens em 'result', e retorna a soma dos números na
      // tela da usuária.

      return result;

      // e quando não atender mais as condições do 'foreach'- que atua com um loop:

    } else{
      return 0;
    }
    //-----------------------------------------------------------------------------------------------------------------------
    //  O método "match" retorna uma array correspondente ao padrão determinado no regex, que é trazer somente os números presentes da string numa lista.
    // A condicional "if" declara a variável 'result'.
    // E o loop "for" define que para o "i" menor que o número de elementos da array obtida pelo método "match", soma-se esses elementos.
    // O objeto "Number" permite converter o resultado dessa soma num valor de tipo 'number'.
    // Que equivale a métrica da soma dos números, retornada na tela da usuária.
    // O "else" retorna o que não for verdadeiro à condição do "if".

    // estrutura do "for": 
    //for ( [expressão inicial]; [expressão condicional]; [atualização da expressão inicial] ) {
    // um ou vários comandos a serem executados //
    //declaração;
    //}

  },

  // Esta função retorna o comprimento médio das palavras que se encontram no parâmetro 'text'de tipo 'string':
  getAverageWordLength: (text) => {  
    const numberOfWords = text.split(' ');
    let numberOfCharacters = 0;
    
    for (let i = 0; i<numberOfWords.length;i++){
      numberOfCharacters+= numberOfWords[i].length;
    }
    const result = (numberOfCharacters/numberOfWords.length).toFixed(2);
    return Number(result);

    // O  método "split" "fatia" a string em array seguindo o regex,
    // que determina que o breakpoint que separa um elemento é o espaço que separa antes e depois, essa array traz o números de palavras em 'numberOfWords'.
    // O loop "for" define que enquanto o indice "i" for menor que o número de elementos da array de "numofNWords", soma-se esses elementos.
    // E "numberOfCharacters" traz o comprimento dessa soma.
    // const "result", faz a média do comprimento da soma das palavras de "numberOfCharacters"(que equivale ao total de caracteres) pelo número de palavras de 
    // "numberofWords".
    // O método "toFixed" permite definir a quantidade de casas decimais, o "2" indicado no parâmetro estabelece 2 casas decimais.
    // O objeto "Number" permite converter o resultado dessa soma num valor de tipo 'number', que retorna na métrica exibida na tela da usuária.



    // outra forma de resolver getAverageWordLength, mas não passa no teste porque tem que ter o "for":
    // const numberOfWords = text.split (' ');
    // const numberOfCharacters = numberOfWords.join('');
    // return parseFloat((numberOfCharacters.length/numberOfWords.lengthnpm).toFixed(2));
  },
};
 
export default analyzer; // Disponibiliza a const analyzer para ser importada em outro arquivo.
 
