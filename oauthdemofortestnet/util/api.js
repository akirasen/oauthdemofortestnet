const BASE_URL = 'https://apis.bashe.cc/v99/'

export const comRequest = (OPtions)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+OPtions.url,
			method:OPtions.Method || 'GET',
			data:OPtions.data || {},
			success: (res) => {
				if(res.data.status !== 0){
					return uni.showToast({
						title:'数据获取失败'
					})
				}
				resolve(res)		
			},
			fail: (err) => {
				uni.showToast({
					title:'请求接口失败'
				})
				reject(err)
			}
		})
	})
}
