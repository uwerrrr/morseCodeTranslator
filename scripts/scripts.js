import * as data from "./modules/data.js";
import * as dom from "./modules/dom-utils.js";
import * as validate from "./modules/validation.js";
import * as translate from "./modules/translating-functions.js";

const isMorse = (string) => {
  const regex = /^[\/\.\-\_\s]+$/;
  // regex for string with only above characters

  return regex.test(string);
};

dom.translateBtn.addEventListener("click", (event) => {
  console.log("btn clicked");
  event.preventDefault();

  dom.errorDiv.innerHTML = "";

  const formData = new FormData(dom.translateForm);
  const inputVal = formData.get("input");
  let output = "";

  try {
    validate.emptyErr(inputVal);
    console.log("inputVal: ", inputVal);

    if (isMorse(inputVal)) {
      output = translate.translateMoToWo(inputVal);
      dom.output.value = output;
    } else {
      output = translate.translateWoToMo(inputVal);
      dom.output.value = output;
    }
  } catch (error) {
    const instruction = `Please type text (A-Z and 0-1) or  \n Morse code using '.' , '-' or '_' , using a spaces between letters and '/' between words.`;
    const message = `${error.message}! \n ${instruction}`;
    console.log(message);
    dom.addTextDom(dom.errorDiv, message, "div");
  }
});
