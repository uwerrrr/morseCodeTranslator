import * as data from "./data.js";
import * as validate from "./validation.js";

// function removing blank items ('') in an array
const removingBlankItem = (arr) => {
  const cleanArr = arr.filter((item) => item !== "");
  return cleanArr;
};

// function getting value in Obj
const getValFromObj = (keyToFind, Obj) => {
  const objKeys = Object.keys(Obj); // array of keys

  validate.notInObjErr(keyToFind, objKeys);

  const foundVal = objKeys.reduce((acc, key) => {
    if (keyToFind === key) {
      acc = Obj[key];
    }
    return acc;
  }, ""); // return val in string

  return foundVal;
};

// function translating char by char of an array of chars
const translateChars = (toTranslateChars, data) => {
  const translatedChars = toTranslateChars.map((char) => {
    if (char) {
      // if NOT ''
      const translatedChar = getValFromObj(char, data);
      return translatedChar;
    } else {
      return char;
    }
  });
  // return Array of translated char

  // const translatedCharsClean = removingBlankItem(translatedChars);

  return translatedChars;
};

// function translating Morse to Words
export const translateMoToWo = (morseSen) => {
  const morseSenCleaned = morseSen.replaceAll("\n", "/");
  // replace all next line char

  const morseWords = morseSenCleaned.split("/"); //['...  --- ...' , '- . ... -']

  const morseWordsClean = removingBlankItem(morseWords);

  const latinWords = morseWordsClean.map((morseWord) => {
    const morseChars = morseWord.split(" ");
    // ['...', '', '---', '...' ]

    const latinChars = translateChars(morseChars, data.MoToWoData);
    // ['S', '', 'O', 'S']

    const latinWord = latinChars.join("");
    // 'SOS'

    return latinWord;
  });
  // returns Array of ['SOS', 'TEST']

  const latinSen = latinWords.join(" ");
  // 'SOS TEST'

  return latinSen;
};
// 'SOS TEST'

// function translating Words to Morse
export const translateWoToMo = (latinSen) => {
  const latinSenCleaned = latinSen.replaceAll("\n", " ");
  // replace all next line char

  // `SOS     test`
  const latinWords = latinSenCleaned.toUpperCase().split(" ");
  //[ 'SOS', '', '', '', '', 'TEST' ]

  const latinWordsClean = removingBlankItem(latinWords);

  const morseWords = latinWordsClean.map((latinWord) => {
    const latinChars = latinWord.split("");
    // ['S', ' ', 'O', 'S']

    const morseChars = translateChars(latinChars, data.WoToMoData);
    // ['...', '---', '...' ]

    const morseWord = morseChars.join(" ");
    // '... --- ...'

    return morseWord;
  });
  // returns Array of [''... --- ...'', '- . ... -']

  const morseSen = morseWords.join(" / ");
  // '...   --- ... / - . ... -'

  return morseSen;
};
// '...   --- ... / - . ... -'
