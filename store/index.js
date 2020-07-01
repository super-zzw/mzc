import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		isLogin:false,  //是否登录
		userInfo:{}    ,//用户信息
		jumpPage:'/pages/index/index',
		addressMsg:''
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
		}
	}
})

export default store
