const mysql = require("mysql");
function db(sql,callback){
    const conn = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"test"
    })
    conn.connect();

    let result1 = null;
    conn.query(sql,callback);
    

    conn.end();
}

// db("select * from hh",(err,result)=>{
//     if(err) throw err;
//     console.log(result)
// });

module.exports = db;

