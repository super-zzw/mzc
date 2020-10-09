<template>
	<view>
		 <image src="https://www.meadcan.com/profile/upload/pic2-1.png" mode="widthFix"></image>
		<image src="https://www.meadcan.com/profile/upload/pic2-2.png" mode="widthFix"></image> 
	
		
		
		<view class="box2">
		 <image src="https://www.meadcan.com/profile/upload/pic2-3.png" mode="widthFix"></image>
			<video
			 src="https://www.meadcan.com/profile/upload/video.mp4" 
			 object-fit="cover"
			controls
			show-play-btn></video>
		</view>
		<image src="https://www.meadcan.com/profile/upload/pic2-4.png" mode="widthFix"></image>
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
  
  image{
	  width: 100%;
	  	 
	  display: block;
  }
  .box2{
	  position: relative;
	  video{
	  	  width: 560rpx;
	  	  height: 330rpx;
		  position: absolute;
		  top: 74rpx;
		  left: 50%;
		  transform: translateX(-50%);
		  z-index: 100;
	  }
	  
  }
</style>
