import * as data from "./data.js";

////
//// Validation functions

export const emptyErr = (inputStr) => {
  const trimmedStr = inputStr.trim();
  if (trimmedStr === "") {
    throw new Error("There's nothing to translate");
  }
};

export const notInObjErr = (keyToFind, objKeys) => {
  let translateFrom = "input";

  if (objKeys[0] === Object.keys(data.WoToMoData)[0]) {
    translateFrom = "latin";
  } else if (objKeys[0] === Object.keys(data.MoToWoData)[0]) {
    translateFrom = "morse";
  }

  if (!objKeys.includes(keyToFind)) {
    if (translateFrom === "latin") {
      throw new Error(`There is no Morse code for "${keyToFind}"`);
    }
    // if (translateFrom === "morse") {
    //   throw new Error(`"${keyToFind}" is not a valid Morse code`);
    // }
    if (translateFrom === "input") {
      throw new Error(`"${keyToFind}" is not a valid input`);
    }
  }
};
