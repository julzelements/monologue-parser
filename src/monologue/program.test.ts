/* eslint-disable no-bitwise */
import * as program from "./program";

const MONOLOGUE_INIT_PATCH_STRING =
  "UFJPR0luaXQgUHJvZ3JhbYAAgAD/AP8AAICAgIAAkJDpM4AApTIADCQAOCIGZgDIU0VRRLAEEAAANv//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==";

const MONOLOGUE_INIT_PATCH = [
  80, 82, 79, 71, 73, 110, 105, 116, 32, 80, 114, 111, 103, 114, 97, 109, 128,
  0, 128, 0, 255, 0, 255, 0, 0, 128, 128, 128, 128, 0, 144, 144, 233, 51, 128,
  0, 165, 50, 0, 12, 36, 0, 56, 34, 6, 102, 0, 200, 83, 69, 81, 68, 176, 4, 16,
  0, 0, 54, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0,
];

// NOTHING SEQUENCER OR FROM byte 45 down looked at yet.

/**
 * Test program string parsing.
 */
test("getPatchString can make a string from a patch of bytes", () => {
  expect(program.getPatchString(MONOLOGUE_INIT_PATCH)).toEqual(
    MONOLOGUE_INIT_PATCH_STRING
  );
});

/**
 * Test program parsing.
 */
test("that the init program title is parsed correctly", () => {
  expect(
    program.decodeProgram(program.INIT_PATCH)[program.PROGRAM_NAME]
  ).toEqual("Init Program");
});

/**
 * Octave Drive parameters
 */

test("that the init program Keyboard octave is parsed correctly", () => {
  expect(
    program.decodeProgram(program.INIT_PATCH)[program.KEYBOARD_OCTAVE]
  ).toBe(2); // TODO: actually see what this is referring to on the monologue?
});
test("that the init program Drive is parsed correctly", () => {
  expect(program.decodeProgram(program.INIT_PATCH)[program.DRIVE]).toBe(0);
});

/**
 * VCO1 parameters
 */

test("that the init program VCO1 pitch is parsed correctly", () => {
  expect(program.decodeProgram(program.INIT_PATCH)[program.VCO1_PITCH]).toBe(
    512
  );
});

test("that the init program VCO1 shape is parsed correctly", () => {
  expect(program.decodeProgram(program.INIT_PATCH)[program.VCO1_SHAPE]).toBe(0);
});

test("that the init program VCO1 octave is parsed correctly", () => {
  expect(program.decodeProgram(program.INIT_PATCH)[program.VCO1_OCTAVE]).toBe(
    1
  ); // 8'
});

test("that the init program VCO1 wave type is parsed correctly", () => {
  expect(program.decodeProgram(program.INIT_PATCH)[program.VCO1_WAVE]).toBe(2); // Saw
});

/**
 * VCO2 parameters
 */

test("that the init program VCO2 octave is parsed correctly", () => {
  expect(program.decodeProgram(program.INIT_PATCH)[program.VCO2_OCTAVE]).toBe(
    1
  ); // 8'
});

test("that the init program VCO2 wave type is parsed correctly", () => {
  expect(program.decodeProgram(program.INIT_PATCH)[program.VCO2_WAVE]).toBe(2); // Saw
});

test("that the init program VCO2 pitch is parsed correctly", () => {
  expect(program.decodeProgram(program.INIT_PATCH)[program.VCO2_PITCH]).toBe(
    512
  );
});

test("that the init program VCO2 shape is parsed correctly", () => {
  expect(program.decodeProgram(program.INIT_PATCH)[program.VCO2_SHAPE]).toBe(0);
});

test("that the init program VCO2 level is parsed correctly", () => {
  expect(program.decodeProgram(program.INIT_PATCH)[program.VCO2_LEVEL]).toBe(0);
});

/**
 * Mixer parameters
 */
test("that the init program VCO1 level is parsed correctly", () => {
  expect(program.decodeProgram(program.INIT_PATCH)[program.VCO1_LEVEL]).toBe(
    1023
  );
});

test("that the init program VCO1 level is parsed correctly", () => {
  expect(program.decodeProgram(program.INIT_PATCH)[program.VCO2_LEVEL]).toBe(0);
});
