const http = require("http");
const querystring = require("querystring")

const server = http.createServer((req, res) =>{
    // res.writeHead(200, {'content-type':'text/html'});
    // res.end('<h1>hellow word</h1>')
    // console.log("method:", req.method);
    // const url = req.url;
    // console.log('url:', url);
    // req.query = querystring.parse(url.split("?")[1]);
    // console.log("quer:",req.query);
    // res.end(
    //     JSON.stringify(req.query)
    // )
    // if(req.method === "POST"){
    //     console.log("req content-type:",req.headers['content-type']);
    //     let postDate = '';
    //     req.on("data", chunk => {
    //         postDate += chunk.toString();
    //     })
    //     req.on("end",() => {
    //         console.log("postDate:",postDate);
    //         res.end("hello word"+postDate);
    //     })
    // }
    const method = req.method;
    const url = req.url;
    const path = url.split("?")[0];
    const query = querystring.parse(url.split("?")[0]);
    
    //返回格式为json
    res.setHeader('Content-type','application/json');

    //返回的数据
    const resData = {
        method,
        url,
        path,
        query
    }

    //返回
    if(method === "GET"){
        res.end(
            JSON.stringify(resData)
        )
    }

    if(method ==="POST"){
        let postDate = '';
        req.on('data', chunk => {
            postDate +=chunk.toString();
        })
        req.on('end', () => {
            resData.postDate = postDate;
            res.end(
                JSON.stringify(resData)
            )   
        })
    }
})

server.listen(3000, () => {
    console.log("3000 pro");
})