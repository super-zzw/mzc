<template>
	<view>
		<background></background>
		<view class="main" v-if="detail.length">
			<view class="wraper">
				<view class="companyName txt">物流公司：{{detail[0].opeName}}</view>
				<view class="orderNum txt">订单编号：{{detail[0].waybillCode}} <text class="copy" @tap="copy">复制</text></view>
			</view>
			<view class="divider1"></view>
			<view class="wraper wrap1">
		<!-- 		<view class="step">
					<view class="left">
						<image src="../../static/icon_1.png" mode=""></image>
						<view class="line"></view>
					</view>
					<view class="right">
						<text class="title">已下单</text>
						<text class="info">您提交了订单，请等待系统确认</text>
						<text class="time">{{createTime}}</text>
					</view>
				</view>
				<view class="step">
					<view class="left">
						<image src="../../static/icon_2.png" mode=""></image>
						<view class="line"></view>
					</view>
					<view class="right">
						<text class="title">{{detail[0].opeTitle}}</text>
						<text class="info">{{detail[0].opeRemark}}</text>
						<text class="time">{{detail[0].opeTime}} </text>
					</view>
				</view>
				<view class="step">
					<view class="left">
						<image src="../../static/icon_3.png" mode=""></image>
						<view class="line"></view>
					</view>
					<view class="right">
						<text class="title">运输中</text>
						<text class="info">您提交了订单，请等待系统确认</text>
						<text class="time">2020-08-08 15:08:08 </text>
						<view class=""></view>
					</view>
				</view>
				<view class="flows" v-for="(item,index) in 1" :key='index'>
					<view class="left">
						<view class="point"></view>
						<view class="line"></view>
					</view>
					<view class="right">
						<text class="info">[广州市]快件已从广州珠海发出，准备发往泉州中转 部门</text>
						<text class="time">2020-08-08 15:08:08 </text>
						<view class=""></view>
					</view>
				</view>
				<view class="step">
					<view class="left">
						<image src="../../static/icon_4.png" mode=""></image>
						<view class="line"></view>
					</view>
					<view class="right">
						<text class="title">派送中</text>
						<text class="info">[泉州市]泉州清蒙派件员 吴家鑫<text class="postmanPhone">13876523456</text>正在为您派件</text>
						<text class="time">2020-08-08 15:08:08 </text>
						<view class=""></view>
					</view>
				</view>
				<view class="step">
					<view class="left">
						<image src="../../static/icon_5.png" mode=""></image>
						
					</view>
					<view class="right">
						<text class="title">已签收</text>
						<text class="info">[泉州市]快件已在泉州清蒙签收 签收人：美赞臣</text>
						<text class="time">2020-08-08 15:08:08 </text>
						<view class=""></view>
					</view>
				</view> -->
				<view class="step" v-for="(item,index) in detail" :key="index">
					<view class="left">
						<image src="../../static/icon_1.png" mode=""></image>
						<view class="line"></view>
					</view>
					<view class="right">
						<text class="title">{{item.opeTitle}}</text>
						<text class="info">{{item.opeRemark}}</text>
						<text class="time">{{item.opeTime}}</text>
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
				orderId:'',
				detail:[],
				// createTime:''
			}
		},
		async onLoad(opt) {
	
			this.orderId=opt.recycleOrderId 
			// this.createTime=opt.createTime
			uni.showLoading({
				title:'加载中...'
			})
			await this.getOverFlow()
			
		},
		methods: {
			getOverFlow(){
				this.$http({
					apiName:'getOverFlow',
					method:'POST',
					params:this.orderId
				}).then(res=>{
					this.detail=res.data
					uni.hideLoading()
				}).catch(res=>{})
			},
			copy(){
				uni.setClipboardData({
				    data: this.detail[0].waybillCode,
				    success: function () {
				        uni.showToast({
				        	title:'成功复制到剪贴板'
				        })
				    }
				});
			}
		}
	}
</script>

<style lang="less" scoped>
   .main{
	   .wrap1{
		   height: 750rpx;
		   overflow: scroll;
	   }
	   .wraper{
		   padding: 40rpx 33rpx 38rpx 46rpx;
		   .companyName{
			   
		   }
		   .txt{
			   font-size:27rpx;
			   font-family:PingFang SC;
			   font-weight:600;
			   color:rgba(39,84,72,1);
		   }
		   .orderNum{
			   margin-top: 19rpx;
			   .copy{
				   display: inline-block;
				   width:92rpx;
				   height:42rpx;
				   font-size:24rpx;
				   text-align: center;
				   line-height:42rpx ;
				   font-family:PingFang SC;
				   font-weight:500;
				   color:rgba(39,84,72,1);
				   background:rgba(229,247,225,1);
				   border-radius:21rpx;
				   margin-left: 12rpx;
			   }
		   }
		   .step{
			   display: flex;
			   flex-direction: row;
	
		   }
		   .step:last-child .line{
			   display: none;
		   }
		   .left{
		   				   width: 42rpx;
		   				   margin-right: 20rpx;
		   				   display: flex;
		   				   justify-content: center;
		   				   position: relative;
		   				   image{
		   					   width: 100%;
		   					   height: 43rpx;
		   					   position: absolute;
		   					   left: 0;
		   					   top: 0;
		   				   }
		   				   .line{
		   					   width: 3rpx;
		   					   background:#CDE7C8;
		   					   height: 100%;
		   				   }
						   
						   .point{
							   width: 13rpx;
							   height: 13rpx;
							   background:rgba(205,231,199,1);
							   border-radius:50%;
							   position: absolute;
							   left: 50%;
							   top: 0;
							   margin-left: -6.5rpx;
						   }
		   }
		  
		   .right{
		   				   flex: 1;
		   				   display: flex;
		   				   flex-direction: column;
		   				    padding-bottom: 30rpx;
		   				   .title{
		   					   font-size:29rpx;
		   					   font-family:PingFang SC;
		   					   font-weight:600;
		   					   color:rgba(39,84,72,1);
		   					   margin-bottom: 13rpx;
		   				   }
		   				   .info{
		   					   margin-bottom: 5rpx;
		   					   font-size:24rpx;
		   					   font-family:PingFang SC;
		   					   font-weight:400;
		   					   color:rgba(39,84,72,1);
							   .postmanPhone{
								   color: #ddb83e;
							   }
		   				   }
		   				   .time{
		   					   font-size:24rpx;
		   					   font-family:PingFang SC;
		   					   font-weight:400;
		   					   color:rgba(39,84,72,1);
		   				   }
		   }
		   .flows{
			   display: flex;
			   flex-direction: row;
		   }
	   }
   }
</style>
