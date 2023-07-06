const sqlite3db = require("./my_modules/sqlite3db.js");

sqlite3db.getAllFotos( (rows) => {
    rows.forEach( (row) => {
        console.log("Name des Fotos: " + row.fotoname);
    } );
});