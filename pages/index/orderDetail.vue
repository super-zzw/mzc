<template>
	<view>
		<background></background>
		<view class="main">
			<view class="header">
				<image src="../../static/icon2.png" class="avatar"></image>
			</view> 
			<view class="orderBox">
				<view class="orderItem"  >
					<view class="wraper">
						<view class="orderItem">
							<view class="status status1">订单状态：{{statusTxt}}</view>
							<text class="tip">您已预约上门成功，请等待京东物流上门收件</text>
							<view class="steps">
								<image  class="icon" :src="icon(0)"></image>
								<view class="line" :style="{background:step>=1?'#74C264':'#AEAEAE'}"></view>
								<image  class="icon" :src="icon(1)"></image>
								<view class="line" :style="{background:step>=2?'#74C264':'#AEAEAE'}"></view>
								<image  class="icon" :src="icon(2)"></image>
								<view class="line" :style="{background:step>=3?'#74C264':'#AEAEAE'}"></view>
								<image  class="icon" :src="icon(3)"></image>
								
							</view>
							<view class="txtBox">
								<text>预约成功</text>
								<text>预约成功</text>
								<text>预约成功</text>
								<text>预约成功</text>
							</view>
						</view>
					</view>
					
				</view>
		
			
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusTxt:'代取件',
				step:1,
				// icon:'icon11.png'
			};
		},
		computed:{
			icon(){
				return function(i){
					if(this.step==i){
						return require("@/static/icon22.png")
					}
					if(i<this.step){
						return require("@/static/icon11.png")
					}
					return require("@/static/icon33.png")
				}
					
				
			}
		}
	}
</script>

<style lang="less">
  .orderItem{
	  .status1{
		  color: #D6A500;
		  margin-top: 49rpx;
	  }
	  .tip{
		  display: block;
		  margin-top: 37rpx;
		  font-size:26rpx;
		  font-family:PingFang SC;
		  font-weight:400;
		  color:rgba(39,84,72,1);
		  line-height:20rpx;
	  }
	  .steps{
		  margin-top: 50rpx;
		  margin-left: 26rpx;
		  display: flex;
		  flex-direction: row;
		  align-items: center;
		  .icon{
			  width: 31rpx;
			  height: 31rpx;
			  background: url(../../static/icon33.png) no-repeat;
			  background-size: cover;
		  }
		  .line{
			  width: 140rpx;
			  height: 3rpx;
			  background: #AEAEAE;
		  }

	  }
	  .txtBox{
	  			  margin-top: 24rpx;
	  			  display: flex;
	  			  flex-direction: row;
	  			  // justify-content: space-around;
				  text{
					  // flex: 1;
					  font-size:22rpx;
					  font-family:PingFang SC;
					  font-weight:400;
					  color:rgba(39,84,72,1);
					  line-height:20rpx;
					  text-align: center;
					  margin-right: 83rpx;
					  
				  }
				  text:last-child{
					  margin-right: 0;
				  }
	  }
  }
</style>
