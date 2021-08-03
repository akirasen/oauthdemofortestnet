'use strict'

let successState = 0 // 表示成功
let fialState = 1 // 表示失败
//握手专用 防止timewaitout

exports.hello = (req, res) => {
  // 代表返回的数据结构
  let resObj = { status: successState, message: '' }
 //数据库语句
 let sql = `SELECT id from users limit 1`
 console.log('握手sql语句：============>', sql)
  req.db.driver.execQuery(sql, (err, datas) => {
    // 获取数据成功
    resObj.message = datas
    res.end(JSON.stringify(resObj))
  })
}
//市民通认证获取用户信息测试用-getuserstatus

exports.getuserstatus = (req,res)=>{
//使用http和https
var http = require('http')
var https = require('https')
//通过入参取code，code通过前端获取传入
  let code = req.query.code
//OAuth2.0参数配置 此步骤根据授权码获取access_token
   let client_id = `2eXXXXXXXXXXXX00b`//配置client_id 
  let client_secret = `d6XXXXXXXXXXXXXXXXXXX7ee`//配置client_secret

  let redirect_uri = `http://oauthdemo.bashe.cc`//配置redirect_uri
  var option = {
    hostname: 'auths-test.dysmt.cn', // 要请求的OAUTH服务器地址
    port: 443,  // 要访问的服务器的端口 80为http 443为https
    path: `/oauth/token?code=${code}&client_secret=${client_secret}&grant_type=authorization_code&client_id=${client_id}&redirect_uri=${redirect_uri}`,// 将code、client_secret、client_id、redirect_uri进行拼接
    method: 'POST', // 请求方式POST或GET
    headers: {  
        'Content-Type': 'application/x-www-form-urlencoded'  
    } 
  }
  //发起请求 获取access_token
    var _request = https.request(option, function(response){
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
                    let token  = JSON.parse(chunk).access_token //在响应体中取得access_token 
                    //OAUTH2.0参数配置 此步骤根据已获得的access_token获取用户个人信息
                    var options = {
                      hostname: 'authr-test.dysmt.cn',	// 要访问的用户信息服务器地址
                      port: 443,  // 要访问的服务器的端口
                      path: `/resource/user/userinfo?access_token=${token}`,//要请求的用户信息地址(包含认证信息)
                      method: 'POST', // 请求方式
                          headers: {  
                              'Content-Type': 'application/x-www-form-urlencoded'  
                          } 
                    }
                    //再次发起请求 获取用户个人信息
                    let resObj = { status: successState, message: '' }
                    let photoUrl = ''
                    let realName = ''
                    let cardId = ''
                    var theRequest = https.request(options, function(theResponse){
                      theResponse.setEncoding('utf8');
                      theResponse.on('data',function (chunks)  {
                          //插入数据库后返回数据库结果
                          if(JSON.parse(chunks).error == 'invalid_token'){
                              resObj.status = 1
                              resObj.message = chunks
                              res.end(JSON.stringify(resObj))
                             return
                          }
                          let id = JSON.parse(chunks).content.id;
                          let nickname = JSON.parse(chunks).content.nickname;
                          let phone = JSON.parse(chunks).content.phone;
                          if(JSON.parse(chunks).content.photoUrl != null){
                              photoUrl = JSON.parse(chunks).content.photoUrl
                              //console.log(id,nickname,phone,photoUrl)
                          }else{
                              photoUrl = 'http://static.dysmt.cn/commonstatics/null.png'
                          };
                          if(JSON.parse(chunks).content.userAuth != null){
                             realName = JSON.parse(chunks).content.userAuth.realName;
                         };
                        // console.log(id,nickname,phone,photoUrl,realName)
                         //数据库执行
                          let sql = `insert into users(id,nickname,phone,photoUrl,realName,currentCode) values("${id}","${nickname}",${phone},"${photoUrl}","${realName}","${code}") on duplicate key update phone=${phone},realName="${realName}",nickname="${nickname}",photoUrl="${photoUrl}",currentCode="${code}",recentlyuse=CURRENT_TIMESTAMP,usetimes=usetimes + 1`;
                        console.log('插入或更新当前用户信息sql语句：============>', sql)
                        req.db.driver.execQuery(sql, (err, datas) => {
                         // 判断是否异常
                        if (err) {
                            resObj.status = fialState
                            resObj.message = err.message
                            res.end(JSON.stringify(resObj))
                            return
                        }
                        // 写入数据成功
                        let sql = `SELECT id,nickname,phone,photoUrl,fristuse,usetimes FROM users where id = "${id}"`
                         console.log('查询当前用户信息sql语句：============>', sql)
                         req.db.driver.execQuery(sql, (err, datas) => {
                         if (err) {
                            resObj.status = fialState
                            resObj.message = err.message
                            res.end(JSON.stringify(resObj))
                            return
                        }
                        //数据库查询成功
                        resObj.message = datas
                        res.end(JSON.stringify(resObj))//输出查询结果
                         })
                    })
                         //数据库执行完毕
                         //插入数据库后返回数据库结果结束
                          
                        //以下方式为不将用户信息存入数据库，直接输出
                        //   resObj.message = '"id":"' + JSON.parse(chunks).content.id + '","nickname":"' + JSON.parse(chunks).content.nickname + '","phone":"' + JSON.parse(chunks).content.phone + '"';
                        //   if(JSON.parse(chunks).content.photoUrl != null){
                        //       resObj.message += ',"photoUrl":"' + JSON.parse(chunks).content.photoUrl
                        //   }else{resObj.message += ',"photoUrl":"http://static.dysmt.cn/commonstatics/null.png"' };
                        //  if(JSON.parse(chunks).content.userAuth != null){
                        //      resObj.message += ',"realName":"' + JSON.parse(chunks).content.userAuth.realName + '"'
                        //  }
                        //   res.end(JSON.stringify(resObj))
                        //   console.log(JSON.stringify(resObj))
                          //直接输出结束
                        });
                    })
                    theRequest.on('error', (error) => {
                      console.error(`请求遇到问题: ${error.message}`);
                    });
                    theRequest.end();
             }
          );
      })
    _request.on('error', (e) => {
          console.error(`请求遇到问题: ${e.message}`);
      });
_request.end();
}  
  

