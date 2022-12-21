# TEST_PATCH_0_DATA
This is directly from the sysex dump. transformed from 7bit to 8bit and with the headers and final byte trimmed.
Sample: 
```
[80,82,79,71,84,101,115,116,32,80,97,116,99...
...
...,0]
```

# TEST_PATCH_0_STRING

This is the PATCH_DATA parsed into characters and joined: `(code) => String.fromCharCode(code).join('')`
```
[80,82,79,71,84,101,115,116,32,80,97,116,99] => ['P', 'R', 'O', 'G', 'T', 'e', 's', 't', ' ', 'P', 'a', 't', 'c'] => 'PROGTest Patc'
```
Then base64 encoded: `Buffer.from(str, 'binary').toString("base64")`

(Maybe it should be output from the MonologueLibrarian as 'binary' `Buffer.from(str, 'binary').toString("base64")`. But it is not atm.)
