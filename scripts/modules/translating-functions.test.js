import { translateMoToWo, translateWoToMo } from "./translating-functions.js";
import { emptyErr } from "./validation.js";

describe("Function translating from morse to latin", () => {
  test("should translate latin (with spaces and next line) to morse correctly", () => {
    expect(
      translateMoToWo("SOS test 123").toBe(
        "... --- ... / - . ... - / .---- ..--- ...--"
      )
    );
    expect(translateMoToWo("SOS      test").toBe("... --- ... / - . ... -"));
    expect(
      translateMoToWo("S\nOS      \nte\nst").toBe("... / --- ... / - . / ... -")
    );
  });
  test("should throw an error if there is no morse code for latin char", () => {
    expect(() => {
      translateMoToWo("SOS ! test").toThrow(
        new Error(`There is no Morse code for "!"`)
      );
    });
    expect(() => {
      translateMoToWo("SO} S ! test").toThrow(
        new Error(`There is no Morse code for "}"`)
      );
    });
  });

  describe("Function translating from latin to morse", () => {
  test("should translate morse (with spaces and next line) to latin correctly", () => {
    expect(
      translateMoToWo("... --- ... / - . ... - / .---- ..--- ...--").toBe(
        "SOS test 123"
      )
    );
    expect(translateMoToWo("... --- ... / - . ... -").toBe("SOS      test"));
    expect(
      translateMoToWo("...\n--- ...      \n- .\n... -").toBe("... / --- ... / - . / ... -")
    );
  });
  test("should throw an error if there is no morse code for latin char", () => {
    expect(() => {
      translateMoToWo("SOS ! test").toThrow(
        new Error(`There is no Morse code for "!"`)
      );
    });
    expect(() => {
      translateMoToWo("SO} S ! test").toThrow(
        new Error(`There is no Morse code for "}"`)
      );
    });
  });

  // test("", () => {
  //   expect(sum(2, 3)).toBe(5);
  //   expect(sum(-2, 3)).toBe(1);
  //   expect(sum(0, -3)).toBe(-3);
  //   expect(sum(0, -3.5)).toBe(-3.5);
  // });
  // it("should calculate the area of a rectangle if given two positive numbers", () => {
  //   expect(rectangleArea(2, 3)).toBe(6);
  //   expect(rectangleArea(100, 120)).toBe(12000);
  //   expect(rectangleArea(2.1, 1.2)).toBe(2.52);
  // });
  // it("should throw an error if less than 2 parameters are passed", () => {
  //   expect(() => {
  //     rectangleArea();
  //   }).toThrow(invalidArgumentNumber);
  //   expect(() => {
  //     rectangleArea(1);
  //   }).toThrow(invalidArgumentNumber);
  //   expect(() => {
  //     rectangleArea("hello");
  //   }).toThrow(invalidArgumentNumber);
  // });
});
