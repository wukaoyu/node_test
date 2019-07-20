const { 
    getList, 
    getDetail,
    newBlog,
    updataBlog,
    delBlog } = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel")

const handleBlogRouter = (req, res) => {
    const method = req.method;
    const id = req.query.id;
    req.body.author = "wky";
    // console.log(req.query);
    //获取博客列表
    if(method === 'GET' && req.path === '/api/blog/list'){
        const author = req.query.author || '';
        const keyword = req.query.keyword || ''; 
        const result = getList(author, keyword);
        return result.then(ListData => {
            return new SuccessModel(ListData)
        })
    }

    //获取博客详情
    if(method === 'GET' && req.path === '/api/blog/detail'){
        const result = getDetail(id);
        return result.then(DetailData => {
            return new SuccessModel(DetailData);
        })
    }

    //新建博客
    if(method === 'POST' && req.path === '/api/blog/new'){
        const result =  newBlog(req.body);
        return result.then(data => {
            return new SuccessModel(data);
        })
    }

    //修改博客
    if(method === 'POST' && req.path === '/api/blog/update'){
        const result = updataBlog(id, req.body);
        return result.then(val => {
            if (val) {
                return new SuccessModel()
            }else{
                return new ErrorModel("更新博客失败");
            }
        })
    }
    
    //删除博客
    if(method === 'POST' && req.path === '/api/blog/del'){ 
        const author = "wky"; 
        const result = delBlog(id, author);
        return result.then(val => {
            if (val) {
                return new SuccessModel()
            }else{
                return new ErrorModel("删除博客失败");
            }
        })
    }
}


module.exports = handleBlogRouter;