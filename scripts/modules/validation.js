////
//// Validation functions

export const emptyErr = (inputStr) => {
  if ((inputStr = "")) {
    throw new Error("There's nothing to translate");
  }
};


