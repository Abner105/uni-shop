<template>
	<view>
		<goodlist :goods="goods"></goodlist>
		<view v-show="show" class="bottom">
			到底了
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goods:[],
				show:false
			}
		},
		onLoad() {
			this.getGoods()
		},
		methods: {
			async getGoods() {
				let res = await this.$API.getGoods()
				this.goods = res.message.goods
			},
		},
		onPullDownRefresh() {
			this.goods=[]
			console.log("下拉刷新")
			setTimeout(()=>{
				this.getGoods()
				uni.stopPullDownRefresh()
			},500)
		},
		onReachBottom() {
			console.log("到底了")
			this.show = true
		}
	}
</script>

<style>

</style>
