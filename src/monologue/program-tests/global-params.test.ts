import * as program from "../program";
import { readFileSync } from "fs";

const PATCH_0_STRING = readFileSync("./data/Test Patch 0-string").toString();
const PATCH_1_STRING = readFileSync("./data/Test Patch 1-string").toString();
const PATCH_2_STRING = readFileSync("./data/Test Patch 2-string").toString();
const PATCH_3_STRING = readFileSync("./data/Test Patch 3-string").toString();
const PATCH_4_STRING = readFileSync("./data/Test Patch 4-string").toString();

const bytesFromPatchString = (str: string) =>
  Buffer.from(str, "base64")
    .toString("binary")
    .split("")
    .map((c) => c.charCodeAt(0));

const PATCH_0_BYTES =bytesFromPatchString(PATCH_0_STRING)
const PATCH_1_BYTES =bytesFromPatchString(PATCH_1_STRING)
const PATCH_2_BYTES =bytesFromPatchString(PATCH_2_STRING)
const PATCH_3_BYTES =bytesFromPatchString(PATCH_3_STRING)
const PATCH_4_BYTES =bytesFromPatchString(PATCH_4_STRING)


describe("drive and global params", () => {
  test("that the init program title is parsed correctly", () => {
    expect(program.decodeProgram(PATCH_0_BYTES)[program.PROGRAM_NAME]).toEqual(
      "Test Patch 0"
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
