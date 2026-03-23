import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { extname, join } from "node:path";

const ROOT = process.cwd();
const TARGET_FOLDERS = ["src", "public", "scripts"];
const TARGET_FILES = [
  "index.html",
  "vite.config.ts",
  "vercel.json",
  "package.json",
];
const ALLOWED_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".json",
  ".html",
  ".css",
]);

const DIRECT_SECRET_PATTERNS = [
  {
    label: "Private key material",
    regex: /-----BEGIN (RSA|EC|OPENSSH|DSA|PRIVATE) KEY-----/g,
  },
  {
    label: "AWS access key",
    regex: /\bAKIA[0-9A-Z]{16}\b/g,
  },
  {
    label: "GitHub token",
    regex: /\bghp_[A-Za-z0-9]{36}\b/g,
  },
  {
    label: "Google API key",
    regex: /\bAIza[0-9A-Za-z\-_]{35}\b/g,
  },
  {
    label: "Stripe secret key",
    regex: /\bsk_(live|test)_[0-9a-zA-Z]{16,}\b/g,
  },
  {
    label: "Hardcoded secret-like assignment",
    regex:
      /(?:api[_-]?key|secret|token|password)\s*[:=]\s*["'`][^"'`\n]{12,}["'`]/gi,
  },
];

const SENSITIVE_VITE_ENV_USAGE =
  /import\.meta\.env\.(VITE_[A-Z0-9_]*(?:SECRET|TOKEN|PASSWORD|PRIVATE|API_KEY|KEY)[A-Z0-9_]*)/g;

function walkDirectory(dirPath, acc) {
  const entries = readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    if (
      entry.name === "node_modules" ||
      entry.name === "dist" ||
      entry.name === ".git"
    ) {
      continue;
    }

    const fullPath = join(dirPath, entry.name);

    if (entry.isDirectory()) {
      walkDirectory(fullPath, acc);
      continue;
    }

    if (!entry.isFile()) continue;

    const extension = extname(entry.name);
    if (ALLOWED_EXTENSIONS.has(extension)) {
      acc.push(fullPath);
    }
  }
}

function collectFiles() {
  const files = [];

  for (const folder of TARGET_FOLDERS) {
    const folderPath = join(ROOT, folder);
    if (!existsSync(folderPath)) continue;
    if (statSync(folderPath).isDirectory()) {
      walkDirectory(folderPath, files);
    }
  }

  for (const file of TARGET_FILES) {
    const filePath = join(ROOT, file);
    if (existsSync(filePath) && statSync(filePath).isFile()) {
      files.push(filePath);
    }
  }

  const envEntries = readdirSync(ROOT, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.startsWith(".env"))
    .map((entry) => join(ROOT, entry.name));

  files.push(...envEntries);

  return [...new Set(files)];
}

function getLineFromIndex(content, index) {
  return content.slice(0, index).split("\n").length;
}

function relativePath(filePath) {
  return filePath.replace(`${ROOT}\\`, "").replaceAll("\\", "/");
}

function main() {
  const files = collectFiles();
  const findings = [];

  for (const filePath of files) {
    const content = readFileSync(filePath, "utf8");

    for (const pattern of DIRECT_SECRET_PATTERNS) {
      const regex = new RegExp(pattern.regex.source, pattern.regex.flags);
      for (const match of content.matchAll(regex)) {
        const index = match.index ?? 0;
        findings.push({
          file: relativePath(filePath),
          line: getLineFromIndex(content, index),
          reason: pattern.label,
          excerpt: match[0].slice(0, 120),
        });
      }
    }

    for (const match of content.matchAll(SENSITIVE_VITE_ENV_USAGE)) {
      const index = match.index ?? 0;
      findings.push({
        file: relativePath(filePath),
        line: getLineFromIndex(content, index),
        reason: "Sensitive `VITE_*` env variable used in frontend",
        excerpt: match[1],
      });
    }

    if (filePath.endsWith(".env") || /\.env\./.test(filePath)) {
      const lines = content.split("\n");

      lines.forEach((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) return;

        const key = trimmed.split("=")[0]?.trim() ?? "";
        if (!key.startsWith("VITE_")) return;

        if (/(SECRET|TOKEN|PASSWORD|PRIVATE|API_KEY|KEY)/i.test(key)) {
          findings.push({
            file: relativePath(filePath),
            line: idx + 1,
            reason: "Sensitive key name exposed via `VITE_*`",
            excerpt: key,
          });
        }
      });
    }
  }

  if (findings.length > 0) {
    console.error(
      "\n Possible secret exposure detected in frontend-visible files:\n",
    );
    for (const finding of findings) {
      console.error(
        `- ${finding.file}:${finding.line} | ${finding.reason} | ${finding.excerpt}`,
      );
    }
    console.error(
      "\nSecurity check failed. Remove secret-like values or move them to secure backend storage.",
    );
    process.exit(1);
  }

  console.log(" No obvious secret exposure detected in client-side files.");
}

main();
