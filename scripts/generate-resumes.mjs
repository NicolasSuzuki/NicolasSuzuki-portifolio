import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import ts from "typescript";

// Use the same public content as the website; no separate résumé data to drift.
const source = fs.readFileSync("src/content/portfolio.ts", "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const data = {};
new Function("exports", compiled)(data);
const python = process.env.PORTFOLIO_PYTHON || "python";
const result = spawnSync(python, [path.resolve("scripts/generate_resumes.py")], {
  input: JSON.stringify(data), encoding: "utf8", stdio: ["pipe", "pipe", "inherit"],
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status || 1);
process.stdout.write(result.stdout);
