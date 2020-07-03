<template>
	<view class="outer flex align-center justify-center">
		<view class="null-page flex flex-column align-center justify-center">
			<image :src="imgSrc" class="null-img" :style="{width:imgWidth + 'rpx',height:imgHeight + 'rpx'}"></image>
			<text class="text">{{ tipsText }}</text>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		tipsText: {
			type: String,
			default: '- 暂无数据 -'
		},
		imgWidth:{
			type: String,
			default: '450'
		},
		imgHeight:{
			type: String,
			default: '350'
		}
	},
	data(){
		return{
			imgSrc: require("../static/404.png")
		}
	}
};
</script>

<style  lang="scss" scoped>
.outer{
	width: 100%;
	height: 70%;
}
.null-page {
	height: 100%;
	margin-top: 20rpx;
	padding-bottom: 40rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.text {
		margin-top: 20rpx;
		font-size:42rpx;
		font-family:PingFang SC;
		font-weight:600;
		color:rgba(26,103,82,1);
		
	}
</style>
