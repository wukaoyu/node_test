const env = process.env.NODE_ENV;

let MYSQL_CONF;

//环境为dev时候的配置(线下服务)mysql配置
if (env === 'dev') {
    MYSQL_CONF = {
        host: "localhost",
        user: "root",
        password: "7777",
        port: "3306",
        database: "node_blog"
    }
}

//环境为production(线上服务器)mysql的配置
if (env === 'production') {
    MYSQL_CONF = {
        host: "localhost",
        user: "root",
        password: "7777",
        port: "3306",
        database: "node_blog"
    }
}

module.exports = {
    MYSQL_CONF
};