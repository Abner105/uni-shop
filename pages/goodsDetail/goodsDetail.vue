<template>
	<view>
		<!-- 轮播图 -->
		<swiper indicator-dots autoplay circular>
			<swiper-item v-for="(item,index) in detail.pics" :key="index">
				<image :src="item.pics_big" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<!-- 价格 -->
		<view class="price">
			<text>￥{{detail.goods_price}}</text>
			<text class="martprice">￥5637</text>
		</view>
		<!-- title -->
		<view class="title">
			{{detail.goods_name}}
		</view>
		<view class="attr">
			<view>货号：SD-{{detail.goods_id}}</view>
			<view>库存：{{detail.goods_state}}</view>
		</view>
		<view class="introduce">
			<view>详情介绍</view>
			<rich-text :nodes="detail.goods_introduce"></rich-text>
		</view>
		<uni-goods-nav class="foot-bar" :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
			@buttonClick="buttonClick" />
	</view>
</template>

<script>
// import uniGoodsNav from '../../components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				detail: {},
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
				  text: '加入购物车',
				 	backgroundColor: '#ff0000',
						color: '#fff'
				 },
					{
				 	text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			async getGoodsDetail(id) {
				let res = await this.$API.getDoodsDetail(id)
				console.log(res)
				this.detail = res.message
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				console.log(e)
				this.options[2].info++
			}
		},
		onLoad({
			id
		}) {
			this.getGoodsDetail(id)
		}
	}
</script>

<style lang="scss" scoped>
	swiper {
		height: 750rpx;
		width: 750rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.price {
		color: $uni-bg-color;
		font-size: 40rpx;
		margin: 20rpx;
		.martprice {
			margin-left: 20rpx;
			font-size: 30rpx;
			color: #bbb;
			text-decoration: line-through;
		}
	}

	.title {
		margin: 20rpx;
		margin-bottom: 30rpx;
	}

	.attr {
		margin-top: 20rpx;
		padding: 10rpx 20rpx;
		border-bottom: 10rpx solid $uni-bg-color-grey;
		border-top: 10rpx solid $uni-bg-color-grey;

		view {
			margin: 10rpx 0;
		}
	}

	.introduce {
		padding: 20rpx;
		padding-bottom: 50rpx;
		view {
			padding-bottom: 10rpx;
			border-bottom: 4rpx solid $uni-bg-color-grey;
			margin-bottom: 20rpx;
		}
	}
	.foot-bar{
		position: fixed;
		bottom: 0;
		width: 750rpx;
	}
</style>
