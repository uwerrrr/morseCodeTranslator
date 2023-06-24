// flipping Obj function
const flipObj = (Obj) => {
  const keys = Object.keys(Obj); // [key,key]
  const flippedObj = {};
  keys.forEach((key) => {
    flippedObj[Obj[key]] = key; // value : key
  });
  return flippedObj;
};

// Words to Morse Code data
export const WoToMoData = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

// Morse Code to Words data
export const MoToWoData = flipObj(WoToMoData);
// console.log(Object.keys(MoToWoData));
