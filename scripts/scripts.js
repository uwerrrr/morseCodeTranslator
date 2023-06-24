import * as data from "./modules/data.js";
import * as dom from "./modules/dom-utils.js";
import * as ut from "./modules/unitTest.js";

const testLatin = "SOS test";
const testMorse = "... --- ...       - . ... -";

const WoToMoDataCharKeys = Object.keys(data.WoToMoData);
// ["A","B","C"]
const MoToWoDataCharKeys = Object.keys(data.MoToWoData);
// [".-", "-...", "-.-."]

// const translateWoToMo = (latinWords) => {
//   const latinChars = latinWords.toUpperCase().split("");
//   // [S,O,S, ,T,E,S,T]
//   const morseChars = latinChars.map((latinChar) => {
//     // latinChar = "S"
//     const morseChar = WoToMoDataCharKeys.reduce((acc, charKey) => {
//       // ["A"] in ["A","B","C"]
//       if (latinChar === charKey) {
//         acc = data.WoToMoData[charKey];
//       } else if (latinChar === " ") {
//         acc = latinChar + latinChar; // 2 spaces
//       }
//       return acc;
//     }, "");
//     return morseChar;
//   });
//   return morseChars.join(" "); // join with space
// };

// const translateMoToWo = (morseWords) => {
//   const morseChars = morseWords.split(" ");
//   // [...,---,...,  ,-,.,...,-]
//   console.log("morseChars: ", morseChars);
//   const latinChars = morseChars.map((morseChar) => {
//     // morseChar = "..."
//     const latinChar = MoToWoDataCharKeys.reduce((acc, charKey) => {
//       // [".-"] in [".-", "-...", "-.-."]
//       if (morseChar === charKey) {
//         acc = data.MoToWoData[charKey];
//       } else if (morseChar === "  ") {
//         // 2 spaces
//         acc = " "; // 1 space
//       }
//       return acc;
//     }, "");
//     return latinChar;
//   });
//   return latinChars.join(""); // join with space
// };

// console.log("word to morse: ", translateWoToMo(testLatin));
// console.log("morse to word: ", translateMoToWo(testMorse));

// const regex = /[A-Z]/g; // /[A-Z0-9]/g;
// const regex = /\S+/g;
// console.log("test: ", testMorse.toUpperCase().split("    ")[1].split(" "));

const inputString =
  "... --- ...     - . ... -    word1     word2   word3    word4    ...";
const regexPattern = /\b\S+(?:\s{3,}\S+)*\b/g;
const matches = inputString.match(regexPattern);

console.log(matches);
