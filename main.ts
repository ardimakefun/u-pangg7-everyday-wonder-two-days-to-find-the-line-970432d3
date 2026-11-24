import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The lift mirror caught me mid-yawn, and for a second I apologised to a stranger who turned out to be me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
