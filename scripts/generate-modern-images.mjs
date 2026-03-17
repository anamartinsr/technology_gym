import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public");
const outputDir = path.join(publicDir, "optimized");

const images = [
  "home.png",
  "iconScroll.png",
  "tecnologyScroll.png",
  "gymfacade.jpg",
  "zumba.jpg",
  "crossfit.jpg",
  "yoga.jpg",
  "weigths.jpg",
  "swimming.jpg",
];

await fs.mkdir(outputDir, { recursive: true });

for (const relativeFile of images) {
  const sourcePath = path.join(publicDir, relativeFile);
  const parsed = path.parse(relativeFile);
  const outputBase = path.join(outputDir, parsed.name);

  await sharp(sourcePath).webp({ quality: 82 }).toFile(`${outputBase}.webp`);

  await sharp(sourcePath).avif({ quality: 55 }).toFile(`${outputBase}.avif`);
}

console.log(`Modern image variants generated in ${outputDir}`);
