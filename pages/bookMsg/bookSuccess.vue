<template>
	<view>
		<background></background>
		<view class="main">
			<view class="wraper">
				<image src="../../static/bookSuccess.png"  class="successImg"></image>
				<image src="../../static/success.png" class="successIcon"></image>
				<text class="successTxt">您已预约上门成功，请等待京东物流上门</text>
				<view class="options">
					<navigator url="../index/index" class="index btn" hover-class="none">返回首页</navigator>
					<navigator :url="'../index/orderDetail?id='+orderId" class="order btn" hover-class="none">查看订单</navigator>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
             orderId:''
			};
		},
		onLoad(opt) {
			this.orderId=opt.id
		}
	}
</script>

<style lang="less" scoped>
	.main {

		.wraper {
			padding: 47rpx 43rpx 0;
			display: flex;
			justify-content: center;
            flex-direction: column;
			align-items: center;
			.successImg {
				width: 577rpx;
				height: 236rpx;
			}
			.successIcon{
				margin-top: 78rpx;
				margin-bottom: 40rpx;
				width: 137rpx;
				height: 137rpx;
			}
			.successTxt{
				font-size:33rpx;
				font-family:PingFang SC;
				font-weight:600;
				color:rgba(39,84,72,1);
				
			}
			.options{
				margin-top: 75rpx;
				display: flex;
				justify-content: space-around;
				width: 100%;
				.btn{
					width: 258rpx;
					height: 81rpx;
					border-radius:41rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size:34rpx;
					font-family:PingFang SC;
					font-weight:500;
				}
				.index{
					color: #FEFFFF;
					background: #2E8356;
				}
				.order{
					border:3rpx solid rgba(17,92,73,1);
					color: #125C49;
					background-color: #fff;
				}
			}
				
		}

	}
</style>
