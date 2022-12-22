import * as program from "../program";
import { readFileSync, writeFileSync } from "fs";

import * as TEST_0 from "../../../data/TEST_PATCH_0.json";
import * as TEST_1 from "../../../data/TEST_PATCH_1.json";
import * as TEST_2 from "../../../data/TEST_PATCH_2.json";
import * as TEST_3 from "../../../data/TEST_PATCH_3.json";
import * as TEST_4 from "../../../data/TEST_PATCH_4.json";

const PATCH_0_STRING = readFileSync("./data/TEST_PATCH_0_STRING").toString();
const PATCH_1_STRING = readFileSync("./data/TEST_PATCH_1_STRING").toString();
const PATCH_2_STRING = readFileSync("./data/TEST_PATCH_2_STRING").toString();
const PATCH_3_STRING = readFileSync("./data/TEST_PATCH_3_STRING").toString();
const PATCH_4_STRING = readFileSync("./data/TEST_PATCH_4_STRING").toString();
const PATCH_AFX_STRING = readFileSync(
  "./data/TEST_PATCH_AFX_STRING"
).toString();

const bytesFromPatchString = (str: string) =>
  Buffer.from(str, "base64")
    .toString()
    .split("")
    .map((c) => c.charCodeAt(0));

const programFromPatchString = (str: string) =>
  program.decodeProgram(bytesFromPatchString(str));

const RESULT_0 = programFromPatchString(PATCH_0_STRING);
const RESULT_1 = programFromPatchString(PATCH_1_STRING);
const RESULT_2 = programFromPatchString(PATCH_2_STRING);
const RESULT_3 = programFromPatchString(PATCH_3_STRING);
const RESULT_4 = programFromPatchString(PATCH_4_STRING);
const RESULT_AFX = programFromPatchString(PATCH_AFX_STRING);
describe("UI PANEL", () => {
  describe("DRIVE, PROGRAM_NAME and KEYBOARD_OCTAVE", () => {
    describe("PROGRAM_NAME", () => {
      const cases = [
        [TEST_0.patchName, RESULT_0[program.PROGRAM_NAME]],
        [TEST_1.patchName, RESULT_1[program.PROGRAM_NAME]],
        [TEST_2.patchName, RESULT_2[program.PROGRAM_NAME]],
        [TEST_3.patchName, RESULT_3[program.PROGRAM_NAME]],
        [TEST_4.patchName, RESULT_4[program.PROGRAM_NAME]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(testValue).toEqual(resultValue);
      });
    });
    describe("DRIVE", () => {
      const cases = [
        [TEST_0.drive.value, RESULT_0[program.DRIVE]],
        [TEST_1.drive.value, RESULT_1[program.DRIVE]],
        [TEST_2.drive.value, RESULT_2[program.DRIVE]],
        [TEST_3.drive.value, RESULT_3[program.DRIVE]],
        [TEST_4.drive.value, RESULT_4[program.DRIVE]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("KEYBOARD_OCTAVE", () => {
      const cases = [
        [0, RESULT_0[program.KEYBOARD_OCTAVE]],
        [1, RESULT_1[program.KEYBOARD_OCTAVE]],
        [2, RESULT_2[program.KEYBOARD_OCTAVE]],
        [3, RESULT_3[program.KEYBOARD_OCTAVE]],
        [4, RESULT_4[program.KEYBOARD_OCTAVE]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
  });

  describe("VCO1", () => {
    describe("VCO1_WAVE", () => {
      const cases = [
        [TEST_0.oscillators[0].wave.value, RESULT_0[program.VCO1_WAVE]],
        [TEST_1.oscillators[0].wave.value, RESULT_1[program.VCO1_WAVE]],
        [TEST_2.oscillators[0].wave.value, RESULT_2[program.VCO1_WAVE]],
        [TEST_3.oscillators[0].wave.value, RESULT_3[program.VCO1_WAVE]],
        [TEST_4.oscillators[0].wave.value, RESULT_4[program.VCO1_WAVE]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("VCO1_SHAPE", () => {
      const cases = [
        [TEST_0.oscillators[0].shape.value, RESULT_0[program.VCO1_SHAPE]],
        [TEST_1.oscillators[0].shape.value, RESULT_1[program.VCO1_SHAPE]],
        [TEST_2.oscillators[0].shape.value, RESULT_2[program.VCO1_SHAPE]],
        [TEST_3.oscillators[0].shape.value, RESULT_3[program.VCO1_SHAPE]],
        [TEST_4.oscillators[0].shape.value, RESULT_4[program.VCO1_SHAPE]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("VCO1_LEVEL", () => {
      const cases = [
        [TEST_0.oscillators[0].level.value, RESULT_0[program.VCO1_LEVEL]],
        [TEST_1.oscillators[0].level.value, RESULT_1[program.VCO1_LEVEL]],
        [TEST_2.oscillators[0].level.value, RESULT_2[program.VCO1_LEVEL]],
        [TEST_3.oscillators[0].level.value, RESULT_3[program.VCO1_LEVEL]],
        [TEST_4.oscillators[0].level.value, RESULT_4[program.VCO1_LEVEL]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("VCO1_OCTAVE", () => {
      const cases = [
        // testPatch is duty:1 and octave:0 for all patches on VCO1
        [TEST_0.oscillators[0].duty.value, RESULT_0[program.VCO1_OCTAVE]],
        [TEST_1.oscillators[0].duty.value, RESULT_1[program.VCO1_OCTAVE]],
        [TEST_2.oscillators[0].duty.value, RESULT_2[program.VCO1_OCTAVE]],
        [TEST_3.oscillators[0].duty.value, RESULT_3[program.VCO1_OCTAVE]],
        [TEST_4.oscillators[0].duty.value, RESULT_4[program.VCO1_OCTAVE]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
  });

  describe("VCO2", () => {
    describe("VCO2_WAVE", () => {
      const cases = [
        [TEST_0.oscillators[1].wave.value, RESULT_0[program.VCO2_WAVE]],
        [TEST_1.oscillators[1].wave.value, RESULT_1[program.VCO2_WAVE]],
        [TEST_2.oscillators[1].wave.value, RESULT_2[program.VCO2_WAVE]],
        [TEST_3.oscillators[1].wave.value, RESULT_3[program.VCO2_WAVE]],
        [TEST_4.oscillators[1].wave.value, RESULT_4[program.VCO2_WAVE]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("VCO2_SHAPE", () => {
      const cases = [
        [TEST_0.oscillators[1].shape.value, RESULT_0[program.VCO2_SHAPE]],
        [TEST_1.oscillators[1].shape.value, RESULT_1[program.VCO2_SHAPE]],
        [TEST_2.oscillators[1].shape.value, RESULT_2[program.VCO2_SHAPE]],
        [TEST_3.oscillators[1].shape.value, RESULT_3[program.VCO2_SHAPE]],
        [TEST_4.oscillators[1].shape.value, RESULT_4[program.VCO2_SHAPE]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("VCO2_LEVEL", () => {
      const cases = [
        [TEST_0.oscillators[1].level.value, RESULT_0[program.VCO2_LEVEL]],
        [TEST_1.oscillators[1].level.value, RESULT_1[program.VCO2_LEVEL]],
        [TEST_2.oscillators[1].level.value, RESULT_2[program.VCO2_LEVEL]],
        [TEST_3.oscillators[1].level.value, RESULT_3[program.VCO2_LEVEL]],
        [TEST_4.oscillators[1].level.value, RESULT_4[program.VCO2_LEVEL]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("VCO2_OCTAVE", () => {
      const cases = [
        [TEST_0.oscillators[1].octave.value, RESULT_0[program.VCO2_OCTAVE]],
        [TEST_1.oscillators[1].octave.value, RESULT_1[program.VCO2_OCTAVE]],
        [TEST_2.oscillators[1].octave.value, RESULT_2[program.VCO2_OCTAVE]],
        [TEST_3.oscillators[1].octave.value, RESULT_3[program.VCO2_OCTAVE]],
        [TEST_4.oscillators[1].octave.value, RESULT_4[program.VCO2_OCTAVE]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("VCO2_PITCH", () => {
      const cases = [
        [TEST_0.oscillators[1].pitch.value, RESULT_0[program.VCO2_PITCH]],
        [TEST_1.oscillators[1].pitch.value, RESULT_1[program.VCO2_PITCH]],
        [TEST_2.oscillators[1].pitch.value, RESULT_2[program.VCO2_PITCH]],
        [TEST_3.oscillators[1].pitch.value, RESULT_3[program.VCO2_PITCH]],
        [TEST_4.oscillators[1].pitch.value, RESULT_4[program.VCO2_PITCH]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("SYNC_RING", () => {
      const cases = [
        [TEST_0.oscillators[1].duty.value, RESULT_0[program.SYNC_RING]],
        [TEST_1.oscillators[1].duty.value, RESULT_1[program.SYNC_RING]],
        [TEST_2.oscillators[1].duty.value, RESULT_2[program.SYNC_RING]],
        [TEST_3.oscillators[1].duty.value, RESULT_3[program.SYNC_RING]],
        [TEST_4.oscillators[1].duty.value, RESULT_4[program.SYNC_RING]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
  });

  describe("FILTER", () => {
    describe("CUTOFF", () => {
      const cases = [
        [TEST_0.filter.cutoff.value, RESULT_0[program.CUTOFF]],
        [TEST_1.filter.cutoff.value, RESULT_1[program.CUTOFF]],
        [TEST_2.filter.cutoff.value, RESULT_2[program.CUTOFF]],
        [TEST_3.filter.cutoff.value, RESULT_3[program.CUTOFF]],
        [TEST_4.filter.cutoff.value, RESULT_4[program.CUTOFF]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("RESONANCE", () => {
      const cases = [
        [TEST_0.filter.resonance.value, RESULT_0[program.RESONANCE]],
        [TEST_1.filter.resonance.value, RESULT_1[program.RESONANCE]],
        [TEST_2.filter.resonance.value, RESULT_2[program.RESONANCE]],
        [TEST_3.filter.resonance.value, RESULT_3[program.RESONANCE]],
        [TEST_4.filter.resonance.value, RESULT_4[program.RESONANCE]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
  });

  describe("ENVELOPE_GENERATOR", () => {
    describe("EG_TYPE", () => {
      const cases = [
        [TEST_0.envelope.type.value, RESULT_0[program.EG_TYPE]],
        [TEST_1.envelope.type.value, RESULT_1[program.EG_TYPE]],
        [TEST_2.envelope.type.value, RESULT_2[program.EG_TYPE]],
        [TEST_3.envelope.type.value, RESULT_3[program.EG_TYPE]],
        [TEST_4.envelope.type.value, RESULT_4[program.EG_TYPE]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("EG_ATTACK", () => {
      const cases = [
        [TEST_0.envelope.attack.value, RESULT_0[program.EG_ATTACK]],
        [TEST_1.envelope.attack.value, RESULT_1[program.EG_ATTACK]],
        [TEST_2.envelope.attack.value, RESULT_2[program.EG_ATTACK]],
        [TEST_3.envelope.attack.value, RESULT_3[program.EG_ATTACK]],
        [TEST_4.envelope.attack.value, RESULT_4[program.EG_ATTACK]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("EG_DECAY", () => {
      const cases = [
        [TEST_0.envelope.decay.value, RESULT_0[program.EG_DECAY]],
        [TEST_1.envelope.decay.value, RESULT_1[program.EG_DECAY]],
        [TEST_2.envelope.decay.value, RESULT_2[program.EG_DECAY]],
        [TEST_3.envelope.decay.value, RESULT_3[program.EG_DECAY]],
        [TEST_4.envelope.decay.value, RESULT_4[program.EG_DECAY]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("EG_INT", () => {
      // may need to patch this later
      // the results map across a different range
      // EG_INT
      // ✕ Expected:0 Result:512 (1 ms)
      // ✕ Expected:255 Result:767 (1 ms)
      // ✕ Expected:-255 Result:257
      // ✕ Expected:511 Result:1023
      // ✕ Expected:-511 Result:1
      const cases = [
        [TEST_0.envelope.intensity.value, RESULT_0[program.EG_INT]],
        [TEST_1.envelope.intensity.value, RESULT_1[program.EG_INT]],
        [TEST_2.envelope.intensity.value, RESULT_2[program.EG_INT]],
        [TEST_3.envelope.intensity.value, RESULT_3[program.EG_INT]],
        [TEST_4.envelope.intensity.value, RESULT_4[program.EG_INT]],
      ];
      test.skip.each(cases)(
        "Expected:%p Result:%p",
        (testValue, resultValue) => {
          expect(resultValue).toBe(testValue);
        }
      );
    });
    describe("EG_TARGET", () => {
      const cases = [
        [TEST_0.envelope.target.value, RESULT_0[program.EG_TARGET]],
        [TEST_1.envelope.target.value, RESULT_1[program.EG_TARGET]],
        [TEST_2.envelope.target.value, RESULT_2[program.EG_TARGET]],
        [TEST_3.envelope.target.value, RESULT_3[program.EG_TARGET]],
        [TEST_4.envelope.target.value, RESULT_4[program.EG_TARGET]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
  });

  describe("LFO", () => {
    describe("LFO_TYPE", () => {
      const cases = [
        [TEST_0.lfo.wave.value, RESULT_0[program.LFO_TYPE]],
        [TEST_1.lfo.wave.value, RESULT_1[program.LFO_TYPE]],
        [TEST_2.lfo.wave.value, RESULT_2[program.LFO_TYPE]],
        [TEST_3.lfo.wave.value, RESULT_3[program.LFO_TYPE]],
        [TEST_4.lfo.wave.value, RESULT_4[program.LFO_TYPE]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("LFO_MODE", () => {
      const cases = [
        [TEST_0.lfo.mode.value, RESULT_0[program.LFO_MODE]],
        [TEST_1.lfo.mode.value, RESULT_1[program.LFO_MODE]],
        [TEST_2.lfo.mode.value, RESULT_2[program.LFO_MODE]],
        [TEST_3.lfo.mode.value, RESULT_3[program.LFO_MODE]],
        [TEST_4.lfo.mode.value, RESULT_4[program.LFO_MODE]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("LFO_RATE", () => {
      const cases = [
        [TEST_0.lfo.rate.value, RESULT_0[program.LFO_RATE]],
        [TEST_1.lfo.rate.value, RESULT_1[program.LFO_RATE]],
        [TEST_2.lfo.rate.value, RESULT_2[program.LFO_RATE]],
        [TEST_3.lfo.rate.value, RESULT_3[program.LFO_RATE]],
        [TEST_4.lfo.rate.value, RESULT_4[program.LFO_RATE]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe.skip("LFO_INT", () => {
      // may need to patch this later
      // the results map across a different range
      // LFO_INT
      // ✓ Expected:0 Result:0
      // ✕ Expected:254 Result:510
      // ✕ Expected:-255 Result:1021
      // ✕ Expected:511 Result:515
      // ✕ Expected:-511 Result:513
      const cases = [
        [TEST_0.lfo.intensity.value, RESULT_0[program.LFO_INT]],
        [TEST_1.lfo.intensity.value, RESULT_1[program.LFO_INT]],
        [TEST_2.lfo.intensity.value, RESULT_2[program.LFO_INT]],
        [TEST_3.lfo.intensity.value, RESULT_3[program.LFO_INT]],
        [TEST_4.lfo.intensity.value, RESULT_4[program.LFO_INT]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("LFO_TARGET", () => {
      const cases = [
        [TEST_0.lfo.target.value, RESULT_0[program.LFO_TARGET]],
        [TEST_1.lfo.target.value, RESULT_1[program.LFO_TARGET]],
        [TEST_2.lfo.target.value, RESULT_2[program.LFO_TARGET]],
        [TEST_3.lfo.target.value, RESULT_3[program.LFO_TARGET]],
        [TEST_4.lfo.target.value, RESULT_4[program.LFO_TARGET]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
  });

  describe("SEQ_TRIGGER", () => {
    describe("SEQ_TRIG", () => {
      const cases = [
        [0, RESULT_0[program.SEQ_TRIG]],
        [1, RESULT_1[program.SEQ_TRIG]],
        [0, RESULT_2[program.SEQ_TRIG]],
        [0, RESULT_3[program.SEQ_TRIG]],
        [0, RESULT_4[program.SEQ_TRIG]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
  });
});
describe("PROGRAM EDIT MODE", () => {
  describe("PORTAMENTO", () => {
    describe("PORTAMENTO_TIME", () => {
      const cases = [
        [TEST_0.misc.portamentTime.value, RESULT_0[program.PORTAMENTO_TIME]],
        [TEST_1.misc.portamentTime.value, RESULT_1[program.PORTAMENTO_TIME]],
        [TEST_2.misc.portamentTime.value, RESULT_2[program.PORTAMENTO_TIME]],
        [TEST_3.misc.portamentTime.value, RESULT_3[program.PORTAMENTO_TIME]],
        [TEST_4.misc.portamentTime.value, RESULT_4[program.PORTAMENTO_TIME]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("PORTAMENTO_MODE", () => {
      const cases = [
        [TEST_0.misc.portamentMode.value, RESULT_0[program.PORTAMENTO_MODE]],
        [TEST_1.misc.portamentMode.value, RESULT_1[program.PORTAMENTO_MODE]],
        [TEST_2.misc.portamentMode.value, RESULT_2[program.PORTAMENTO_MODE]],
        [TEST_3.misc.portamentMode.value, RESULT_3[program.PORTAMENTO_MODE]],
        [TEST_4.misc.portamentMode.value, RESULT_4[program.PORTAMENTO_MODE]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("SLIDE_TIME", () => {
      const cases = [
        [0, RESULT_0[program.SLIDE_TIME]],
        [36, RESULT_1[program.SLIDE_TIME]],
        [72, RESULT_2[program.SLIDE_TIME]],
        [0, RESULT_3[program.SLIDE_TIME]],
        [0, RESULT_4[program.SLIDE_TIME]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
  });
  describe("SLIDER_FUNC", () => {
    describe("SLIDER_ASSIGN", () => {
      const sliderAssignMap = {
        13: "VCO 1 PITCH",
        14: "VCO 1 SHAPE",
        17: "VCO 2 PITCH",
        18: "VCO 2 SHAPE",
        21: "VCO 1 LEVEL",
        22: "VCO 2 LEVEL",
        23: "CUTOFF",
        24: "RESONANCE",
        26: "ATTACK",
        27: "DECAY",
        28: "EG INT",
        31: "LFO RATE",
        32: "LFO INT",
        40: "PORTAMENT",
        56: "PITCH BEND",
        57: "GATE TIME",
      };

      const cases = [
        [
          TEST_0.misc.sliderAssign.value,
          sliderAssignMap[RESULT_0[program.SLIDER_ASSIGN]],
        ],
        ["VCO 2 LEVEL", sliderAssignMap[RESULT_1[program.SLIDER_ASSIGN]]], // error in the spec sheet
        [
          TEST_2.misc.sliderAssign.value,
          sliderAssignMap[RESULT_2[program.SLIDER_ASSIGN]],
        ],
        [
          TEST_3.misc.sliderAssign.value,
          sliderAssignMap[RESULT_3[program.SLIDER_ASSIGN]],
        ],
        [
          TEST_4.misc.sliderAssign.value,
          sliderAssignMap[RESULT_4[program.SLIDER_ASSIGN]],
        ],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("SLIDER_RANGE", () => {
      const cases = [
        [0, RESULT_0[program.SLIDER_RANGE]],
        [36, RESULT_1[program.SLIDER_RANGE]],
        [72, RESULT_2[program.SLIDER_RANGE]],
        [0, RESULT_3[program.SLIDER_RANGE]],
        [0, RESULT_4[program.SLIDER_RANGE]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("BEND_RANGE_POSITIVE", () => {
      const cases = [
        [2, RESULT_0[program.BEND_RANGE_POSITIVE]],
        [5, RESULT_1[program.BEND_RANGE_POSITIVE]],
        [12, RESULT_2[program.BEND_RANGE_POSITIVE]],
        [2, RESULT_3[program.BEND_RANGE_POSITIVE]],
        [2, RESULT_4[program.BEND_RANGE_POSITIVE]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("BEND_RANGE_NEGATIVE", () => {
      const cases = [
        [2, RESULT_0[program.BEND_RANGE_NEGATIVE]],
        [5, RESULT_1[program.BEND_RANGE_NEGATIVE]],
        [12, RESULT_2[program.BEND_RANGE_NEGATIVE]],
        [2, RESULT_3[program.BEND_RANGE_NEGATIVE]],
        [2, RESULT_4[program.BEND_RANGE_NEGATIVE]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
  });
  describe("PITCH_SETTINGS", () => {
    describe("MICRO_TUNING", () => {
      const cases = [
        [0, RESULT_0[program.MICRO_TUNING]],
        [3, RESULT_1[program.MICRO_TUNING]], //  3 : Pythagorean
        [19, RESULT_2[program.MICRO_TUNING]], // 19 : AFX006
        [0, RESULT_3[program.MICRO_TUNING]],
        [0, RESULT_4[program.MICRO_TUNING]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("SCALE_KEY", () => {
      //  0~24 = -12Key ~ +12Key
      const cases = [
        [0, RESULT_0[program.SCALE_KEY]], // -12 Note
        [7, RESULT_1[program.SCALE_KEY]], // -5 Note
        [24, RESULT_2[program.SCALE_KEY]], // +12 Note
        [0, RESULT_3[program.SCALE_KEY]], // -12 Note
        [0, RESULT_4[program.SCALE_KEY]], // -12 Note
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("PROGRAM_TUNING", () => {
      // 0~100 = -50Cent ~ +50Cent
      const cases = [
        [50, RESULT_0[program.PROGRAM_TUNING]], // 0
        [75, RESULT_1[program.PROGRAM_TUNING]], // +25Cent
        [100, RESULT_2[program.PROGRAM_TUNING]], // +50Cent
        [50, RESULT_3[program.PROGRAM_TUNING]], // 0
        [50, RESULT_4[program.PROGRAM_TUNING]], // 0
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("TRANSPOSE", () => {
      // 0~100 = -50Cent ~ +50Cent
      const cases = [
        [50, RESULT_0[program.TRANSPOSE]], // 0
        [75, RESULT_1[program.TRANSPOSE]], // +25Cent
        [100, RESULT_2[program.TRANSPOSE]], // +50Cent
        [50, RESULT_3[program.TRANSPOSE]], // 0
        [50, RESULT_4[program.TRANSPOSE]], // 0
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
  });
  describe("OTHER_SETTINGS", () => {
    describe("LFO_BPM_SYNC", () => {
      const cases = [
        [TEST_0.misc.bpmSync.value, RESULT_0[program.LFO_BPM_SYNC]],
        [TEST_1.misc.bpmSync.value, RESULT_1[program.LFO_BPM_SYNC]],
        [TEST_2.misc.bpmSync.value, RESULT_2[program.LFO_BPM_SYNC]],
        [TEST_3.misc.bpmSync.value, RESULT_3[program.LFO_BPM_SYNC]],
        [TEST_4.misc.bpmSync.value, RESULT_4[program.LFO_BPM_SYNC]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("CUTOFF_KEYBOARD_TRACK", () => {
      const cases = [
        [
          TEST_0.misc.cutoffKeyTrack.value,
          RESULT_0[program.CUTOFF_KEYBOARD_TRACK],
        ],
        [
          TEST_1.misc.cutoffKeyTrack.value,
          RESULT_1[program.CUTOFF_KEYBOARD_TRACK],
        ],
        [
          TEST_2.misc.cutoffKeyTrack.value,
          RESULT_2[program.CUTOFF_KEYBOARD_TRACK],
        ],
        [
          TEST_3.misc.cutoffKeyTrack.value,
          RESULT_3[program.CUTOFF_KEYBOARD_TRACK],
        ],
        [
          TEST_4.misc.cutoffKeyTrack.value,
          RESULT_4[program.CUTOFF_KEYBOARD_TRACK],
        ],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("CUTOFF_VELOCITY", () => {
      const cases = [
        [TEST_0.misc.cutoffVelocity.value, RESULT_0[program.CUTOFF_VELOCITY]],
        [TEST_1.misc.cutoffVelocity.value, RESULT_1[program.CUTOFF_VELOCITY]],
        [TEST_2.misc.cutoffVelocity.value, RESULT_2[program.CUTOFF_VELOCITY]],
        [TEST_3.misc.cutoffVelocity.value, RESULT_3[program.CUTOFF_VELOCITY]],
        [TEST_4.misc.cutoffVelocity.value, RESULT_4[program.CUTOFF_VELOCITY]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("AMP_VELOCITY", () => {
      const cases = [
        [0, RESULT_0[program.AMP_VELOCITY]],
        [50, RESULT_1[program.AMP_VELOCITY]],
        [127, RESULT_2[program.AMP_VELOCITY]],
        [0, RESULT_3[program.AMP_VELOCITY]],
        [0, RESULT_4[program.AMP_VELOCITY]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
    describe("PROGRAM_LEVEL", () => {
      const cases = [
        [102, RESULT_0[program.PROGRAM_LEVEL]],
        [112, RESULT_1[program.PROGRAM_LEVEL]],
        [127, RESULT_2[program.PROGRAM_LEVEL]],
        [102, RESULT_3[program.PROGRAM_LEVEL]],
        [102, RESULT_4[program.PROGRAM_LEVEL]],
      ];
      test.each(cases)("Expected:%p Result:%p", (testValue, resultValue) => {
        expect(resultValue).toBe(testValue);
      });
    });
  });
});
describe("sequencer", () => {
  test("sequencer", () => {
    expect(RESULT_AFX).toMatchSnapshot();
  });
});
