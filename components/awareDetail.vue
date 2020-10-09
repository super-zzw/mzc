<template>
	<view>
		<view class="mask" v-if="isMask"></view>
		<view class="awardDetail" v-if="isMask">
			<image src="../static/close.png" @tap="close" class="close"></image>
			<!-- <saveFile :url="src" class="aware"></saveFile> -->
			<image :src="src" class="aware"  :data-url="src" @longpress="saveImg"  mode="widthFix"></image>
			<view class="txt1">可长按图片保存到本地，再进行分享</view>
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				
			};
		},
		created() {
			console.log(this.src)
		},
		props:{
			isMask:{
				default:false
			},
			src:{}
		},
	
		methods:{
			close(){
				this.$parent.isMask=false
			},
			 // 长按保存图片
			  saveImg(e){
			    let url = e.currentTarget.dataset.url;
			    //用户需要授权
			    uni.getSetting({
			      success: (res) => {
			        if (!res.authSetting['scope.writePhotosAlbum']) {
			          wx.authorize({
			            scope: 'scope.writePhotosAlbum',
			            success:()=> {
			              // 同意授权
			              this.saveImg1(url);
			            },
			            fail: (res) =>{
			              console.log(res);
			            }
			          })
			        }else{
			          // 已经授权了
			          this.saveImg1(url);
			        }
			      },
			      fail: (res) =>{
			        console.log(res);
			      }
			    })   
			  },
			  saveImg1(url){
				  uni.showModal({
				  	title: '图片保存',
				  	content: '确定要保存图片吗',
				  	success: e => {
				  		if (e['confirm']) {
				  			uni.getImageInfo({
				  			  src: url,
				  			  success:(res)=> {
				  			    let path = res.path;
				  			    uni.saveImageToPhotosAlbum({
				  			      filePath:path,
				  			      success:(res)=> { 
				  			       uni.showToast({
				  			       	title:'保存成功',
									icon:'success'
				  			       })
				  			      },
				  			      fail:(res)=>{
				  			        console.log(res);
				  			      }
				  			    })
				  			  },
				  			  fail:(res)=> {
				  			    console.log(res);
				  			  }
				  			})
				  		}
				  	}
				  });
			   
			  },
			
		}
	}
</script>

<style lang="less" scoped>
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
	  .aware{
		  height: auto;
		  width: 670rpx;
		  margin-top: 20rpx;
		  border-radius:47rpx;
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
