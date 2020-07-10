<template>
	<view>
		<view class="sModal" v-if="show_modal">
					
		           <view class="sModalBox animated fadeIn">
								 <image src="../static/close.png" mode="widthFix" class="close" @tap="$parent.show_modal=false"></image>
		               <view class="sModalHead">	               
		                   <view class="sModalHeadItem sModalHeadItem1">环保排碳量说明</view>
		               </view>
		               <view class="sModalBody">
		                   <view class="sModalBodyItem">
							   <text class="title">预约上门回收</text>
							   <text class="content">按回收奶粉罐数量进行积分，每个20分</text>
						   </view>
		                   <view class="sModalBodyItem">
							   <text class="title">美赞臣官网将不定期举行活动</text>
							   <text class="content">环保排行榜前列的环保达人，将有机会获取美赞臣环保小礼物或参加专属环保活动，快来参与吧!</text>
						   </view>
		              <view class="btns">
						  <view class="btn" @tap="$parent.show_modal=false">已了解</view>
						  <view class="btn" @tap="toLog">查看记录</view>
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
			}
		},
		props:['show_modal'],
		methods:{
			toLog(){
				this.$parent.show_modal=false
				this.$emit('toLog')
			}
		}
	}
</script>

<style lang="less" scoped>
 .sModal{
	       width: 100%;
	       height: 100vh;
	       position: absolute;
	       left: 0;
	       top: 0;
	 		  
	 			box-sizing: border-box;
	       background-color: rgba(0, 0, 0, 0.5);
	       z-index: 100;
	 		
	           .sModalBox{
	 					.close{
	 						width: 77rpx;
	 						height: 77rpx;
	 						margin-bottom: 20rpx;
	 					}
	               position: absolute;
	               left: 50%;
	               bottom:28%;
	               width: 100%;
	 					   padding: 0 50rpx;
	 						transform: translate(-50%,-50%);
	 						height: 500rpx;
	             
	               box-sizing: border-box;
	               animation-duration: .8s!important;
	 					text-align: center;
	 					
	               .sModalHead{
	                   display: flex;
	                   justify-content: center;
	                   align-items: center;
	 						background:rgba(26,103,82,1); ;
	 						 // text-align: center;
	 						 height: 80rpx;
	                   .sModalHeadItem{
	                      
	                       
	                   }
	                   .sModalHeadItem1{
	                       font-weight: 500;
	                       color: #fff;
	                       font-size: 32rpx;
	                      
	                   }
	                   .sModalHeadItem2{
	                       font-size: 28rpx;
	                       color: #2790E0;
	                       text-align: right;
	                   }
	               }
	               .sModalBody{
	                   font-size: 28rpx;
	                   color: #303133;
	                  padding: 20rpx;
	 						background: #fff;
	                   .sModalBodyItem{
	                       margin-bottom: 30rpx;
	                       line-height: 44rpx;
	 					  text-align: left;
						  display: flex;
						  flex-direction: column;
						  .title{
							  font-size: 28rpx;
							  color: #999;
							  margin-bottom: 10rpx;
						  }
						  .content{
							  font-size: 26rpx;
							  color: #000;
						  }
	                   }
	                    .btns{
							margin-top: 80rpx;
							display: flex;
							justify-content: space-around;
							.btn{
								width: 250rpx;
								height: 70rpx;
								border-radius: 40rpx;
								font-size: 34rpx;
								background: rgba(26,103,82,1);
								color: #fff;
								display: flex;
								justify-content: center;
								align-items: center;
								
							}
						}
	 						
	               }
	           }
	   }
</style>
