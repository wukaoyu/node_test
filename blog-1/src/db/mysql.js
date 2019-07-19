const mysql = require("mysql");
const { MYSQL_CONF } = require("../conf/db");

//链接数据库
const con = mysql.createConnection(MYSQL_CONF);

con.connect();

function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if  (err) {
                reject(err);
                return
            }
            resolve(result)
        })
    })
    return promise;
}

module.exports = exec