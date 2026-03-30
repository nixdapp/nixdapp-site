import { rmSync, existsSync } from "fs";
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const dir = dirname(fileURLToPath(import.meta.url));
const root = join(dir, "..");
const nextDir = join(root, ".next");

if (existsSync(nextDir)) {
  rmSync(nextDir, { recursive: true, force: true });
  console.log("Cleared .next cache");
}

const child = spawn("npx", ["next", "dev"], { cwd: root, stdio: "inherit" });
child.on("exit", (code) => process.exit(code ?? 0));
