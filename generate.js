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

module.exports = { generate };
