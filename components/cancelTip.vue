<template>
	<view>
		<background></background>
		<view class="main">
			<image src="../static/success.png" class="cancelIcon"></image>
			<text class="cancelText">您已成功取消订单</text>
			<view class="options">
				<view  @tap="toIndex" class="btn btn1">返回首页</view>
				<view  @tap="toBook" class="btn btn2">再次预约</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			toIndex(){
				uni.reLaunch({
					url:'../pages/index/index'
				})
			},
			toBook(){
				
				uni.reLaunch({
					url:'../pages/bookMsg/editBookMsg'
				})
			}
		}
	}
</script>

<style lang="less">
    .main{
		display: flex;
		
		flex-direction: column;
		align-items: center;
		.cancelIcon{
			margin-top: 114rpx;
			width: 137rpx;
			height: 137rpx;
		}
		.cancelText{
			margin-top: 40rpx;
			font-size:34rpx;
			font-family:PingFang SC;
			font-weight:600;
			color:rgba(39,84,72,1);
		}
		.options{
			margin-top: 76rpx;
			width: 100%;
			display: flex;
			justify-content: space-around;
			.btn{
				width:258rpx;
				height:81rpx;
				border-radius:41rpx;
				font-size:34rpx;
				font-family:PingFang SC;
				font-weight:500;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.btn1{
				background:linear-gradient(86deg,rgba(26,104,82,1) 0%,rgba(46,131,86,1) 100%);
				color: #fff;
			}
			.btn2{
				border:3rpx solid rgba(18,92,73,1);
				background: #fff;
				color: #125C49;
			}
		}
	}
</style>
