import * as data from "./modules/data.js";
import * as dom from "./modules/dom-utils.js";
import * as ut from "./modules/unitTest.js";
import * as validate from "./modules/validation.js";
import * as translate from "./modules/translating-functions.js";

const formData = new FormData(dom.translateForm);
const input = formData.get("input");

const isMorse = () => {
  
};

dom.translateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  validate.emptyErr();
});
