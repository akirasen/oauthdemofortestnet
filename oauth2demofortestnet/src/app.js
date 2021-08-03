'use strict'
//使用cors跨域
var http = require('http')
var https = require('https')
const cors = require("cors");
const corsOptions = {
  origin: "http://oauthdemo.bashe.cc"//改成自己的
};
//设置一个定时器 每小时的第1分钟发起一次请求 防止数据库timeout 
const schedule = require('node-schedule');
const  scheduleCronstyle = ()=>{
  //每小时的第41分钟的第11秒定时执行一次:
    schedule.scheduleJob('11 41 * * * *',()=>{
        console.log('执行定时任务防止数据库8小时waittimeout，当前时间:' + new Date());
        //get
        var option = {
          hostname: 'apis.bashe.cc',	// 要访问的服务器的ip地址
          port: 443,  // 要访问的服务器的端口
          path: '/v99/api/hello',
          method: 'GET'	// 请求方式
        }
        var reqs = https.request(option, function(ress){
          console.log('请求成功状态码:' + ress.statusCode)
          //console.log('响应头:' + JSON.stringify(res.headers))
          ress.setEncoding('utf8');
          ress.on('data', (chunk) => {
              console.log(`返回数据: ${chunk}`);
            });
            ress.on('end', () => {
            console.log('响应中已无数据');
            });
        })
        reqs.on('error', (e) => {
          console.error(`请求遇到问题: ${e.message}`);
        });
        reqs.end();
    }); 
}
scheduleCronstyle();
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

let app = express()
app.use(cors(corsOptions));
// 注册 body-parser 中间件
app.use(bodyParser({ extended: false }))
// app.use(bodyParser.urlencoded({ extended: false }));

//1.0 初始化orm
const orm = require('orm')
app.use(//下面是数据库账号密码IP端口数据库名
    orm.express('mysql://oauthdemo:qwer1234@localhost:3306/oauthdemo', {
    define: function(db, models, next) {
      next()
    }
  })
)

//2.0 将所有api的请求响应content-type设置为application/json
app.all('/v99/api/*', (req, res, next) => {
  //设置允许跨域响应报文头
  //设置跨域
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "X-Requested-With"); // X-Requested-With
  //res.header("Access-Control-Allow-Methods", "*");

  res.header('Access-Control-Allow-Origin', '*')
  // 设置服务器支持的所有头信息字段
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
  )
  // 设置服务器支持的所有跨域请求的方法
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')

  res.setHeader('Content-Type', 'application/json;charset=utf-8')
  next()
})

//2.0 设置路由规则
const apiRoute = require('./routes/apiRoute.js')
app.use('/', apiRoute)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(9093, () => {
   console.log('testcode的api服务已启动, :9093');
});
