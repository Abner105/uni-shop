<template>
	<view class="photo">
		<scroll-view class="left" scroll-y>
			<view @click="barClick(index)" :class="{active:active==index}" v-for="(item,index) in leftBar" :key="index">
				{{item.floor_title.name}}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view v-for="item in rightList">
				<image :src="item.image_src" mode="widthFix" @click="priview(item.image_src)"></image>
				<view class="title">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				leftBar: []
			}
		},
		computed: {
			rightList() {
				return this.leftBar.length > 0 ? this.leftBar[this.active].product_list : []
			}
		},
		methods: {
			async getGroup() {
				let res = await this.$API.getgroup()
				this.leftBar = res.message
			},
			barClick(index) {
				this.active = index
			},
			priview(current){
				let urls = this.rightList.map(item=>item.image_src)
				uni.previewImage({
					current,
					urls
				})
			}
		},
		onLoad() {
			this.getGroup()
		}
	}
</script>

<style scoped lang="scss">
	.photo {
		display: flex;
		height: 100%;

		.left {
			height: 100%;
			width: 30%;
			border-right: 1rpx solid $uni-bg-color-grey;
			view {
				height: 130rpx;
				line-height: 130rpx;
				text-align: center;
				width: 100%;
				border-bottom: 1rpx solid $uni-bg-color-grey;
				margin-top: 2rpx;
				display: inline-block;
			}

			.active {
				background-color: $uni-bg-color;
				color: #FFFFFF;
			}
		}

		.right {
			width: 65%;
			margin: 0 auto;
			view{
				width: 100%;
				margin: 20rpx 0;
			}
			image {
				width: 100%;
			}
		}
	}
</style>
