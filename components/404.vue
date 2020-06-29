<template>
	<view class="container">
		<image src="../static/404.png" ></image>
		<text>页面出错</text>
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

<style lang="less">
  .container{
	  width: 100vw;
	  height: 100vh;
	  background-color: #E5F7E1;
	  overflow: hidden;
	  text-align: center;
	  image{
		  width:451rpx;
		  height:349rpx;
		  background:rgba(229,247,225,1);
		  margin:253rpx auto 0;
		  display: block;
		  margin-bottom: 30rpx;
	  }
	  text{
		  font-size:42rpx;
		  font-family:PingFang SC;
		  font-weight:550;
		  color:rgba(26,103,82,1);
		  
	  }
  }
</style>
