<template>
	<view class="container">
		<background></background>
		<view class="main">
			<view class="top">
				<view class="name row">
					<text class="label">寄件人</text>
					<input type="text" name="" id="" placeholder="填写寄件人姓名" class="inputBox" placeholder-style="color:#1A6752">
				</view>
				<view class="divider"></view>
				<view class="row phone">
					<text class="label">手机号码</text>
					<input type="number" name="" id="" placeholder="填写联系人手机号码" class="inputBox" placeholder-style="color:#1A6752">
				</view>
				<view class="divider"></view>
				<view class="row region" >
					<text class="label">所在地区</text>
					<!-- <input type="text" name="" id="" placeholder="填写联系人手机号码" class="inputBox" placeholder-style="color:#1A6752"> -->
				<!-- 	<view class="inputBox">
						<text class="showRegion">选择省市区信息</text>
						<image src="../../static/icon8.png" class="regionSel"></image>
					</view> -->
					 <view class="uni-list" @tap="regionSel">
					            <view class="uni-list-cell">
					               <!-- <view class="uni-list-cell-left">
					                    
					                </view> -->
					                <view class="uni-list-cell-db">
					                  <picker mode="multiSelector" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
										  <view class="showRegion" v-if="!flag">填写省市区信息</view>
					                  	<view class="uni-input" v-else>{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}</view>
					                  </picker>
					                </view>
					            </view>
								</view> 
				</view>
				<view class="divider"></view>
				<view class="row address">
					<text class="label">详细地址</text>
					<input type="text" name="" id="" placeholder="请输入详细的地址信息" class="inputBox" placeholder-style="color:#1A6752">
				</view>
			</view>
			<view class="divider1"></view>
			<view class="saveBtn">
				保存并试用
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// openList:[],
				multiArray: [
					[],[],[]
					
				],
				flag:false,
				multiIndex: [0, 0, 0],
				city:[],
				area:[],
				region:[]
			};
		},
		methods:{
			regionSel(){
				
					uni.showLoading({
							title:"加载中...",
							mask:true
					})
					this.$http({
						apiName:'getOpenList'
					}).then(res=>{
						// this.openList=res.data
						uni.hideLoading()
					 
					res.data.forEach(item=>{
						if(!this.multiArray[0].includes(item.area)){
							this.multiArray[0].push(item.area)
						}
						// if(!this.multiArray[1].includes(item.openAddressChild.area)){
							
						// 	this.multiArray[1].push(item.openAddressChild.area)
						// }
						
						
						
						if(!this.multiArray[2].includes(item.openAddressChild.openAddressChild.area)){
							this.multiArray[2].push(item.openAddressChild.openAddressChild.area)
						}
					})
					this.multiArray[0].forEach((item1,index)=>{
						this.multiArray[1][index]=[]
						this.multiArray[2][index]=[]
						res.data.forEach(item=>{
							if(item.area===item1){
								// this.multiArray[1][index]=[]
								if(!this.multiArray[1][index].includes(item.openAddressChild.area))
								this.multiArray[1][index].push(item.openAddressChild.area)
						}
					})
					this.multiArray[1][index].forEach((item2,index2)=>{
						this.multiArray[2][index][index2]=[]
						let arr=res.data.map(address=>address.openAddressChild)
						console.log(arr)
						arr.forEach((item,index3)=>{
							if(item.area===item2){
								// this.multiArray[1][index]=[]
								if(!this.multiArray[2][index][index2][index3].includes(item.openAddressChild.area))
								this.multiArray[2][index][index2][index3].push(item.openAddressChild.area)
						}
					})	
						})
					})
					}).catch(err=>{})
				
				
			},
			
			  
			bindMultiPickerColumnChange(e){
				this.flag=true
				console.log(e)
				switch(e.detail.column){
					case 0:
					
				}
			},
			
			
		}
	}
</script>

<style lang="less" scoped>
		
	.container{
		
		.main{
	
			  .top{
				  padding-top: 56rpx;
				  padding-left: 60rpx;
				  box-sizing: border-box;
				  .row{
				  				  display: flex;
				  				  flex-direction: row;
				  				  align-items: center;
				  				  .label{
				  					  font-size:27rpx;
				  					  font-family:PingFang SC;
				  					  font-weight:500;
				  					  color:rgba(118,157,146,1);
				  					  width: 110rpx;
				  				  }
				  				 
				  				  .inputBox{
				  					  margin-left: 40rpx;
				  					  font-size:27rpx;
				  					  font-family:PingFang SC;
				  					  font-weight:600;
				  					  color:#1A6752;
				         .regionSel{
				  						 width: 17rpx;
				  						 height: 26rpx;
				  					 }
				  				  }
				  }
				  .name{
				  				  margin-bottom: 34rpx;
				  }
				  .phone{
				  				  margin: 32rpx 0;
				  }
				  .region{
				  				  margin: 48rpx 0 34rpx;
				  				  .inputBox{
				  					  width: 400rpx;
				  					  display: flex;
				  					  justify-content: space-between;
									
				  				  }
				  }
				  .address{
				  				  margin: 32rpx 0;
				  }
				  .divider{
				  				  height: 2rpx;
				  				  width: 100%;
				  				  background: #CACACA;
				  }
			  }

			  .saveBtn{
				  width: 371rpx;
				  height: 80rpx;
				  border-radius:40rpx;
				  background: #2D8255;
				  font-size:33rpx;
				  font-family:PingFang SC;
				  font-weight:400;
				  color:rgba(254,255,254,1);
                  display: flex;
				  justify-content: center;
				  align-items: center;
				 
				  margin: 0 auto;
				   margin-top: 56rpx;
			  }
		}
	
		
		.uni-list{
												  display: inline-block;
												  width: 300rpx;
												  color:#1A6752 ;
												  margin-left: 39rpx;
												  font-size:27rpx;
												  font-family:PingFang SC;
												  font-weight:600;
												  color:rgba(26,103,82,1);
												  
		}
	}
  
</style>
