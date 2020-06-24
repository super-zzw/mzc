<template>
	<view>
		<background></background>
		<view class="main">
			<view class="wraper">
				<view class="companyName txt">物流公司：京东物流</view>
				<view class="orderNum txt">订单编号：MJ378975874889212 <text class="copy">复制</text></view>
			</view>
			<view class="divider1"></view>
			<view class="wraper">
				<view class="step">
					<view class="left">
						<image src="../../static/icon_1.png" mode=""></image>
						<view class="line"></view>
					</view>
					<view class="right">
						<text class="title">已下单</text>
						<text class="info">您提交了订单，请等待系统确认</text>
						<text class="time">2020-08-08 15:08:08</text>
					</view>
				</view>
				<view class="step">
					<view class="left">
						<image src="../../static/icon_2.png" mode=""></image>
						<view class="line"></view>
					</view>
					<view class="right">
						<text class="title">已揽件</text>
						<text class="info">[广州市]广州珠海的广州珠海[13798765243]已揽件</text>
						<text class="time">2020-08-08 15:08:08 </text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
   .main{
	   .wraper{
		   padding: 40rpx 33rpx 38rpx 46rpx;
		   .companyName{
			   
		   }
		   .txt{
			   font-size:27rpx;
			   font-family:PingFang SC;
			   font-weight:600;
			   color:rgba(39,84,72,1);
		   }
		   .orderNum{
			   margin-top: 19rpx;
			   .copy{
				   display: inline-block;
				   width:92rpx;
				   height:42rpx;
				   font-size:24rpx;
				   text-align: center;
				   line-height:42rpx ;
				   font-family:PingFang SC;
				   font-weight:500;
				   color:rgba(39,84,72,1);
				   background:rgba(229,247,225,1);
				   border-radius:21rpx;
				   margin-left: 12rpx;
			   }
		   }
		   .step{
			   display: flex;
			   flex-direction: row;
			  
			   .left{
				   width: 42rpx;
				   margin-right: 20rpx;
				   display: flex;
				   justify-content: center;
				   position: relative;
				   image{
					   width: 100%;
					   height: 43rpx;
					   position: absolute;
					   left: 0;
					   top: 0;
				   }
				   .line{
					   width: 3rpx;
					   background:#CDE7C8;
					   height: 100%;
				   }
			   }
			   .right{
				   flex: 1;
				   display: flex;
				   flex-direction: column;
				    padding-bottom: 30rpx;
				   .title{
					   font-size:29rpx;
					   font-family:PingFang SC;
					   font-weight:600;
					   color:rgba(39,84,72,1);
					   margin-bottom: 13rpx;
				   }
				   .info{
					   margin-bottom: 5rpx;
					   font-size:24rpx;
					   font-family:PingFang SC;
					   font-weight:400;
					   color:rgba(39,84,72,1);
				   }
				   .time{
					   font-size:24rpx;
					   font-family:PingFang SC;
					   font-weight:400;
					   color:rgba(39,84,72,1);
				   }
			   }
		   }
	   }
   }
</style>
