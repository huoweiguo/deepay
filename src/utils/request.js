import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API || '', // 基础URL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么

    // 添加token到请求头
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    // 添加loading状态
    // 这里可以配合全局loading组件使用
    // store.commit('SET_LOADING', true)

    return config
  },
  (error) => {
    // 对请求错误做些什么
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么

    // 关闭loading
    // store.commit('SET_LOADING', false)

    const { data, status } = response

    // 根据后端返回的状态码判断请求是否成功
    console.log('响应数据:', status)
    return data
  },
  (error) => {
    // 对响应错误做点什么

    // 关闭loading
    // store.commit('SET_LOADING', false)

    console.error('响应错误:', error)

    if (error.response) {
      const { status, data } = error.response

      switch (status) {
        case 401:
          // 未授权，清除token并跳转到登录页
          localStorage.removeItem('token')
          // router.push('/login')
          console.error('登录已过期，请重新登录')
          break
        case 403:
          console.error('没有权限访问')
          break
        case 404:
          console.error('请求的资源不存在')
          break
        case 500:
          console.error('服务器内部错误')
          break
        default:
          console.error(data?.message || '请求失败')
      }
    } else if (error.request) {
      // 请求已发出但没有收到响应
      console.error('网络连接失败，请检查网络')
    } else {
      // 请求配置出错
      console.error('请求配置错误')
    }

    return Promise.reject(error)
  }
)

// 封装GET请求
export function get(url, params, config = {}) {
  return service.get(url, { params, ...config })
}

// 封装POST请求
export function post(url, data, config = {}) {
  return service.post(url, data, config)
}

// 封装PUT请求
export function put(url, data, config = {}) {
  return service.put(url, data, config)
}

// 封装DELETE请求
export function del(url, config = {}) {
  return service.delete(url, config)
}

// 封装上传文件请求
export function upload(url, file, config = {}) {
  const formData = new FormData()
  formData.append('file', file)

  return service.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    ...config
  })
}

// 导出axios实例
export default service
