<template>
	<view class="bgContainer" :style="{background:color }">
		<image src="../static/bg12.png" class="bg1" ></image>
		<image src="../static/bg11.png" class="bg2"></image>
		<image src="../static/bg13.png" class="bg3"></image>
	</view>
</template>

<script>
	export default {
		props:{
			color:{
				default:'#E5F7E1'
			}
		},
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
		z-index: -1;
		.bg1{
			  width: 100%;
			   height: 665rpx;
			   position: fixed;
			   top: 0;
			   left: 0;
			   
		}
		.bg2{
			   height: 700rpx;
			   width: 508rpx;
			   position: fixed;
			   bottom: 0;
			   left: 0;
			   
		}
		.bg3{
			   height: 479rpx;
			   width: 234rpx;
			   position: fixed;
			   bottom: 0;
			   right: 0;
			   
		}
	}
  
</style>
