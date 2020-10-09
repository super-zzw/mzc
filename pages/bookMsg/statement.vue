<template>
	<view class="container">
		<view class="contentBox" v-html="agreement"></view>
		<!-- <view class="bottomBox" v-if="agreement">
			<view class="btn" @tap="iknow">已了解</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				agreement:''
			};
		},
		onLoad(){
			this.getAgreement()
		},
		methods:{
			getAgreement(){
				this.$http({
					apiName:'getAgreement',
					method:'POST',
					data:{
						type :99
					}
				}).then(res=>{
					this.agreement=res.data.content
				})
			},
			// iknow(){
			// 	uni.navigateBack({
					
			// 	})
			// }
		}
	}
</script>

<style lang="less" scoped>
	.container{
		display: flex;
		flex-direction: column;
		// height: 100vh;
		.contentBox{
			// flex: 1;
		
			padding: 20rpx;
			padding-bottom: 50rpx;
		}
		// .bottomBox{
		// 	height: 100rpx;
		// 	display: flex;
		// 	align-items: center;
		// 	justify-content: center;
		// 	background: #fff;
		// 	.btn{
		// 		height: 70rpx;
		// 		display: flex;
		// 		align-items: center;
		// 		justify-content: center;
		// 		background: #196751;
		// 		color: #fff;
		// 		font-size: 36rpx;
		// 		font-weight: 500;
		// 		padding: 0 70rpx;
		// 		border-radius: 35rpx;
		// 		margin-bottom: 30rpx;
		// 	}
		// }
	}
</style>
