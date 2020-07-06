<template>
	<view class="container">
		<background></background>
		<view class="mainCon">
			<view class="avatar"><image :src="avatarUrl" ></image></view>
			<view class="titleBox">
				<text class="row1">{{nickName}}</text>
				<view  class="row2">
					<text class="txt">{{carbonEmissions||0}}g 碳减排量</text>
					
					<image src="../../static/line.png" class="line"></image>
					<text class="txt">{{integral||0}} 环保积分</text>
				</view>
				
			</view>
			<view class="services">
				<view class="item" @tap="toOrderLog">
					<image src="../../static/icon4.png" mode=""></image>
					<text>回收订单</text>
				</view>
				<view class="item" @tap="toUsePoint">
					<image src="../../static/icon5.png" mode=""></image>
					<text>环保积分使用</text>
				</view>
				<view class="item" @tap="toPointList">
					<image src="../../static/icon6.png" mode=""></image>
					<text>环保积分记录</text>
				</view>
				<view class="item" @tap="toAchievement">
					<image src="../../static/icon7.png" mode=""></image>
					<text>公益成就</text>
				</view>
			</view>
			<navigator url="#" class="feedback">问题反馈</navigator>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	
	export default {
		data() {
			return {
				carbonEmissions:0,
				integral:0
			};
		},
		computed:{
			...mapState(['isLogin','userInfo']),
			avatarUrl(){
				return uni.getStorageSync('userInfo').avatarUrl
			},
			nickName(){
				return uni.getStorageSync('userInfo').nickName
			}
		},
		
	async onLoad() {
			uni.showLoading({
				title:"加载中...",
			})
			await this.getUser()
			
		},
		methods:{
			toOrderLog(){
				uni.navigateTo({
					url:'./orderLog'
				})
			},
			toPointList(){
				uni.navigateTo({
					url:'/pages/exchangePoint/pointLog'
				})
			},
			toUsePoint(){
				uni.navigateTo({
					url:'../exchangePoint/index'
				})
			},
			toAchievement(){
				uni.navigateTo({
					url:'../achievement/index'
				})
			},
			getUser(){
				this.$http({
					apiName:'getUser'
				}).then(res=>{
					this.carbonEmissions=res.data.carbonEmissions
					this.integral=res.data.integral
					uni.hideLoading()
				}).catch(err=>{})
			},
		}
	}
</script>

<style lang="less" scoped>
  .container{
	  // background: #E5F7E1;
	  // height: 100vh;
	 
	 
	  .mainCon{
		   padding: 0 120rpx;
		  display: flex;
		  // justify-content: center;
		  align-items: center;
		  flex-direction: column;
		  .avatar{
		  		  margin-top: 128rpx;
		  		  width: 164rpx;
		  		  height: 164rpx;
				border-radius: 50%;
				border:7rpx solid rgba(61,135,98,1);
		  		  image{
		  			  width: 100%;
		  			  height: 100%;
					   border-radius:50% ;
					  
		  		  }
		  }
		  .titleBox{
		  			 // position: absolute;
		  			 // top: 105rpx;
		  			 // left: 118rpx;
		  			 text-align: center;
		          margin-top: 39rpx;
		  
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
		  				 .txt{
		  					 font-size:34rpx;
		  					 font-weight:500;
		  					 color:rgba(18,92,72,1);
		  					 line-height:20rpx;
		  				 }
		  				 .line{
		  					 width: 2rpx;
		  					 height:18rpx ;
		  					 margin: 0 14rpx 2rpx;
		  					 line-height: 24rpx;
		  				 }
		  				
		  			 }
		  			
		  }
		  .services{
		  		  margin-top: 65rpx;
		  		  display: flex;
		  		  flex-wrap: wrap;
		  		  justify-content: space-between;
		  		  .item{
		  		    height: 223rpx;
					width: 220rpx;
		  			display: flex;
		  			flex-direction: column;
		  			justify-content: space-between;
		  			align-items: center;
					margin-bottom: 64rpx;
		  			  image{
		  				  width: 160rpx;
		  				  height: 160rpx;
		  			  }
					  text{
						font-size:36rpx;
						font-family:PingFang SC;
						font-weight:600;
						color:rgba(42,104,83,1);
						line-height:20rpx;
					  }
		  		  }
		  }
		  .feedback{
			  margin-top: 30rpx;
			  font-size:36rpx;
			  font-family:PingFang SC;
			  font-weight:600;
			  color:rgba(26,103,82,1);
		  }
		  
	  }
	 
  }
</style>
