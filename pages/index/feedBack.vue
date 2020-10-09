<template>
	<view>
		<background></background>
		<view class="main">
			<text class="title">问题/意见描述</text>
			<textarea v-model="message" placeholder="请描述你在使用应用过程中遇到的问题或意见…" class="feedBackBox"/>
			<text class="title">联系方式</text>
			<input type="number" v-model="contact" class="contactBox"/>
			<view class="submitBtn" @tap="submit">提交</view>
		</view>
	</view>
</template>

<script>
	import Utils from '../../utils/method.js'
	export default {
		data() {
			return {
				message:'',
				contact:''
			};
		},
		methods:{
			async submit(){
				let _j_data = [{
						data: this.message.trim(),
						info: "请输入反馈内容"
					},
					{
						data: this.contact.trim(),
						info: "手机号不能为空"
					},
					{
						data: /^[1][3,4,5,7,8,9][0-9]{9}$/.test(this.contact),
						info: "请输入正确的手机格式"
					}
				]
				let jres = await Utils.judgeForm(_j_data)
				if(jres){
					this.$http({
						apiName:'submitFeedBack',
						method:'POST',
						data:{
							message:this.message,
							contact:this.contact
						}
					}).then(res=>{
						uni.showToast({
							title:'提交成功'
						})
						setTimeout(()=>{
							uni.redirectTo({
								url:'./personIndex'
							})
							
							
						},1500)
					}).catch(err=>{
						uni.showToast({
							title:'提交失败'
						})
					})
				}
			}
		}
	}
</script>

<style lang="less" scoped>
  .main{
	  padding:57rpx 38rpx 0 ;
	  display: flex;
	  // justify-content: center;
	  flex-direction: column;
	  align-items: center;
	  .title{
		  font-size:33rpx;
		  font-family:PingFang SC;
		  font-weight:600;
		  color:rgba(38,84,71,1);
	  }
	  .feedBackBox{
		 height:400rpx;
		 background:rgba(238,255,234,1);
		 border:1rpx solid rgba(202,232,196,1);
		 border-radius:7rpx;
		 width: 100%;
		 padding: 20rpx;
		 margin-top: 20rpx;
		 margin-bottom: 46rpx;
	  }	  
	  .contactBox{
		  height: 87rpx;
		  width: 100%;
		 background:rgba(238,255,234,1);
		 border:1rpx solid rgba(202,232,196,1);
		 border-radius:7rpx;
		 margin-top: 20rpx;
		 padding: 0 20rpx;
	  }
	  .submitBtn{
		  width:371rpx;
		  height:81rpx;
		  background:rgba(61,135,98,1);
		  border-radius:40rpx;
		  font-size:33rpx;
		  font-family:PingFang SC;
		  font-weight:500;
		  color:rgba(254,255,254,1);
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  margin-top: 60rpx;
	  }
  }
</style>
