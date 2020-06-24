<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="less">
.html_img{
	max-width: 100%;
}
	.main{
		    height: 1050rpx;
			width: 674rpx;
			margin: 0 auto;
			margin-top: 120rpx;
			background: #fff;
			border-radius:47rpx;
			border-bottom-left-radius:47rpx;
			border-bottom-right-radius: 47rpx;
			padding-bottom:40rpx;
				box-sizing: border-box;
				// overflow: scroll;
				.header{
				height:90rpx;
				width: 100%;
				background:#3E8862;
				border-top-left-radius:47rpx;
				border-top-right-radius: 42rpx;
				position: relative;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				padding-right: 45rpx;
				box-sizing: border-box;
				.avatar{
					position: absolute;
					width: 164rpx;
					height: 164rpx;
					top: -85rpx;
					left: 260rpx;
				}
				
			}
			.orderBox{
			     height:900rpx ;
			   overflow: scroll;
				.orderItem{
					.wraper{
						padding-left: 44rpx;
						padding-right: 7rpx;
						padding-bottom: 10rpx;
						background: #fff;
						margin-bottom: 14rpx;
					}
					
					
					
				}
				.orderItem:after{
					content: '';
					display: block;
					height: 14rpx;
					background: #E5F7E1;
				}
				.orderItem:last-child:after{
					content: '';
					display: block;
					height: 0rpx;
					
				}
			}
		}
		.divider1{
						  width:100%;
						  height:13rpx;
						  background:rgba(228,246,224,1);
		}
		.divider {
			height: 2rpx;
			width: 100%;
			background: #CACACA;
		}
</style>
