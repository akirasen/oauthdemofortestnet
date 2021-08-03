# oauthdemofortestnet


市民通第三方接入DEMO说明文档
此DEMO使用nodejs express orm等方式，基于市民通第三方接入文档规范编写
使用前请确认设备安装了nodeJS、npm，建议使用PM2等项目管理或守护进程
新应用申请测试环境appid和secret请和德阳市民通联系

没有测试包的请下载测试环境包：https://www.pgyer.com/uiKb

![alt 二维码](http://static.dysmt.cn/commonstatics/20210803164833.jpg)

安装密码和测试网络测试账号请向市民通工作人员索取

授权登录前端DEMO
请使用测试网德阳市民通APP扫码体验单点登录：

![alt 二维码](http://static.dysmt.cn/commonstatics/20210803164822.jpg)

网址：http://oauthdemo.bashe.cc
使用网址打开需要输入上述测试账号密码，无法体验单点登录

DEMO前后端已注释好并在GITHUB开源：https://github.com/akirasen/oauthdemofortestnet

oauth2demofortestnet是后端
Git到本地以后 先mysql导入sql
运行 npm install 安装项目依赖包
再执行src目录下的app.js脚本 

oauthdemofortestnet是前端
可使用HBuilderX可视化界面，也可以使用 cli 脚手架：
npm install -g @vue/cli


npm run dev:%PLATFORM%
npm run build:%PLATFORM%
