import Api from './api.js'
// import store from '../store'
import utils from "./method.js"
var test = false;
var _baseUrl = '';
if (test) {
	_baseUrl = 'http://192.168.1.25:9109/api';  //测试地址
} else {	_baseUrl = 'https://mdhs.meadcan.com/api';  //正式地址
}
var baseUrl = _baseUrl;
// 请求loading交给页面处理
// 页面中第一个需要使用登录的请求需要加await,若同一个页面多个请求需要避免多次loading

// 单次请求
export function http(opt){
	// console.log(opt)
	let _data = Object.assign({},opt.data || {})
	return new Promise((resolve, reject)=>{
		let _params = opt.params || ""
		uni.request({
			header:{
				"Content-Type":"application/x-www-form-urlencoded",
				"Mzc-SessionId":uni.getStorageSync("session") || "",
			},
			url: baseUrl + Api[opt.apiName] + _params,
			method:opt.method || 'GET',
			data:_data,
			success:res => {
				if(res.statusCode == 200){
					if(res.data && res.data.code == 200000){
						resolve(res.data)
					}else if(res.data && res.data.code == 300000){
						uni.hideLoading()
						utils.rmData()
						// uni.reLaunch({
						// 	url: "/pages/index/index"
						// })
						reject(res.message)
					}else{
						uni.hideLoading()
					    
						uni.showToast({
							icon: 'none',
							title: res.data.message,
							duration: 1500
						});
						reject(res)
						
					}
				}else{
					uni.hideLoading()
					reject('服务器错误')
				}
				resolve(res.data)
			},
			fail:err => {
				uni.hideLoading()
				reject('请求错误')
			}
		})
	})
}

export function httpAll(opts){
	let promiseList = [];
	for (let i = 0; i < opts.length; i++) {
		let opt = opts[i];
		promiseList.push(http(opt,true))
	}
	var ret = Promise.all(promiseList);
	return ret;
}