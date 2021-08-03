<template>
	<view class="content">
		<uni-popup ref="popup" type="message">
		    <uni-popup-message type="info" :message="hello" :duration="3000"></uni-popup-message>
		</uni-popup>
		<view class="top1" v-if="flag"> 
			<view class="avator"><image :src="userInfo.photoUrl"></image></view>
			<view class="hello">您好，<text>{{userInfo.nickname}}</text></view>
			<view class="hello"> 您第一次登陆此页面的时间是：</view>	
			<view class="hello"> <uni-dateformat :date="userInfo.fristuse" :threshold="[60000,259200000]"></uni-dateformat></view>
			<view class="hello"> 您总共登陆此页面{{userInfo.usetimes}}次</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {},
				hello:'授权中...',
				flag:false,
				empty:true
				}
		},
		onLoad() {
			 this.getUserInfo()
		},
		onReady() {
			this.open();
		},
		methods: {
			open(){
			  // 通过组件定义的ref调用uni-popup方法 
			  this.$refs.popup.open('top')
			  
			},
			async getUserInfo(){
				const res = await this.$comRequest({
					url:'api/getuserstatus?code='+location.search.substr(1).match(new RegExp("(^|&)" + "code" + "=([^&]*)(&|$)"))[2]
				})
				//console.log(res)
				this.userInfo = res.data.message[0];
				this.hello = '欢迎您，' + res.data.message[0].nickname;
			 this.flag = true
			}
		}
	}
</script>

<style lang="scss">
.content{
	width: 750rpx;
	.top1{
		margin-top: 50rpx;
		.avator{
			background-color: #F1F1F1;
			padding: 10rpx;
			height: 240rpx;
			width: 240rpx;
			border-radius: 150rpx;
			margin: 50rpx auto;
			text-align: center;
			image{
				height: 240rpx;
				width: 240rpx;
				border-radius: 150rpx;
			}
		}
		.hello{
			line-height: 50rpx;
			text-align: center;
			text{
				font-size: 36rpx;
				font-weight: bold;
			}
		}
	}
}	
</style>
