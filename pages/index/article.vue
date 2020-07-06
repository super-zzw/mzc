<template>
	<view style="height: 100vh;">
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:''
			};
		},
		 onLoad(opt) {
			this.src= opt.url
			console.log(this.src)
		}
	}
</script>

<style lang="less">

</style>
