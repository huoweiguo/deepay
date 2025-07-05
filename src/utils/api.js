import { get, post, put } from './request'

// 用户相关接口
export const userApi = {
  // 用户登录
  login: (data) => post('/user/login', data),

  // 用户注册
  register: (data) => post('/user/register', data),

  // 获取用户信息
  getUserInfo: () => get('/user/profile'),

  // 更新用户信息
  updateUserInfo: (data) => put('/user/updateProfile', data),

  // 修改密码
  changePassword: (data) => post('/user/resetPwd', data),

  // 发送验证码
  sendSmsCode: (email) => post('/user/sendRegisterOtp', { email }),

  // 发送验证码修改邮箱
  sendSmsCodeChangeEmail: (email, type) => post('/user/sendProfileOtp', { email, type }),

  // 发送重置密码
  sendSmsCodeResetPassword: (email) => post('/user/sendResetPwdOtp', { email })
}
