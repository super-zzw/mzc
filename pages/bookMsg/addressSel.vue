<template>
	<view>
		<background></background>
		<view class="main">
			<view class="addreeBox" v-if="addressList.length" >
				<view class="addressItem" v-for="(item,index) in addressList" :key="index" @tap="addressOk(item)">
					<view class="name row">
						<text class="label">寄件人</text>
						<view class="inputBox">{{item.username}}</view>
						<!-- <input type="text" name="" id="" placeholder="填写寄件人姓名" class="inputBox" placeholder-style="color:#1A6752"> -->
					</view>
					<view class="divider"></view>
					<view class="row phone">
						<text class="label">手机号码</text>
						<view class="inputBox">+86 {{item.mobile}}</view>
						<!-- <input type="number" name="" id="" placeholder="填写联系人手机号码" class="inputBox" placeholder-style="color:#1A6752"> -->
					</view>
					<view class="divider"></view>
					<view class="row region">
						<text class="label">所在地区</text>
						<!-- <input type="text" name="" id="" placeholder="填写联系人手机号码" class="inputBox" placeholder-style="color:#1A6752"> -->
						<view class="inputBox">
							<view class="showRegion">
								<text>{{item.province+item.city+item.district}}</text>
								<text>{{item.detailedAddress}}</text>
							</view>
							<image src="../../static/icon8.png" class="regionSel"></image>
						</view>
					</view>
					<view class="divider"></view>
					<view class="options">
						<view class="editBtn btn" @tap="edit(item.id)">编辑</view>
						<view class="delBtn btn" @tap="open(item.id)" data-id="">删除</view>
					</view>
				</view>
			</view>
            <view v-if="loading&&addressList.length==0" class="noAddress">
				<image src="../../static/noaddress.png" mode=""></image>
				<text>暂无新地址哦～</text>
				<!-- <view class="addAddressBox">
					<navigator class="addBtn" url="./editAddress">添加新地址</navigator>
				</view> -->
			</view>
			<view class="addAddressBox" v-if="loading">
				<navigator class="addBtn" url="./editAddress">添加新地址</navigator>
				
			</view>
		</view>
		<alert v-if="isDel" title="确定删除?" @tapBtn="del">
			
		</alert>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressList: [],
				isDel:false,
				delId:'',
				loading:false
			};
		},
		async onLoad() {
			uni.showLoading({
					title:"加载中...",
					mask:true
			
			}),
			await this.getAddress()
			uni.hideLoading()
		},
		methods:{
			getAddress(){
				this.$http({
					apiName:'getReceiveList'
				}).then(res=>{
					this.addressList=res.data;
					this.loading=true
				}).catch(err=>{})
			},
			open(id){
				this.isDel=true
				this.delId=id
			},
			edit(id){
				console.log('./editAddress?id='+id)
				uni.navigateTo({
					url:'./editAddress?id='+id
				})
			},
			del(res){
				if(res){
					
					this.$http({
						apiName:'delAddress',
						method:'POST',
						data:{
							receiveId:this.delId
						}
						
					}).then(res=>{
						uni.showToast({
							icon:'none',
							title:'删除成功',
							duration:1500
						})
						this.getAddress()
					}).catch(err=>{})
				}
				this.isDel=false
				// delAddress
			},
			addressOk(item){
				uni.navigateTo({
					url:'./editBookMsg'
				})
				this.$store.commit('selectAddr', item)
			}
		}
	}
</script>

<style lang="less" scoped>
	.main {
		display: flex;
		flex-direction: column;
		background: #F9F9F9;
		// overflow: hidden;
          height: 1000rpx;
          overflow: scroll;
		.addreeBox {
			
			.addressItem {
				padding-top: 56rpx;
				padding-left: 60rpx;
				padding-bottom: 34rpx;
				box-sizing: border-box;
				background-color: #fff;
				.row {
					display: flex;
					flex-direction: row;
					align-items: center;
 
					.label {
						font-size: 27rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: rgba(118, 157, 146, 1);
						width: 110rpx;
					}

					.inputBox {
						margin-left: 40rpx;
						font-size: 27rpx;
						font-family: PingFang SC;
						font-weight: 600;
						color: #1A6752;

						.regionSel {
							width: 17rpx;
							height: 26rpx;
						}
					}
				}

				.name {
					margin-bottom: 34rpx;
				}

				.phone {
					margin: 32rpx 0;
				}

				.region {
					margin: 30rpx 0 34rpx;

					.inputBox {
						width: 400rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;

						.showRegion {
							// display: inline-block;
							width: 300rpx;
							display: flex;
							flex-direction: column;
						}
					}
				}

				.address {
					margin: 32rpx 0;
				}

				

				.options {
					margin: 33rpx 57rpx 0 173rpx;
					display: flex;
					justify-content: space-between;

					.btn {
						width: 175rpx;
						height: 69rpx;
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 600;
						border-radius: 34rpx;
						display: flex;
						justify-content: center;
						align-items: center;
					}

					.editBtn {
						color: #1A6752;
						border: 3rpx solid rgba(26, 103, 82, 1);
					}

					.delBtn {
						color: #B11D00;
						border: 3rpx solid rgba(177, 29, 0, 1);
					}
				}
			}
		}
        .noAddress{
			display: flex;
			
			flex-direction: column;
			align-items: center;
			image{
				margin-top: 130rpx;
				width: 400rpx;
				height: 330rpx;
				
			}
			text{
				font-size:32rpx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(191,191,191,1);
				margin-top: 34rpx;
			}
		}

		.addAddressBox {
			// background: #F9F9F9;
			flex-grow: 1;

			.addBtn {
				width: 371rpx;
				height: 80rpx;
				border-radius: 40rpx;
				background: #2D8255;
				font-size: 33rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: rgba(254, 255, 254, 1);
				display: flex;
				justify-content: center;
				align-items: center;

				margin: 0 auto;
				margin-top: 56rpx;
			}

		}

	}
</style>
