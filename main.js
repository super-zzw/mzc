import Vue from 'vue'
import App from './App'
import store from './store'
import {http,httpAll} from './utils/request.js'
import background from 'components/background.vue'
import background1 from 'components/background1.vue'
import alert from 'components/alert.vue'
Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$http = http;
Vue.prototype.$httpAll = httpAll;
Vue.component('background',background);
Vue.component('background1',background1);
Vue.component('alert',alert);
const app = new Vue({
	store,
    ...App
})
app.$mount()
