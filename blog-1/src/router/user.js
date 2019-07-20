const loginCheck = require("../controller/user")
const { SuccessModel, ErrorModel } = require("../model/resModel")

const handleUserRouter = (req, res) => {
    const method = req.method;

    //登录
    if(method === 'POST' && req.path === '/api/user/login'){
        const { username, password } = req.body;
        const result = loginCheck(username, password);
        return result.then(data => {
            if (data.username) {
                return new SuccessModel()
            }
            return new ErrorModel("用户名或密码错误")
        })
    }
}

module.exports = handleUserRouter;