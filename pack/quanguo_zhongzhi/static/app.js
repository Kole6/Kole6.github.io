// 配置项目名称
var APP_NAME = '全国中等职业学校管理信息系统';
var APP_EN_NAME = 'mvms1.0';
document.title = APP_NAME;

// 统一默认请求地址(前端部署在同一域名下时 为/cube-api)
var APP_HTTP_ROOT = 'http://localhost:8089/cube-api';

//首页登录请求后台地址 pthink-plus 后台(前端部署在同一域名下时 为/pthink-plus)
var APP_HTTP_ROOT_ADMIN = 'http://localhost:8888/pthink-plus';

// 开启http请求
var httpMock = true;

// 开启mock菜单
var menuMock = false;