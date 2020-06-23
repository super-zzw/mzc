<template>
	<view class="indexContainer">
		<background1></background1>
		<view class="box1">
			<view class="avatarBox">
				<image src="../../static/naifen.png" mode="" class="avatar"></image>
			</view>
			<view class="titleBox">
				<text class="row1">宝宝妈咪一家人</text>
				<view  class="row2">
					<text class="txt">0g 碳减排量</text>
					
					<image src="../../static/line.png" class="line"></image>
					<text class="txt">0 环保积分</text>
					<image src="../../static/arrowRight.png" class="arrow"></image>
				</view>
				
			</view>
			
			<view class="lineBox">
				<image src="../../static/bg5.png" mode="" class="left"></image>
				<image src="../../static/bg4.png" mode="" class="line"></image>
				<image src="../../static/bg6.png" mode="" class="right"></image>
			</view>
			<view class="leftBottom">
				<image src="../../static/naifen.png"  class="naifen"></image>
				<image src="../../static/bg3.png" class="bg3"></image>
			</view>
			<view class="rightBottom">
				<view class="txt1 ">免费上门</view>
				<view class="txt2">加入空罐回收计划</view>
				<view class="txt3 ">还有环保积分等你拿</view>
				<view class="btn">立即预约</view>
			</view>
		</view>
		<view class="box2">
			<view class="navItem">
				<image src="../../static/icon1.png" ></image>
				<text>回收入门秘籍</text>
			</view>
			<view class="navItem">
				<image src="../../static/icon1.png" ></image>
				<text>空罐去哪儿了</text>
			</view>
			<view class="navItem">
				<image src="../../static/icon1.png" ></image>
				<text>美罐最美活动</text>
			</view>
		</view>
	</view>
</template>

<script>
	// import background from '../../components/background.vue'
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
 .indexContainer{
	 background: #1A6852;
	 height: 1453rpx;
	 display: flex;
	 height: 100vh;
	 flex-direction: column;
	justify-content: space-around;
	 // padding-top: 282rpx;
	 padding-bottom: 100rpx;
	 box-sizing: border-box;
	 position: relative;
	 .box1{
		 // position: absolute;
		 // top: 282rpx;
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
			 .avatar{
				 width: 150rpx;
				 height: 151rpx;
				 border-radius:50% ;
				 }
		 }
		 .titleBox{
			 // position: absolute;
			 // top: 105rpx;
			 // left: 118rpx;
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
				 .txt{
					 font-size:36rpx;
					 font-weight:500;
					 color:rgba(18,92,72,1);
					 line-height:20rpx;
				 }
				 .line{
					 width: 2rpx;
					 height:18rpx ;
					 margin: 0 22rpx 2rpx;
					 line-height: 24rpx;
				 }
				 .arrow{
				 				 width: 34rpx;
				 				  height: 34rpx;
								  margin-left: 7rpx;
				 				  // position: absolute;
				 				  // right: -42rpx;
				 				  // bottom: 3rpx;
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
			 bottom: 0;
			 width: 322rpx;
			 height: 420rpx;
			 .naifen{
				 width: 100%;
				 height: 100%;
				 z-index: 10;
				 position: absolute;
				 left: 0;
				 top: 0;
			 }
			 .bg3{
				 height: 403rpx;
				 width: 100%;
				 position: absolute;
				 left: 0;
				 bottom: 0;
				 
			 }
		 }
		 .rightBottom{
			 position: absolute;
			 right: 43rpx;
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
				 background:#1A9A6C;
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
