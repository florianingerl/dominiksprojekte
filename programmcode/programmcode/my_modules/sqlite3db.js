const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./fotos.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    else {
        console.log('Connected to the database.');
    }
});


let getAllFotos = function( callback ){
    db.all("select * from fotos", [], (err, rows) => {
        if (err) {
          throw err;
        }
        callback(rows)
      });
};



module.exports = {
    getAllFotos

};