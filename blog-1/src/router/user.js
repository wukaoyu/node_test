const login = require("../controller/user")
const { SuccessModel, ErrorModel } = require("../model/resModel")

const handleUserRouter = (req, res) => {
    const method = req.method;

    const getCookieTime = () => {
        let d = new Date();
        d.setTime(d.getTime() + (24*60*60*1000));
        return d.toGMTString();
    }

    //登录
    if(method === 'GET' && req.path === '/api/user/login'){
        // const { username, password } = req.body;
        const { username, password } = req.query;
        const result = login(username, password);
        return result.then(data => {
            if (data.username) {
                //存入cookie
                res.setHeader("Set-Cookie", `username=${data.username};path=/; httpOnly; expires=${getCookieTime()}`);
                return new SuccessModel()
            }
            return new ErrorModel("用户名或密码错误")
        })
    }

    //登录测试
    if (method === "GET" && req.path === '/api/user/login-test') {
        if (req.cookie.username) {
            return Promise.resolve(new SuccessModel({
                username:req.cookie.username
            }))
        }
        return Promise.resolve(new ErrorModel('尚未登录'))
    }
}

module.exports = handleUserRouter;