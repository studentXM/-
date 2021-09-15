//加载数据库组件
const db = require('./db')

const express = require("express");

const app = express();

app.listen(3006,()=>{
    console.log("express服务器启动")
})

//配置 + 写接口
//获取数据的接口
app.get('/api/getstudents',(req,res)=>{
    db('select * from student',(err,result)=>{
        if(err) throw err;
        console.log(result)
       
    })
    console.log("1")
    console.log("1")
    console.log("1")
    console.log("1")
    console.log("1")
    //res.send("1")
    
});

//配置，接收查询字符串的请求体
app.use(express.urlencoded({extended:true}))//这一段代码 必须写 否则req.body 就是undefined


//添加数据的接口
app.post('/api/addstudent',(req,res)=>{
    // 接收客户端提交的数据（请求体）
    console.log(req.body)//发送的数据内容
    // 链接数据库，添加数据
    db(`insert into student set username="${req.body.username}",age=${req.body.age},sex="${req.body.sex}"`,(err,result)=>{
        if(err) throw err;
        // 响应结果
        res.send({status:0,message:'添加成功'})
    })
    
    
    
    

});






