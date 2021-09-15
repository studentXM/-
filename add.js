const db = require('./db');

const express = require('express');

const app = express();

app.listen(3006,()=>console.log("启动服务器"));


//配置，接收查询字符串的请求体
app.use(express.urlencoded({extented:true}));//让req.body可以显示数据


//配置接口
app.post('/aac',(req,res)=>{
    let {username,age,sex} = req.body;//解构赋值

    //调用ab函数 来对数据库增删改查
    db(`insert into man set username="${username}",age=${age},sex="${sex}"`,(err,result)=>{
        
        if(err) throw err;
        res.send({status:0,message:"添加成功"})
    })
    
    
})

//使用get请求来查询 数据库

app.get('/akk',(req,res)=>{
    db('select * from man',(err,result)=>{
        res.send(result)
    })
})