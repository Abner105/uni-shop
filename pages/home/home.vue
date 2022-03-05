<template>
	<view class="content">
		<!-- 轮播图 -->
		<swiper indicator-dots autoplay circular class="swiper">
			<swiper-item v-for="item in swiper" :key="item.goods_id">
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>
		<!-- 导航 -->
		<view class="tabbar">
			<view class="item" v-for="(item,index) in tarbar" :key="index" @click="toPage(item.path)">
				<view :class="item.iconclass"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="wrap">
			<view class="recommend">推荐商品</view>
			<goodlist :goods="goods"></goodlist>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper: [],
				goods: [],
				tarbar:[
					{
						iconclass:"iconfont icon-ziyuan",
						title:"黑马超市",
						path:"../goods/goods"
					},
					{
						iconclass:"iconfont icon-guanyuwomen",
						title:"联系我们",
						path:"../we/we"
					},
					{
						iconclass:"iconfont icon-tupian",
						title:"社区图片",
						path:"../group/group"
					},
					{
						iconclass:"iconfont icon-shipin",
						title:"学习视频",
						path:"../video/video"
					},
				]
			}
		},
		onLoad() {
			this.getSwiper()
			this.getGoods()
		},
		methods: {
			async getSwiper() {
				let res = await this.$API.getSwiper()
				this.swiper = res.message
			},
			async getGoods() {
				let res = await this.$API.getGoods()
				this.goods = res.message.goods
			},
			toPage(url){
				uni.navigateTo({
					 url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper {
		width: 750rpx;
		height: 380rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.tabbar {
		display: flex;
		justify-content: space-around;
		margin: 10rpx 0;

		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;

			view {
				width: 120rpx;
				height: 120rpx;
				background-color: $uni-bg-color;
				border-radius: 50%;
				color: #FFFFFF;
				font-size: 50rpx;
				text-align: center;
				line-height: 120rpx;
				margin: 20rpx 0;
			}
		}

	}

	.wrap {
		background-color: $uni-bg-color-grey;
		overflow: hidden;
		margin-top: 40rpx;

		.recommend {
			width: 750rpx;
			height: 100rpx;
			line-height: 100rpx;
			background-color: #FFFFFF;
			margin: 10rpx 0;
			text-align: center;
			color: $uni-bg-color;
			font-size: 45rpx;
			letter-spacing: 30rpx;
		}
	}
</style>
