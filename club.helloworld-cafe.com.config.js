/**
 * config
 */

var path = require('path');
var fs = require('fs');
var jf = require('jsonfile')

// add a config in home as higher priority
function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

function isHomeConfigExist(){
  try{
    if(getUserHome()){
      var cfgPath = path.join(getUserHome(),'nodeclub-config.json');
      var _config = jf.readFileSync(cfgPath);
      // TODO check it _config
      config = _config;
    }
  }catch(e){
    console.log('WARN cannot find config in home path. Just use the origin one.');
  }
}

function figureHomeCfg(){
  isHomeConfigExist();
}

var debug = false;

var config = {
  // debug 为 true 时，用于本地调试
  debug: debug,

  mini_assets: !debug, // 是否启用静态文件的合并压缩，详见视图中的Loader

  name: 'Hello World Cafe', // 社区名字
  description: 'IT社区:创新、创投圈子', // 社区的描述

  // 添加到 html head 中的信息
  site_headers: [
    '<meta name="author" content="hailiang.hl.wang@gmail.com" />'
  ],
  site_logo: '/public/images/logo.png', // default is `name`
  site_icon: '/public/images/cnode_icon_32.png', // 默认没有 favicon, 这里填写网址
  // 右上角的导航区
  site_navs: [
    // 格式 [ path, title, [target=''] ]
    [ '/about', '关于' ]
  ],
  // cdn host，如 http://cnodejs.qiniudn.com
  site_static_host: 'http://arrking.qiniudn.com', // 静态文件存储域名
  // 社区的域名
  host: 'localhost',
  // 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
  google_tracker_id: 'UA-4175xxxx-x',

  // mongodb 配置
  db: 'mongodb://master:UmHosooj1@ds039530-a0.mongolab.com:39530,ds039530-a1.mongolab.com:39530/helloworldclub',
  db_name: 'helloworldclub',
  db_mongostore:{
    db: {
        "name" : "helloworldclub",
        "servers" : [
          {
            "host" : "ds039530-a0.mongolab.com",
            "port" : 39530,
            "username":"master",
            "password":"UmHosooj1",
            "options" : {
              "autoReconnect" : false,
              "poolSize" : 200,
              "socketOptions" : {
                "timeout" : 0,
                "noDelay" : true,
                "keepAlive" : 1,
                "encoding" : "utf8"
              }
            }
          },
          {
            "host" : "ds039530-a1.mongolab.com",
            "port" : 39530,

            "options" : {
              "autoReconnect" : false,
              "poolSize" : 200,
              "socketOptions" : {
                "timeout" : 0,
                "noDelay" : true,
                "keepAlive" : 1,
                "encoding" : "utf8"
              }
            }
          }
      ]
    },
    username: "master",
    password: "UmHosooj1"
  },

  session_secret: 'helloworldclub_voocKonck', // 务必修改
  auth_cookie_name: 'hello-world-club',

  // 程序运行的端口
  port: 3000,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // 限制发帖时间间隔，单位：毫秒
  post_interval: 2000,

  // RSS配置
  rss: {
    title: 'Hello World Club',
    link: 'http://club.helloworld-cafe.com',
    language: 'zh-cn',
    description: 'IT社区:创新、创投圈子',
    //最多获取的RSS Item数量
    max_rss_items: 50
  },

  // site links
  site_links: [
    {
      'text': 'Node.js 官网',
      'url': 'http://nodejs.org/'
    },
    {
      text: 'Ruby-China',
      url: 'https://ruby-china.org/'
    },
    {
      text: 'Golang中国',
      url: 'http://golangtc.com/'
    },
  ],

  // 邮箱配置
  mail_opts: {
    host: 'smtp.163.com',
    port: 25,
    auth: {
      user: 'helloworldclub@163.com',
      pass: 'VahennUc~'
    }
  },

  //weibo app key
  weibo_key: 1980037182,
  weibo_id: '953b019ce353d8dab9ed5e217b762265',

  // admin 可删除话题，编辑标签，设某人为达人
  admins: { user_login_name: true,
            hain_wang: true },

  // github 登陆的配置
  GITHUB_OAUTH: {
    clientID: 'f8dbb76a15529ffa80e1',
    clientSecret: '08dc91cd8cca571b310684eead7de53d7844ec7b',
    callbackURL: 'http://club.helloworld-cafe.com/auth/github/callback'
  },
  // 是否允许直接注册（否则只能走 github 的方式）
  allow_sign_up: true,

  // newrelic 是个用来监控网站性能的服务
  newrelic_key: 'yourkey',

  //7牛的access信息，用于文件上传
  qn_access: {
    accessKey: 'AJESJBpE_S8ItnIkMlQzzEpLJEI3PeozNJN0aGeV',
    secretKey: 'RtzTNwNku6lPb8vYktvwgpeK2zM-9pUM5dItwcDw',
    bucket: 'arrking',
    domain: 'http://arrking.qiniudn.com'
  },

  //文件上传配置
  //注：如果填写 7牛access，则会上传到 7牛，以下配置无效
  upload: {
    path: path.join(__dirname, 'public/upload/'),
    url: '/public/upload/'
  },

  // 版块
  tabs: [
    ['share', '分享'],
    ['ask', '问答'],
    ['job', '招聘']
  ]
};

figureHomeCfg();

module.exports = config;
