import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The lift mirror caught me mid-yawn, and for a second I apologised to a stranger who turned out to be me.";

// Gate panjang teks (bounty: 1..200 karakter). Dihitung dalam code points
// ([...LINE].length) agar karakter multi-byte seperti em dash dihitung benar.
// Fail-fast: bila di luar gate, gagal sebelum menulis file output.
const MAX_LENGTH = 200;
const length = [...LINE].length;
if (length < 1 || length > MAX_LENGTH) {
  console.error(
    `entry length ${length} is outside the allowed range 1..${MAX_LENGTH}`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
