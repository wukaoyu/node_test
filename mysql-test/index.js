const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "7777",
    port: "3306",
    database: "node_blog"
})





con.connect()

const sql = "select * from users"
con.query(sql, (err, result) => {
    if  (err) {
        console.log(err);
        return
    }

    console.log(result)
})

con.end()