<template>
	<view class="container">
		<background color="#1A6752"></background>
		<image src="../../static/close.png" @tap="isMask=false" class="close"></image>
		<view class="main">
			<view class="mainContent">
				<view class="adItem" v-for="(item,index) in 4" :key="index">
					<image src="../../static/award.png" class="left"></image>
					<view class="right">奶罐体验 I 开启全新回 收方式</view>
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
		// background-color: #1A6752;
		width: 100vw;
		height: 100vh;
		.close{
					   width: 77rpx;
					   height: 77rpx;
					   position: absolute;
					   top: 30rpx;
					   left: 50%;
					   margin-left: -39rpx;
			}
		.main{
			   background-color: #E5F7E1;
		        padding-top: ;
				padding:46rpx 35rpx 40rpx;
				
				.mainContent{
					height: 970rpx;
					overflow: scroll;
					.adItem{
									  
									   height:245rpx;
									   background:rgba(255,255,255,1);
									   border:1rpx solid rgba(116, 194, 100, 1);
									   box-shadow:0px 9rpx 11rpx 1rpx rgba(157,196,151,0.32);
									   border-radius:33rpx;
									   padding: 28rpx 33rpx; 
									   margin-bottom: 30rpx;
									   box-sizing: border-box;
									   display: flex;
									   flex-direction: row;
									   align-items: center;
									   justify-content: space-between;
									   .left{
										   width: 187rpx;
										   height: 187rpx;
									   }
									   .right{
										   font-size:31rpx;
										   width: 300rpx;
										   font-family:PingFang SC;
										   font-weight:500;
										   color:rgba(26,103,82,1);
										   line-height:43rpx;
									   }
					}
				}
			  
			  
		}
	}
	
</style>
