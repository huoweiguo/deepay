<template>
  <div class="navbar__container">
    <div class="navbar__header">
      <!-- <div>
        <img src="../assets/logo.png" alt="THE THIRD OCEAN TOWER" class="header__logo" />
      </div> -->
      <div class="navbar__header--menu">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/layanan">Service</router-link>
          </li>
          <li>
            <router-link to="/faq">FAQ</router-link>
          </li>
          <li>
            <router-link to="/kontak">Contact</router-link>
          </li>
        </ul>
        <!-- <a class="navbar__header--primary">Contact Us</a> -->
      </div>
      <div class="navbar__header--btn">
        <div class="login_content" v-if="!account">
          <a class="navbar__btn__register" @click="overlay = true, formStatus = 'register'">Register</a>
          <a class="navbar__btn__login" @click="overlay = true, formStatus = 'login'">Login</a>
        </div>
        <div class="login_content" v-else>
          <span class="user_name" @click="goUserPage">{{ account }}</span>
          <a class="navbar__btn__register" @click="dialog = true">Logout</a>
        </div>
      </div>
    </div>

    <div class="mask__container" v-show="overlay">
      <!--登录-->
      <div class="mask__container--content" v-show="formStatus === 'login'">
        <img src="../assets/close-gray.png" alt="close" class="close__btn" @click="overlay = false" />
        <h2 class="form__title">Login</h2>
        <div class="form__item">
          <label><i>*</i>email:</label>
          <div class="input__item"><input type="text" placeholder="Please enter email" v-model="loginParams.email" />
          </div>
        </div>
        <div class="form__item">
          <label><i>*</i>password:</label>
          <div class="input__item"><input type="password" placeholder="Please enter password"
              v-model="loginParams.password" /></div>
        </div>
        <div class="form__desc">
          <span @click="showMaskByType('register')">I don't have an account yet, go register</span>
          <span @click="showMaskByType('forget')">forgot password</span>
        </div>
        <div class="login__btn" v-if="canClick" @click="loginSubmit">Submit</div>
        <div class="login__btn disabled_btn" v-else>Loading...</div>
      </div>
      <!--注册-->
      <div class="mask__container--content" v-show="formStatus === 'register'">
        <img src="../assets/close-gray.png" alt="close" class="close__btn" @click="overlay = false" />
        <h2 class="form__title">Register</h2>
        <div class="form__item">
          <label><i>*</i>email:</label>
          <div class="input__item"><input type="text" placeholder="Please enter email" v-model="registerParams.email" />
          </div>
        </div>
        <div class="form__item">
          <label><i>*</i>code:</label>
          <div class="input__item">
            <input type="text" placeholder="Please enter code" v-model="registerParams.otp" />
            <span class="get__code" v-if="!isCounting" @click="sendCode">Get Code</span>
            <span class="get__code code_disabled" v-else>{{ countdown }}s</span>
          </div>
        </div>
        <div class="form__item">
          <label><i>*</i>password:</label>
          <div class="input__item"><input type="password" placeholder="Please enter password"
              v-model="registerParams.password" /></div>
        </div>
        <div class="form__desc">
          <span @click="formStatus = 'login'">I already have an account, go log in</span>
        </div>
        <div class="login__btn" v-if="canClick" @click="registerSubmit">Submit</div>
        <div class="login__btn disabled_btn" v-else>Loading...</div>
      </div>
      <!--忘记密码-->
      <div class="mask__container--content" v-show="formStatus === 'forget'">
        <img src="../assets/close-gray.png" alt="close" class="close__btn" @click="overlay = false" />
        <h2 class="form__title">Forgot password</h2>
        <div class="form__item">
          <label><i>*</i>email:</label>
          <div class="input__item"><input type="text" placeholder="Please enter email" v-model="forgetParams.email" />
          </div>
        </div>
        <div class="form__item">
          <label><i>*</i>code:</label>
          <div class="input__item">
            <input type="text" placeholder="Please enter code" v-model="forgetParams.otp" />
            <span class="get__code" v-if="!isCounting" @click="sendForgotCode">Get Code</span>
            <span class="get__code code_disabled" v-else>{{ countdown }}s</span>
          </div>
        </div>
        <div class="form__item">
          <label><i>*</i>password:</label>
          <div class="input__item"><input type="password" placeholder="Please enter password"
              v-model="forgetParams.password" /></div>
        </div>
        <div class="form__desc">
          <span @click="showMaskByType('register')">No account, go register</span>
          <span @click="formStatus = 'login'">Go login</span>
        </div>
        <div class="login__btn" v-if="canClick" @click="resetSubmit">Submit</div>
        <div class="login__btn disabled_btn" v-else>Loading...</div>
      </div>
    </div>


    <v-dialog v-model="dialog" width="auto">
      <v-card width="400" text="Are you sure you want to log out?" title="prompt">
        <template v-slot:actions>
          <v-btn text="CANCEL" @click="dialog = false"></v-btn>
          <v-btn text="Ok" @click="logout"></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useToast } from 'vue-toast-notification';
import emitter from '../tools/eventBus';
import validEmail from '../utils/validate';
import { userApi } from '../utils/api';
const dialog = ref(false);
const $toast = useToast();
const router = useRouter();
const account = ref('');
const sendLoading = ref(false);
const overlay = ref(false);
const countdown = ref(60);
const isCounting = ref(false);
const timer = ref(null);
const canClick = ref(true);
const formStatus = ref('login'); // login forget register
const loginParams = reactive({
  email: '',
  password: ''
})

const registerParams = reactive({
  email: '',
  password: '',
  otp: ''
})

const forgetParams = reactive({
  email: '',
  otp: '',
  password: ''
})

const showMaskByType = (type) => {
  overlay.value = true
  formStatus.value = type
  sendLoading.value = false
  isCounting.value = false
  countdown.value = 60
  canClick.value = true
  clearTimeout(timer.value)
}

// 重置密码
const resetSubmit = () => {
  const emailMsg = validEmail.getEmailError(forgetParams.email);
  if (emailMsg) {
    $toast.open({
      message: emailMsg,
      type: 'warning',
      position: 'top'
    })
    return false
  }

  if (forgetParams.otp.replace(/\s/g, '') == '') {
    $toast.open({
      message: 'Please enter the verification code',
      type: 'warning',
      position: 'top'
    })
    return false
  }

  if (forgetParams.password.replace(/\s/g, '') == '') {
    $toast.open({
      message: 'Please input a password',
      type: 'warning',
      position: 'top'
    })
    return false
  }

  canClick.value = false
  userApi.changePassword(forgetParams).then(res => {
    if (res.code == 200) {
      $toast.open({
        message: 'Password reset successful, please log in again',
        type: 'success',
        position: 'top'
      })
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
      account.value = ''
      formStatus.value = 'login'
      emitter.emit('updateUserInfo', {})

    } else {
      $toast.open({
        message: res.msg,
        type: 'warning',
        position: 'top'
      })
    }
    canClick.value = true
  })
}

const sendCode = () => {
  // 这里写你的发送验证码逻辑
  const emailMsg = validEmail.getEmailError(registerParams.email);
  if (emailMsg) {
    $toast.open({
      message: emailMsg,
      type: 'warning',
      position: 'top'
    })
    return false
  }

  // 发送成功后开始倒计时
  if (sendLoading.value) {
    return false
  }
  sendLoading.value = true
  userApi.sendSmsCode(registerParams.email).then(res => {
    sendLoading.value = false
    if (res.code === 200) {
      $toast.open({
        message: 'Successfully sent',
        type: 'success',
        position: 'top'
      })

      isCounting.value = true;
      countdown.value = 60;
      timer.value = setInterval(() => {
        countdown.value--;
        if (countdown.value === 0) {
          clearInterval(timer.value);
          isCounting.value = false;
        }
      }, 1000);
    } else {
      $toast.open({
        message: res.msg,
        type: 'error',
        position: 'top'
      })
    }
  })
}

const sendForgotCode = () => {
  // 这里写你的发送验证码逻辑
  const emailMsg = validEmail.getEmailError(forgetParams.email);
  if (emailMsg) {
    $toast.open({
      message: emailMsg,
      type: 'warning',
      position: 'top'
    })
    return false
  }

  // 发送成功后开始倒计时
  if (sendLoading.value) {
    return false
  }
  sendLoading.value = true

  userApi.sendSmsCodeResetPassword(forgetParams.email).then(res => {
    sendLoading.value = false
    if (res.code === 200) {
      $toast.open({
        message: 'Successfully sent',
        type: 'success',
        position: 'top'
      })

      isCounting.value = true;
      countdown.value = 60;
      timer.value = setInterval(() => {
        countdown.value--;
        if (countdown.value === 0) {
          clearInterval(timer.value);
          isCounting.value = false;
        }
      }, 1000);
    } else {
      $toast.open({
        message: res.msg,
        type: 'error',
        position: 'top'
      })
    }
  })
}

const registerSubmit = () => {
  const emailMsg = validEmail.getEmailError(registerParams.email);
  if (emailMsg) {
    $toast.open({
      message: emailMsg,
      type: 'warning',
      position: 'top'
    })
    return false
  }

  if (registerParams.otp.replace(/\s/g, '') === '') {
    $toast.open({
      message: 'Plaese enter the verification code',
      type: 'warning',
      position: 'top'
    })
    return false
  }

  if (registerParams.password.replace(/\s/g, '') === '' || registerParams.password.length < 6) {
    $toast.open({
      message: 'Password cannot be less than 6 characters',
      type: 'warning',
      position: 'top'
    })
    return false
  }
  canClick.value = false
  // 注册
  userApi.register(registerParams).then(res => {
    if (res.code === 200) {
      $toast.open({
        message: 'Registration successful, please log in',
        type: 'success',
        position: 'top'
      })

      formStatus.value = 'login'

    } else {
      $toast.open({
        message: res.msg,
        type: 'error',
        position: 'top'
      })
    }
    canClick.value = true
  })
}

const getUserInfo = () => {
  userApi.getUserInfo().then(res => {
    if (res.code === 200) {
      localStorage.setItem('userInfo', JSON.stringify(res.result))
      account.value = res.result?.email
      emitter.emit('updateUserInfo', res.result)
    }
  })
}

const loginSubmit = () => {
  const emailMsg = validEmail.getEmailError(loginParams.email);
  if (emailMsg) {
    $toast.open({
      message: emailMsg,
      type: 'warning',
      position: 'top'
    })
    return false
  }

  if (loginParams.password.replace(/\s/g, '') === '' || loginParams.password.length < 6) {
    $toast.open({
      message: 'Password cannot be less than 6 characters',
      type: 'warning',
      position: 'top'
    })
    return false
  }
  canClick.value = false
  // 登录
  userApi.login(loginParams).then(res => {
    if (res.code === 200) {
      $toast.open({
        message: 'Login successful, obtaining user information',
        type: 'success',
        position: 'top'
      })
      localStorage.setItem('token', res.result.token)
      getUserInfo()
      overlay.value = false
      // 获取用户信息
    } else {
      $toast.open({
        message: res.msg,
        type: 'error',
        position: 'top'
      })
    }

    canClick.value = true
  })
}

const goUserPage = () => {
  router.push('/details');
}

const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('userInfo')
  account.value = ''
  dialog.value = false
  $toast.open({
    message: 'Exit successful',
    type: 'success',
    position: 'top'
  })
  emitter.emit('updateUserInfo', {})
}

onMounted(() => {
  let userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : ''
  account.value = userInfo.email ? userInfo.email : ''
})

emitter.on('clearHeaderInfo', () => {
  account.value = ''
})

emitter.on('updateInfoInterface', () => {
  getUserInfo()
})

emitter.on('showOverLayer', (type) => {
  overlay.value = true;
  formStatus.value = type;
})
</script>


<style lang="scss" scoped>
.navbar__container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 25px 0;
  height: 105px;
  box-sizing: border-box;
  z-index: 100;
  background-color: rgb(230, 243, 247);

  .navbar__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1215px;
    height: 100%;
    margin: 0 auto;

    .navbar__header--btn {
      display: flex;
      align-items: center;
    }

    .navbar__btn__register,
    .navbar__btn__login {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 130px;
      height: 50px;
      border: 1px solid #254da7;
      color: #254da7;
      border-radius: 25px;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        text-decoration: none;
      }
    }

    .navbar__btn__login {
      margin-left: 20px;
      background-color: #254da7;
      color: #fff;
    }

    .header__logo {
      height: 100px;
    }

    .navbar__header--menu {
      display: flex;
      align-items: center;

      ul {
        display: flex;
        margin-right: 80px;

        li {
          list-style: none;
          padding-left: 27px;
          padding-right: 27px;

          a {
            color: #254da7;
            fill: #254da7;
            font-size: 24px;
            font-weight: bolder;
          }
        }
      }

      .navbar__header--primary {
        font-weight: bolder;
        text-transform: uppercase;
        background-color: #254da7;
        border-radius: 47px 47px 47px 47px;
        padding: 20px 40px 20px 40px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        transition: 0.3s;
      }

      .navbar__header--primary:hover {
        transform: scale(1.05);
        text-decoration: none;
      }
    }
  }
}

.login_content {
  display: flex;
  align-items: center;

  .user_name {
    margin-right: 10px;
    font-size: 20px;
    color: #254da7;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}

.mask__container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  .mask__container--content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 60px 30px 30px;
    background-color: #fff;
    border-radius: 10px;

    .close__btn {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }

    .form__title {
      display: flex;
      justify-content: center;
      font-size: 20px;
      color: #254da7;
      margin-bottom: 30px;
    }

    .form__item {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      label {
        display: flex;
        align-items: center;
        color: #254da7;
        font-size: 14px;
        width: 90px;
        height: 35px;

        i {
          display: flex;
          align-items: center;
          color: #f00;
          height: 35px;
          margin-right: 5px;
        }
      }

      .input__item {
        position: relative;
        width: 260px;

        .get__code {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #254da7;
          cursor: pointer;
          font-size: 14px;
        }

        .code_disabled {
          color: #999;
          cursor: default;
        }

        input[type='text'],
        input[type='password'] {
          height: 35px;
          width: 100%;
          border: 1px solid #ddd;
          outline: none;
          padding: 0 10px;
          box-sizing: border-box;
          font-size: 14px;
        }
      }
    }

    .form__desc {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;

      span {
        color: #254da7;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .login__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 40px;
      background-color: #254da7;
      color: #fff;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 14px;
      border-radius: 20px;

      &:hover {
        background-color: #1d3a8a;
      }
    }

    .disabled_btn {
      background-color: #ddd;
      cursor: default;

      &:hover {
        background-color: #ddd;
      }
    }
  }
}
</style>
