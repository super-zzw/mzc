<template>
	<view class="container">
		<background></background>
		<view class="main">
			<view class="header">
				<image :src="userInfo.avatarUrl" class="avatar"></image>
				<view class="orderSel">
					<text>所有订单</text>
					<image src="../../static/pulldown.png" @tap="pulldown=!pulldown" :style="{transform:pulldown?'rotate(180deg)':'rotate(0deg)'}"></image>
					<view class="selectBox" :style="{height:pulldown?'337rpx':'0'}">
						<image src="../../static/selectBox.png" ></image>
						<text class="item1 item">已取消</text>
						<text class="item2 item">代收件</text>
						<text class="item3 item">已完成</text>
						<text class="item4 item">已收件</text>
					</view>
				</view>
			</view> 
			<view class="orderBox">
				<view class="orderItem" v-for="(item,index) in orderList" :key="index" @tap="toOrderDetail(item.id,item.status)">
					<view class="wraper">
						<text class="orderNum">订单编号：{{item.orderId}}</text>
						<view class="line"></view>
						<view class="contentBox" >
							<view class="status" :class="'status'+status">订单状态: {{statusTxt(item.status)}}
							<text v-if="status==4">(碳排减量+20)</text>
							</view>
							<view class="txt txt1">预约上门时间：{{item.appointmentTime}}</view>
							<view class="txt">订单提交时间：{{item.createTime}}</view>
							<image src="../../static/icon8.png" class="arrow"></image>
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
				status:0,
				// statusTxt:['已取消','待收件','已完成','已收件'],
				pulldown:false,
				orderList:[]
			};
		},
		computed:{
			...mapState(['userInfo']),
			statusTxt(){
				return function(status){
					if(status==-1) return '已取消'
					if(status==1)  return '待收件'
					if(status==4)  return '已完成'
					if(status==2)   return '已收件'
 				}
			}
		},
		async onLoad() {
			uni.showLoading({
				title:'加载中...'
			})
			await this.getOrderList()
			uni.hideLoading()
		},
		methods:{
			getOrderList(){
				this.$http({
					apiName:'getOrderList',
					method:'POST'
				}).then(res=>{
					this.orderList=res.data.list
				}).catch(err=>{})
			},
			toOrderDetail(id,status){
				if(status==-1){
					uni.navigateTo({
						url:'./orderCancel?id='+id
					})
				}
				uni.navigateTo({
					url:'./orderDetail?id='+id
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.container{
		
		.main{
			
				.header{
			  
				.orderSel{
					position: relative;
					text{
						color: #fff;
						font-size:32rpx;
						font-weight:500;
						line-height:20px;
					}
					image{
						width: 24rpx;
						height: 18rpx;
						margin-left: 17rpx;
					}
					.selectBox{
						z-index: 10;
						width: 220rpx;
						height: 337rpx;
						position: absolute;
						left: -30rpx;
						top: 50rpx;
						transition: height .3s;
						overflow: hidden;
						image{
							width: 100%;
							height: 100%;
						}
						.item{
							font-size: 32rpx;
							font-weight:400;
							color:rgba(18,92,72,1);
							line-height:20rpx;
							position: absolute;
							left: 80rpx;
						}
						.item1{
							top: 70rpx;
						}
						.item2{
							top: 130rpx;
						}
						.item3{
							top: 190rpx;
						}
						.item4{
							top: 250rpx;
						}
					}
				}
			}
			.orderBox{
			   
				.orderItem{
					
					.wraper{

						.orderNum{
							display: block;
							padding: 39rpx 0 20rpx;
							font-size:29rpx;
							font-family:PingFang SC;
							font-weight:500;
							color:rgba(39,84,72,1);
							line-height:20rpx;
						}
						.line{
							height: 3rpx;
							width: 622rpx;
							background:#E5F7E1;
						}
						.contentBox{
							margin-top: 20rpx;
							position: relative;
							.status{
								font-size: 29rpx;
								font-weight:500;
							}
							.status.status0{
								color: #D5A601;
							}
							.status.status1{
								color: #275548;
							}
							.status.status2{
								color: #B21E01;
							}
							.txt{
								font-size:29rpx;
								font-weight:400;
								color:rgba(39,84,72,1);
								line-height:20rpx;
							}
							.txt1{
								margin:25rpx 0;
							}
							.arrow{
								position: absolute;
								width: 30rpx;
								height: 40rpx;
								right: 25rpx;
								top: 34rpx;
							}
						}
					}
					
					
					
				}
				.orderItem:after{
					content: '';
					display: block;
					height: 14rpx;
					background: #E5F7E1;
				}
				.orderItem:last-child:after{
					content: '';
					display: block;
					height: 0rpx;
					
				}
			}
		}
	}

</style>
