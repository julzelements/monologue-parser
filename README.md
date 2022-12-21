There are 3 states of transformation: 
* encodedSysex: This has bytes with leading zeros. It has the header and final byte intact
* decodedSysex: This has the headers and final msg byte removed. It has been transformed from 7 bit bytes to 8 bit bytes.
* Program: This has been parsed into human readable parameters.


So far I've started re-writing the program to decode the monologue instead of the minilogue.

I'm not sure that I will deal with the sequencer data just yet.

But I would like to decode all of the visible data. 

Then I would like to decode all of the hidden menu diving data.