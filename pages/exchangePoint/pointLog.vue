<template>
	<view>
		<background></background>
		<view class="main">
			<view class="header">
				<image :src="userInfo.avatarUrl" class="avatar"></image>
				<view class="orderSel">
					<text>{{txt}}</text>
					<image src="../../static/pulldown.png" @tap="pulldown=!pulldown" :style="{transform:pulldown?'rotate(180deg)':'rotate(0deg)'}"></image>
					<view class="selectBox" :style="{height:pulldown?'270rpx':'0'}">
						<image src="../../static/selectBox.png" ></image>
						<text class="item0 item" @tap="status==''?'':(status='',pointList=[]),page=1,pulldown=false,txt='所有记录'">所有记录</text>
						<text class="item1 item" @tap="pointList=[],status=1,pulldown=false,page=1,txt='已获得'">已获得</text>
						<text class="item2 item" @tap="pointList=[],status=-1,pulldown=false,page=1,txt='已消耗'">已消耗</text>
					</view>
				</view>
				
			</view> 
			<view class="topBox">当前环保积分余额：{{userDetail.integral||0}}</view>
			<view class="divider1"></view>
		
			<scroll-view scroll-y="true" class="logBox"  @scrolltolower="loadmore">
				<view class="pointLogItem" v-for="(item,index) in pointList" :key="index" >
				<view class="contentBox">
					<view class="left">
						<text class="row1">{{item.title}}</text>
						<text class="row2">{{item.remark}}</text>
						<text class="row3">{{item.createTime}}</text>
					</view>
					<view :class="item.status==1?'right1':'right2'">{{item.status==1?'+'+item.integral:'-'+item.integral}}</view>
				</view>
				<view class="divider"></view>
				</view>
			</scroll-view>
			<view v-if="loading&&pointList.length==0" class="logBox" >
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
				pointList:[],
				size:10,
				page:1,
				total:'',
				loading:false,
				status:'',
				txt:'所有记录'
			};
		},
		computed:{
			...mapState(['userInfo','userDetail'])
		},
		async onLoad() {
			// uni.showLoading({
			// 	title:'加载中...'
			// })
			await this.getPointList(this.status)
			// uni.hideLoading()
		},
		watch:{
			status(res){
				this.getPointList(res)
			}
		},
		methods:{
			getPointList(status){
				this.$http({
					apiName:'getPointList',
					method:'POST',
					data:{
						size:this.size,
						page:this.page,
						status:this.status
					}
				}).then(res=>{
					// this.pointList.push(res.data.list)
					this.pointList=this.pointList.concat(res.data.list)
					this.total=res.data.total
					uni.hideLoading()
				}).catch(err=>{})
			},
			async loadmore(){
				if(this.pointList.length>this.total){
					uni.showToast({
						title:'没有更多了...',
						icon:'none'
					})
				}else{
					this.page++
					uni.showLoading({
						title:'拼命加载中...'
					})
					await this.getPointList()
				}
				
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
		  		height: 270rpx;
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
	  ::-webkit-scrollbar{
		  width: 0;
		  height: 0;
		  background-color: #fff;
	  }
	  .logBox{
	      height: 800rpx;
		  box-sizing: border-box;
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
				  .right1{
				  				  font-size:36rpx;
				  				  font-family:JDZhengHei-01;
				  				  font-weight:400;
				  				  color:rgba(4,168,124,1);
				  				  line-height:20rpx;
				  }
				  .right2{
					  font-size:36rpx;
					  font-family:JDZhengHei-01;
					  font-weight:400;
					  color:#B11D00;
					  line-height:20rpx;
				  }
			  }
			 
			  
		  }
	  }
	
  }
</style>
