import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const TARGET_MODELS = {
  "7-series": "7",
  "3-series": "3",
  "5-series": "5",
  x3: "X3",
  x5: "X5",
  x7: "X7",
  i4: "i4",
  ix: "iX",
  m8: "M8",
  "4-series": "4",
  z4: "Z4",
  m3: "M3",
  m5: "M5",
};

const decodeEntities = (value) =>
  value
    .replaceAll("&#34;", '"')
    .replaceAll("&quot;", '"')
    .replaceAll("&amp;", "&")
    .replaceAll("&#37;", "%")
    .replaceAll("&#x25;", "%");

const headers = { "user-agent": "Mozilla/5.0 (compatible; image asset optimizer)" };
const catalogResponse = await fetch("https://www.bmwusa.com/vehicles.html", {
  headers,
  redirect: "follow",
});
if (!catalogResponse.ok) throw new Error(`BMW catalog ${catalogResponse.status}`);
const html = await catalogResponse.text();

const cards = [];
for (const match of html.matchAll(/data-model-navigation-cards="([^"]+)"/gi)) {
  try {
    const parsed = JSON.parse(decodeEntities(match[1]));
    cards.push(...parsed);
  } catch {}
}

const uniqueCards = new Map();
for (const card of cards) {
  if (card?.name && !uniqueCards.has(card.name)) uniqueCards.set(card.name, card);
}

const outputDir = path.join(process.cwd(), "public", "assets", "cars", "official");
await fs.mkdir(outputDir, { recursive: true });
const results = [];

for (const [id, modelName] of Object.entries(TARGET_MODELS)) {
  try {
    const card = uniqueCards.get(modelName);
    const sourceUrl = decodeEntities(card?.cosyImageData?.source?.url ?? "");
    if (!sourceUrl) throw new Error(`model card not found (${modelName})`);

    const imageResponse = await fetch(sourceUrl, { headers, redirect: "follow" });
    if (!imageResponse.ok) throw new Error(`image ${imageResponse.status}`);
    const input = Buffer.from(await imageResponse.arrayBuffer());
    const outputPath = path.join(outputDir, `${id}.webp`);

    await sharp(input)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: false, kernel: sharp.kernel.lanczos3 })
      .sharpen({ sigma: 0.65, m1: 0.45, m2: 1.1 })
      .webp({ quality: 90, effort: 5 })
      .toFile(outputPath);

    const metadata = await sharp(outputPath).metadata();
    results.push({ id, ok: true, width: metadata.width, height: metadata.height });
  } catch (error) {
    results.push({ id, ok: false, error: error.message });
  }
}

process.stdout.write(`${JSON.stringify({ available: [...uniqueCards.keys()], results }, null, 2)}\n`);
