const cors = require("cors");

const express = require("express");
const { generate } = require("./generate");
const app = express();
const port = 1702;

app.use(cors());

app.get("/", async (req, res) => {
  res.setHeader("Content-Type", "application/pdf");
  (await generate(req.query.name)).pipe(res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
