//接口
export default{
	getUserInfo: "/wxLogin", // 授权登录
	getUser:'/getUserInfo' ,//获取用户信息
	getReceiveList:'/receive/list',  //获取用户地址列表
	getOpenList:'/openAddress/list',  //获取开通地址列表
	addAddress:'/receive/addAddress'   ,//添加用户地址
	delAddress:'/receive/deleteAddress',//删除用户地址
	getReceive:'/getReceive'  ,//用户查询地址
	editAddress:'/receive/editAddress'  ,//用户修改地址
	orderReverse:'/order/reservation'  ,//预约上门
	checkOrderStatus:'/order/check/' ,//查询订单状态
	getOrderList:'/order/list' ,//获取用户订单列表
	cancelOrder:'/order/cancel' ,//取消用户订单
	getPointList: '/integral/list' ,//获取用户积分列表
	getConfigs:'/getConfigs'  ,//获取平台配置
	getCarbon:'/getCarbonEmissions' ,//获取用户碳排量
	getCertificateList:'/getCertificateList' ,//获取证书列表
	getAuchCode:'/crm/sendCode' ,//发送验证码
	register:'/crm/register' ,//美赞臣商城会员注册
	exchangeIntegral:'/exchangeIntegral' ,//兑换蓝臻积分
	getWuserMobile:'/getWuserMobile', //获取用户手机号
	exchangeCard:'/exchangeCard' ,//申请证书
	getArticleList:'/article/list' ,//获取文章列表
	getAgreement:'/agreement' ,//获取协议
	getOverFlow:'/order/logistics/' ,//获取物流信息
	submitFeedBack:'/submitFeedBack' ,//提交反馈
	getImgList:'/img/list' ,//获取图片
	isReverse:'/order/quota'  ,//是否可预约
	checkMobile:'/checkMobile' //检测手机号是否在黑名单
}