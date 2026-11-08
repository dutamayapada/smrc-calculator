
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Kalkulator berhasil dijalankan!");
  console.log("Buka http://localhost:3000");
});
