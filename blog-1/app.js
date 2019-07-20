const querystring = require("querystring")
const handBlogRouter = require("./src/router/blog");
const handUserRouter = require("./src/router/user");

const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== "POST") {
            resolve({});
            return
        }
        if (req.header["content-type"] !== "application/json") {
            resolve({});
            return
        }
        let postData = '';
        req.on('data',chunk => {
            postData += chunk;
        })
        if (!postData) {
            resolve({});
            return
        }
        resolve(
            JSON.parse(postData)
        )
    })
    return promise;
}

const serverHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json');

    //获取path
    const url = req.url;
    req.path = url.split("?")[0];

    //解析query
    req.query = querystring.parse(url.split('?')[1]);

    //解析cookie
    req.cookie = {};
    const cookieStr = req.headers.cookie || '';
    cookieStr.split(";").forEach(item => {
        if (!item) {
            return
        }
        const arr = item.split("=");
        const key = arr[0].trim();
        const val = arr[1].trim();
        req.cookie[key] = val;
    });

    getPostData(req).then(postData => {
        req.body = postData
            //博客路由
        const blogResult = handBlogRouter(req, res);
        if(blogResult) {
            blogResult.then(blogData => {
                res.end(
                    JSON.stringify(blogData)
                )
            })
            return
        }

        //登录路由
        const userResult = handUserRouter(req, res);
        if(userResult) {
            userResult.then(userData => {
                res.end(
                    JSON.stringify(userData)
                )
            })
            return
        }

        //没有路由，返回404
        res.writeHead(404,{"Content-type":"text/plain"});
        res.write("404 Not Found\n");
        res.end();
    })
}

module.exports = serverHandle

/*
const handBlogRouter = require("./src/router/blog");
const handUserRouter = require("./src/router/user");


const serverHandle = (req, res) =>  {
    res.setHeader('Content-type', 'application/json');

    //处理blog路由
    const blogData = handBlogRouter(req, res);
    if(blogData) {
        res.end(
            JSON.stringify(blogData)
        )
        return
    }

    //处理user路由
    const userData = handUserRouter(req, res);
    if(blogData) {
        res.end(
            JSON.stringify(userData)
        )
        return
    }

    //路由没找到
    res.writeHead('Content-type','text/plain');
    res.write("404 Not Found \n");
    res.end();
}

module.exports = serverHandle
*/