<template>
	<view>
		<background></background>
		<view class="main">
			<view class="header">
				<image :src="userInfo.avatarUrl" class="avatar"></image>
				<view class="orderSel">
					<text>所有积分</text>
					<image src="../../static/pulldown.png" @tap="pulldown=!pulldown" :style="{transform:pulldown?'rotate(180deg)':'rotate(0deg)'}"></image>
					<view class="selectBox" :style="{height:pulldown?'210rpx':'0'}">
						<image src="../../static/selectBox.png" ></image>
						<text class="item1 item">已获得</text>
						<text class="item2 item">已消耗</text>
					</view>
				</view>
				
			</view> 
			<view class="topBox">当前环保积分余额：{{userDetail.integral||0}}</view>
			<view class="divider1"></view>
			<view class="logBox" v-if="pointList.length">
				<view class="pointLogItem" v-for="(item,index) in pointList" :key="index" >
				<view class="contentBox">
					<view class="left">
						<text class="row1">回收赠送环保积分</text>
						<text class="row2">订单编号：MJ378975874889212</text>
						<text class="row3">2020-08-08 15:08:08</text>
					</view>
					<view class="right">+10</view>
				</view>
				<view class="divider"></view>
				</view>
				
			</view>
			<view v-else class="logBox">
				<defaultPage></defaultPage>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				pulldown:false,
				pointList:[]
			};
		},
		computed:{
			...mapState(['userInfo','userDetail'])
		},
		async onLoad() {
			uni.showLoading({
				title:'加载中...'
			})
			await this.getPointList()
			uni.hideLoading()
		},
		methods:{
			getPointList(){
				this.$http({
					apiName:'getPointList',
					method:'POST'
				}).then(res=>{
					this.pointList=res.data
				}).catch(err=>{})
			}
		}
	}
</script>

<style lang="less" scoped>
  .main{
	  .header{
		  .avatar{
			  border-radius: 50%;
			  border:7rpx solid rgba(61,135,98,1);
		  }
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
		  		height: 210rpx;
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
		  	
		  	}
		  }
	  }
	  .topBox{
		  padding: 49rpx 0 38rpx 47rpx;
		  font-size:29rpx;
		  font-family:PingFang SC;
		  font-weight:600;
		  color:rgba(39,84,72,1);
	  }
	  .logBox{
	      height: 800rpx;
		  overflow: scroll;
		  padding: 0 50rpx;
		
		  .pointLogItem{
			  .contentBox{
				  width: 100%;
				  padding: 34rpx 0;
				  display: flex;
				  flex-direction: row;
				  justify-content: space-between;
				  align-items: center;
				  .left{
				  				  display: flex;
				  				  flex-direction: column;
				  				  .row1{
				  					  font-size:26rpx;
				  					  font-family:PingFang SC;
				  					  font-weight:600;
				  					  color:rgba(39,84,72,1);
				  					  line-height:20rpx;
				  					  margin-bottom: 18rpx;
				  				  }
				  				  .row2{
				  					  font-size:26rpx;
				  					  font-family:PingFang SC;
				  					  font-weight:400;
				  					  color:rgba(39,84,72,1);
				  					  line-height:20rpx;
				  					  margin-bottom: 18rpx;
				  				  }
				  				  .row3{
				  					  font-size:24rpx;
				  					  font-family:PingFang SC;
				  					  font-weight:400;
				  					  color:rgba(39,84,72,1);
				  					  line-height:20rpx;
				  				  }
				  }
				  .right{
				  				  font-size:36rpx;
				  				  font-family:JDZhengHei-01;
				  				  font-weight:400;
				  				  color:rgba(4,168,124,1);
				  				  line-height:20rpx;
				  }
			  }
			 
			  
		  }
	  }
  }
</style>
