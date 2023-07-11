const cors = require("cors");

const express = require("express");
const { generate } = require("./generate");
const app = express();
const port = 1702;

app.use(cors());

app.get("/", async (req, res) => {
  (await generate(req.query.name)).pipe(res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
