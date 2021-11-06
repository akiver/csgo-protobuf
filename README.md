## csgo-protobuf

CSGO protobuf messages for JavaScript.

### Installation

`npm install csgo-protobuf`

### Example

```js
import fs from "fs";
import { CDataGCCStrike15_v2_MatchInfo } from "csgo-protobuf";

// Read a CDataGCCStrike15_v2_MatchInfo protobuf message from a CSGO ".info" file.
fs.readFile("./sample.info", (error, bytes) => {
  if (error) {
    console.error(error);
    return;
  }

  const matchInfo = CDataGCCStrike15_v2_MatchInfo.fromBinary(bytes);
  console.log(matchInfo);
});
```

# License

[GPL v2](https://github.com/akiver/csgo-protobuf/blob/master/LICENSE)
