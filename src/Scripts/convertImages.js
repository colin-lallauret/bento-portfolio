import fs from "fs-extra";
import path from "path";
import sharp from "sharp";

const inputDir = "src/Assets";
const outputDir = "public/images";

async function convertImages() {
  await fs.ensureDir(outputDir);
  const files = await fs.readdir(inputDir);

  for (const file of files) {
    const ext = path.extname(file);
    if (![".jpg", ".png"].includes(ext)) continue;

    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, path.basename(file, ext) + ".webp");

    await sharp(inputPath).toFormat("webp").toFile(outputPath);
    console.log(`✅ ${file} -> ${outputPath}`);
  }
}

convertImages();
