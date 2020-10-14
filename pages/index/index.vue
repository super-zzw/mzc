<template>
	<view class="indexContainer">
		<background1></background1>
		<view class="box1">
			<button type="default" class="avatarBox" hover-class="none" open-type="getUserInfo" lang="zh_CN" @getuserinfo="GotUserInfo()">
				<image :src="userDetail.avatarUrl||'../../static/defaultAvatar.png'" mode="" class="avatar" @click="toIndex" ></image>
				<!-- <image src="" mode="" class="avatar" @click="toIndex"  v-else></image> -->
			</button>
			<view class="titleBox">
				<text class="row1" v-if="isLogin">{{userDetail.nickName}}</text>
				<text  class="row1" v-else>暂未登录</text>
				<view  class="row2">
					
					<button type="default" class="arrow" hover-class="none" open-type="getUserInfo" lang="zh_CN" @getuserinfo="GotUserInfo()">
						<text class="txt" >{{userDetail.carbonEmissions||0}}g 碳减排量</text>
						
						<image src="../../static/line.png" class="line"></image>
						
						<text class="txt">{{userDetail.integral||0}} 环保积分</text> 
						<image src="../../static/arrowRight.png" style="margin-left: 5rpx;"></image>
					</button>
					
				</view>
				
			</view>
			
			<view class="lineBox">
				<image src="../../static/bg5.png" mode="" class="left"></image>
				<image src="../../static/bg4.png" mode="" class="line"></image>
				<image src="../../static/bg6.png" mode="" class="right"></image>
			</view>
			<view class="leftBottom">
				<image src="../../static/meidai.png"  class="naifen"></image>
				<!-- <image src="../../static/bg3.png" class="bg3"></image> -->
			</view>
			<view class="rightBottom">
				<view class="txt1 ">免费上门</view>
				<view class="txt2">美袋再用一次</view>
				<view class="txt3 ">让家中闲置温暖返航</view>
				<button type="default" class="btn" hover-class="none" open-type="getUserInfo" lang="zh_CN" @getuserinfo="toBook">
					立即预约
				</button>
			</view>
		</view>
		<view class="box2">
			<view class="navItem" @tap="toWhere">
				<image src="../../static/icon2.png" ></image>
				<text>美袋如何循环</text>
			</view>
			<view class="navItem" @tap="toSecret">
				<image src="../../static/icon1.png" ></image>
				<text>回收入门秘籍</text>
			</view>
			
			<view class="navItem" @tap="toLessons">
				<image src="../../static/icon3.png" ></image>
				<text>美袋最新进展</text>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	
	import { mapState } from 'vuex';
	import Utils from '../../utils/method.js'
	import sModal from '../../components/sModal.vue'
	
	export default {
		data() {
			return {
				
			}
		},
		components:{sModal},
		computed:{
				  ...mapState(['isLogin','userInfo','userDetail'])
		},
		async onLoad() {
			
				// console.log(uni.getStorageSync('userId'))
			if(this.isLogin){
			await this.$store.dispatch('getUser')
		
		
			
					}
		},
		async onShow() {
			
			
		},
	
	  
		methods: {
			onShareAppMessage: function(e) {
			let title = '美赞臣回收小程序'
			return {
			title: title,
			path: 'pages/index/index'
			}
			},

			
			async GotUserInfo(){
				if(this.isLogin){
					uni.navigateTo({
										url:'./personIndex'
									})
				}else{
					this.$store.commit('jumpPageSet','./personIndex')
					await Utils.onGotUserInfo()
				
				}
				
			},
			toBook(){
				if(this.isLogin){
					// this.$http({
					// 	apiName:'isReverse',
						
					// }).then(res=>{
						uni.navigateTo({
							url:'/pages/bookMsg/editBookMsg'
						})
					// }).catch(err=>{})
					
				}else{
					this.$store.commit('jumpPageSet','/pages/bookMsg/editBookMsg')
					Utils.onGotUserInfo()
				}
			},
			toLessons(){
				
				uni.navigateTo({
					url:'./lessons'
				})
			},
			// toOrderLog(){
			// 	uni.navigateTo({
			// 		url:'./orderLog'
			// 	})
			// },
			toSecret(){
				uni.navigateTo({
					url:'./secret'
				})
			},
			toWhere(){
				uni.navigateTo({
					url:'./toWhere'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
 .indexContainer{
	 background: #1A6852;
	 display: flex;
	 height: 100vh;
	 flex-direction: column;
	justify-content: space-around;
	 padding-top: 40rpx;
	 box-sizing: border-box;
	 position: relative;
	 .box1{
		 margin: 0 auto;
		 position: relative;
		 border-radius:60rpx;
		 width: 642rpx;
		 height:719rpx;
		 background:rgba(229,247,225,1);
		 box-shadow:1rpx 13rpx 42rpx 17rpx rgba(15,70,55,0.51);
	
		 .avatarBox{
			 position: absolute;
			 top: -80rpx;
			 left: 226rpx;
			 width: 189rpx;
			 height: 189rpx;
			 background:rgba(229,247,225,1);
			 border-radius:50%;
			 display: flex;
			 justify-content: center;
			 align-items: center;
			 padding: 0;
			 .avatar{
				 width: 150rpx;
				 height: 151rpx;
				 border-radius:50% ;
				 }
		 }
		 .titleBox{
			
			 text-align: center;
		     margin-top: 120rpx;
			 position: relative;
			 .row1{
				 color: #125C48;
				 font-size:40rpx;
				 font-weight:600;
			 }
			 .row2{
				 margin-top: 23rpx;
				 display: flex;
				 align-items: center;
				 justify-content: center;
				 button{
				 		 padding: 0;
				 		 background: transparent;
				 		 overflow: auto;
				 		 display: flex;
				 		 align-items: center;
				 		 
				 }
				 .txt{
					 font-size:34rpx;
					 font-weight:500;
					 color:rgba(18,92,72,1);
					 // line-height:42rpx;
				 }
				
				 .arrow{
				 				
								  margin-left: 7rpx;
								  font-size: 20rpx;
								   line-height:42rpx;
				 				  image{
									 width: 34rpx;
									  height: 34rpx;
								  }
								  .line{
								  					 width: 2rpx;
								  					 height:18rpx ;
								  					 margin: 0 14rpx 2rpx;
								  					 line-height: 24rpx;
								  }
				 }
			 }
			
		 }
		 .lineBox{
			  width: 100%;
			 position: absolute;
			 top: 260rpx;
			 left: 0;
			 display: flex;
			 justify-content: space-between;
			 align-items: center;
			 .left{
				 width: 8rpx;
				 height: 17rpx;
			 }
			 .line{
				 width: 600rpx;
				 height: 4rpx;
			 }
			 .right{
				 width: 8rpx;
				 height: 17rpx;
			 }
		 }
		 .leftBottom{
			 position: absolute;
			 left: 0;
			 bottom: 90rpx;
			 width: 300rpx;
			 height: 314rpx;
			 .naifen{
				 width: 100%;
				 height: 100%;
				 z-index: 10;
				 position: absolute;
				 left: 0;
				 top: 0;
			 }
		 }
		 .rightBottom{
			 position: absolute;
			 right: 40rpx;
			 bottom: 90rpx;
			 display: flex;
			 flex-direction: column;
			 align-items: flex-end;
			 .txt1{
				 font-size:40rpx;
				 font-family:PingFang SC;
				 font-weight:600;
				 color:rgba(18,92,72,1);
				 line-height:20rpx;
			 }
			 .txt2{
				 margin-top: 46rpx;
				 font-size:42rpx;
				 font-family:PingFang SC;
				 font-weight:600;
				 color:rgba(18,92,72,1);
				 line-height:20rpx;
			 }
			 .txt3{
				 margin-top: 40rpx;
				 font-size:31rpx;
				 font-family:PingFang SC;
				 font-weight:500;
				 color:rgba(18,92,72,1);
				 line-height:15rpx;
			 }
			 .btn{
				 margin-top: 44rpx;
				 width:258rpx;
				 height:81rpx;
				 background:linear-gradient(86deg,rgba(26,154,108,1) 0%,rgba(46,130,86,1) 100%);
				 border-radius:41rpx;
				 font-size:40rpx;
				 font-family:PingFang SC;
				 font-weight:400;
				 color:rgba(254,255,255,1);
				 text-align: center;
				 line-height:81rpx ;
				 
			 }
		 }
	 }
	 .box2{
		z-index: 10;
		 display: flex;
		 flex-direction: row;
		 width: 100%;
		 .navItem{
			 flex:1;
			 display: flex;
			 flex-direction: column;
			 align-items: center;
			 image{
				 width: 106rpx;
				 height: 106rpx;
				 margin-bottom: 25rpx;
			 }
			 text{
				 font-size:32rpx;
				 font-family:PingFang SC;
				 font-weight:500;
				 color:rgba(229,248,225,1);
				 line-height:37rpx;
			 }
		 }
	 }
	 
	
 }
</style>
