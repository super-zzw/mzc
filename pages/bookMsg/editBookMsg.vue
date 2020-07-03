<template>
	<view>
		<background></background>
		<view class="main">
			<view class="wraper">
				<view class="" v-if="addressMsg">
					<view class="row r1">
						<view class="left">
							<text class="label">寄件人</text>
							<text class="info">{{addressMsg.username}}</text>
						</view>
					</view>
					<view class="divider"></view>
					<view class="row r1">
						<view class="left">
							<text class="label">手机号码</text>
							<text class="info">{{addressMsg.mobile}}</text>
						</view>
					</view>
					<view class="divider "></view>
					<view class="row r1">
						<view class="left addBox">
							<text class="label">所在地区</text>
							<view @tap="addressSel" class="addMsg">
								<view class="info">
									<text>{{addressMsg.province+addressMsg.city+addressMsg.district}}</text>
									<text>{{addressMsg.detailedAddress}}</text>
								</view>

								<image src="../../static/icon8.png" class="selectIcon"></image>
							</view>

						</view>
					</view>

				</view>
				<view class="row" @tap="editMsg" v-else>
					<text class="label">填写上门地址</text>
					<view class="right">
						<image src="../../static/icon8.png" class="selectIcon"></image>
					</view>
				</view>

			</view>
			<view class="divider1"></view>
			<view class="wraper">
				<view class="row">
					<text class="label">预约时间</text>
					<view class="timeSel">
						<picker mode="multiSelector" :range="dateTimes" @change="dateTimeChange">
							<!-- <view>{{}}</view> -->
							<view class="mr">
								<view class="info"><text v-if="bookTime">{{bookTime}}</text> </view>
								<!-- 	<view class="right"> -->
								<view class="right">
									<text class="rightTxt" v-if="!bookTime">选择预约上门时间</text>
									<image src="../../static/icon8.png" class="selectIcon"></image>
								</view>

							</view>
						</picker>
					</view>


				</view>
				<view class="divider"></view>
				<view class="row">
					<text class="label">回收品类</text>
					<view class="right">
						<text class="rightTxt">{{type}}</text>
						<image src="../../static/detail.png" class="icon1"></image>
					</view>

				</view>
				<view class="divider"></view>
				<view class="row">
					<text class="label">回收数量</text>
					<picker :range="numArray" @change="numChange" :value="index">
						<view class="right">
							<text class="rightTxt">{{numArray[index]}}</text>
							<image src="../../static/trangle.png" class="selnum"></image>
						</view>
					</picker>


				</view>
				<view class="divider"></view>
				<view class="row remark">
					<text class="label">留言备注</text>
					<textarea value="" placeholder="留言备注（可描述回收物状态、特殊要求等）" auto-height placeholder-style="font-size:27rpx;color:#779D93" v-model="remark"/>
					</view>
				<view class="divider"></view>
				<view  class="readme">
					<view class="checkbox" @tap="flag=!flag">
						<image src="../../static/agree0.png" v-if="!flag"></image>
						<image src="../../static/agree1.png" v-if="flag"></image>
					</view>
					<view class="xieyiBox">阅读并同意<navigator url="../index/index" class="xieyi">《美赞臣隐私保护声明》</navigator></view>
				</view>
				
			</view>
			<view class="bookBtn" @tap="toBook">立即预约</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
		import Utils from '../../utils/method.js'
	export default {
		data() {
			return {
				orderId:'',
				flag:false,
			    bookTime:'',
				dateTimes:[ [],["14:00-15:00","15:00-16:00","16:00-17:00"]],
				aTime :'',
				eTime :'',
				formatDate:[],
				numArray:[3,4,5,6,7,8,9,10],
				index:7,
				remark:'',
				type:"奶粉罐",
				        types:{
				            "奶粉罐":1
				        },
			};
		},
		computed:{
			...mapState(['addressMsg'])
		},
		async onLoad(opt) {
			await this.setDate()
			if(opt.id){
				this.orderId=opt.id
				uni.showLoading({
					title:'加载中...'
				})
				
				await this.getOrder()
				uni.hideLoading()
			}
		},
		methods:{
			setDate(){
				// let now=new	Date().getTime()
				 let _weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
				 let timestamp=new Date().getTime()
				 let a=1000*60*60*24
				for(let i=1;i<8;i++){
				  let str=''
				  let str1=''
				  let year=new Date(timestamp+i*a).getFullYear()
			      let month=new Date(timestamp+i*a).getMonth()+1
				  let date=new Date(timestamp+i*a).getDate()
				  let day=new Date(timestamp+i*a).getDay()
				  str=month+'月'+date+'日('+_weeks[day]+')'
				  str1=year+'-'+(Number(month)<10?'0'+month:month)+'-'+(Number(date)<10?'0'+date:date)
				  this.formatDate.push(str1)
				  this.dateTimes[0].push(str)
				}
			},
			dateTimeChange(e){
				console.log(e)
				this.bookTime=this.formatDate[e.detail.value[0]]+' '+ this.dateTimes[1][e.detail.value[1]]
				this.aTime=this.formatDate[e.detail.value[0]]+' '+this.dateTimes[1][e.detail.value[1]].split('-')[0]
				this.eTime=this.formatDate[e.detail.value[0]]+' '+this.dateTimes[1][e.detail.value[1]].split('-')[1]
			},
			numChange(e){
				this.index=e.detail.value
			},
			addressSel(){
				uni.navigateTo({
					url:'addressSel'
				})
			},
			// 立即预约
			async toBook(){
				let _j_data = [
				              { data:this.addressMsg?'1' : '',info:"请添加上门地址"},
				              { data:this.bookTime,info:"请选择预约上门时间"},
				              // { data:this.form_data.city,info:"地区不能为空"},
				              { data:this.flag,info:"请阅读并同意美赞臣隐私保护声明"},
				]
				 let jres = await Utils.judgeForm(_j_data)
				if(jres){
					this.$http({
						apiName:'orderReverse',
						method:'POST',
						data:{
							aTime:this.aTime,
							amount:this.numArray[this.index],
							areaNum:this.addressMsg.areaNum,
							eTime:this.eTime,
							mobile:this.addressMsg.mobile,
							receiveaAddress:this.addressMsg.province + this.addressMsg.city + this.addressMsg.district + this.addressMsg.detailedAddress,
							remark:this.remark,
							type:this.types[this.type],
							username:this.addressMsg.username 
						}
					}).then(res=>{
						 uni.showToast({
						      title:"预约成功"
						 })
						  setTimeout( ()=> {
						                         uni.navigateTo({
						                             url: './bookSuccess?id='+res.data,
						                         })
						                     },1000)
					}).catch(err=>{})
				}else{
					
				}
			},
			 editMsg(){
						uni.navigateTo({
							url:'./addressSel'
						})
			},
			getOrder(){
				this.$http({
						apiName:'checkOrderStatus',
						method:'POST',
						params:this.orderId
						
					})
				.then(res=>{
					this.bookTime=res.data.appointmentTime
					this.index=this.numArray.indexOf(res.data.amount)
					this.remark=res.data.remark
					// this.$store.commit('userInfoSet',uni.getStorageSync('userInfo'))
				})
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
			
			}
			.label{
				font-size:27rpx;
				font-family:PingFang SC;
				font-weight:500;
				min-width: 105rpx;
				display:flex;
				color:rgba(119,157,147,1);
				align-items: center;
			}
			.selectIcon{
								width: 18rpx;
								height: 27rpx;
							}
							.selnum{
								width: 19rpx;
								height: 17rpx;
							}
			.right{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.icon1{
					width: 30rpx;
					height: 30rpx;
				}
				
			}
			.rightTxt{
				font-size:27rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(26,104,82,1);
				display: inline-block;
				margin-right: 24rpx;
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
			// .checkbox{
				// width: 26rpx;
				// height: 26rpx;
				// position: relative;
				// margin-right: 20rpx;
				.checkbox{
					width: 40rpx;
					height: 40rpx;
					margin-right: 14rpx;
					image{
						width: 100%;
						height: 100%;
					}
					// position: absolute;
					// left: 0;
					// top: 0;
				}
			// }
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
			margin-top: 40rpx;
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
	.left{
		display: flex;
		flex-direction: row;
	}
	
	.info{
		margin-left: 40rpx;
		font-size:27rpx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(26,103,82,1);
		display: flex;
		flex-direction: column;
		
	}
	.timeSel{
	
		flex:1;
		margin-left: 36rpx;
	}
	.mr{
		display: flex;
		justify-content: space-between;
		.time1{
			flex:1
		}
		// .right{
		// 	width: 250rpx;
		// }
	}
	.addBox{
		flex: 1;
		display: flex;
		justify-content: space-between;
		.addMsg{
			display: flex;
			justify-content: space-between;
			flex: 1;
			align-items: center;
		}
		}
	
</style>
