export const translateForm = document.getElementById("translateForm");
export const input = document.getElementById("input");
export const output = document.getElementById("output");
export const translateBtn = document.getElementById("translateBtn");
export const errorDiv = document.getElementById("errorDiv");

export const addTextDom = (parentEle, textVal, textTag = "p") => {
  parentEle.innerHTML = "";

  const newTextTag = document.createElement(textTag);
  newTextTag.id = `${parentEle.id}Text`;

  const textNode = document.createTextNode(textVal);

  newTextTag.appendChild(textNode);

  parentEle.appendChild(newTextTag);
  
};
