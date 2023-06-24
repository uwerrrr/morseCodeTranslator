import * as data from "./modules/data.js";
import * as dom from "./modules/dom-utils.js";
import * as ut from "./modules/unitTest.js";

const testEng = "SOS test";

const WoToMoDataChars = Object.keys(data.WoToMoData);

// WoToMoDataChars.forEach((char) => {

// });

const TranslateWoToMo = (latin) => {
  chars = latin.split("");
  console.log(chars);
};
TranslateWoToMo(testEng);
