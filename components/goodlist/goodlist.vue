<template>

		<view class="goodslist">
			<view class="good-item" v-for="item in goods" :key="item.goods_id">
				<image src="../../static/hmlogo.png" mode="widthFix"></image>
				<view class="price">
					<text>￥{{item.goods_price}}</text>
					<text>￥4322</text>
				</view>
				<view class="title">
					{{item.goods_name}}
				</view>
			</view>
		</view>
</template>

<script>
	export default {
		name: "goodlist",
		data() {
			return {

			};
		},
		props: ["goods"]
	}
</script>

<style lang="scss" scoped>

	.goodslist {
		background-color: $uni-bg-color-grey;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 18rpx;

		.good-item {
			width: 350rpx;
			background-color: #FFFFFF;
			margin: 5rpx 0 10rpx;

			image {
				width: 80%;
				display: block;
				margin: 30rpx auto;
			}

			.price {
				font-size: 40rpx;
				color: $uni-bg-color;
				margin: 10rpx 10rpx;

				:nth-child(2) {
					font-size: 30rpx;
					color: #aaa;
					text-decoration: line-through;
				}
			}

			.title {
				margin: 10rpx;
				line-height: 44rpx;
			}
		}
	}
</style>
