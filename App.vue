<script>

	export default {
		onLaunch: function() {
			if(uni.getStorageSync('session')){
				this.$store.commit('isLoginSet',true)
			}
			
		},
		onShow: function() {

		
		
			
		},
		onHide: function() {
		
			
		}
	}
</script>

<style lang="less">
.html_img{
	max-width: 100%;
}
button::after{ border: none; }
.mask{
	  position: fixed;
	    top: 0;
	    left: 0;
	    width: 100vw;
	    height: 100vh;
	    background:rgba(52,52,52,0.7);
  }
	.main{
		    // height: 80%;
			width: 674rpx;
		
			position: absolute;
			top: 110rpx;
			left: 50%;
			transform: translateX(-50%);
		
			background: #fff;
			border-radius:47rpx;
			border-bottom-left-radius:47rpx;
			border-bottom-right-radius: 47rpx;
			padding-bottom:35rpx;
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
					border-radius: 50%;
					border:7rpx solid rgba(61,135,98,1);
				}
				
			}
			.orderBox{
			     height:1080rpx ;
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
		button{
			// padding: 0;
			margin: 0;
			line-height: 0;
		}
		button:after{
			line-height: 0;
			border: none;
			
		}
		::-webkit-scrollbar {
		    width: 0;
		    height: 0;
		    color: transparent;
         }
</style>
