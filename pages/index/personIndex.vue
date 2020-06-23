<template>
	<view class="container">
		<background></background>
		<view class="mainCon">
			<view class="avatar"><image src="../../static/icon1.png" ></image></view>
			<view class="titleBox">
				<text class="row1">宝宝妈咪一家人</text>
				<view  class="row2">
					<text class="txt">0g 碳减排量</text>
					
					<image src="../../static/line.png" class="line"></image>
					<text class="txt">0 环保积分</text>
				</view>
				
			</view>
			<view class="services">
				<view class="item">
					<image src="../../static/icon4.png" mode=""></image>
					<text>回收订单</text>
				</view>
				<view class="item">
					<image src="../../static/icon5.png" mode=""></image>
					<text>环保积分兑换</text>
				</view>
				<view class="item">
					<image src="../../static/icon6.png" mode=""></image>
					<text>环保积分记录</text>
				</view>
				<view class="item">
					<image src="../../static/icon7.png" mode=""></image>
					<text>公益成就</text>
				</view>
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
  .container{
	  background: #E5F7E1;
	  height: 100vh;
	  padding: 0 140rpx;
	 
	  .mainCon{
		  display: flex;
		  // justify-content: center;
		  align-items: center;
		  flex-direction: column;
		  .avatar{
		  		  margin-top: 128rpx;
		  		  width: 164rpx;
		  		  height: 164rpx;
		  		  image{
		  			  width: 100%;
		  			  height: 100%;
		  		  }
		  }
		  .titleBox{
		  			 // position: absolute;
		  			 // top: 105rpx;
		  			 // left: 118rpx;
		  			 text-align: center;
		          margin-top: 39rpx;
		  
		  			 .row1{
		  				 color: #125C48;
		  				 font-size:40rpx;
		  				 font-weight:600;
		  			 }
		  			 .row2{
		  				 margin-top: 23rpx;
		  				 display: flex;
		  				 align-items: center;
		  				 justify-content: center;
		  				 .txt{
		  					 font-size:36rpx;
		  					 font-weight:500;
		  					 color:rgba(18,92,72,1);
		  					 line-height:20rpx;
		  				 }
		  				 .line{
		  					 width: 2rpx;
		  					 height:18rpx ;
		  					 margin: 0 22rpx 2rpx;
		  					 line-height: 24rpx;
		  				 }
		  				
		  			 }
		  			
		  }
		  .services{
		  		  margin-top: 65rpx;
		  		  display: flex;
		  		  flex-wrap: wrap;
		  		  justify-content: space-between;
		  		  .item{
		  		    height: 223rpx;
					width: 220rpx;
		  			display: flex;
		  			flex-direction: column;
		  			justify-content: space-between;
		  			align-items: center;
					margin-bottom: 64rpx;
		  			  image{
		  				  width: 160rpx;
		  				  height: 160rpx;
		  			  }
					  text{
						font-size:36rpx;
						font-family:PingFang SC;
						font-weight:600;
						color:rgba(42,104,83,1);
						line-height:20rpx;
					  }
		  		  }
		  }
	  }
	 
  }
</style>
