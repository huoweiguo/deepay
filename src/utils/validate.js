/**
 * 验证工具函数
 */

// 邮箱验证规则
export const emailRules = {
  // 基础邮箱格式验证
  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

  // 更严格的邮箱验证（包含更多规则）
  strict: /^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9]([a-zA-Z0-9.-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/,

  // 常见邮箱域名验证
  commonDomains: [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'qq.com',
    '163.com',
    '126.com',
    'sina.com',
    'sohu.com',
    'yeah.net'
  ]
}

/**
 * 验证邮箱格式
 * @param {string} email - 要验证的邮箱地址
 * @param {boolean} strict - 是否使用严格模式
 * @returns {boolean} - 验证结果
 */
export function validateEmail(email, strict = false) {
  if (!email || typeof email !== 'string') {
    return false
  }

  // 去除首尾空格
  const trimmedEmail = email.trim()

  // 检查长度
  if (trimmedEmail.length < 5 || trimmedEmail.length > 254) {
    return false
  }

  // 使用正则表达式验证
  const pattern = strict ? emailRules.strict : emailRules.pattern
  return pattern.test(trimmedEmail)
}

/**
 * 验证邮箱域名是否为常见域名
 * @param {string} email - 邮箱地址
 * @returns {boolean} - 是否为常见域名
 */
export function isCommonEmailDomain(email) {
  if (!validateEmail(email)) {
    return false
  }

  const domain = email.split('@')[1].toLowerCase()
  return emailRules.commonDomains.includes(domain)
}

/**
 * 获取邮箱验证错误信息
 * @param {string} email - 邮箱地址
 * @returns {string|null} - 错误信息，null表示验证通过
 */
export function getEmailError(email) {
  if (!email) {
    return '请输入邮箱地址'
  }

  if (typeof email !== 'string') {
    return '邮箱格式不正确'
  }

  const trimmedEmail = email.trim()

  if (trimmedEmail.length === 0) {
    return '请输入邮箱地址'
  }

  if (trimmedEmail.length < 5) {
    return '邮箱地址太短'
  }

  if (trimmedEmail.length > 254) {
    return '邮箱地址太长'
  }

  if (!trimmedEmail.includes('@')) {
    return '邮箱地址必须包含@符号'
  }

  if (!trimmedEmail.includes('.')) {
    return '邮箱地址格式不正确'
  }

  const parts = trimmedEmail.split('@')
  if (parts.length !== 2) {
    return '邮箱地址格式不正确'
  }

  const [localPart, domain] = parts

  if (localPart.length === 0) {
    return '邮箱地址@前不能为空'
  }

  if (domain.length === 0) {
    return '邮箱地址@后不能为空'
  }

  if (!domain.includes('.')) {
    return '邮箱域名格式不正确'
  }

  if (!validateEmail(trimmedEmail)) {
    return '邮箱地址格式不正确'
  }

  return null
}

/**
 * 实时验证邮箱（用于输入框验证）
 * @param {string} email - 邮箱地址
 * @returns {object} - 验证结果对象
 */
export function validateEmailRealTime(email) {
  const result = {
    isValid: false,
    error: null,
    warning: null,
    suggestions: []
  }

  if (!email) {
    return result
  }

  const trimmedEmail = email.trim()

  // 基础格式验证
  if (!validateEmail(trimmedEmail)) {
    result.error = getEmailError(trimmedEmail)
    return result
  }

  result.isValid = true

  // 检查是否为常见域名
  if (!isCommonEmailDomain(trimmedEmail)) {
    result.warning = '请确认邮箱地址是否正确'
  }

  // 提供建议
  const domain = trimmedEmail.split('@')[1].toLowerCase()
  if (domain.includes('gmai') || domain.includes('gmal')) {
    result.suggestions.push('gmail.com')
  } else if (domain.includes('yaho')) {
    result.suggestions.push('yahoo.com')
  } else if (domain.includes('hotmai')) {
    result.suggestions.push('hotmail.com')
  }

  return result
}

/**
 * 格式化邮箱地址（统一格式）
 * @param {string} email - 邮箱地址
 * @returns {string} - 格式化后的邮箱地址
 */
export function formatEmail(email) {
  if (!validateEmail(email)) {
    return email
  }

  // 去除首尾空格，转换为小写
  return email.trim().toLowerCase()
}

/**
 * 提取邮箱域名
 * @param {string} email - 邮箱地址
 * @returns {string|null} - 域名部分
 */
export function extractEmailDomain(email) {
  if (!validateEmail(email)) {
    return null
  }

  return email.split('@')[1].toLowerCase()
}

/**
 * 提取邮箱用户名部分
 * @param {string} email - 邮箱地址
 * @returns {string|null} - 用户名部分
 */
export function extractEmailUsername(email) {
  if (!validateEmail(email)) {
    return null
  }

  return email.split('@')[0]
}

// 其他常用验证规则
export const validateRules = {
  // 手机号验证（中国大陆）
  phone: /^1[3-9]\d{9}$/,

  // 密码强度验证（至少8位，包含大小写字母和数字）
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,

  // 用户名验证（3-20位字母数字下划线）
  username: /^[a-zA-Z0-9_]{3,20}$/,

  // 身份证号验证（中国大陆）
  idCard: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,

  // URL验证
  url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/,

  // 中文姓名验证
  chineseName: /^[\u4e00-\u9fa5]{2,4}$/,

  // 邮政编码验证
  postalCode: /^[1-9]\d{5}$/
}

/**
 * 验证手机号
 * @param {string} phone - 手机号
 * @returns {boolean} - 验证结果
 */
export function validatePhone(phone) {
  return validateRules.phone.test(phone)
}

/**
 * 验证密码强度
 * @param {string} password - 密码
 * @returns {object} - 验证结果
 */
export function validatePassword(password) {
  const result = {
    isValid: false,
    score: 0,
    suggestions: []
  }

  if (!password) {
    result.suggestions.push('请输入密码')
    return result
  }

  let score = 0

  // 长度检查
  if (password.length >= 8) score += 1
  if (password.length >= 12) score += 1

  // 包含小写字母
  if (/[a-z]/.test(password)) score += 1

  // 包含大写字母
  if (/[A-Z]/.test(password)) score += 1

  // 包含数字
  if (/\d/.test(password)) score += 1

  // 包含特殊字符
  if (/[@$!%*?&]/.test(password)) score += 1

  result.score = score
  result.isValid = score >= 4

  // 提供建议
  if (password.length < 8) {
    result.suggestions.push('密码长度至少8位')
  }
  if (!/[a-z]/.test(password)) {
    result.suggestions.push('建议包含小写字母')
  }
  if (!/[A-Z]/.test(password)) {
    result.suggestions.push('建议包含大写字母')
  }
  if (!/\d/.test(password)) {
    result.suggestions.push('建议包含数字')
  }
  if (!/[@$!%*?&]/.test(password)) {
    result.suggestions.push('建议包含特殊字符')
  }

  return result
}

/**
 * 验证用户名
 * @param {string} username - 用户名
 * @returns {boolean} - 验证结果
 */
export function validateUsername(username) {
  return validateRules.username.test(username)
}

/**
 * 验证身份证号
 * @param {string} idCard - 身份证号
 * @returns {boolean} - 验证结果
 */
export function validateIdCard(idCard) {
  return validateRules.idCard.test(idCard)
}

/**
 * 验证URL
 * @param {string} url - URL地址
 * @returns {boolean} - 验证结果
 */
export function validateUrl(url) {
  return validateRules.url.test(url)
}

/**
 * 验证中文姓名
 * @param {string} name - 姓名
 * @returns {boolean} - 验证结果
 */
export function validateChineseName(name) {
  return validateRules.chineseName.test(name)
}

/**
 * 验证邮政编码
 * @param {string} postalCode - 邮政编码
 * @returns {boolean} - 验证结果
 */
export function validatePostalCode(postalCode) {
  return validateRules.postalCode.test(postalCode)
}

// 导出所有验证规则
export default {
  emailRules,
  validateEmail,
  isCommonEmailDomain,
  getEmailError,
  validateEmailRealTime,
  formatEmail,
  extractEmailDomain,
  extractEmailUsername,
  validateRules,
  validatePhone,
  validatePassword,
  validateUsername,
  validateIdCard,
  validateUrl,
  validateChineseName,
  validatePostalCode
}
