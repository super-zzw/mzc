<template>
	<view>
		<background></background>
		<view class="main">
			<view class="header">
				<image src="../../static/icon2.png" class="avatar"></image>
			</view>
			<view class="wraper cancelTxt">
				订单状态：订单已取消
			</view>
			<view class="divider1"></view>
			<view class="wraper bookMsg">
				<h1 class="title">预约信息</h1>
				<view class="contentBox">
					<text class="txt">订单编号：MJ378975874889212</text>
					<text class="txt">用户姓名：张笑笑</text>
					<text class="txt">联系手机：13787676542</text>
					<text class="txt">预约上门时间：2019/11/01 09:00-11:00</text>
					<text class="txt">回收品类：奶粉罐</text>
					<text class="txt">回收数量：10</text>
					<text class="txt">留言备注：请准时上门回收，上门前提前电话告知</text>
					<text class="txt">订单取消时间：2019/10/30 09:36</text>
				</view>
				<navigator url="./index" class="btn">再次预约上门回收</navigator>
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
	.main {

		// display: flex;
		// flex-direction: column;
		.wraper {
			padding: 50rpx 0 38rpx 45rpx;

		}

		.cancelTxt {
			font-size: 29rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(178, 30, 0, 1);
			line-height: 20rpx;
		}

		.bookMsg {
			.title {
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: 600;
				color: rgba(38, 84, 71, 1);
				line-height: 20rpx;
			}

			.contentBox {
				margin-top: 43rpx;

				.txt {
					display: block;
					font-size: 27rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color: rgba(38, 84, 71, 1);
					line-height: 25rpx;
					margin-top: 24rpx;
				}
			}
            .btn{
				margin: 0 auto;
				margin-top: 85rpx;
				
				width:372rpx;
				height:81rpx;
				background:rgba(62,136,98,1);
				border-radius:41rpx;
				font-size:34rpx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(254,255,255,1);
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>
