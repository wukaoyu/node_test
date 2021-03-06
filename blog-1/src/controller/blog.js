const { exec } = require("../db/mysql")

const getList = (author, keyword) => {
    let sql = "select * from blogs where 1=1 ";
    if (author) {
        sql += `and author = '${author}'`
    }
    if (keyword) {
        sql += `and title like '%${keyword}%'`
    }
    sql += "order by createtime desc"
    //返回promise
    return exec(sql);
}
const getDetail = (id) => {
    let sql = `select * from blogs where id=${id}`
    return exec(sql).then(row => {
        return row[0];
    });
}
const newBlog = (blogData = {}) => {
    const title = blogData.title;
    const content = blogData.content;
    const createtime = Date.now();
    const author = blogData.author;

    let sql = `insert into blogs (title,content,createtime,author) values ('${title}','${content}','${createtime}','${author}')`
    return exec(sql).then(insertData => {
        return {
            id:insertData.insertId
        } 
    })    
}
const updataBlog = (id, blogData = {}) => {
    const title = blogData.title;
    const content = blogData.content;

    let sql = `update blogs set title='${title}', content='${content}' where id='${id}'`
    return exec(sql).then(changedDate => {
        if (changedDate.affectedRows > 0){
            return true
        }
        return false
    })
}
const delBlog = (id, author) => {
    let sql = `delete from blogs where id='${id}' and author='${author}'`;
    return exec(sql).then(delDate => {
        if(delDate.affectedRows > 0){
            return true
        }
        return false
    })
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updataBlog,
    delBlog
}