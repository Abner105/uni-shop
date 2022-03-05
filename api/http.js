// 封装小程序网络请求方法
let baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1"
const http = function(config) {
	config.url = baseUrl + config.url
	return new Promise((resolve, reject) => {
		uni.request({
			...config,
			success(res) {
				if (res.data.meta.status !== 200) {
					uni.showToast({
						title: res.data.meta.msg,
						icon:"none"
					})
					reject(res.data.meta.msg)
				} else {
					resolve(res.data)
				}
			},
			fail(err) {
				reject(err)
			}
		})
	})
}
export default http
