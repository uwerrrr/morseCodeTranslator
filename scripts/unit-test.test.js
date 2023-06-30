import {
  translateMoToWo,
  translateWoToMo,
} from "./modules/translating-functions.js";
import { emptyErr } from "./modules/validation.js";

describe("Function translating from morse to latin", () => {
  test("should translate latin (with spaces and next line) to morse correctly", () => {
    expect(translateWoToMo("SOS test 123")).toBe(
      "... --- ... / - . ... - / .---- ..--- ...--"
    );
    expect(translateWoToMo("SOS      test")).toBe("... --- ... / - . ... -");
    expect(translateWoToMo("S\nOS      \nte\nst")).toBe(
      "... / --- ... / - . / ... -"
    );
  });

  test("should throw an error if there is no morse code for latin char", () => {
    expect(() => {
      translateWoToMo("SOS * test");
    }).toThrow(new Error(`There is no Morse code for "*"`));

    expect(() => {
      translateWoToMo("SO} S * test");
    }).toThrow(new Error(`There is no Morse code for "}"`));
  });
});

describe("Function translating from latin to morse", () => {
  test("should translate morse (with spaces and next line) to latin correctly", () => {
    expect(translateMoToWo("... --- ... / - . ... - / .---- ..--- ...--")).toBe(
      "SOS TEST 123"
    );
    expect(translateMoToWo("... --- ... / - . ... -")).toBe("SOS TEST");
    expect(translateMoToWo("...\n--- ...      \n- .\n... -")).toBe(
      "S OS TE ST"
    );
  });

  test("should throw an error if there is no latin char for morse code", () => {
    expect(() => {
      translateMoToWo(".------");
    }).toThrow(new Error(`".------" is not a valid Morse code`));

    expect(() => {
      translateMoToWo("././/.-...");
    }).toThrow(new Error(`".-..." is not a valid Morse code`));
  });
});

describe("Function checking empty string", () => {
  test("should throw an error if no string or only white spaces in string", () => {
    expect(() => {
      emptyErr("");
    }).toThrow(new Error(`There's nothing to translate`));

    expect(() => {
      emptyErr("          ");
    }).toThrow(new Error(`There's nothing to translate`));
  });
});
