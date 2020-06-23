<template>
	<view class="bgContainer">
		<image src="../static/bg1.png" class="bg1" ></image>
		<image src="../static/bg2.png" class="bg2"></image>
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
.bgContainer{
		width: 100vw;
		height: 100vh;
		position: fixed;
		.bg1{
			  width: 100%;
			   height: 316rpx;
			   position: fixed;
			   top: 0;
			   left: 0;
			   
		}
		.bg2{
			   height: 700rpx;
			   width: 100%;
			   position: fixed;
			   bottom: 0;
			   left: 0;
			   
		}
		
		
	}
</style>
