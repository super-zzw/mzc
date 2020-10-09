<template>
	<view>
		<background></background>
		<view class="main">
			<view class="header">
				<image :src="userInfo.avatarUrl" class="avatar"></image>
			</view>
			<view class="wraper cancelTxt">
				订单状态：订单已取消
			</view>
			<view class="divider1"></view>
			<view class="wraper bookMsg" >
				<h1 class="title">预约信息</h1>
				<view class="contentBox">
					<text class="txt">订单编号：{{data_info.jdOrder}}</text>
					<text class="txt">用户姓名：{{data_info.username}}</text>
					<text class="txt">联系手机：{{data_info.mobile}}</text>
					<text class="txt">预约上门时间：{{data_info.appointmentTime}}</text>
					<text class="txt">回收品类：{{types[data_info.type]}}</text>
					<text class="txt">回收数量：{{data_info.amount}}</text>
					<text class="txt" v-if="data_info.remark">留言备注：{{data_info.remark}}</text>
					<text class="txt">订单取消时间：{{data_info.updateTime}}</text>
				</view>
				<view @tap="toBook" class="btn">再次预约上门回收</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
          orderId:'',
		  data_info:{},
		  types:{
		             "1":"奶粉罐"
		         }
			};
		},
		async onLoad(opt) {
			uni.showLoading({
				title:'加载中...'
			})
			this.orderId=opt.id
			await this.getOrderDetail()
			uni.hideLoading()
		},
		computed:{
				  ...mapState(['userInfo'])
		},
		methods:{
			getOrderDetail(){
					this.$http({
						apiName:'checkOrderStatus',
						method:'POST',
						params:this.orderId
					})
				.then(res=>{
					this.data_info=res.data
					
				})
			},
			toBook(){
				this.$http({
					apiName:'isReverse',
					
				}).then(res=>{
					uni.navigateTo({
						url:'/pages/bookMsg/editBookMsg'
					})
				}).catch(err=>{})
			}
		}
	}
</script>

<style lang="less" scoped>
	.main {
		.wraper {
			padding: 50rpx 0 38rpx 45rpx;

		}

		.cancelTxt {
			font-size: 29rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(178, 30, 0, 1);
			line-height: 20rpx;
		}

		.bookMsg {
			.title {
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: 600;
				color: rgba(38, 84, 71, 1);
				line-height: 20rpx;
			}

			.contentBox {
				margin-top: 43rpx;

				.txt {
					display: block;
					font-size: 27rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color: rgba(38, 84, 71, 1);
					line-height: 25rpx;
					margin-top: 24rpx;
				}
			}
            .btn{
				margin: 0 auto;
				margin-top: 85rpx;
				
				width:372rpx;
				height:81rpx;
				background:rgba(62,136,98,1);
				border-radius:41rpx;
				font-size:34rpx;
				font-family:PingFang SC;
				font-weight:400;
				color:rgba(254,255,255,1);
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>
