<template>
	<view>
		<background></background>
		<view class="main">
			<view class="wraper">
				<defaultPage v-if="loading&&certificateList.length==0"></defaultPage>
				<view class="achievementItem" v-for="(item,index) in certificateList" :key="index" v-if="certificateList.length">
					<image :src="item.coverUrl" class="award" @tap="isMask=true"></image>
					<text class="awardName">公益证书</text>
					<text class="time">于{{item.createTime|formatDate}}获取</text>
				</view>
				
			</view>
		</view>
		<view class="mask" v-if="isMask"></view>
		<view class="awardDetail" v-if="isMask">
			<image src="../../static/close.png" @tap="isMask=false" class="close"></image>
			<view class="contentBox">
			  <image src="../../static/award.png" class="award" ></image>
			  <image src="../../static/icon2.png" class="avatar"></image>
			  <text class="nickName">宝宝妈咪一家人</text>
			  <text class="awardText">感谢你于2020年5月25捐赠xxxx环保积分，用于保护 xxx地区xx平方米土地，由美赞臣（中国）与中华环境 保护基金会以共管的方式对xx地区展开保护。</text>
			  <view class="awardNumBox">
				  <text class="title">证书编号</text>
				  <text class="number">xxxxxxxxxxxxxxxxxxxxxxxx</text>
				  
			  </view>
			 <image src="../../static/icon7.png" class="code"></image>
			 <text class="tip">可扫码进入美赞臣回收小程序助力公益</text>
			</view>
			<view class="txt1">可长按图片保存到本地，再进行分享</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isMask:false,
				certificateList:[],
				loading:false
			};
		},
		async onLoad() {
			uni.showLoading({
				title:'加载中...'
			})
			await this.getCertificateList()
			uni.hideLoading()
		},
		filters:{
			formatDate(data){
				let year=data.split(' ')[0].split('-')[0],
				    month=data.split(' ')[0].split('-')[1],
					day=data.split(' ')[0].split('-')[2]
					
					return year+'年'+month+'月'+day+'日'
			}
		},
		methods:{
			getCertificateList(){
				this.$http({
					apiName:'getCertificateList',
					method:'POST'
				}).then(res=>{
					this.certificateList=res.data.list
					this.loading=true
				}).catch(err=>{})
			}
		}
	}
</script>

<style lang="less" scoped>
  .main{
	  .wraper{
		  padding-top: 90rpx;
		  // display: flex;
		  // flex-wrap: wrap;
		  // flex-direction: row;
		  width: 100%;
		  height: 900rpx;
		overflow-y:auto;
		  word-break: break-all; 
		  	word-wrap: break-word;
		  // justify-content: flex-start;
		  .achievementItem{
			    float: left;
			  width: 50%;
			  height: auto;
			  margin-bottom: 68rpx;
			  display: flex;
			  justify-content: center;
			  align-items: center;
			  flex-direction: column;
			  .award{
				  width: 206rpx;
				  height: 166rpx;
			  }
			  .awardName{
				  display: block;
				  margin-top: 41rpx;
				  margin-bottom: 18rpx;
				  font-size:34rpx;
				  font-family:PingFang SC;
				  font-weight:600;
				  color:rgba(27,104,82,1);
			  }
			  .time{
				  font-size:24rpx;
				  font-family:PingFang SC;
				  font-weight:500;
				  color:rgba(27,104,82,1);
			  }
		  }
	  }
  }
  
  .awardDetail{
	  position: fixed;
	  left: 0;
	  top: 0;
	  width: 100%;
	  height: 100vh;
	  display: flex;
	  // justify-content: center;
	  flex-direction: column;
	  align-items: center;
	  .close{
		  width: 77rpx;
		  height: 77rpx;
		  margin-top: 20rpx;
	  }
	  .contentBox{
		  margin-top: 30rpx;
		  width: 90%;
		  height: 950rpx;
		  background: #E2FFDB;
		  border-radius:47rpx;
		  padding: 50rpx 42rpx;
		  padding-bottom: 50rpx;
		 text-align: center;
		  overflow: scroll;
		  box-sizing: border-box;
		  .award{
			
			  width: 424rpx;
			  height: 300rpx;
			  display: block;
			  margin: 0 auto;
		  }
		  .avatar{
			  width: 136rpx;
			  height: 136rpx;
			  margin-top: 46rpx;
			  border:7rpx solid rgba(62,136,98,1);
			  border-radius:50%;
			  box-sizing: border-box;
		  }
		  .nickName{
			  font-size:34rpx;
			  font-family:PingFang SC;
			  font-weight:500;
			  color:rgba(36,93,73,1);
			 display: block;
			 margin-top: 15rpx;
		  }
		  .awardText{
			  font-size:27rpx;
			  font-family:PingFang SC;
			  font-weight:500;
			  color:rgba(62,136,98,1);
			  line-height:32rpx;
			  display: block;
			  margin-top: 30rpx;
		  }
		  .awardNumBox{
			  margin: 50rpx 0 30rpx;
			  text-align: center;
			  .title{
				  font-size:34rpx;
				  font-family:PingFang SC;
				  font-weight:500;
				  color:rgba(36,93,73,1);
				  display: block;
			  }
			  .number{
				  font-size:31rpx;
				  font-family:PingFang SC;
				  font-weight:500;
				  color:rgba(62,136,98,1);
			  }
		  }
		  .code{
			  width: 146rpx;
			  height: 146rpx;
			  border: 12rpx solid #75C264;
			   margin: 0 auto;
			  margin-bottom: 34rpx;
			  display: block;
			 
		  }
		  .tip{
			  font-size:27rpx;
			  font-family:PingFang SC;
			  font-weight:500;
			  color:rgba(62,136,98,1);
			  line-height:32rpx;
		  }
	  }
	  .txt1{
		  margin-top: 20rpx;
		  font-size:27rpx;
		  font-family:PingFang SC;
		  font-weight:500;
		  color:rgba(255,255,255,1);
		  line-height:32rpx;
	  }
  }
</style>
