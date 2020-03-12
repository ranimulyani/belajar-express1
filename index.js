const express = require("express");
const app = express();

const port = 3000;

// router
app.get("/", function(req, res) {
  res.send("Hai");
});

app.listen(port, function() {
  console.log(`Hai aplikasi kamu sudah berjalan di port ${port}`);
});
