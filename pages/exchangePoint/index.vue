<template>
	<view>
		<background></background>
		<view class="main">
			<view class="bigImg">
				<image src="../../static/bg14.png" mode="" ></image>
			</view>
			<view class="wraper">
				<view class="title">环保积分会换绿地保护面积</view>
				<text class="description">公益活动介绍文字：美赞臣（中国）与中华环境保护 基金会以共管方式对xx地区展开保护，用x</text>
				<text class="txt1">目前已累计保护 xxxxx平方米</text>
				<navigator url="../index/index" class="protectBtn">我要保护</navigator>
			</view>
			<view class="divider1"></view>
			<view class="wraper">
				<view class="title color1">目前已累计保护 xxxxx平方米</view>
				<text class="description color1">公益活动介绍文字：美赞臣（中国）与中华环境保护 基金会以共管方式对xx地区展开保护，用x</text>
				<view class="options">
					<navigator url="../index/index" class="btn exchangeBtn">我要兑换</navigator>
					<navigator url="../index/index" class="btn shopBtn">进入蓝臻积分商城</navigator>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
   .main{
	   padding-top: 6rpx;
	   overflow: scroll;
	   .bigImg{
		   width: 98%;
		   height: 318rpx;
		   margin: 0 auto;
		   border-top-left-radius: 47rpx;
		   border-top-right-radius: 47rpx;
		   background: #218C6F;
		   display: flex;
		   align-items: center;
		   justify-content: center;
		   image{
			   width: 643rpx;
			   height: 285rpx;
		   }
	   }
	   .wraper{
		   padding: 30rpx 44rpx 0;
		   display: flex;
		   justify-content: center;
		   flex-direction: column;
		   align-items: center;
		   .title.color1,.description.color1{
			  color:#1C8086; 
		   }
		   .title{
			   font-size:34rpx;
			   font-family:PingFang SC;
			   font-weight:600;
			   color:rgba(62,136,98,1);
			   line-height:32rpx;
			   margin-bottom: 27rpx;
		   }
		   .description{
			   font-size:26rpx;
			   font-family:PingFang SC;
			   font-weight:500;
			   color:rgba(62,136,98,1);
			   line-height:32rpx;
		   }
		   .txt1{
			   margin-top: 50rpx;
			   font-size:34rpx;
			   font-family:PingFang SC;
			   font-weight:600;
			   color:rgba(62,136,98,1);
			   line-height:32rpx;
		   }
		  .protectBtn{
			  width:292rpx;
			  height:81rpx;
			  background:rgba(62,136,98,1);
			  border-radius:41rpx;
			  margin-top: 34rpx;
			  display: flex;
			  justify-content: center;
			  align-items: center;
			  font-size:34rpx;
			  font-family:PingFang SC;
			  font-weight:400;
			  color:rgba(254,255,255,1);
			  line-height:21rpx;
			  margin-bottom: 50rpx;
		  }
		  .options{
			  margin-top: 40rpx;
			  width: 100%;
			  display: flex;
			  justify-content: space-between;
			  .btn{
				  border-radius:45rpx;
				  padding: 23rpx 43rpx;
				  font-size:32rpx;
				  font-family:PingFang SC;
				  font-weight:600;
				  color:rgba(40,78,150,1)
			  }
			  .exchangeBtn{
				  border:3rpx solid rgba(40,78,150,1);
				  color:rgba(40,78,150,1);
			  }
			  .shopBtn{
				  background-color: #274F96;
				  color: #fff;
			  }
		  }
	   }
   }
</style>
