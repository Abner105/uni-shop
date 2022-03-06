import http from "./http.js"
// 获取轮播图数据
const getSwiper = ()=>http({url:"/home/swiperdata",method:"GET"})
// 获取商品数据
const getGoods = ()=>http({url:"/goods/search",method:"GET"})
// 获取社区图片
const getgroup = ()=>http({url:"/home/floordata",method:"GET"})
// 获取商品详情
const getDoodsDetail = (id)=>http({url:`/goods/detail?goods_id=${id}`,method:"GET"})
export{
	getSwiper,
	getGoods,
	getgroup,
	getDoodsDetail
}