import * as data from "./modules/data.js";
import * as dom from "./modules/dom-utils.js";
import * as ut from "./modules/unitTest.js";

const testEng = "SOS test";

const WoToMoDataCharKeys = Object.keys(data.WoToMoData);
// ["A","B","C"]
// WoToMoDataChars.forEach((char) => {

// });

const TranslateWoToMo = (latin) => {
  const latinChars = latin.toUpperCase().split("");
  // [S,O,S, ,T,E,S,T]
  const morseChars = latinChars.map((latinChar) => {
    // latinChar = "S"
    const morseChar = WoToMoDataCharKeys.reduce((acc, charKey) => {
      // ["A"] in ["A","B","C"]
      if (latinChar === charKey) {
        acc = data.WoToMoData[charKey];
      } else if (latinChar === " ") {
        acc = latinChar + latinChar; // 2 spaces
      }
      return acc;
    }, "");
    return morseChar;
  });
  return morseChars.join(" ");
};

const testResult = TranslateWoToMo(testEng);
console.log(testResult);
