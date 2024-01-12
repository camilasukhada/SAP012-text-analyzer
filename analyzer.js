

const analyzer = {

  // Esta função deve retorna a contagem de palavras que se encontram no parâmetro 'text' de tipo 'string':
  getWordCount: (text) => {
    const words = text.replace(/[.,;:"«»\[\]\{\}\(\)¿\?¡!-]/gm,'').trim().split(' ');
    if (words) {
      return words.length;
    } else {
      return 0;
    }

  },


  // Esta função retorna a contagem de caracteres que se encontram no parâmetro 'text' de tipo 'string':
  getCharacterCount: (text) => {
    return text.trim().length;

  },


  // Esta função retorna a contagem de caracteres exluindo espaçoes e pontuações que se encontram no parâmetro 'text' de tipo 'string':
  getCharacterCountExcludingSpaces: (text) => {
    const textExcludingSpaces = text.replace(/[^\w]/g, '');
    const characterCountExcludingSpaces = textExcludingSpaces.length;
    return characterCountExcludingSpaces;

  },


  // Esta função retorna quantos números se encontram no parâmetro 'text' de tipo 'string':
  getNumberCount: (text) => {
    const number = text.match(/\b\d+(\.\d+)?\b/g);
    if (number) {
      return number.length;
    } else {
      return 0;
    }

  },


  // Esta função retorna a soma de todos os números que se encontram no parâmetro 'text' do tipo 'string': 
  getNumberSum: (text) => {
    const sumNumber = text.match(/\b\d+(\.\d+)?\b/g);
    if (sumNumber) {
      let result = 0;
      sumNumber.forEach((SumOfNumbers) => { result += Number(SumOfNumbers) })

      return result;

    } else {
      return 0;
    }
  },

  // Esta função retorna o comprimento médio das palavras que se encontram no parâmetro 'text'de tipo 'string':
  getAverageWordLength: (text) => {
    const numberOfWords = text.trim().split(' ');
    let numberOfCharacters = 0;
    if(!numberOfWords){
      return 0;
    } 
    for (let i = 0; i < numberOfWords.length; i++) {
      numberOfCharacters += numberOfWords[i].length;
    }
    const result = (numberOfCharacters / numberOfWords.length).toFixed(2);
    return Number(result);
    
  },
};

export default analyzer; 
