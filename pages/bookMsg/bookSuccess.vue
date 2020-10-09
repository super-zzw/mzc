<template>
	<view>
		<background></background>
		<view class="main">
			<view class="wraper">
				<image :src="imgUrl"  class="successImg"></image>
				<image src="../../static/success.png" class="successIcon"></image>
				<text class="successTxt">您已预约成功，请等待物流上门回收</text>
				<view class="options">
					<view  class="index btn"  @tap="toIndex">返回首页</view>
					<view :url="'../index/orderDetail?id='+orderId" class="order btn" @tap="toOrder">查看订单</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
             orderId:'',
			 imgUrl:''
			};
		},
		onLoad(opt) {
			uni.showLoading({
				title:'加载中...'
			})
			this.orderId=opt.id
			this.getImg()
		},
		methods:{
			getImg(){
				this.$http({
					apiName:'getImgList',
					data:{
						type:2
					}
				}).then(res=>{
					
					this.imgUrl=res.data[0].imageUrl
					uni.hideLoading()
				})
			},
			toIndex(){
				uni.redirectTo({
					url:'../index/index'
				})
			},
			toOrder(){
				uni.redirectTo({
					url:'../index/orderDetail?id='+this.orderId
				})
			}
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
					background: linear-gradient(86deg,rgba(26,103,82,1) 0%,rgba(46,130,86,1) 100%);
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
