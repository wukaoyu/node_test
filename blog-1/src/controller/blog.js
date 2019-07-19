const { exec } = require("../db/mysql")

const getList = (author, keyword) => {
    const sql = "select * from blogs where 1=1";
    if (author) {
        sql += `and author=${author}`
    }
    if (keyword) {
        sql += `and title like%${keyword}%`
    }
    return [
        {
            id: 1,
            title: "标题A",
            content: "内容A",
            author:"zhangsan"
        },
        {
            id: 2,
            title: "标题B",
            content: "内容B",
            author:"lisi"
        },
    ]
}
const getDetail = (id) => {
    return {
        id: 1,
        title: "标题A",
        content: "内容A",
        author:"zhangsan"
    }
}
const newBlog = (blogData = {}) => {
    return {
        id: 3
    }    
}
const updataBlog = (id, blogData = {}) => {
    return true
}
const delBlog = (id) => {
    return true;
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updataBlog,
    delBlog
}