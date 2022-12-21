import * as program from "../program";
import { readFileSync } from "fs";

import * as TEST_PATCH_0_JSON from "../../../data/TEST_PATCH_0.json";
import * as TEST_PATCH_1_JSON from "../../../data/TEST_PATCH_1.json";
import * as TEST_PATCH_2_JSON from "../../../data/TEST_PATCH_2.json";
import * as TEST_PATCH_3_JSON from "../../../data/TEST_PATCH_3.json";
import * as TEST_PATCH_4_JSON from "../../../data/TEST_PATCH_4.json";

const PATCH_0_STRING = readFileSync("./data/TEST_PATCH_0_STRING").toString();
const PATCH_1_STRING = readFileSync("./data/TEST_PATCH_1_STRING").toString();
const PATCH_2_STRING = readFileSync("./data/TEST_PATCH_2_STRING").toString();
const PATCH_3_STRING = readFileSync("./data/TEST_PATCH_3_STRING").toString();
const PATCH_4_STRING = readFileSync("./data/TEST_PATCH_4_STRING").toString();

const bytesFromPatchString = (str: string) =>
  Buffer.from(str, "base64")
    .toString()
    .split("")
    .map((c) => c.charCodeAt(0));

const PATCH_0_BYTES = bytesFromPatchString(PATCH_0_STRING);
const PATCH_1_BYTES = bytesFromPatchString(PATCH_1_STRING);
const PATCH_2_BYTES = bytesFromPatchString(PATCH_2_STRING);
const PATCH_3_BYTES = bytesFromPatchString(PATCH_3_STRING);
const PATCH_4_BYTES = bytesFromPatchString(PATCH_4_STRING);

describe("Drive, program name and keyboard octave", () => {
  describe("PROGRAM_NAME", () => {
    const cases = [
      ["TEST_PATCH_0", TEST_PATCH_0_JSON.patchName, PATCH_0_BYTES],
      ["TEST_PATCH_1", TEST_PATCH_1_JSON.patchName, PATCH_1_BYTES],
      ["TEST_PATCH_2", TEST_PATCH_2_JSON.patchName, PATCH_2_BYTES],
      ["TEST_PATCH_3", TEST_PATCH_3_JSON.patchName, PATCH_3_BYTES],
      ["TEST_PATCH_4", TEST_PATCH_4_JSON.patchName, PATCH_4_BYTES],
    ];
    test.each(cases)(
      "%p is decoded and has PROGRAM_NAME: %p",
      (title, paramValue, bytes) => {
        expect(program.decodeProgram(bytes)[program.PROGRAM_NAME]).toEqual(
          paramValue
        );
      }
    );
  });
  describe("DRIVE", () => {
    const cases = [
      ["TEST_PATCH_0", TEST_PATCH_0_JSON.drive.value, PATCH_0_BYTES],
      ["TEST_PATCH_1", TEST_PATCH_1_JSON.drive.value, PATCH_1_BYTES],
      ["TEST_PATCH_2", TEST_PATCH_2_JSON.drive.value, PATCH_2_BYTES],
      ["TEST_PATCH_3", TEST_PATCH_3_JSON.drive.value, PATCH_3_BYTES],
      ["TEST_PATCH_4", TEST_PATCH_4_JSON.drive.value, PATCH_4_BYTES],
    ];
    test.each(cases)(
      "%p is decoded and has DRIVE: %p",
      (title, paramValue, bytes) => {
        expect(program.decodeProgram(bytes)[program.DRIVE]).toEqual(paramValue);
      }
    );
  });
});

describe("drive and global params", () => {
  test("that the init program title is parsed correctly", () => {
    expect(program.decodeProgram(PATCH_0_BYTES)[program.PROGRAM_NAME]).toEqual(
      TEST_PATCH_0_JSON.patchName
    );
  });
  test("that the init program title is parsed correctly", () => {
    expect(program.decodeProgram(PATCH_1_BYTES)[program.PROGRAM_NAME]).toEqual(
      "Test Patch 1"
    );
  });
  test("that the init program title is parsed correctly", () => {
    expect(program.decodeProgram(PATCH_2_BYTES)[program.PROGRAM_NAME]).toEqual(
      "Test Patch 2"
    );
  });
  test("that the init program title is parsed correctly", () => {
    expect(program.decodeProgram(PATCH_3_BYTES)[program.PROGRAM_NAME]).toEqual(
      "Test Patch 3"
    );
  });
  test("that the init program title is parsed correctly", () => {
    expect(program.decodeProgram(PATCH_4_BYTES)[program.PROGRAM_NAME]).toEqual(
      "Test Patch 4"
    );
  });
});
