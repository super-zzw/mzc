<template>
	<view>
		<background></background>
		<view class="main">
			<view class="wraper">
				<defaultPage v-if="loading&&certificateList.length==0"></defaultPage>
				<view class="achievementItem" v-for="(item,index) in certificateList" :key="index" v-if="certificateList.length">
					<image :src="item.coverUrl" class="award" @tap="open(item.certificateUrl)"></image>
					<text class="awardName">公益证书</text>
					<text class="time">于{{item.createTime|formatDate}}获取</text>
				</view>
				
			</view>
		</view>
		<awareDetail :isMask="isMask" :src="imgPath"/>
	</view>
</template>

<script>  
	import awareDetail from '../../components/awareDetail.vue'
	export default {
		data() {
			return {
				isMask:false,
				certificateList:[],
				loading:false,
				imgPath:''
			};
		},
		components:{awareDetail},
		async onLoad(opt) {
			uni.showLoading({
				title:'加载中...'
			})
			await this.getCertificateList()
			if(opt.isMask&&opt.imgPath){
				this.isMask=true
				this.imgPath=opt.imgPath
			}
			
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
					this.certificateList=res.data
					this.loading=true
					uni.hideLoading()
				}).catch(err=>{})
			},
			open(url){
				this.isMask=true
				this.imgPath=url
			}
		}
	}
</script>

<style lang="less" scoped>
  .main{
	  .wraper{
		  padding-top: 90rpx;
		 
		  width: 100%;
		  height: 900rpx;
		overflow-y:auto;
		  word-break: break-all; 
		  	word-wrap: break-word;
		
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
