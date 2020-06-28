import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		isLogin:false,  //是否登录
		userInfo:{}    //用户信息
	},
	mutations: {
		isLoginSet(state,data){
			state.isLogin = data;
		},
		userInfoSet(state,data){
			// let _data = {
			// 	...state.userInfo,
			// 	...data
			// }
			// state.userInfo = _data;
			state.userInfo = data;
				console.log(state.userInfo)
			// if(state.userInfo && state.userInfo.name) {
			// 	state.userInfo.nickName = state.userInfo.name;
			// }
		},
	}
})

export default store
