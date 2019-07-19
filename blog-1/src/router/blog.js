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
    console.log(req.query);
    //获取博客列表
    if(method === 'GET' && req.path === '/api/blog/list'){
        const author = req.query.author || '';
        const keyword = req.query.keyword || ''; 
        const ListData = getList(author, keyword);
        return new SuccessModel(ListData)
    }

    //获取博客详情
    if(method === 'GET' && req.path === '/api/blog/detail'){
        const DetailData = getDetail(id);
        return new SuccessModel(DetailData);
    }

    //新建博客
    if(method === 'POST' && req.path === '/api/blog/new'){
        const blogData = req.body;
        const data =  newBlog(blogData);
        return  new SuccessModel(data)
    }

    //修改博客
    if(method === 'POST' && req.path === '/api/blog/update'){
        const resule = updataBlog(id, req.body);
        if (resule) {
            return new SuccessModel()
        }else{
            return new ErrorModel("更新博客失败");
        }
    }
    
    //删除博客
    if(method === 'POST' && req.path === '/api/blog/del'){  
        const resule = delBlog(id);
        if (resule) {
            return new SuccessModel()
        }else{
            return new ErrorModel("删除博客失败");
        }
    }
}


module.exports = handleBlogRouter;