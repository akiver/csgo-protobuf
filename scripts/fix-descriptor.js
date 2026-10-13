// Valve's descriptor.proto adds custom fields whose numbers collide with upstream protobuf fields
// (FileOptions.features = 50, FieldOptions.edition_defaults = 20, FieldOptions.features = 21), which makes protoc fail.
// Move them to unused field numbers so the dumped .proto files compile as-is.
import fs from 'node:fs';

const descriptorPath = new URL('../protobuf/google/protobuf/descriptor.proto', import.meta.url);

const renumbering = [
  ['repeated string additional_includes', 50, 900],
  ['optional string boxed_type', 20, 901],
  ['optional string synthetic_default', 21, 902],
];

let content = fs.readFileSync(descriptorPath, 'utf8');
for (const [field, from, to] of renumbering) {
  content = content.replace(`${field} = ${from};`, `${field} = ${to};`);
}
fs.writeFileSync(descriptorPath, content);
