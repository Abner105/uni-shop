import http from "./http.js"
// 获取轮播图数据
const getSwiper = ()=>http({url:"/home/swiperdata",method:"GET"})
// 获取商品数据
const getGoods = ()=>http({url:"/goods/search",method:"GET"})

export{
	getSwiper,
	getGoods
}