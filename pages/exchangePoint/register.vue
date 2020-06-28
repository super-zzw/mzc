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
		<view class="mask"></view>
		<view class="registerBox">
			<image src="../../static/shop.png" class="image"></image>
			<view class="contentBox">
				<view class="inputBox username">
					<text class="label">用户名</text>
					<input type="text" value="" placeholder="请输入用户名(20个英文字符以内）" placeholder-style="color:#999"/>
				</view>
				<view class="inputBox phone">
					<text class="label">手机号</text>
					<input type="text" value="" placeholder="请输入你的手机号" placeholder-style="color:#999"/>
					<view class="getCode">获取验证码</view>
				</view>
				<view class="inputBox codeBox">
					<text class="label">验证码</text>
					<input type="text" value="" placeholder="请输入你收到的6位验证码" placeholder-style="color:#999"/>
				</view>
				<view class="options">
					<view class="btn btn1">立即注册</view>
					<view class="btn btn2">再想想</view>
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
   .registerBox{
	   position: absolute;
	   top: 50%;
	   left: 50%;
	   transform: translate(-50%,-50%);
	   width: 669rpx;
	   // font-size: 0;
	   padding-bottom: 57rpx;
	   background: #fff;
	   border-radius:7rpx;
	   image{
		   width: 100%;
		   height: 205rpx;
	   }
	   .contentBox{
		   padding: 53rpx 59rpx 0;
		   .inputBox{
			   display: flex;
			   flex-direction: row;
			   position: relative;
			   align-items: center;
			   .label{
				   font-size:32rpx;
				   font-family:PingFang SC;
				   font-weight:400;
				   color:rgba(19,66,110,1);
				   margin-left: 11rpx;
			   }
			   input{
				   font-size:27rpx;
				   font-family:PingFang SC;
				   font-weight:400;
				   color:rgba(153,153,153,1);
				  margin-left: 24rpx;
				  flex:1;
			   }
			   .getCode{
				   width:169rpx;
				   height:55rpx;
				   border:1rpx solid rgba(19,66,110,1);
				   border-radius:27rpx;
				   margin-left: 10rpx;
				   font-size:24rpx;
				   font-family:PingFang SC;
				   font-weight:400;
				   color:rgba(19,66,110,1);
				   display: flex;
				   justify-content: center;
				   align-items: center;
				  
			   }
			   
		   }
		   .inputBox:after{
			   content: '';
			   position: absolute;
			   left: 0;
			   bottom: 0;
			   height: 1rpx;
			   background:rgba(205,205,205,1);
			   display: block;
			   width: 100%;
		   }
		   .username{
			   padding-bottom: 28rpx;
		   }
		   .phone{
			   padding: 19rpx 0;
		   }
		   .codeBox{
			   padding:  20rpx 0 10rpx;
			   .label{line-height: 64rpx;}
		   }
		  .options{
		  			   margin-top: 43rpx;
					    display: flex;
					    flex-direction: row;
						justify-content: space-between;
		  			   .btn{
		  				   width:236rpx;
		  				   height:83rpx;
		  				
		  				   border-radius:41rpx;
						   display: flex;
						   justify-content: center;
						   align-items: center;
						  font-size:32rpx;
						  font-family:PingFang SC;
						  font-weight:600;
						 
						   
		  			   }
					   .btn1{
						   color: #fff;
						      background:#325BAE;
					   }
					   .btn2{
						   color: #325BAE;
						   border:2rpx solid rgba(50,91,174,1);
						   background: #fff;
					   }
		  }
	   }
   }
</style>
