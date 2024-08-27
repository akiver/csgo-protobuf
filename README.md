## csgo-protobuf

CS2 protobuf messages for JavaScript.

### Installation

`npm install csgo-protobuf`

### Example

```js
import fs from "fs";
import { fromBinary, CDataGCCStrike15_v2_MatchInfo } from "csgo-protobuf";

// Read a CDataGCCStrike15_v2_MatchInfo protobuf message from a CS2 ".info" file.
fs.readFile("./sample.info", (error, bytes) => {
  if (error) {
    console.error(error);
    return;
  }

  const matchInfo = fromBinary(CDataGCCStrike15_v2_MatchInfo, bytes);
  console.log(matchInfo);
});
```

# License

[MIT](https://github.com/akiver/csgo-protobuf/blob/main/LICENSE)
