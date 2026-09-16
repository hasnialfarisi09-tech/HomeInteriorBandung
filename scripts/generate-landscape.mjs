import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const svgDark = `
<svg width="840" height="180" viewBox="0 0 420 90" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- House Mark on Left -->
  <g transform="translate(6, 6)">
    <!-- Chimney -->
    <path d="M20 32V16C20 12 23 9 27 9C31 9 34 12 34 16V22" fill="#f0ff46" stroke="#1b12d6" stroke-width="4.5" stroke-linejoin="round" stroke-linecap="round"/>
    <!-- Roof with symmetrical slopes -->
    <path d="M4 42L44 10L84 42H69L44 22L19 42H4Z" fill="#f0ff46" stroke="#1b12d6" stroke-width="4.5" stroke-linejoin="round"/>
    <!-- Left bracket / house base -->
    <path d="M19 42V72H48V63H29V42H19Z" fill="#f0ff46" stroke="#1b12d6" stroke-width="4.5" stroke-linejoin="round"/>
  </g>

  <!-- Typography on Right -->
  <g transform="translate(104, 0)">
    <!-- HOME -->
    <text x="0" y="35" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#1b12d6" letter-spacing="1">HOME</text>
    <!-- INTERIOR -->
    <text x="0" y="60" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="24" font-weight="900" fill="#f0ff46" stroke="#1b12d6" stroke-width="1.8" paint-order="stroke fill" letter-spacing="2">INTERIOR</text>
    <!-- BANDUNG -->
    <text x="1" y="80" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="18" font-weight="900" fill="#ff0011" letter-spacing="3.5">BANDUNG</text>
  </g>
</svg>
`;

const svgLight = `
<svg width="840" height="180" viewBox="0 0 420 90" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- House Mark on Left -->
  <g transform="translate(6, 6)">
    <!-- Chimney -->
    <path d="M20 32V16C20 12 23 9 27 9C31 9 34 12 34 16V22" fill="#f0ff46" stroke="#ffffff" stroke-width="4.5" stroke-linejoin="round" stroke-linecap="round"/>
    <!-- Roof with symmetrical slopes -->
    <path d="M4 42L44 10L84 42H69L44 22L19 42H4Z" fill="#f0ff46" stroke="#ffffff" stroke-width="4.5" stroke-linejoin="round"/>
    <!-- Left bracket / house base -->
    <path d="M19 42V72H48V63H29V42H19Z" fill="#f0ff46" stroke="#ffffff" stroke-width="4.5" stroke-linejoin="round"/>
  </g>

  <!-- Typography on Right -->
  <g transform="translate(104, 0)">
    <!-- HOME -->
    <text x="0" y="35" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#ffffff" letter-spacing="1">HOME</text>
    <!-- INTERIOR -->
    <text x="0" y="60" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="24" font-weight="900" fill="#f0ff46" stroke="#ffffff" stroke-width="1.8" paint-order="stroke fill" letter-spacing="2">INTERIOR</text>
    <!-- BANDUNG -->
    <text x="1" y="80" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="18" font-weight="900" fill="#ff2233" letter-spacing="3.5">BANDUNG</text>
  </g>
</svg>
`;

async function main() {
  const darkPath = path.resolve(__dirname, "../public/logo/hib-landscape-dark.png");
  const lightPath = path.resolve(__dirname, "../public/logo/hib-landscape-light.png");

  await sharp(Buffer.from(svgDark)).trim().extend({ top: 4, bottom: 4, left: 4, right: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(darkPath);
  await sharp(Buffer.from(svgLight)).trim().extend({ top: 4, bottom: 4, left: 4, right: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(lightPath);
  console.log("Done generating landscape logo PNGs with perfect trim and padding");
}

main().catch(console.error);
