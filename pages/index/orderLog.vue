<template>
	<view class="container">
		<background></background>
		<view class="main">
			<view class="header">
				<image :src="userDetail.avatarUrl" class="avatar"></image>
				<view class="orderSel"  @tap="pulldown=!pulldown">
					<text>{{sortTxt}}</text>
					<image src="../../static/pulldown.png" :style="{transform:pulldown?'rotate(180deg)':'rotate(0deg)'}"></image>
					<view class="selectBox" :style="{height:pulldown?'400rpx':'0'}">
						<image src="../../static/selectBox.png" ></image>
						<text class="item0 item" @tap.stop="status='',pulldown=false,sortTxt='所有订单'">所有订单</text>
						<text class="item1 item" @tap.stop="status=-1,pulldown=false,sortTxt='已取消'">已取消</text>
						<text class="item2 item" @tap.stop="status=1,pulldown=false,sortTxt='待收件'">待收件</text>
						<text class="item3 item" @tap.stop="status=4,pulldown=false,sortTxt='已完成'">已完成</text>
						<text class="item4 item" @tap.stop="status=3,pulldown=false,sortTxt='已收件'">已收件</text>
					</view>
				</view>
			</view> 
			<view class="orderBox" >
				<scroll-view scroll-y="true" class="logBox"  @scrolltolower="loadmore" v-if="orderList.length>0&&loading" @scroll="scroll">
					<view class="orderItem" v-for="(item,index) in orderList" :key="index" @tap="toOrderDetail(item.id,item.status)">
						<view class="wraper">
							<text class="orderNum">订单编号：{{item.orderId}}</text>
							<view class="line"></view>
							<view class="contentBox" >
								<view class="status" :class="'status'+item.status">订单状态: {{statusTxt(item.status)}}
								<text v-if="item.status==4">(碳排减量+{{98*item.amount-20}})</text>
								</view>
								<view class="txt txt1">预约上门时间：{{item.appointmentTime}}</view>
								<view class="txt">订单提交时间：{{item.createTime}}</view>
								<image src="../../static/icon8.png" class="arrow"></image>
							</view>
						</view>
						
					</view>
				</scroll-view>
				
				<defaultPage v-if="orderList.length==0&&loading"/>
				<!-- <image src="../../static/top.png" mode="" class="toTop"></image> -->
			</view>
			
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				status:'',
				loading:false,
				pulldown:false,
				orderList:[],
				sortTxt:'所有订单',
				pageNum:1,
				size:10,
				total:''
			};
		},
		computed:{
			...mapState(['userInfo','userDetail']),
			statusTxt(){
				return function(status){
					if(status==-1) return '已取消'
					if(status==1)  return '待收件'
					if(status==3)  return '已收件'
					if(status==4)  return '已完成'
					if(status==2)   return '待收货确认'
 				}
			}
		},
		watch:{
			status(res){
			   this.pageNum=1,
			   this.orderList=[]
			   this.loading=false
				this.getOrderList(res)
			}
		},
		onShow() {
			this.pulldown=false
		},
		async onLoad() {
			uni.showLoading({
				title:'加载中...'
			})
			await this.getOrderList(this.status)
			uni.hideLoading()
		},
		methods:{
			getOrderList(status){
				uni.showLoading({
					title:'加载中...'
				})
				this.$http({
					apiName:'getOrderList',
					method:'POST',
					data:{
						status:status,
						size:this.size,
						pageNum:this.pageNum
					}
				}).then(res=>{
					// if(this.status==''){
						this.orderList=this.orderList.concat(res.data.list)
					
					
					this.total=res.data.total
					this.loading=true
					uni.hideLoading()
				}).catch(err=>{})
			},
			toOrderDetail(id,status){
				if(status==-1){
					uni.navigateTo({
						url:'./orderCancel?id='+id
					})
				}else{
				uni.navigateTo({
					url:'./orderDetail?id='+id
				})
			}
		},
		async loadmore(){
			if(this.orderList.length>this.total){
				uni.showToast({
					title:'没有更多了...',
					icon:'none'
				})
			}else{
				this.page++
				uni.showLoading({
					title:'拼命加载中...'
				})
				await this.getOrderList()
			}
		},
		scroll(e){
			console.log(e)
		}
		}
	}
</script>

<style lang="less" scoped>
	.container{
		.main{
				.header{
			     .avatar{
					 width: 145rpx;
					 height: 145rpx;
				 }
				.orderSel{
					position: relative;
					&>text{
						color: #fff;
						font-size:32rpx;
						font-weight:500;
						line-height:20px;
						width: 128rpx;
						text-align: right;
						display: inline-block;
					}
					image{
						width: 24rpx;
						height: 18rpx;
						margin-left: 17rpx;
					}
					.selectBox{
						z-index: 10;
						width: 220rpx;
						height: 400rpx;
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
						.item0{
							top: 70rpx;
						}
						.item1{
							top: 130rpx;
						}
						.item2{
							top: 190rpx;
						}
						.item3{
							top: 250rpx;
						}
						.item4{
							top: 310rpx;
						}
					}
				}
			}
			.orderBox{
			   .logBox{
				   height: 900rpx;
			   }
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
							.status.status1{
								color: #D5A601;
							}
							.status.status2,.status.status4{
								color: #275548;
							}
							.status.status-1{
								color: #B21E01;
							}
							.status.status3{
								color: #275548;
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
 //    .toTop{
	// 	position: fixed;
	// 	right: 20rpx;
	// 	bottom: 50rpx;
	// 	width: 30rpx;
	// 	height: 30rpx;
	// }
</style>
