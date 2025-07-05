# Vue3 Axios 封装使用说明

## 文件结构

```
src/utils/
├── request.js    # axios 核心封装
├── api.js        # API 接口管理
└── README.md     # 使用说明
```

## 功能特性

### 1. 请求拦截器

- 自动添加 Authorization 请求头（Bearer Token）
- 支持全局 loading 状态管理
- 请求错误处理

### 2. 响应拦截器

- 统一响应数据处理
- 自动错误提示（使用 Element Plus 的 ElMessage）
- HTTP 状态码处理（401、403、404、500 等）
- 网络错误处理

### 3. 封装的方法

- `get(url, params, config)` - GET 请求
- `post(url, data, config)` - POST 请求
- `put(url, data, config)` - PUT 请求
- `del(url, config)` - DELETE 请求
- `upload(url, file, config)` - 文件上传

## 使用方法

### 1. 基本使用

```javascript
import { get, post } from '@/utils/request'

// GET 请求
const getData = async () => {
  try {
    const result = await get('/api/data', { page: 1, size: 10 })
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}

// POST 请求
const createData = async (data) => {
  try {
    const result = await post('/api/data', data)
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}
```

### 2. 使用 API 管理

```javascript
import { userApi, dataApi } from '@/utils/api'

// 用户登录
const login = async (loginData) => {
  try {
    const result = await userApi.login(loginData)
    return result
  } catch (error) {
    throw error
  }
}

// 获取数据列表
const getList = async (params) => {
  try {
    const result = await dataApi.getList(params)
    return result
  } catch (error) {
    throw error
  }
}
```

### 3. 文件上传

```javascript
import { uploadApi } from '@/utils/api'

// 上传图片
const uploadImage = async (file) => {
  try {
    const result = await uploadApi.uploadImage(file)
    return result
  } catch (error) {
    throw error
  }
}

// 批量上传
const batchUpload = async (files) => {
  try {
    const result = await uploadApi.batchUpload(files)
    return result
  } catch (error) {
    throw error
  }
}
```

## 配置说明

### 1. 环境变量配置

在项目根目录创建 `.env` 文件：

```env
# 开发环境
VUE_APP_BASE_API=http://localhost:3000/api

# 生产环境
VUE_APP_BASE_API=https://your-api-domain.com/api
```

### 2. 自定义配置

可以在 `request.js` 中修改以下配置：

```javascript
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API || '/api', // 基础URL
  timeout: 10000, // 请求超时时间（毫秒）
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})
```

### 3. 响应数据格式

默认期望的响应数据格式：

```javascript
{
  code: 200,        // 状态码
  message: "成功",   // 消息
  data: {           // 数据
    // 具体数据
  }
}
```

如果你的后端返回格式不同，可以在 `request.js` 的响应拦截器中修改判断逻辑。

## 错误处理

### 1. HTTP 状态码处理

- `401` - 未授权，自动清除 token 并提示重新登录
- `403` - 无权限访问
- `404` - 资源不存在
- `500` - 服务器内部错误

### 2. 网络错误处理

- 网络连接失败
- 请求超时
- 请求配置错误

### 3. 业务错误处理

根据后端返回的 `code` 字段判断业务是否成功，失败时自动显示错误消息。

## Token 管理

### 1. 存储 Token

```javascript
// 登录成功后保存 token
localStorage.setItem('token', response.data.token)
```

### 2. 自动添加 Token

请求拦截器会自动从 `localStorage` 中获取 `token` 并添加到请求头：

```javascript
Authorization: Bearer your-token-here
```

### 3. Token 过期处理

当收到 401 响应时，会自动清除 token 并提示重新登录。

## 扩展功能

### 1. 添加全局 Loading

在 `request.js` 中取消注释相关代码：

```javascript
// 请求拦截器
service.interceptors.request.use((config) => {
  // 添加loading状态
  store.commit('SET_LOADING', true)
  return config
})

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 关闭loading
    store.commit('SET_LOADING', false)
    return response
  },
  (error) => {
    // 关闭loading
    store.commit('SET_LOADING', false)
    return Promise.reject(error)
  }
)
```

### 2. 添加请求重试

```javascript
// 在 request.js 中添加重试逻辑
const retryRequest = (error) => {
  const config = error.config

  if (!config || !config.retry) return Promise.reject(error)

  config.__retryCount = config.__retryCount || 0

  if (config.__retryCount >= config.retry) {
    return Promise.reject(error)
  }

  config.__retryCount += 1

  return service(config)
}
```

### 3. 添加请求取消

```javascript
import { CancelToken } from 'axios'

// 创建取消令牌
const source = CancelToken.source()

// 发送请求时传入取消令牌
const getData = async () => {
  try {
    const result = await get(
      '/api/data',
      {},
      {
        cancelToken: source.token
      }
    )
    return result
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('请求被取消')
    }
  }
}

// 取消请求
source.cancel('请求被用户取消')
```

## 注意事项

1. 确保项目中已安装 `axios` 和 `element-plus`
2. 根据实际后端接口调整响应数据格式判断逻辑
3. 在生产环境中配置正确的 API 基础地址
4. 注意处理组件卸载时的请求取消，避免内存泄漏
5. 合理使用 loading 状态，提升用户体验

## 示例组件

参考 `src/components/Example.vue` 查看完整的使用示例，包括：

- 用户登录
- 验证码发送（60 秒倒计时）
- 数据列表获取
- 文件上传
- 错误处理
