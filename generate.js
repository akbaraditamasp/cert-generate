const sharp = require("sharp");
const imgToPDF = require("image-to-pdf");

async function generate(name) {
  const cert = await sharp("base.png")
    .composite([
      {
        input: {
          text: {
            text: '<span foreground="#3576C6">' + name + "</span>",
            dpi: 480,
            rgba: true,
            font: "Squada One",
            fontfile: "./squada.ttf",
          },
        },
        top: 520,
        left: 731,
      },
    ])
    .png({ quality: 100 })
    .toBuffer();

  return imgToPDF([cert], [841.89, 595.28]);
}

async function generatePanitia(name) {
  const text = sharp({
    text: {
      text: '<span foreground="#002B59"><b>' + name + "</b></span>",
      dpi: 490,
      rgba: true,
      font: "League Spartan",
      fontfile: "./spartan.ttf",
    },
  });

  const cert = await sharp("base-panitia.png")
    .composite([
      {
        input: await text.png().toBuffer(),
        top: 420,
        left: Math.floor(1719 / 2 - (await text.metadata()).width / 2),
      },
    ])
    .png({ quality: 100 })
    .toBuffer();

  return imgToPDF([cert], [841.89, 595.28]);
}

module.exports = { generate, generatePanitia };
