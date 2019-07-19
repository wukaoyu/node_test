let express = require('express');    //引入express模块
let Mock = require('mockjs');        //引入mock模块

let app = express(); 

app.all('/test1.action',function (req,res) {
        /**
         * mockjs中属性名‘|’符号后面的属性为随机属性，数组对象后面的随机属性为随机数组数量，正则表达式表示随机规则，+1代表自增
         */
        res.json(Mock.mock({
            "status": 200,
            "data|1-9": [{
                "name|5-8": /[a-zA-Z]/,
                "id|+1": 1,
                "value|0-500": 20
            }]
        }));
})
app.listen("8090");