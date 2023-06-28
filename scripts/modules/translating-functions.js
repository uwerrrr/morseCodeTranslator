import * as data from "./data.js";
import * as validate from "./validation.js";

// function removing blank item in an array
const removeBlankItem = (arr) => {
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

  const translatedCharsClean = removeBlankItem(translatedChars);

  return translatedCharsClean;
};

// function translating Morse to Words
export const translateMoToWo = (morseSen) => {
  validate.emptyErr(morseSen);

  const morseWords = morseSen.split("/"); //['...  --- ...' , '- . ... -']

  const latinWords = morseWords.map((morseWord) => {
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
  validate.emptyErr(latinSen);

  // `SOS     test`
  const latinWords = latinSen.toUpperCase().split(" ");
  //[ 'SOS', '', '', '', '', 'TEST' ]

  const latinWordsClean = removeBlankItem(latinWords);

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

/////////////////////
//// testing area
//
const testLatin = "S OS     test";
const testMorse = "...      --- ... / - . ... -";
const testEmpty = "          ";
const testMoErr = "...    !  --- ... / - . ... -";
const testLaErr = "S OS  !   test";

try {
  console.log("translate ", testMorse);
  console.log(translateMoToWo(testMorse));

  console.log("translate ", testLatin);
  console.log(translateWoToMo(testLatin));

  // console.log("translate ", testEmpty);
  // console.log(translateMoToWo(testEmpty));

  // console.log("translate ", testMoErr);
  // console.log(translateMoToWo(testMoErr));

  console.log("translate ", testLaErr);
  console.log(translateWoToMo(testLaErr));
} catch (e) {
  console.log(e.message);
}
