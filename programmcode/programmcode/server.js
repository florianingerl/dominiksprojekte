const express = require('express');
const sqlite3db = require('./my_modules/sqlite3db.js');
const app = express();
const port = 2800;



app.use(express.static("template"));

app.get('/showfotos', (req, res) => {
  sqlite3db.getAllFotos( (rows) => {
    res.json(rows);
});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
console.log("Is this executed?");

