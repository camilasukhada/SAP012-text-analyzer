
    
const analyzer = { 
  
  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.  
  getWordCount: (text) => {
    const words= text.trim().split(/\s+/);
    return words.length;
  },

  //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.   
  getCharacterCount: (text) => {
    return text.length;
  },

  //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCountExcludingSpaces: (text) => {
    const textExcludingSpaces = text.replace(/[^\w]/g,'');
    const characterCountExcludingSpaces = textExcludingSpaces.length;
    return characterCountExcludingSpaces;
  },
   
  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  getNumberCount: (text) => {
    const number = text.match(/\b\d+(\.\d+)?\b/g);
    console.log (number);
    if (number) {
      return number.length;
    } else {
      return 0; 
    }

  },

  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  getNumberSum: (text) => {
    const sumNumber = text.match(/\b\d+(\.\d+)?\b/g);
    if (sumNumber) {
      let result = 0;
      for (let i = 0; i<sumNumber.length;i++){
        result+= Number(sumNumber[i]);
      }
      return result;

    } else{
      return 0;
    }

    // for (let i = 0; i < text.length; i++) {
    //       if (text[i].match(/\d+/g)) {
    //         sumOfNumbers += parseInt(text[i], 10);

    // retornar os números de 0 a 9 da textarea, num array com números de 1 digito.

    // const numbersSum = text.match(/\b\d+(\.\d+)?\b/g);
    // if (numbersSum) {
    //   let result = 0;
    //   for (let i = 0; i<numbersSum.length;i++){
    //     result += Number(numbersSum[i]);
    //   }
    //   return result;
    //   console.log (result);
    
    // } else {
    //   return 0;
    // }

    //-----------------------------------------------------------------------------------
    // let sumOfNumber = text.match(/\d+/g);
    // console.log(sumOfNumber);

    //   for (let i = 0; i < text.length; i++) {
    //     if (text[i].match(/\d+/g)) {
    //       sumOfNumber += parseInt(text[i], 10);
    //     }
    //   }
    //---------------------------------------------------------------------------------
    // const numberSum = text.match(/\d+/g);
    // var sumOfNumber = 0;

    // if(numberSum) {
    //   for (var i =0; i < numberSum.lenght; i++) {
    //     sumOfNumber += parseInt(numberSum[i],10);
    //   }

  },

  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getAverageWordLength: (text) => {    
    const avarageWord = text.split(' ');
    let count = 0;
    
    for (let i = 0; i<avarageWord.length;i++){
      count+= avarageWord[i].length;
    }
    const result = (count/avarageWord.length).toFixed(2);
    return Number(result);
  },
};
 
export default analyzer;
 
