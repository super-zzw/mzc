<template>
	<view class="container">
		<view class="alertBox">
			<text class="title" v-if="title">{{title}}</text>
			<text class="content" v-if="content">{{content}}</text>
			<view class="btns">
				<view class="btn yes" @tap="handleBtn1">是</view>
				<view class="btn no" @tap="handleBtn2">否</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			title:'',
			content:''
		},
		methods:{
			handleBtn1(){
				this.$emit('tapBtn',true)
			},
			handleBtn2(){
				this.$emit('tapBtn',false)
			}
		}
	}
</script>

<style lang="less" scoped>
  .container{
	  width: 100vw;
	  height: 100vh;
	  background: rgba(0,0,0,.7);
	  position: absolute;
	  left: 0;
	  top: 0;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  .alertBox{
		  width: 670rpx;
		  // height: 333rpx;
		  display: flex;
		  flex-direction: column;
		  align-items: center;
		  background: #fff;
		  border-radius:7rpx;
		  .title{
			  margin-top:50rpx;
			  font-size:40rpx;
			  font-family:PingFang SC;
			  font-weight:600;
			  color:rgba(38,84,71,1);
		  }
		  .content{
			  margin-top: 30rpx;
			 font-size:33rpx;
			 font-family:PingFang SC;
			 font-weight:500;
			 color:rgba(38,84,71,1);
			
		  }
		  .btns{
			  margin: 50rpx 0;
			  display: flex;
			  justify-content: space-around;
			 width: 100%;
			 
			  .btn{
				  width: 236rpx;
				  height: 83rpx;
				  border-radius:41rpx;
				  display: flex;
				  align-items: center;
				  justify-content: center;
			  }
			  .yes{
				  background: #3D8762;
				  color: #fff;
			  }
			  .no{
				  border:2rpx solid rgba(61,135,98,1);
				  background: #fff;
				  color: #3D8762;
			  }
		  }
	  }
  }
</style>
