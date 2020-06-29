<template>
	<view>
		<background></background>
		<view class="main">
			<view class="wraper">
				<view class="row" @tap="editMsg">
					<text class="label" >填写上门地址</text>
					<view class="right">
						<image src="../../static/icon8.png" class="selectIcon"></image>
					</view>
				</view>
			</view>
			<view class="divider1"></view>
			<view class="wraper">
				<view class="row">
					<text class="label">填写上门地址</text>
					<view class="right">
						<text class="rightTxt">选择预约上门时间</text>
						<image src="../../static/icon8.png" class="selectIcon"></image>
					</view>
					
				</view>
				<view class="divider"></view>
				<view class="row">
					<text class="label">回收品类</text>
					<view class="right">
						<text class="rightTxt">奶粉罐</text>
						<image src="../../static/icon8.png" class="selectIcon"></image>
					</view>
					
				</view>
				<view class="divider"></view>
				<view class="row">
					<text class="label">回收数量</text>
					<view class="right">
						<text class="rightTxt">10</text>
						<image src="../../static/icon8.png" class="selectIcon"></image>
					</view>
					
				</view>
				<view class="divider"></view>
				<view class="row remark">
					<text class="label">留言备注</text>
					<!-- <view class="right">
						<text class="rightTxt">10</text>
						<image src="../../static/icon8.png" class="selectIcon"></image>
					</view> -->
					<!-- <text class="label">留言备注（可描述回收物状态、特殊要求等）</text> -->
					<textarea value="" placeholder="留言备注（可描述回收物状态、特殊要求等）" auto-height placeholder-style="font-size:27rpx;color:#779D93"/>
				</view>
				<view class="divider"></view>
				<view  class="readme">
					<view class="checkbox" @tap="flag=!flag">
						<image src="../../static/icon11.png" v-if="flag"></image>
					</view>
					<view class="xieyiBox">阅读并同意<navigator url="../index/index" class="xieyi">《美赞臣隐私保护声明》</navigator></view>
				</view>
				
			</view>
			<view class="bookBtn">立即预约</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				flag:false
			};
		},
		methods:{
			 editMsg(){
				// uni.showLoading({
				// 	title:"加载中...",
				// 	mask:true
				// })
				// this.$http({
				// 	apiName:'getReceiveList'
				// }).then(res=>{
				// 	if(res.data.length){
						uni.navigateTo({
							url:'./addressSel'
						})
					
				// 	}else{
				// 		uni.navigateTo({
				// 			url:"./editAddress"
				// 		})
				// 	} 
				// 	uni.hideLoading()
				// }).catch(err=>{uni.hideLoading()})
			}
		}
		
	}
</script>

<style lang="less" scoped>
    .main{
		padding-top: 25rpx;
		.wraper{
			padding-left: 58rpx ;
			.row{
				padding:33rpx 0;
				padding-right: 58rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.label{
					font-size:27rpx;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(119,157,147,1);
				}
				.right{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.rightTxt{
						font-size:27rpx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(26,104,82,1);
						display: inline-block;
						margin-right: 24rpx;
					}
					.selectIcon{
						width: 18rpx;
						height: 27rpx;
					}
				}
			}
			.row.remark{
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				.label{
					display: block;
					margin-bottom: 33rpx;
				}
			}
		}
		.divider{
						  height: 2rpx;
						  width: 100%;
						  background: #CACACA;
		}
		.divider1{
						  width:100%;
						  height:13rpx;
						  background:rgba(228,246,224,1);
		}
		.readme{
			margin-top: 33rpx;
			display: flex;
			align-items: center;
			.checkbox{
				width: 26rpx;
				height: 26rpx;
				border:3rpx solid rgba(26,104,82,1);
				border-radius:3rpx;
				position: relative;
				margin-right: 20rpx;
				image{
					width: 26rpx;
					height: 26rpx;
					position: absolute;
					left: 0;
					top: 0;
				}
			}
			.xieyiBox{
				display: flex;
				color: #1A6852;
				font-size:27rpx;
				font-family:PingFang SC;
				font-weight:500;
				.xieyi{
					color: #157298;
					text-decoration:underline;
				}
			}
		}
		.bookBtn{
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			margin-top: 86rpx;
			width: 372rpx;
			height: 81rpx;
			border-radius:41rpx;
			background: #2E8356;
			font-size:34rpx;
			font-family:PingFang SC;
			font-weight:400;
			color:rgba(254,255,255,1);
		}
		
	}
</style>
