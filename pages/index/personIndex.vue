<template>
	<view class="container">
		<background></background>
		<view class="mainCon">
			<view class="avatar"><image :src="userInfo.avatarUrl" ></image></view>
			<view class="titleBox">
				<text class="row1">{{userInfo.nickName}}</text>
				<view  class="row2">
					<text class="txt" @tap="show_modal = true">{{userDetail.carbonEmissions||0}}g 碳减排量</text>
					
					<image src="../../static/line.png" class="line"></image>
					<text class="txt">{{userDetail.integral||0}} 环保积分</text>
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
			<navigator url="#" class="feedback" @tap="toFeedBack" hover-class="none">问题反馈</navigator>
		</view>
		<sModal :show_modal="show_modal" @toLog="toOrderLog"/>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import sModal from '../../components/sModal.vue'
	export default {
		data() {
			return {
				show_modal:false
			};
		},
		components:{sModal},
		computed:{
			...mapState(['isLogin','userInfo','userDetail']),
		},
		
	async onLoad() {
		
		
		},
		onShow() {
			this.$store.dispatch('getUser')
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
			toFeedBack(){
				uni.navigateTo({
					url:'./feedBack'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
  .container{
	  .mainCon{
		   padding: 0 120rpx;
		  display: flex;
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
		  					 font-size:32rpx;
		  					 font-weight:500;
		  					 color:rgba(18,92,72,1);
		  					 line-height:30rpx;
							 text-align: left;
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
		  		  margin-top: 55rpx;
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
