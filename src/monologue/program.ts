/**
 * Monologue program dump parsing and encoding utilities.
 * @name program.js
 */

// I'm working from top to bottom and modifying all the parameters

// See: https://www.korg.com/us/support/download/manual/0/733/4231/

/* eslint-disable no-bitwise,no-plusplus,function-paren-newline,no-param-reassign */
const INIT_PATCH_STRING =
  "UFJPR0luaXQgUHJvZ3JhbYAAgAD/AP8AAICAgIAAkJDpM4AApTIADCQAOCIGZgDIU0VRRLAEEAAANv//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==";
const INIT_PATCH = new Uint8Array(
  window
    .atob(INIT_PATCH_STRING)
    .split("")
    .map((c) => c.charCodeAt(0))
);

export const getPatchString = (decodedSysex) =>
  window.btoa(decodedSysex.map((code) => String.fromCharCode(code)).join(""));

/**
 * Program parameters.
 */
// Name
export const PROGRAM_NAME = 1;
// Drive Octave
export const DRIVE = 2;
export const KEYBOARD_OCTAVE = 3;
// VCO1
export const VCO1_PITCH = 4;
export const VCO1_SHAPE = 5;
export const VCO1_OCTAVE = 6;
export const VCO1_WAVE = 7;
// VCO2
export const VCO2_PITCH = 8;
export const VCO2_SHAPE = 9;
export const VCO2_OCTAVE = 10;
export const VCO2_WAVE = 11;
export const SYNC_RING = 12;
// mixer
export const VCO1_LEVEL = 13;
export const VCO2_LEVEL = 14;
// filter
export const CUTOFF = 15;
export const RESONANCE = 16;
// Envelope generator
export const EG_TYPE = 17;
export const EG_ATTACK = 18;
export const EG_DECAY = 19;
export const EG_INT = 20;
export const EG_TARGET = 21;
// LFO
export const LFO_TYPE = 22;
export const LFO_MODE = 23;
export const LFO_RATE = 24;
export const LFO_INT = 25;
export const LFO_TARGET = 26;

// SEQ
export const SEQ_TRIG = 27;

//  <+++ Edit mode +++>
// PORTAMENTO
export const PORTAMENTO_TIME = 28;
export const PORTAMENTO_MODE = 29;
export const SLIDE_TIME = 30;

// SLIDER FUNC
export const SLIDER_ASSIGN = 31;
export const SLIDER_RANGE = 32;
export const BEND_RANGE_POSITIVE = 33;
export const BEND_RANGE_NEGATIVE = 34;

// PITCH SETTINGS
export const MICRO_TUNING = 35;
export const SCALE_KEY = 36;
export const PROGRAM_TUNING = 37;

// It says that transpose is a global setting in the spec.
// But its in PITCH SETTINGS of the PROGRAM SETTINGS in the UI of the monologue.
export const TRANSPOSE = 38;

// OTHER
export const LFO_BPM_SYNC = 39;
export const CUTOFF_KEYBOARD_TRACK = 40;
export const CUTOFF_VELOCITY = 41;
export const AMP_VELOCITY = 42;
export const PROGRAM_LEVEL = 43;

/**
 * Parameter data types.
 */
const INTEGER = 0;
const STRING = 1;
const BYTES = 2;

export const PARAMETERS = [
  {
    parameter: PROGRAM_NAME,
    type: STRING,
    spec: {
      start: 4,
      end: 15,
    },
  },
  {
    parameter: VCO1_PITCH,
    type: INTEGER,
    spec: {
      upperByteOffset: 16,
      lowerByteOffset: 30,
      lowerBitsOffset: 0,
    },
  },
  {
    parameter: VCO1_SHAPE,
    type: INTEGER,
    spec: {
      upperByteOffset: 17,
      lowerByteOffset: 30,
      lowerBitsOffset: 2,
    },
  },
  {
    parameter: VCO2_PITCH,
    type: INTEGER,
    spec: {
      upperByteOffset: 18,
      lowerByteOffset: 31,
      lowerBitsOffset: 0,
    },
  },
  {
    parameter: VCO2_SHAPE,
    type: INTEGER,
    spec: {
      upperByteOffset: 19,
      lowerByteOffset: 31,
      lowerBitsOffset: 2,
    },
  },
  {
    parameter: VCO1_LEVEL,
    type: INTEGER,
    spec: {
      upperByteOffset: 20,
      lowerByteOffset: 33,
      lowerBitsOffset: 0,
    },
  },
  {
    parameter: VCO2_LEVEL,
    type: INTEGER,
    spec: {
      upperByteOffset: 21,
      lowerByteOffset: 33,
      lowerBitsOffset: 2,
    },
  },
  {
    parameter: CUTOFF,
    type: INTEGER,
    spec: {
      upperByteOffset: 22,
      lowerByteOffset: 33,
      lowerBitsOffset: 4,
    },
  },
  {
    parameter: RESONANCE,
    type: INTEGER,
    spec: {
      upperByteOffset: 23,
      lowerByteOffset: 33,
      lowerBitsOffset: 6,
    },
  },
  {
    parameter: DRIVE,
    type: INTEGER,
    spec: {
      upperByteOffset: 29,
      lowerByteOffset: 35,
      lowerBitsOffset: 6,
    },
  },
  {
    parameter: KEYBOARD_OCTAVE,
    type: INTEGER,
    spec: {
      lowerByteOffset: 32,
      lowerBitsOffset: 2,
      lowerBitsWidth: 3,
    },
  },
  {
    parameter: VCO1_OCTAVE,
    type: INTEGER,
    spec: {
      lowerByteOffset: 30,
      lowerBitsOffset: 4,
      lowerBitsWidth: 2,
    },
  },
  {
    parameter: VCO1_WAVE,
    type: INTEGER,
    spec: {
      lowerByteOffset: 30,
      lowerBitsOffset: 6,
      lowerBitsWidth: 2,
    },
  },
  {
    parameter: VCO1_OCTAVE,
    type: INTEGER,
    spec: {
      lowerByteOffset: 30,
      lowerBitsOffset: 4,
      lowerBitsWidth: 2,
    },
  },
  {
    parameter: VCO2_OCTAVE,
    type: INTEGER,
    spec: {
      lowerByteOffset: 31,
      lowerBitsOffset: 4,
      lowerBitsWidth: 2,
    },
  },
  {
    parameter: VCO2_WAVE,
    type: INTEGER,
    spec: {
      lowerByteOffset: 31,
      lowerBitsOffset: 6,
      lowerBitsWidth: 2,
    },
  },
  {
    parameter: SYNC_RING,
    type: INTEGER,
    spec: {
      lowerByteOffset: 32,
      lowerBitsOffset: 0,
      lowerBitsWidth: 2,
    },
  },
  {
    parameter: CUTOFF,
    type: INTEGER,
    spec: {
      upperByteOffset: 22,
      lowerByteOffset: 33,
      lowerBitsOffset: 4,
    },
  },
  {
    parameter: RESONANCE,
    type: INTEGER,
    spec: {
      upperByteOffset: 23,
      lowerByteOffset: 33,
      lowerBitsOffset: 6,
    },
  },
  {
    parameter: EG_TYPE,
    type: INTEGER,
    spec: {
      lowerByteOffset: 34,
      lowerBitsOffset: 0,
      lowerBitsWidth: 2,
    },
  },
  {
    parameter: EG_TARGET,
    type: INTEGER,
    spec: {
      lowerByteOffset: 34,
      lowerBitsOffset: 6,
      lowerBitsWidth: 2,
    },
  },
  {
    parameter: EG_ATTACK,
    type: INTEGER,
    spec: {
      upperByteOffset: 24,
      lowerByteOffset: 34,
      lowerBitsOffset: 2,
    },
  },
  {
    parameter: EG_DECAY,
    type: INTEGER,
    spec: {
      upperByteOffset: 25,
      lowerByteOffset: 34,
      lowerBitsOffset: 4,
    },
  },
  {
    parameter: EG_INT,
    type: INTEGER,
    spec: {
      upperByteOffset: 28,
      lowerByteOffset: 35,
      lowerBitsOffset: 0,
    },
  },
  {
    parameter: LFO_RATE,
    type: INTEGER,
    spec: {
      upperByteOffset: 27,
      lowerByteOffset: 35,
      lowerBitsOffset: 2,
    },
  },
  {
    parameter: LFO_INT,
    type: INTEGER,
    spec: {
      upperByteOffset: 27,
      lowerByteOffset: 35,
      lowerBitsOffset: 4,
    },
  },
  {
    parameter: LFO_TYPE,
    type: INTEGER,
    spec: {
      lowerByteOffset: 36,
      lowerBitsOffset: 0,
      lowerBitsWidth: 2,
    },
  },
  {
    parameter: LFO_MODE,
    type: INTEGER,
    spec: {
      lowerByteOffset: 36,
      lowerBitsOffset: 2,
      lowerBitsWidth: 2,
    },
  },
  {
    parameter: LFO_TARGET,
    type: INTEGER,
    spec: {
      lowerByteOffset: 36,
      lowerBitsOffset: 4,
      lowerBitsWidth: 2,
    },
  },
  {
    parameter: SEQ_TRIG,
    type: INTEGER,
    spec: {
      lowerByteOffset: 36,
      lowerBitsOffset: 6,
      lowerBitsWidth: 1,
    },
  },
  {
    parameter: PORTAMENTO_TIME,
    type: INTEGER,
    spec: {
      lowerByteOffset: 41,
      lowerBitsOffset: 0,
      lowerBitsWidth: 8,
    },
  },
  {
    parameter: PORTAMENTO_MODE,
    type: INTEGER,
    spec: {
      lowerByteOffset: 44,
      lowerBitsOffset: 0,
      lowerBitsWidth: 1,
    },
  },
  {
    parameter: SLIDE_TIME,
    type: INTEGER,
    spec: {
      lowerByteOffset: 40,
      lowerBitsOffset: 0,
      lowerBitsWidth: 8,
    },
  },
  {
    parameter: SLIDER_ASSIGN,
    type: INTEGER,
    spec: {
      lowerByteOffset: 42,
      lowerBitsOffset: 0,
      lowerBitsWidth: 8,
    },
  },
  {
    parameter: SLIDER_RANGE, // this param is hiding. Punch out two identical sysex dumps.
    // change nothing but this param
    // diff the two integer dumps
    // see where it lives...
    type: INTEGER,
    spec: {
      lowerByteOffset: 40,
      lowerBitsOffset: 0,
      lowerBitsWidth: 8,
    },
  },
  {
    parameter: BEND_RANGE_POSITIVE,
    type: INTEGER,
    spec: {
      lowerByteOffset: 43,
      lowerBitsOffset: 0,
      lowerBitsWidth: 4,
    },
  },
  {
    parameter: BEND_RANGE_NEGATIVE,
    type: INTEGER,
    spec: {
      lowerByteOffset: 43,
      lowerBitsOffset: 4,
      lowerBitsWidth: 4,
    },
  },
];

/**
 * A helper to pull out the bitWidth bits starting at bitOffset from the value byte
 */
const extractBits = (value, bitOffset, bitWidth) => {
  const mask = ((1 << bitWidth) - 1) << bitOffset;
  return (value & mask) >>> bitOffset;
};

/**
 * Parse an integer out of the data buffer.
 * @param {Uint8Array} data The program data buffer
 * @param {Object}
 * @returns {integer} The parsed integral value
 */
const decodeInteger = (
  data,
  {
    upperByteOffset = null,
    upperBitsOffset = 0,
    upperBitsWidth = 8,
    lowerByteOffset = null,
    lowerBitsOffset = 0,
    lowerBitsWidth = 2,
  }
) => {
  let value = 0;
  if (upperByteOffset !== null) {
    value = extractBits(data[upperByteOffset], upperBitsOffset, upperBitsWidth);
  }
  if (lowerByteOffset !== null) {
    const lower = extractBits(
      data[lowerByteOffset],
      lowerBitsOffset,
      lowerBitsWidth
    );
    value = (value << lowerBitsWidth) | lower;
  }
  return value;
};

/**
 * A helper to put the given bidWidth bits from byte value into the buffer in the
 * byte at offset, starting at bitOffset
 */
const packBits = (buffer, value, offset, bitOffset, bitWidth) => {
  const mask = (1 << bitWidth) - 1;
  buffer[offset] |= (value & mask) << bitOffset;
};

/**
 * Pack an integer value into the data buffer.
 * @param {Uint8Array} data The buffer to pack the data into
 * @param {integer} value The value to pack
 */
const encodeInteger = (
  buffer,
  value,
  {
    upperByteOffset = null,
    upperBitsOffset = 0,
    upperBitsWidth = 8,
    lowerByteOffset = null,
    lowerBitsOffset = 0,
    lowerBitsWidth = 2,
  }
) => {
  if (upperByteOffset !== null) {
    const shift = lowerByteOffset === null ? 0 : lowerBitsWidth;
    const highBits = value >>> shift;
    packBits(
      buffer,
      highBits,
      upperByteOffset,
      upperBitsOffset,
      upperBitsWidth
    );
  }
  if (lowerByteOffset !== null) {
    packBits(buffer, value, lowerByteOffset, lowerBitsOffset, lowerBitsWidth);
  }
};

/**
 * Pack a String object into a binary ASCII buffer.
 * @param {Uint8Array} buffer The data buffer to pack the string into
 * @param {String} value The string to pack
 * @param {integer} start The start offset of the packed string in data
 * @param {integer} end The end offset of the packed string in data
 */
const FILL_CHAR = "?".charCodeAt(0);
const encodeString = (buffer, value, start, end) => {
  value
    .split("")
    .slice(0, end - start + 1)
    .forEach((character, index) => {
      let charCode = character.charCodeAt(0);
      charCode = charCode <= 127 ? charCode : FILL_CHAR;
      buffer[start + index] = charCode;
    });
};

/**
 * Parse the motion slot parameters into an object.
 * @param {Uint8Array} data The program binary data
 * @param {Number} index The slot index. Must be an integer 0-3
 * @returns {Object} The parsed motion slot parameters
 */
const decodeMotionSlot = (data, index) => {
  const slotOffset = 112 + index * 2;
  return {
    motionOn: !!decodeInteger(data, {
      lowerByteOffset: slotOffset,
      lowerBitsWidth: 1,
    }),
    smoothOn: !!decodeInteger(data, {
      lowerByteOffset: slotOffset,
      lowerBitsWidth: 1,
      lowerBitsOffset: 1,
    }),
    parameterId: decodeInteger(data, {
      lowerByteOffset: slotOffset + 1,
      lowerBitsWidth: 8,
    }),
  };
};

const computeStepOffset = (stepIndex) => 128 + stepIndex * 20;

/**
 * Parse the note data into an object.
 * @param {Uint8Array} data The program binary data
 * @param {Number} stepIndex The step index. Must be an integer 0-15
 * @param {Number} noteIndex The note index. Must be an integer 0-3
 * @returns {Object} The parsed note data object.
 */
const decodeNote = (data, stepIndex, noteIndex) => {
  const stepOffset = computeStepOffset(stepIndex);
  const noteOffset = stepOffset + noteIndex;
  return {
    note: decodeInteger(data, {
      lowerByteOffset: noteOffset,
      lowerBitsWidth: 7,
    }),
    velocity: decodeInteger(data, {
      lowerByteOffset: noteOffset + 4,
      lowerBitsWidth: 7,
    }),
    gateTime: decodeInteger(data, {
      lowerByteOffset: noteOffset + 8,
      lowerBitsWidth: 7,
    }),
    triggerSwitch: decodeInteger(data, {
      lowerByteOffset: noteOffset + 8,
      lowerBitsWidth: 1,
      lowerBitsOffset: 7,
    }),
  };
};

/**
 * Parse the motion slot data into an array.
 * @param {Uint8Array} data The program binary data
 * @param {Number} stepIndex The step index. Must be an integer 0-15
 * @param {Number} motionIndex The motion parameter index. Must be an integer 0-3
 * @returns {Array} The array of the two data bytes
 */
const decodeMotionData = (data, stepIndex, motionIndex) => {
  const stepOffset = computeStepOffset(stepIndex);
  const motionOffset = stepOffset + 12 + motionIndex * 2;
  return [...data.slice(motionOffset, motionOffset + 2)];
};

/**
 * Parse the sequence step into an object.
 * @param {Uint8Array} data The program binary data
 * @param {Number} index The step index. Must be an integer 0-15
 * @returns {Object} The parsed sequence step object
 */
const decodeStep = (data, index) => ({
  on: !!decodeInteger(data, {
    lowerByteOffset: 108 + (index >= 8 ? 1 : 0),
    lowerBitsWidth: 1,
    lowerBitsOffset: index % 8,
  }),
  motionOn: Array.from({ length: 4 }, (_, motionIndex) =>
    decodeInteger(data, {
      lowerByteOffset: 120 + motionIndex * 2 + (index > 8 ? 1 : 0),
      lowerBitsWidth: 1,
      lowerBitsOffset: index % 8,
    })
  ),
  notes: Array.from({ length: 4 }, (_, noteIndex) =>
    decodeNote(data, index, noteIndex)
  ),
  motions: Array.from({ length: 4 }, (_, motionIndex) =>
    decodeMotionData(data, index, motionIndex)
  ),
  switch: !!decodeInteger(data, {
    lowerByteOffset: 110 + (index >= 8 ? 1 : 0),
    lowerBitsWidth: 1,
    lowerBitsOffset: index % 8,
  }),
});

/**
 * Parse the sequence data from the binary format into an object.
 * @param {Uint8Array} data
 * @returns {Object} The parsed sequence
 */
const decodeSequence = (data) => ({
  motionSlots: Array.from({ length: 4 }, (_, index) =>
    decodeMotionSlot(data, index)
  ),
  steps: Array.from({ length: 16 }, (_, index) => decodeStep(data, index)),
});

/**
 * Encodes the motion slot parameters to the binary program data buffer.
 * @param {Object} motionSlot The motion slot object
 * @param {Number} index The index of the motion slot
 * @param {Uint8Array} buffer The encoded binary program data buffer to encode the sequence to.
 */
const encodeMotionSlot = (motionSlot, index, buffer) => {
  const slotOffset = 112 + index * 2;
  encodeInteger(buffer, motionSlot.motionOn ? 1 : 0, {
    lowerByteOffset: slotOffset,
    lowerBitsWidth: 1,
  });
  encodeInteger(buffer, motionSlot.smoothOn ? 1 : 0, {
    lowerByteOffset: slotOffset,
    lowerBitsWidth: 1,
    lowerBitsOffset: 2,
  });
  encodeInteger(buffer, motionSlot.parameterId, {
    lowerByteOffset: slotOffset + 1,
    lowerBitsWidth: 8,
  });
};

/**
 * Encodes the note object structure to the binary program data buffer.
 * @param {Object} note The note data structure.
 * @param {Number} stepIndex The step sequence index the note belongs to. Must be an integer 0-15
 * @param {Number} noteIndex The note index in the step. Must be an integer 0-3
 * @param {Uint8Array} buffer The encoded binary program data buffer to encode the sequence to.
 */
const encodeNote = (note, stepIndex, noteIndex, buffer) => {
  const stepOffset = computeStepOffset(stepIndex);
  const noteOffset = stepOffset + noteIndex;
  encodeInteger(buffer, note.note, {
    lowerByteOffset: noteOffset,
    lowerBitsWidth: 7,
  });
  encodeInteger(buffer, note.velocity, {
    lowerByteOffset: noteOffset + 4,
    lowerBitsWidth: 7,
  });
  encodeInteger(buffer, note.gateTime, {
    lowerByteOffset: noteOffset + 8,
    lowerBitsWidth: 7,
  });
  encodeInteger(buffer, note.triggerSwitch, {
    lowerByteOffset: noteOffset + 8,
    lowerBitsWidth: 1,
    lowerBitsOffset: 7,
  });
};

/**
 * Encodes the motion data to the binary program data buffer.
 * @param {Array} motionData The motion data 2-byte array.
 * @param {Number} stepIndex The step sequence index the motion data belongs to. Must be an
 * integer 0-15
 * @param {Number} motionIndex The motion slot index the motion data belongs to. Must be an
 * integer 0-3
 * @param {Uint8Array} buffer The encoded binary program data buffer to encode the sequence to.
 */
const encodeMotionData = (motionData, stepIndex, motionIndex, buffer) => {
  const stepOffset = computeStepOffset(stepIndex);
  const motionOffset = stepOffset + 12 + motionIndex * 2;
  const [first, second] = motionData;
  buffer[motionOffset] = first;
  buffer[motionOffset + 1] = second;
};

/**
 * Encodes the step object structure to the binary program data buffer.
 * @param {Object} step The step data structure.
 * @param {Number} index The step sequence index for the step. Must be an integer 0-15
 * @param {Uint8Array} buffer The encoded binary program data buffer to encode the sequence to.
 */
const encodeStep = (step, index, buffer) => {
  encodeInteger(buffer, step.on ? 1 : 0, {
    lowerByteOffset: 108 + (index >= 8 ? 1 : 0),
    lowerBitsWidth: 1,
    lowerBitsOffset: index % 8,
  });
  encodeInteger(buffer, step.switch ? 1 : 0, {
    lowerByteOffset: 110 + (index >= 8 ? 1 : 0),
    lowerBitsWidth: 1,
    lowerBitsOffset: index % 8,
  });
  step.motionOn.forEach((motion, motionIndex) => {
    encodeInteger(buffer, step.motionOn[motionIndex] ? 1 : 0, {
      lowerByteOffset: 120 + motionIndex * 2 + (index >= 8 ? 1 : 0),
      lowerBitsWidth: 1,
      lowerBitsOffset: index % 8,
    });
  });
  step.notes.forEach((note, noteIndex) =>
    encodeNote(note, index, noteIndex, buffer)
  );
  step.motions.forEach((motion, motionIndex) =>
    encodeMotionData(motion, index, motionIndex, buffer)
  );
};

/**
 * Encodes the sequence object structure to the binary program data buffer.
 * @param {Object} sequence The sequence data structure.
 * @param {Uint8Array} buffer The encoded binary program data buffer to encode the sequence to.
 */
const encodeSequence = (sequence, buffer) => {
  sequence.motionSlots.forEach((motionSlot, index) =>
    encodeMotionSlot(motionSlot, index, buffer)
  );
  sequence.steps.forEach((step, index) => encodeStep(step, index, buffer));
};

/**
 * Parse a minilogue program from the binary format into an object.
 * @param {Uint8Array} data
 * @returns {Object} The parsed Minilogue program
 */
const decodeProgram = (data) => {
  const parsed = {};
  PARAMETERS.forEach(({ parameter, type, spec }) => {
    let value = null;
    switch (type) {
      case INTEGER: {
        value = decodeInteger(data, spec);
        break;
      }
      case STRING: {
        const { start: stringStart, end: stringEnd } = spec;
        const stringBytes = data.slice(stringStart, stringEnd + 1);
        value = String.fromCharCode.apply(null, stringBytes);
        break;
      }
      case BYTES: {
        const { start: bytesStart, end: bytesEnd } = spec;
        value = data.slice(bytesStart, bytesEnd + 1);
        break;
      }
      default:
        break;
      }
      parsed[parameter] = value;
  });
  parsed["sequence"] = decodeSequence(data);
  return parsed;
};

/**
 * Encode a minilogue program into the binary program data format.
 * @param {Object} program The program object
 * @returns {Uint8Array} The program encoded in binary program data format
 */
const encodeProgram = (program) => {
  const encoded = new Uint8Array(448);
  // Add the expected sentinel strings
  encodeString(encoded, "PROG", 0, 3);
  encodeString(encoded, "SEQD", 96, 99);
  PARAMETERS.forEach(({ parameter, type, spec }) => {
    const value = program[parameter];
    switch (type) {
      case INTEGER: {
        encodeInteger(encoded, value, spec);
        break;
      }
      case STRING: {
        const { start: stringStart, end: stringEnd } = spec;
        encodeString(encoded, value, stringStart, stringEnd);
        break;
      }
      case BYTES: {
        const { start: bytesStart, end: bytesEnd } = spec;
        for (let i = bytesStart; i <= bytesEnd; i++) {
          encoded[i] = value[i - bytesStart];
        }
        break;
      }
      default:
        break;
    }
  });
  encodeSequence(program.sequence, encoded);
  return encoded;
};

const INIT_PROGRAM = decodeProgram(INIT_PATCH);

export { encodeProgram, decodeProgram, INIT_PATCH, INIT_PROGRAM };
