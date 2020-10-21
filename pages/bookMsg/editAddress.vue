<template>
	<view class="container">
		<background></background>
		<view class="main" v-if="!loading">
			<view class="top">
				<view class="name row">
					<text class="label">寄件人</text>
					<input type="text" name="" id="" placeholder="填写寄件人姓名" class="inputBox" placeholder-style="color:#1A6752" v-model="form_data.username">
				</view>
				<view class="divider"></view>
				<view class="row phone">
					<text class="label">手机号码</text>
					<input type="number" name="" id="" placeholder="填写联系人手机号码" class="inputBox" placeholder-style="color:#1A6752"
					 v-model="form_data.mobile">
				</view>
				<view class="divider"></view>
				<view class="row region">
					<text class="label">所在地区</text>

					<view class="uni-list">
						<view class="uni-list-cell">

							<view class="uni-list-cell-db">
								<picker mode="multiSelector" @change="areaPickerChange" @columnchange="areaPickerColumnChange" :value="multiIndex" :range="multiArray">
									<view class="Region">
										<text class="showRegion">{{area}}</text>
										<image src="../../static/icon8.png" class="selectIcon"></image>
									</view>
								</picker>
							</view>
						</view>
					</view>
				</view>
				<view class="divider"></view>
				<view class="row address">
					<text class="label">详细地址</text>
				
					<textarea type="text" name="" id="textArea" placeholder="请输入详细的地址信息" class="inputBox " placeholder-style="color:#1A6752"
					 v-model="form_data.detailedAddress" :auto-height="true"></textarea>
				</view>
			</view>
			<view class="divider1"></view>
			<view class="saveBtn" @tap="submitAdd">
				保存并使用
			</view>
			<view class="saveBtn" @tap="wxAddress">
				一键导入微信地址
			</view>
		</view>
	</view>
</template>

<script>
	import Utils from '../../utils/method.js'
	export default {
		data() {
			return {
				id: '',
				form_data: {
					username: "",
					mobile: "",
					detailedAddress: "",
					province: "",
					city: "",
					district: "",
					areaNum: ""
				},
				// openList:[],
				multiArray: [],
				flag: false,
				multiIndex: [0, 0, 0],
				city: [],
				area: [],
				region: [],
				areas_ids: {}, //地区对应的唯一号
				provinces: [],
				cities: {}, //每个省对应的市集合
				areas: {}, //每个市对应的区集合
				area: "填写省市区信息",
				loading:true
			};
		},
		async onLoad(opt) {
			uni.showLoading({
				title: "加载中...",
				mask: true
			})
			
			
			if (opt.id) {
				this.id = opt.id
				await this.getAddressMsg()
			
				
			}
				await this.regionSel()
				
			
		},
		methods: {
			regionSel() {
				this.$http({
					apiName: 'getOpenList'
				}).then(res => {
					for (let item of res.data) {
						let _province = item.area //省/直辖市
						if (this.provinces.indexOf(_province) == -1) {
							this.provinces.push(_province); //保存省的集合
						}
						let _city = item.openAddressChild //市
						let _area = _city.openAddressChild //区
						//每个省下面的市集合
						if (this.cities.hasOwnProperty(_province)) {
							if (this.cities[_province].indexOf(_city.area) == -1) {
								this.cities[_province].push(_city.area)
							}
						} else {
							this.$set(this.cities, _province, [_city.area])
						}
						if (_area) {
							//市下面每个区的集合
							if (this.areas.hasOwnProperty(_city.area)) {
								this.areas[_city.area].push(_area.area)
							} else {
								this.$set(this.areas, _city.area, [_area.area])
							}
							this.$set(this.areas_ids, _province + _city.area + _area.area, _area.areaId)
						} else {
							this.$set(this.areas_ids, _province + _city.area, _city.areaId)
						}
					}
					this.multiArray = [
						this.provinces,
						this.cities[this.provinces[0]],
						this.areas[this.cities[this.provinces[0]][0]]
					]
					if(this.multiArray.length>0){
							uni.hideLoading()
							this.loading=false
					}
				
				}).catch(err => {})


			},
			getAddressMsg() {
				this.$http({
					apiName: 'getReceive',
					method: 'POST',
					data: {
						id: this.id
					}
				}).then(res => {
					for (let item in this.form_data) {
						this.form_data[item] = res.data[item]
					}
					this.area = res.data.province + res.data.city + res.data.district
					// uni.hideLoading()
				}).catch(err => {})
			},


			areaPickerChange: function(e) {
				this.multiIndex = e.detail.value
				this.form_data.province = this.multiArray[0][this.multiIndex[0]]
				this.form_data.city = this.multiArray[1][this.multiIndex[1]]
				this.form_data.district = this.multiArray[2][this.multiIndex[2]] || ''
				this.area = this.form_data.province+ this.form_data.city + this.form_data.district
				this.form_data.areaNum = this.areas_ids[this.area]

			},
			areaPickerColumnChange: function(e) {
				let _col_index = e.detail.column //列号0，1，2
				let _col_value_index = e.detail.value //列的值号
				let _col_value =
					this.multiIndex[_col_index] = _col_value_index
				switch (_col_index) {
					//第一列
					case 0:
						let _province = this.provinces[_col_value_index]; //选中的省
						let _citys = this.cities[_province]; //选中省所有城市
						let _areas = this.areas[_citys[0]] || []; //该城市的所有区县
						this.$set(this.multiArray, 1, _citys);
						this.$set(this.multiArray, 2, _areas);
						//设置后2列默认值
						this.$set(this.multiIndex, 1, 0)
						this.$set(this.multiIndex, 2, 0)
						break
						//第二列
					case 1:
						let _citys2 = this.cities[this.provinces[this.multiIndex[0]]]; //选中省所有城市
						let _areas2 = this.areas[_citys2[_col_value_index]] || []; //设置区的列表
						this.$set(this.multiArray, 2, _areas2)
						this.$set(this.multiIndex, 2, 0); //设置区的默认值
						break;
				}
			},
			async submitAdd() {
				let _j_data = [{
						data: this.form_data.username.trim(),
						info: "姓名不能为空"
					},
					{
						data: this.form_data.mobile ? /^[1][3,4,5,7,8,9][0-9]{9}$/.test(this.form_data.mobile) : '',
						info: "请输入正确的手机格式"
					},
					{
						data: this.form_data.city,
						info: "地区不能为空"
					},
					{
						data: this.form_data.detailedAddress.trim(),
						info: "详细地址不能为空"
					},
				]
				let jres = await Utils.judgeForm(_j_data)
				if (jres) {
					uni.showLoading({
						title:'保存中...'
					})
					let url = 'addAddress'
					if (this.id) {
						url = 'editAddress'
						this.$set(this.form_data, 'id', this.id)
					}
					this.$http({
						apiName: url,
						method: 'POST',
						data: this.form_data
					}).then(res => {
						uni.hideLoading()
						this.$store.commit('selectAddr', this.form_data)	
						uni.navigateBack({
							delta:2
						})
					}).catch(err => {})
				}
			},
			wxAddress(){
				let that=this
				wx.chooseAddress({
				  success (res) {
					  console.log(res)
					let flag=false
				for(let area in that.areas_ids){
					if(area.includes(res.countyName)){
						let form=that.form_data
						form.username=res.userName
						form.province=res.provinceName
						form.city=res.cityName
						form.district=res.countyName
						form.mobile=res.telNumber
						that.area=res.provinceName+res.cityName+res.countyName
						form.detailedAddress=res.detailInfo
						form.areaNum=that.areas_ids[area]
						flag=true
						
						that.provinces.forEach((province,index1)=>{
							if(res.provinceName.includes(province)){
								// console.log(i)
								that.multiIndex[0]=index1
								that.multiArray[1]=that.cities[province]
								that.multiArray[1].forEach((item,index2)=>{
									if(res.countyName==item||res.cityName==item){
										that.multiIndex[1]=index2
									}
								})
								
							}
							
						})
						for(let k in that.areas){
							if(res.countyName==k||res.cityName==k){
								that.multiArray[2]=that.areas[k]
								that.areas[k].forEach((a,b)=>{
									if(res.countyName==a){
										that.multiIndex[2]=b
									}
								})
							}
						}
						break
					}
				}
					
						
					if(!flag){
						uni.showToast({
							title:'不在规定的回收区域',
							icon:'none'
						})
											
					}	
					
						
					
				  }
				})
			}

		}
	}
</script>

<style lang="less" scoped>
	.container {

		.main {
        
			.top {
				padding-top: 56rpx;
				padding-left: 60rpx;
				box-sizing: border-box;

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
					margin: 48rpx 0 34rpx;

					.inputBox {
						width: 400rpx;
						display: flex;
						justify-content: space-between;

					}
				}

				.address {
					margin: 32rpx 0;
				}

				.divider {
					height: 2rpx;
					width: 100%;
					background: #CACACA;
				}
			}

			.saveBtn {
				width: 371rpx;
				height: 80rpx;
				border-radius: 40rpx;
				background: linear-gradient(86deg,rgba(26,103,82,1) 0%,rgba(46,130,86,1) 100%);
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


		.uni-list {
			display: inline-block;
			width: 300rpx;
			color: #1A6752;
			margin-left: 39rpx;
			font-size: 27rpx;
			font-family: PingFang SC;
			font-weight: 600;
			color: rgba(26, 103, 82, 1);

		}
	}

	.selectIcon {
		width: 17rpx;
		height: 27rpx;
	}

	.uni-list {
		flex: 1;

		.Region {
			padding-right: 58rpx;
			display: flex;
			justify-content: space-between;
			flex-direction: row;
		}

	}
	#textArea{
		width: 420rpx;
		// height: 300rpx;
	
	}
</style>
