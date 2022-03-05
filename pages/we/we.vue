<template>
	<view>
		<image src="https://api-hmugo-web.itheima.net/pyg/banner2.png" mode="widthFix"></image>
		<view class="phone" @click="callPhone">
			联系电话：400-800-666(点击拨打)
		</view>
		<view class="address">
			校区地址：四川省成都市高新区银泰城紫泉街122号时代新座17楼1702
		</view>
		<map :latitude="latitude" :longitude="longitude" :scale="14" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude:30.547463,
				longitude:104.06484,
				markers:[
					{
						latitude:30.547463,
						longitude:104.06484,
						iconPath:'../../static/hmlogo.png',
						width:30,
						height:30
					}
				]
			}
		},
		methods: {
			callPhone(){
				console.log(111)
				uni.makePhoneCall({
					phoneNumber:"400-800-666"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	image{
		width: 750rpx;
	}
	map{
		width:750rpx;
		height: 500rpx;
	}
	.phone,.address{
		margin: 20rpx;
		line-height: 50rpx;
	}
</style>
