<template>
	<view class="bgContainer" :style="{background:color }">
		<image src="../static/bg1.png" class="bg1" ></image>
		<image src="../static/bg2.png" class="bg2"></image>
	</view>
</template>

<script>
	export default {
		props:['color'],
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
			   height: 523rpx;
			   position: fixed;
			   top: 0;
			   left: 0;
			   
		}
		.bg2{
			   height: 470rpx;
			   width: 100%;
			   position: fixed;
			   bottom: 0;
			   left: 0;
			   
		}
		
		
	}
</style>
