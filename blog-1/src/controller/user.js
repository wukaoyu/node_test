const { exec } = require("../db/mysql");

const loginCheck = (username, passoword) => {
    let sql = `select realname,username from users where username='${username}' and password='${passoword}'`;

    return exec(sql).then(rows => {
        return rows[0] || {}
    })
}

module.exports = loginCheck