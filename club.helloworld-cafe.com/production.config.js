/**
 * config
 */

var path = require('path');

var debug = false;

var config = {
  // debug 为 true 时，用于本地调试
  debug: debug,

  mini_assets: !debug, // 是否启用静态文件的合并压缩，详见视图中的Loader

  name: 'IT合伙人', // 社区名字
  description: 'IT圈子,创投', // 社区的描述
  keywords: 'IT,创业,孵化器',

  // 添加到 html head 中的信息
  site_headers: [
    '<meta name="author" content="hailiang.hl.wang@gmail.com" />'
  ],
  site_logo: '/public/images/logo.png', // default is `name`
  site_icon: '/public/images/logo.ico', // 默认没有 favicon, 这里填写网址
  // 右上角的导航区
  site_navs: [
    // 格式 [ path, title, [target=''] ]
    [ '/about', '关于' ]
  ],
  // cdn host，如 http://cnodejs.qiniudn.com
  site_static_host: 'http://musa-hw-club.qiniudn.com', // 静态文件存储域名
  // 社区的域名
  host: '123.57.36.232',
  // 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
  google_tracker_id: 'UA-4175xxxx-x',

  // mongodb 配置
  db: 'mongodb://127.0.0.1:27017/it_par_pro',
  db_name: 'it_par_stg',


  session_secret: 'yeevunch8nogjomVosh', // 务必修改
  auth_cookie_name: 'it_par_pro',

  // 程序运行的端口
  port: 3000,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // 限制发帖时间间隔，单位：毫秒
  post_interval: 2000,

  // RSS配置
  rss: {
    title: 'IT合伙人',
    link: 'http://123.57.36.232',
    language: 'zh-cn',
    description: 'IT圈子,创投',
    //最多获取的RSS Item数量
    max_rss_items: 50
  },

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
  weibo_key: 10000000,
  weibo_id: 'your_weibo_id',

  // admin 可删除话题，编辑标签，设某人为达人
  admins: { hain9: true ,
    kalas: true,
    sally: true},

  // github 登陆的配置
  GITHUB_OAUTH: {
    clientID: 'f8dbb76a15529ffa80e1',
    clientSecret: '08dc91cd8cca571b310684eead7de53d7844ec7b',
    callbackURL: 'http://115.28.162.221:3000:3016/auth/github/callback'
  },
  // 是否允许直接注册（否则只能走 github 的方式）
  allow_sign_up: true,

  // newrelic 是个用来监控网站性能的服务
  newrelic_key: 'yourkey',

  //7牛的access信息，用于文件上传
  qn_access: {
    accessKey: 'AJESJBpE_S8ItnIkMlQzzEpLJEI3PeozNJN0aGeV',
    secretKey: 'RtzTNwNku6lPb8vYktvwgpeK2zM-9pUM5dItwcDw',
    bucket: 'musa-hw-club',
    domain: 'http://musa-hw-club.qiniudn.com'
  },

  //文件上传配置
  //注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  upload: {
    path: path.join(__dirname, 'public/upload/'),
    url: '/public/upload/'
  },

  // 版块
  tabs: [
    ['painpoint','痛点'],
    ['share', '分享'],
    ['ask', '问答']
    //['job', '招聘']
  ]
};

module.exports = config;
