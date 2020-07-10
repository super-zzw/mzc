<template>
	<view class="container">
		<background1 color="#196751"></background1>
		<view class="main">
			<view class="mainContent">
				<view class="adItem" v-for="(item,index) in articleList" :key="index" @tap="toDetail(item.contentUrl)">
					<image :src="item.coverImg" class="left"></image>
					<view class="right">{{item.title}}</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				articleList:[]
			};
		},
		async onLoad() {
			uni.showLoading({
				title:'加载中...'
			})
			await this.getArticleList()
			
		},
		methods:{
			getArticleList(){
				this.$http({
					apiName:'getArticleList',
					method:'POST',
					
				}).then(res=>{
					this.articleList=res.data.list
					uni.hideLoading()
				}).catch(err=>{}
				)
			},
			toDetail(url){
				console.log(url)
				uni.navigateTo({
					url:'./article?url='+url,
					fail(err) {
						
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.container{
		width: 100vw;
		height: 100vh;
		.close{
					   width: 77rpx;
					   height: 77rpx;
					   position: absolute;
					   top: 20rpx;
					   left: 50%;
					   margin-left: -39rpx;
			}
		.main{
			   background-color: #E5F7E1;
		        padding-top: ;
				padding:46rpx 35rpx 40rpx;
				
				.mainContent{
					height: 970rpx;
					overflow: scroll;
					.adItem{
									  
									   height:245rpx;
									   background:rgba(255,255,255,1);
									   border:1rpx solid rgba(116, 194, 100, 1);
									   box-shadow:0px 9rpx 11rpx 1rpx rgba(157,196,151,0.32);
									   border-radius:33rpx;
									   padding: 28rpx 33rpx; 
									   margin-bottom: 30rpx;
									   box-sizing: border-box;
									   display: flex;
									   flex-direction: row;
									   align-items: center;
									   justify-content: space-between;
									   .left{
										   width: 187rpx;
										   height: 187rpx;
									   }
									   .right{
										   font-size:31rpx;
										   width: 300rpx;
										   font-family:PingFang SC;
										   font-weight:600;
										   color:rgba(26,103,82,1);
										   line-height:43rpx;
									   }
					}
				}
			  
			  
		}
	}
	
</style>
