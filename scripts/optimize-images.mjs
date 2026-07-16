import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const walk = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }
    if (!entry.isFile()) continue;
    files.push(fullPath);
  }

  return files;
};

const getTargetWidth = (filePath) => {
  const normalized = filePath.split(path.sep).join("/");
  if (normalized.includes("/public/assets/cars/")) return 1200;
  if (normalized.includes("/public/assets/media/")) return 1920;
  if (normalized.includes("/public/assets/brand/")) return 800;
  return 1200;
};

const main = async () => {
  const enhanceCatalog = process.argv.includes("--enhance-catalog");
  const assetsDir = path.join(process.cwd(), "public", "assets");
  const allFiles = await walk(assetsDir);

  const sourceFiles = allFiles.filter((filePath) =>
    /\.(png|jpe?g)$/i.test(filePath),
  );

  let converted = 0;
  let skipped = 0;
  let failed = 0;

  for (const inputPath of sourceFiles) {
    const outputPath = inputPath.replace(/\.(png|jpe?g)$/i, ".webp");

    const isCatalogImage = inputPath
      .split(path.sep)
      .join("/")
      .includes("/public/assets/cars/");

    if (!(enhanceCatalog && isCatalogImage)) {
      try {
        await fs.access(outputPath);
        skipped += 1;
        continue;
      } catch {}
    }

    try {
      const width = getTargetWidth(inputPath);

      let pipeline = sharp(inputPath)
        .rotate()
        .resize({
          width,
          withoutEnlargement: !enhanceCatalog,
          kernel: sharp.kernel.lanczos3,
        });

      if (enhanceCatalog && isCatalogImage) {
        pipeline = pipeline
          .modulate({ saturation: 1.04 })
          .sharpen({ sigma: 0.8, m1: 0.7, m2: 1.5 });
      }

      await pipeline
        .webp({ quality: enhanceCatalog && isCatalogImage ? 86 : 75 })
        .toFile(outputPath);

      converted += 1;
    } catch {
      failed += 1;
    }
  }

  process.stdout.write(
    JSON.stringify(
      { scanned: sourceFiles.length, converted, skipped, failed },
      null,
      2,
    ) + "\n",
  );
};

await main();
