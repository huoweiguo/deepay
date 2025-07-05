<template>
  <div>
    <!--头部-->
    <Navbar />

    <!--内容-->
    <div class="user_info_container">
      <h2>User information</h2>
      <div class="user_content">
        <div class="user_item">
          <label>Email</label>
          <span>{{ userInfo.email }}</span>
          <div><a v-if="userInfo.email" @click="showMask = true, showType = 'updateEmail', params.otp = ''">update</a>
          </div>
        </div>
        <div class="user_item">
          <label>Registration Date</label>
          <span>{{ userInfo.created_at }}</span>
          <div></div>
        </div>
        <div class="user_item">
          <label>Password</label>
          <span class="password_span"><template v-if="userInfo.email">&bull; &bull; &bull; &bull; &bull; &bull;
            </template></span>
          <div><a v-if="userInfo.email" @click="updatePassword">update</a></div>
        </div>
        <div class="user_item">
          <label>Easypaisa wallet account</label>
          <span>{{ userInfo.easypaisa_account }}</span>
          <div></div>
        </div>
        <div class="user_item">
          <label>Wallet binding status</label>
          <span><template v-if="userInfo.email">{{ userInfo.easypaisa_account == '' ? 'unbinded' : 'binded'
              }}</template></span>
          <div>
            <template v-if="userInfo.email">
              <a @click="showBindAccount('bindWallet')" v-if="userInfo.easypaisa_account == ''">to bind</a>
              <a @click="showUnBindAccount('bindWallet')" v-else> unbind </a>
              <a @click="showBindAccount('updateWallet')" v-if="userInfo.easypaisa_account != ''">update</a>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!--底部-->
    <Bottom />

    <div class=" over_layer" v-if="showMask">
      <!--修改邮箱-->
      <div class="mask__container--content" v-if="showType === 'updateEmail'">
        <img src="@/assets/close-gray.png" alt="close" class="close__btn" @click="showMask = false" />
        <h2 class="form__title">Change email address</h2>
        <div class="form__item">
          <label><i>*</i>New email:</label>
          <div class="input__item"><input type="text" placeholder="Please enter new email" v-model="params.email" />
          </div>
        </div>
        <div class="form__item">
          <label><i>*</i>code:</label>
          <div class="input__item">
            <input type="text" placeholder="enter the new email code" v-model="params.otp" />
            <span class="get__code" v-if="!isCounting" @click="sendCode(params.email, 'change_email')">Get Code</span>
            <span class="get__code code_disabled" v-else>{{ countdown }}s</span>
          </div>
        </div>
        <div class="login__btn" @click="updateEmail" v-if="canClick">Submit</div>
        <div class="login__btn disabled_btn" v-else>Loading...</div>
      </div>

      <!--绑定钱包-->
      <div class="mask__container--content" v-if="showType === 'bindWallet'">
        <img src="@/assets/close-gray.png" alt="close" class="close__btn" @click="showMask = false" />
        <h2 class="form__title">Bind easypaisa wallet account</h2>
        <div class="form__item" v-if="!isUnbind">
          <label><i>*</i>wallet account:</label>
          <div class="input__item"><input type="text" placeholder="Easypaisa wallet account"
              v-model="bindParams.easypaisa_account" />
          </div>
        </div>
        <div class="form__item">
          <label>email:</label>
          <div class="input__item">
            {{ userInfo.email }}
          </div>
        </div>
        <div class="form__item">
          <label><i>*</i>code:</label>
          <div class="input__item">
            <input type="text" placeholder="enter the email code" v-model="bindParams.otp" />
            <span class="get__code" v-if="!isCounting" @click="sendCode(userInfo.email, 'change_easypaisa_account')">Get
              Code</span>
            <span class="get__code code_disabled" v-else>{{ countdown }}s</span>
          </div>
        </div>
        <div class="login__btn" @click="handleBindWallet" v-if="bindClick">Submit</div>
        <div class="login__btn disabled_btn" v-else>Loading...</div>
      </div>

      <!--修改钱包账户-->
      <div class="mask__container--content" v-if="showType === 'updateWallet'">
        <img src="@/assets/close-gray.png" alt="close" class="close__btn" @click="showMask = false" />
        <h2 class="form__title">Modify easypaisa wallet account</h2>
        <div class="form__item">
          <label><i>*</i>wallet account:</label>
          <div class="input__item"><input type="text" placeholder="Easypaisa wallet account"
              v-model="bindParams.easypaisa_account" />
          </div>
        </div>
        <div class="form__item">
          <label>email:</label>
          <div class="input__item">
            {{ userInfo.email }}
          </div>
        </div>
        <div class="form__item">
          <label><i>*</i>code:</label>
          <div class="input__item">
            <input type="text" placeholder="enter the email code" v-model="bindParams.otp" />
            <span class="get__code" v-if="!isCounting" @click="sendCode(userInfo.email, 'change_easypaisa_account')">Get
              Code</span>
            <span class="get__code code_disabled" v-else>{{ countdown }}s</span>
          </div>
        </div>
        <div class="login__btn" @click="handleBindWallet" v-if="bindClick">Submit</div>
        <div class="login__btn disabled_btn" v-else>Loading...</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import Navbar from "@/components/Navbar.vue";
import Bottom from "@/components/bottom.vue";
import validEmail from '@/utils/validate';
import { useToast } from 'vue-toast-notification';
import emitter from '@/tools/eventBus';
import { userApi } from '@/utils/api';
const showType = ref('updateEmail') // updateEmail bindWallet updateWallet
const showMask = ref(false)
const canClick = ref(true)
const bindClick = ref(true)
const sendLoading = ref(false)
const isUnbind = ref(false)
const countdown = ref(60);
const isCounting = ref(false);
const timer = ref(null);
const $toast = useToast();
const params = reactive({
  type: '',
  email: '',
  otp: ''
})
const bindParams = reactive({
  type: 'change_easypaisa_account',
  otp: '',
  easypaisa_account: ''
})
const userInfo = reactive({
  email: '',
  created_at: '',
  easypaisa_account: '',
})
const updatePassword = () => {
  emitter.emit('showOverLayer', 'forget')
}

// 显示绑定界面
const showBindAccount = (type) => {
  showMask.value = true
  showType.value = type
  countdown.value = 60
  bindParams.otp = ''
  clearTimeout(timer.value)
  isCounting.value = false
}

const showUnBindAccount = (type) => {
  isUnbind.value = true
  bindParams.easypaisa_account = ''
  showBindAccount(type)
}

const handleBindWallet = () => {
  if (!isUnbind.value) {
    if (bindParams.easypaisa_account.replace(/\s/g, '') === '') {
      $toast.open({
        message: 'Please enter your Easypaisa account',
        type: 'warning',
        position: 'top'
      })
      return false
    }
  }
  if (bindParams.otp.replace(/\s/g, '') === '') {
    $toast.open({
      message: 'Please enter the verification code',
      type: 'warning',
      position: 'top'
    })
    return false
  }

  bindClick.value = false
  userApi.updateUserInfo(bindParams).then(res => {
    bindClick.value = true
    if (res.code === 200) {
      let message = isUnbind.value ? 'Unbinding successful' : 'Binding successful, reloading data.'
      $toast.open({
        message: message,
        type: 'success',
        position: 'top'
      })
      showMask.value = false
      isUnbind.value = false
      emitter.emit('updateInfoInterface')
    } else {
      $toast.open({
        message: res.message,
        type: 'error',
        position: 'top'
      })
    }
  })

}

const updateEmail = () => {
  const emailMsg = validEmail.getEmailError(params.email);
  if (emailMsg) {
    $toast.open({
      message: emailMsg,
      type: 'warning',
      position: 'top'
    })
    return false
  }

  if (params.otp.replace(/\s/g, '') === '') {
    $toast.open({
      message: 'Plaese enter the verification code',
      type: 'warning',
      position: 'top'
    })
    return false
  }

  canClick.value = false
  params.type = 'change_email'
  userApi.updateUserInfo(params).then(res => {
    canClick.value = true
    if (res.code === 200) {
      $toast.open({
        message: 'Update success, reloading data.',
        type: 'success',
        position: 'top'
      })
      showMask.value = false
      emitter.emit('updateInfoInterface')
    } else {
      $toast.open({
        message: res.message,
        type: 'error',
        position: 'top'
      })
    }
  })
}

const sendCode = (email, type) => {
  // 这里写你的发送验证码逻辑
  // 这里写你的发送验证码逻辑
  const emailMsg = validEmail.getEmailError(email);
  if (emailMsg) {
    $toast.open({
      message: emailMsg,
      type: 'warning',
      position: 'top'
    })
    return false
  }

  if (sendLoading.value) {
    return false
  }
  sendLoading.value = true
  userApi.sendSmsCodeChangeEmail(email, type).then(res => {
    sendLoading.value = false
    if (res.code === 200) {
      $toast.open({
        message: '验证码发送成功',
        type: 'success',
        position: 'top'
      })

      // 发送成功后开始倒计时
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

const getUserInfo = () => {
  userApi.getUserInfo().then(res => {
    if (res.code === 200) {
      localStorage.setItem('userInfo', JSON.stringify(res.result))
      const { email, created_at, easypaisa_account } = res.result
      userInfo.email = email
      userInfo.created_at = created_at
      userInfo.easypaisa_account = easypaisa_account ? easypaisa_account : ''
    } else if (res.code === 401) {
      emitter.emit('showOverLayer', 'login')
      localStorage.removeItem('userInfo')
      localStorage.removeItem('token')
      emitter.emit('clearHeaderInfo')
    } else {
      $toast.open({
        message: res.msg,
        type: 'error',
        position: 'top',
      })
    }
  })
}

emitter.on('updateUserInfo', (result) => {
  userInfo.email = result.email ? result.email : ''
  userInfo.created_at = result.created_at ? result.created_at : ''
  userInfo.easypaisa_account = result.easypaisa_account ? result.easypaisa_account : ''
})

onMounted(() => {
  getUserInfo()
})
</script>

<style lang="scss" scoped>
.user_info_container {
  background-color: #254da7;
  margin-top: 150px;
  padding: 50px 0;

  h2 {
    width: 1215px;
    margin: 0 auto;
    color: #fff;
    font-size: 36px;
    margin-bottom: 30px;
  }

}

.user_content {
  width: 1215px;
  margin: 0 auto;
  border-top: 1px solid #aaa;
  border-left: 1px solid #aaa;
  border-right: 1px solid #aaa;

  .user_item {
    display: flex;
    align-items: center;
    height: 45px;
    border-bottom: 1px solid #aaa;

    label {
      display: flex;
      align-items: center;
      width: 270px;
      height: 45px;
      font-size: 18px;
      color: #fff;
      justify-content: flex-end;
      border-right: 1px solid #aaa;
      padding-right: 20px;
    }

    span {
      display: flex;
      align-items: center;
      height: 45px;
      padding: 0 20px;
      color: #fff;
      flex: 1;
      border-right: 1px solid #aaa;
      font-size: 18px;
    }

    .password_span {
      font-size: 36px;
    }

    &>div {
      display: flex;
      width: 200px;
      align-items: center;
      justify-content: center;

      a {
        font-size: 18px;
        color: #fff;
        margin: 0 10px;
        cursor: pointer;
      }
    }
  }
}

.over_layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

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