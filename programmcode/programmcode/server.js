const express = require('express');
const app = express();
const port = 2800;

app.use(express.static("template"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
console.log("Is this executed?");

