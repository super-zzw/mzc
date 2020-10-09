<template>
	<view>
		<view class="sModal" v-if="show_modal">
		           <view class="sModalBox animated fadeIn">
								 <image src="../static/close.png" mode="widthFix" class="close" @tap="$parent.show_modal=false"></image>
		               <view class="sModalHead">	               
		                   <view class="sModalHeadItem sModalHeadItem1">说明</view>
		               </view>
		               <view class="sModalBody">
		                   <view class="sModalBodyItem">
							   <text class="title">我的碳减排量如何计算？</text>
							   <text class="content">碳减排量根据您累计回收的空罐数量计算而得。经过科学测算，平均每回收一个空奶粉金属罐可以减少98g碳排放。每成功完成一单，系统将自动为您积累碳减排量（PS：物流小哥上门收件会增加碳排放，因此每一单需要额外减去20g碳减排量）。</text>
						   </view>
		                   <view class="sModalBodyItem">
							   <text class="title">我的环保积分如何获得？</text>
							   <text class="content">环保积分与您参与回收的次数有关。每成功完成一单空罐回收，您都将获得100环保积分，积分可用于公益捐赠或兑换好礼，点击您的头像进入“环保积分使用”即可使用（PS：获得100环保积分的贡献相当于植树一棵）。</text>
						   </view>
		              <view class="btns">
						  <view class="btn" @tap="$parent.show_modal=false">已了解</view>
						  <!-- <view class="btn" @tap="toLog">查看记录</view> -->
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
			// toLog(){
			// 	this.$parent.show_modal=false
			// 	this.$emit('toLog')
			// }
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
							// justify-content: space-around;
							justify-content: center;
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
