import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import ts from "typescript";

// Reuse public identity, job metadata and stages; load focused résumé wording.
function readContent(filename) {
  const source = fs.readFileSync(filename, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const exports = {};
  new Function("exports", compiled)(exports);
  return exports;
}

const data = {
  ...readContent("src/content/portfolio.ts"),
  ...readContent("src/content/resume.ts"),
};
const python = process.env.PORTFOLIO_PYTHON || "python";
const result = spawnSync(python, [path.resolve("scripts/generate_resumes.py")], {
  input: JSON.stringify(data), encoding: "utf8", stdio: ["pipe", "pipe", "inherit"],
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status || 1);
process.stdout.write(result.stdout);
