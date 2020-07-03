<template>
	<view>
		<background></background>
		<view v-if="!alert">
		
		<view class="main">
			<view class="mainContent">
			<view class="bigImg">
				<image src="../../static/bg14.png" mode="" ></image>
			</view>
			<view class="wraper">
				<view class="title">环保积分兑换绿地保护面积</view>
				<text class="description">公益活动介绍文字: {{publicActivies}}</text>
				<view class="line"></view>
				<text class="txt1">{{integralM}}个环保积分，可认领保护地面积{{centiare}}平方米</text>
				<view  class="protectBtn" @tap="protect">我要保护</view>
			</view>
			<view class="divider1"></view>
			<view class="wraper">
				<view class="title color1">兑换好礼</view>
				<text class="description color1">兑换规则: {{changeRule}}</text>
				<view class="options">
					<view class="btn exchangeBtn">
						<button  open-type="getPhoneNumber" @getphonenumber="getPhone" v-if="userDetail.vip==-1">我要兑换</button>
						<text v-else class="exchangeBtn1" @tap="exchange">我要兑换</text>
					</view>
					<view class="btn shopBtn" @tap="enterShop(true)">进入蓝臻积分商城</view>
				</view>
				
			</view>
		</view>
		</view>
		<view v-if="isMask">
			<view class="mask"></view>
				<image src="../../static/close.png" @tap="close" class="close"></image>
			<view class="protectBox" v-if="protectBtn">
			
				<view class="contentBox">
				  <image src="../../static/background1.png" class="protectImg" ></image>
				  <view class="txtBox">
					  <text class="r1">使用XXX环保积分</text>
					  <text class="r2">保护XX平方米的土地</text>
					  <view class="btns">
						  <view class="btn btn1" @tap="toProtect">申请保护</view>
						  <view class="btn btn2" @tap="close">再想想</view>
					  </view>
				  </view>
			</view>
			</view>
			<view class="protectBox" v-if="exchangeBtn">
				<image src="../../static/shop.png" class="image"></image>
				<view class="contentBox" v-if="userDetail.vip==-1">
				    <view class="inputBox username">
				    	<text class="label">用户名</text>
				    	<input type="text" v-model="form_data.name" placeholder="请输入用户名(20个英文字符以内）" placeholder-style="color:#999"/>
				    </view>
				    <view class="inputBox phone">
				    	<text class="label">手机号</text>
				    	<input type="number" v-model="form_data.mobile" placeholder="请输入你的手机号" placeholder-style="color:#999"/>
				    	<view class="getCode" @tap="getAuthCode">获取验证码</view>
				    </view>
				    <view class="inputBox codeBox">
				    	<text class="label">验证码</text>
				    	<input type="number" v-model="form_data.authCode" placeholder="请输入你收到的6位验证码" placeholder-style="color:#999"/>
				    </view>
				    <view class="options1">
				    	<view class="btn btn1" @tap="register">立即注册</view>
				    	<view class="btn btn2" @tap="close">再想想</view>
				    </view>
				</view>
				<view class="contentBox" v-else>
					<view class="rowBox">
						<view class="row">
							<text class="txt">本次兑换环保积分</text>
							<view class="countBox">
								<text class="count">{{count}}</text>
								<view class="right">
									<image src="../../static/up.png" mode="" @click="count++"></image>
									<image src="../../static/down.png" mode="" @click="count==0?0:count--" ></image>
								</view>
							</view>
						</view>
						<view class="row">
							<text class="txt">将获得的蓝臻积分数量：{{count*ratio}}</text>
						
						</view>
					</view>
					<view class="Btn" @tap="handleExchange">立即兑换</view>
				</view>
				
			</view>
		</view>
		</view>
      <alert title="兑换成功" content="是否进入蓝臻积分商城？" v-else @tapBtn="enterShop"></alert>		
	</view>
	
</template>

<script>
	import Utils from '../../utils/method.js'
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				alert:false,
				publicActivies:'',
				integralM:'',
				centiare:'',
				changeRule:'',
				isMask:false,
				protectBtn:false,
				exchangeBtn:false,
				form_data:{
					name :'',
					mobile:'',
					authCode:'' 
				},
				count:10,
				ratio:1
			};
		},
		async onLoad() {
			
			uni.showLoading({
				title:'加载中...'
			})
			console.log(this.userDetail.vip)
			await this.getMsg()
		},
		computed:{
			...mapState(['userDetail'])
		},
		methods:{
			getMsg(){
				this.$http({
					apiName:'getConfigs',
				}).then(res=>{
					this.publicActivies=res.data[1].value
					this.integralM=res.data[5].value
					this.centiare=res.data[6].value
					this.changeRule=res.data[2].value
					this.ratio=res.data[8].value.split(':')[1]/res.data[8].value.split(':')[0]
					uni.hideLoading()
				}).catch(res=>{})
			},
			protect(){
				this.protectBtn=true
				this.isMask=true
			},
			toProtect(){
				this.$http({
					apiName:'exchangeCard',
					
				}).then(res=>{}).catch(err=>{})
			},
			close(){
				this.protectBtn=false
				this.exchangeBtn=false
				this.isMask=false
			},
			exchange(){
				// if(!this.userDetail.integral){
				// 	uni.showToast({
				// 		title:'您目前暂无积分',
				// 		icon:'none'
				// 	})
				// }else{
					this.isMask=true
					this.exchangeBtn=true
				// }
				
			},
			async getAuthCode(){
				let _j_data = [
				              { data:this.form_data.name.trim(),info:"姓名不能为空"},
				             {
				             	data:this.form_data.mobile.trim(),
				             	info:'手机号不能为空'
				             },
				             {
				             	data:/^[1][3,4,5,7,8][0-9]{9}$/.test(this.form_data.mobile) ? "1" : "",
				             	info:'手机号格式不正确'
				             },
				]
				 let jres = await Utils.judgeForm(_j_data)
				 if(jres){
					 this.$http({
					 	apiName:'getAuchCode',
					 	method:'POST',
					 	data:{
					 		mobile:this.form_data.mobile
					 	}
					 }).then(res=>{uni.showToast({
					 	title: "验证码已发送...",
					 	icon: "success"
					 })} )
					 .catch(err=>{})
					
				 }
				
			},
			async register(){
				let {authCode,mobile,name}=this.form_data
				this.$http({
					apiName:'register',
					method:'POST',
					data:{
						authCode,mobile,name
					}
				}).then(res=>{
					uni.showToast({
						title: "注册成功!",
						icon: "success"
					})
					setTimeout(()=>{
						this.$store.commit('setVip',1)
					},1000)
				})
			},
			// 获取手机号码
			async getPhone(back){
				console.log(back)
				if(!back.detail.iv){return}
				uni.showLoading({
					title: "正在获取手机号"
				})
				
				const {encryptedData,iv} = back.detail;
				try{
					const userPhone = await this.$http({apiName: "getWuserMobile",method:'POST',data:{encryptedData,iv}});
					this.form_data.mobile = userPhone.data;
					this.isMask=true
					this.exchangeBtn=true
					// this.loseCode = 1;
				}catch(e){
					uni.showToast({
						title: "获取手机号码失败",
						icon: "none"
					})
				}finally{
					uni.hideLoading();
				}
			},
			handleExchange(){
				// uni.showLoading({
				// 	title: "兑换中..."
				// })
					this.$http({
						apiName:'exchangeIntegral',
						method:'POST',
						data:{
							integral:this.count
						}
					}).then(res=>{
					this.alert=true
					
					}).catch(err=>{})
			 // uni.hideLoading()
			},
			enterShop(boo){
				if(boo){
					uni.navigateToMiniProgram({
					  appId: 'wx0906e6c98c19783a',
					  path: 'pages/index/index?sence=MP_1028',
					  success(res) {
					    // 打开成功
					  }
					})
				}else{
					this.alert=false
				}
			}
		}
	}
</script>

<style lang="less" scoped>
   .main{
	 overflow: hidden;
	 
	  .mainContent{
		 
		  overflow: scroll;
		  padding-bottom: 20rpx;
		  height: 1000rpx;
	  }
	   // height: 1050rpx;
	   .bigImg{
		   width: 98%;
		   height: 318rpx;
		   margin: 0 auto;
		   border-top-left-radius: 47rpx;
		   border-top-right-radius: 47rpx;
		   background: #218C6F;
		   display: flex;
		   align-items: center;
		   justify-content: center;
		   image{
			   width: 643rpx;
			   height: 285rpx;
		   }
	   }
	   .wraper{
		   padding: 30rpx 44rpx 0;
		   display: flex;
		   justify-content: center;
		   flex-direction: column;
		   align-items: center;
		   .title.color1,.description.color1{
			  color:#1C8086; 
		   }
		   .title{
			   font-size:34rpx;
			   font-family:PingFang SC;
			   font-weight:600;
			   color:rgba(62,136,98,1);
			   line-height:32rpx;
			   margin-bottom: 27rpx;
		   }
		   .description{
			   font-size:26rpx;
			   font-family:PingFang SC;
			   font-weight:500;
			   color:rgba(62,136,98,1);
			   line-height:32rpx;
			   text-align: center;
		   }
		   .line{
			   margin: 30rpx 0;
			   width: 36rpx;
			   height: 6rpx;
			   background: #006851;
			   
		   }
		   .txt1{
			 
			   font-size:28rpx;
			   font-family:PingFang SC;
			   font-weight:600;
			   color:rgba(62,136,98,1);
			   line-height:32rpx;
		   }
		  .protectBtn{
			  width:292rpx;
			  height:81rpx;
			  background:rgba(62,136,98,1);
			  border-radius:41rpx;
			  margin-top: 34rpx;
			  display: flex;
			  justify-content: center;
			  align-items: center;
			  font-size:34rpx;
			  font-family:PingFang SC;
			  font-weight:400;
			  color:rgba(254,255,255,1);
			  line-height:21rpx;
			  margin-bottom: 50rpx;
		  }
		  .options{
			  margin-top: 40rpx;
			  width: 100%;
			  display: flex;
			  justify-content: space-between;
			  .btn{
				  border-radius:45rpx;
				  padding: 2rpx 10rpx;
				  font-size:32rpx;
				  font-family:PingFang SC;
				  font-weight:600;
				  color:rgba(40,78,150,1)
			  }
			  .exchangeBtn{
				  border:3rpx solid rgba(40,78,150,1);
				  color:rgba(40,78,150,1);
				  display: flex;
				  align-items: center;
				  .exchangeBtn1{
					  padding: 20rpx 40rpx;
				  }
			  }
			  .shopBtn{
				  background-color: #274F96;
				  color: #fff;
				  display: flex;
				  align-items: center;
				  padding: 20rpx 40rpx;
			  }
		  }
	   }
   }
   .close{
   		   width: 77rpx;
   		   height: 77rpx;
		   position: absolute;
		   top: 18%;
		   left: 50%;
		   transform: translate(-50%,-50%);
   }
   .protectBox{
   	   position: absolute;
   	   top: 50%;
   	   left: 50%;
   	   transform: translate(-50%,-50%);
   	   width: 669rpx;
   	   font-size: 0;
   	   padding-bottom: 57rpx;
   	   background: #fff;
   	   .image{
   		   width: 100%;
   		   height: 205rpx;
   		   
   	   }
	   .protectImg{
		   width: 100%;
		   height: 205rpx;
	   }
   	   .contentBox{
   	   // padding:0 59rpx 57rpx;
   	   background-color: #fff;
	   .txtBox{
		   padding-top: 48rpx;
		   display: flex;
		   flex-direction: column;
		   align-items: center;
		   text{
			   font-size:33rpx;
			   font-family:PingFang SC;
			   font-weight:500;
			   color:rgba(38,84,71,1);
		   }
		   .r2{
			   margin-top: 25rpx;
		   }
		   .btns{
			   margin-top: 50rpx;
			   display: flex;
			   flex-direction: row;
			   justify-content: space-around;
			   width: 100%;
			   .btn{
				   width:236rpx;
				   height:83rpx;
				   border-radius:41rpx;
				   font-size:32rpx;
				   font-family:PingFang SC;
				   font-weight:500;
				   display: flex;
				   justify-content: center;
				   align-items: center;
			   }
			   .btn1{
				   background: #3D8762;
				   color: #fff;
			   }
			   .btn2{
				   background: #fff;
				   color: #3D8762;
				   border:2rpx solid rgba(61,135,98,1);
			   }
		   }
	   }
   	     .rowBox{
   			 width: 100%;
   			 .row{
   				 padding-top: 35rpx;
   				 padding-bottom: 21rpx;
   				 display: flex;
   				 flex-direction: row;
   				 justify-content: center;
   				 align-items: center;
   				 position: relative;
				 margin: 0 60rpx;
   				 .txt{
   					 font-size:32rpx;
   					 font-family:PingFang SC;
   					 font-weight:400;
   					 color:rgba(19,66,110,1);
   					 margin-right: 30rpx;
   					 
   				 }
   				 .countBox{
   					 width:106rpx;
   					 height:55rpx;
   					 border:2rpx solid rgba(19,66,110,1);
   					 border-radius:7rpx;
   					 display: flex;
   					 flex-direction: row;
   					 align-items: center;
   					 justify-content: center;
   					 .count{
   						 font-size:29rpx;
   						 font-family:PingFang SC;
   						 font-weight:500;
   						 color:rgba(19,66,110,1);
   						margin-right: 10rpx;
   					 }
   					 .right{
   						 display: flex;
   						 flex-direction: column;
   						 image{
   						 						 width:20rpx;
   						 						 height:20rpx;
   						 }
   					 }
   					
   				 }
   			 }
   			 .row:after{
   				 content: '';
   				 display: block;
   				 position: absolute;
   				 left: 0;
   				 
   				 bottom: 0;
   				 height:1rpx;
   				 background:rgba(205,205,205,1);
   				 width: 100%;
   			 }
   		 }
   	   }
   	   .Btn{
   		 
   		   width:236rpx;
   		   height:83rpx;
   		  background:#325BAE;
		
   		   border-radius:41rpx;
   		   margin: 0 auto;
		     margin-top: 40rpx;
   		   font-size:32rpx;
   		   font-family:PingFang SC;
   		   font-weight:400;
   		   color:rgba(255,255,255,1);
   		   display: flex;
   		   align-items: center;
   		   justify-content: center;
   	   }
   }
   .inputBox{
	           margin: 0 60rpx;
   			   display: flex;
   			   flex-direction: row;
   			   position: relative;
   			   align-items: center;
   			   .label{
   				   font-size:32rpx;
   				   font-family:PingFang SC;
   				   font-weight:400;
   				   color:rgba(19,66,110,1);
   				   margin-left: 11rpx;
   			   }
   			   input{
   				   font-size:27rpx;
   				   font-family:PingFang SC;
   				   font-weight:400;
   				   color:rgba(153,153,153,1);
   				  margin-left: 24rpx;
   				  flex:1;
   			   }
   			   .getCode{
   				   width:169rpx;
   				   height:55rpx;
   				   border:1rpx solid rgba(19,66,110,1);
   				   border-radius:27rpx;
   				   margin-left: 10rpx;
   				   font-size:24rpx;
   				   font-family:PingFang SC;
   				   font-weight:400;
   				   color:rgba(19,66,110,1);
   				   display: flex;
   				   justify-content: center;
   				   align-items: center;
   				  
   			   }
   			   
    }
    .inputBox:after{
   			   content: '';
   			   position: absolute;
   			   left: 0;
   			   bottom: 0;
   			   height: 1rpx;
   			   background:rgba(205,205,205,1);
   			   display: block;
   			   width: 100%;
    }
    .username{
   			   padding: 28rpx 0;
    }
    .phone{
   			   padding: 19rpx 0;
    }
    .codeBox{
   			   padding:  20rpx 0 10rpx;
   			   .label{line-height: 64rpx;}
    }
   .options1{
   			   margin-top: 43rpx;
   					    display: flex;
   					    flex-direction: row;
   						justify-content: space-around;
   			   .btn{
   				   width:236rpx;
   				   height:83rpx;
   				
   				   border-radius:41rpx;
   						   display: flex;
   						   justify-content: center;
   						   align-items: center;
   						  font-size:32rpx;
   						  font-family:PingFang SC;
   						  font-weight:600;
   						 
   						   
   			   }
   					   .btn1{
   						   color: #fff;
   						      background:#325BAE;
   					   }
   					   .btn2{
   						   color: #325BAE;
   						   border:2rpx solid rgba(50,91,174,1);
   						   background: #fff;
   					   }
   }
   button{
	height: 76rpx;
	color: #274E96;
	line-height: 76rpx;
	background: #fff;
	font-size:32rpx;
	display: inline;
   }
</style>
