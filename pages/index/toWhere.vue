<template>
	<view>
		 <image src="https://mdhs.meadcan.com/profile/upload/pic2-1.png" mode="widthFix"></image>
		<image src="https://mdhs.meadcan.com/profile/upload/pic2-2.png" mode="widthFix"></image> 
		<div class="box">
			<image src="https://mdhs.meadcan.com/profile/upload/pic2-3.png" mode="widthFix"></image>
			<div class="liaojie" @click="toDetail">了解详情
			<image src="../../static/more.png" mode=""></image></div>
		</div>
		<image src="https://mdhs.meadcan.com/profile/upload/pic2-4.png" mode="widthFix"></image>
		<image src="https://mdhs.meadcan.com/profile/upload/pic2-5.png" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toDetail(){
				uni.navigateTo({
					url:'./knowDetail'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
  
  image{
	  width: 100%;
	  	 
	  display: block;
  }
  .box{
	  position: relative;
	  .liaojie{
	  	  position: absolute;
	  	  bottom: 0;
		  left: 80rpx;
		  color: #11b97f;
		  display: flex;
		 font-size: 35rpx;
		 align-items: center;
		  font-weight: 600;
		 border-bottom: 4rpx solid #11b97f;
		  image{
			  width: 40rpx;
			  height: 40rpx;
			  margin-left: 10rpx;
		  }
	  }
  }
 
</style>
