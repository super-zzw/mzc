<template>
	<view>
		<background></background>
		<view class="main">
			<view class="header">
				<image :src="userInfo.avatarUrl" class="avatar"></image>
			</view> 
			<view class="orderBox" v-if="loading">
				<view class="orderItem">
					<view class="wraper">
						<view class="orderItem">
							<view class="status status1" v-if="step==1">订单状态：待取件</view>
							<view class="status status2" v-if="step===3">订单状态：已发放积分</view>
							<view class="status status2" v-if="step===4">订单状态：订单已完成</view>
							<view class="status status2" v-if="step===2">订单状态：已收件</view>
							<text class="tip" v-if="step==1">您已预约上门成功，请等待京东物流上门收件</text>
							<text class="tip" v-if="step==4">环保排碳量+20</text>
							<text class="tip" v-if="step===2||step==3">您的订单正在物流途中，请等待工厂收货确认</text>
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
								<text :style="{color:step>=1?'#265447':'#AEAEAE'}">预约成功</text>
								<text :style="{color:step>=2?'#265447':'#AEAEAE'}">上门收件</text>
								<text :style="{color:step>=3?'#265447':'#AEAEAE'}">发放积分</text>
								<text :style="{color:step>=4?'#265447':'#AEAEAE'}">订单完成</text>
							</view>
						</view>
					</view>
					
				</view>
		         <view class="orderItem">
					 <view class="wraper">
						 <view class="contentBox">
							 <h1 class="title">预约信息</h1>
							 <view class="content">
								 <text class="txt">订单编号：{{data_info.orderId}}</text>
								 <text class="txt">用户姓名：{{data_info.username}}</text>
								 <text class="txt">联系手机：{{data_info.mobile}}</text>
								 <text class="txt">预约上门时间：{{data_info.appointmentTime}}</text>
								 <text class="txt">回收品类：{{types[data_info.type]}}</text>
								 <text class="txt">回收数量：{{data_info.amount}}</text>
								 <text class="txt" v-if="step!==4">留言备注：请准时上门回收，上门前提前电话告知</text>
								<view class="progress" v-if="step==2||step==3">
									 <text class="txt">物流单号：{{data_info.jdOrder}}</text>
									 <view class="progressBtn">查看进度</view>
								 </view>
								 <text class="txt" v-if="step==4">物流单号：{{data_info.jdOrder}}</text>
								 <text class="txt" v-if="step==4">订单完成时间：{{data_info.orderTime}}</text>
								 <view class="options" v-if="step==1">
									 <!-- <view class="editMsg btn" @tap="editOrderMsg">修改信息</view> -->
									 <view class="cancelOrder btn" @tap="cancelOrder">取消订单</view>
								 </view>
							 </view>
						 </view>
					 </view>
				 </view>
			
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				loading:false,
				statusTxt:'代取件',
				step:0,
				orderId:'',
				data_info:{},
				 types:{
				            "1":"奶粉罐"
				        }
				// icon:'icon11.png'
			};
		},
		computed:{
			
				...mapState(['userInfo']),
				
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
		},
		async onLoad(opt) {
			this.orderId=opt.id
			uni.showLoading({
				title:'加载中...',
				
			})
			await this.getOrderDetail()
			uni.hideLoading()
		},
		methods:{
			getOrderDetail(){
				this.$http({
					apiName:'checkOrderStatus',
					method:'POST',
					params:this.orderId
					
				})
			.then(res=>{
				this.loading=true
				this.data_info=res.data
				this.step=this.data_info.status
			})
		},
		// editOrderMsg(){
		// 	uni.navigateTo({
		// 		url:'../bookMsg/editBookMsg?id='+this.orderId
		// 	})
		// },
		cancelOrder(){
			this.$http({
				apiName:'cancelOrder',
				method:'POST',
				data:{
					recycleOrderId:this.orderId
				}
			}).then(res=>{
				uni.showToast({
				                    title:"取消成功"
				                })
				                setTimeout(res => {
				                    wx.navigateTo({
				                        url: '../../components/cancelTip'
				                    })
				                },1000)
			}).catch(err=>{})
		}
	},
	}
</script>

<style lang="less" scoped>
  .orderItem{
	  .status1{
		  color: #D6A500;
		  margin-top: 49rpx;
	  }
	  .status2{
		  color:#265447;
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
					  color:#ADADAD;
					  line-height:20rpx;
					  text-align: center;
					  margin-right: 83rpx;
					  
				  }
				  text:last-child{
					  margin-right: 0;
				  }
	  }
	  .contentBox{
		   padding-top: 50rpx;
		  .title{
			  font-size:32rpx;
			  font-family:PingFang SC;
			  font-weight:600;
			  color:rgba(38,84,71,1);
			  line-height:20rpx;
		  }
		  .content{
			 margin-top: 43rpx;
			 .txt{
				 display: block;
				 font-size:27rpx;
				 font-family:PingFang SC;
				 font-weight:400;
				 color:rgba(38,84,71,1);
				 line-height:25rpx;
				 margin-top: 24rpx;
			 }
			 .progress{
				 display: flex;
				 flex-direction: row;
				 align-items: center;
				 margin-top: 24rpx;
				 .txt{
					 margin: 0;
				 }
				 .progressBtn{
				 		 width:138rpx;
				 		 height:41rpx;
				 	     background:rgba(229,247,225,1);
				 		 border-radius:21rpx;
						 font-size:24rpx;
						 font-family:PingFang SC;
						 font-weight:600;
						 color:rgba(38,84,71,1);
						 line-height:41rpx;
						 text-align: center;
						 margin-left: 19rpx;
				 }
			 }
			 .options{
				 margin-top: 55rpx;
				 width: 100%;
				 display: flex;
				 flex-direction: row;
				 justify-content: space-around;
				 .btn{
					 width:258rpx;
					 height:81rpx;
					
					 border-radius:40rpx;
					 display: flex;
					 align-items: center;
					 justify-content: center;
					 font-size:33rpx;
					 font-family:PingFang SC;
					 font-weight:600;
					 line-height:21rpx;
				 }
				 .editMsg{
					 color: #fff;
					  background:rgba(61,135,98,1);
				 }
				 .cancelOrder{
					 color: #115C48;
					 border:3rpx solid rgba(17,92,72,1);
				 }
			 }
			 
		  }
		 
	  }
  }
</style>
