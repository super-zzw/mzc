import Vue from 'vue'
import Vuex from 'vuex'
import {http} from '../utils/request.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		isLogin:false,  //是否登录
		userInfo:{}    ,//用户信息
		jumpPage:'/pages/index/index',
		addressMsg:'',
		userDetail:{}
		
	},
	mutations: {
		isLoginSet(state,data){
			state.isLogin = data;
		},
		userInfoSet(state,data){
			state.userInfo = data;
				console.log(state.userInfo)
			
		},
		jumpPageSet(state,data){
			state.jumpPage=data
		},
		selectAddr(state,data){
			state.addressMsg=data
		},
		setUserDetail(state,data){
			state.userDetail=data
		},
		setVip(state,data){
			state.userDetail.vip=data
		}
		
	},
	actions:{
		getUser({commit}){
			uni.showLoading({
				title:'加载中...'
			})
			http({
				apiName:'getUser'
			}).then(res=>{
				commit('setUserDetail',res.data)
				uni.hideLoading()
			}).catch(err=>{})
		}
	}
})

export default store
