<template>
  <view class="login-container">
    <view class="icon">
      <img src="../../static/login/login.png" />
    </view>

    <view class="login-card" v-if="!isShowRegister">
      <view class="registerName">注册</view>
      <view>
        <input class="account" v-model="registerInfo.userId" placeholder="昵称（唯一）" />
      </view>
      <view>
        <input class="name" v-model="registerInfo.userName" placeholder="真实姓名" />
      </view>
      <view>
        <input class="password" v-model="registerInfo.passWord" placeholder="密码" />
      </view>

      <view class="login-button" @click="confirmRegister()">确认</view>

      <view class="textLogin">
        已经有账号？
        <span class="login" @click="login()">去登录</span>
      </view>
    </view>

    <view class="login-card" v-if="isShowRegister">
      <view class="registerName">登录</view>
      <view>
        <input v-model="loginInfo.userId" class="account" placeholder="昵称" />
      </view>

      <view>
        <input v-model="loginInfo.passWord" class="password" placeholder="密码" />
      </view>

      <view class="login-button" @click="confirm()">确认</view>

      <view class="text">
        没有账号？
        <span class="register" @click="register()">去注册</span>
      </view>
    </view>
  </view>
</template>

<script setup>
import { login as login1, token, loginIn, register as loginRegister } from '../../api/login'
import JSEncrypt from '@/node_modules/jsencrypt/bin/jsencrypt.js';
import { ref, reactive } from 'vue'

let loginInfo = reactive({
  userId: '',
  passWord: ''
})

let registerInfo = reactive({
  userId: '',
  userName: '',
  passWord: ''
})

var encrypt = new JSEncrypt();
let isShowRegister = ref(true)
const login = () => {
  isShowRegister.value = true
}
let publicKey = ref('')

const register = () => {
  isShowRegister.value = false
}

/*
 * 确认注册
 */
const confirmRegister = () => {
  if (!registerInfo.userId || !registerInfo.userName || !registerInfo.passWord) {
    uni.showToast({
      icon: 'error',
      title: `信息没有填写完全！`,
      duration: 2000
    });
    return
  }

  uni.request({
    url: loginRegister,
    method: 'POST',
    data: { ...registerInfo },
    success: (res) => {
      if (res.data.code === 0) {
        uni.showToast({
          title: `注册成功！`,
          duration: 2000
        });
      } else {
        uni.showToast({
          icon: 'error',
          title: `${res.data.message}`,
          duration: 2000
        });
      }
    }
  })
}

/*
 *  确认登录
 */
const confirm = () => {
  if (!loginInfo.userId || !loginInfo.passWord) {
    uni.showToast({
      icon: 'error',
      title: `信息没有填写完全！`,
      duration: 2000
    });

    return
  }

  uni.request({
    url: login1, //仅为示例，并非真实接口地址。
    method: 'GET',
    data: {},
    success: (res) => {
      publicKey.value = res.data
      encrypt.setPublicKey(publicKey.value); // 公钥 
      let aa = encrypt.encrypt(JSON.stringify(loginInfo)); //


      uni.request({
        url: loginIn,
        method: 'POST',
        data: { aa },
        success: (res) => {
          if (res.data.code === 0) {
            uni.setStorageSync('token', res.data.token);
            uni.switchTab({
              url: '/pages/home/index'
            });
          }
        }
      })
    }
  })

}
</script>

<style lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background-color: #EAFFF8;
  position: absolute;

  .icon {
    width: 110rpx;
    height: 110rpx;
    margin: 130rpx auto;

    img {
      width: 110rpx;
      height: 110rpx;
    }
  }

  .login-card {
    width: 80%;
    height: 808rpx;
    background: #000;
    margin: 0 auto;
    border-radius: 48rpx;
    box-shadow: 12rpx 30rpx 80rpx 0rpx rgba(0, 0, 0, 0.05);
    background: rgb(255, 255, 255);

    .registerName {
      color: rgb(28, 28, 28);
      font-size: 48rpx;
      font-weight: 700;
      margin-left: 34rpx;
      padding-top: 32rpx;
    }

    .account {
      width: 460rpx;
      height: 96rpx;
      margin: 0 auto;
      border-radius: 16rpx;
      background: rgb(230, 235, 246);
      opacity: 0.5;
      margin-top: 48rpx;
    }

    .name {
      width: 460rpx;
      height: 96rpx;
      margin: 0 auto;
      border-radius: 16rpx;
      background: rgb(230, 235, 246);
      opacity: 0.5;
      margin-top: 32rpx;
    }


    .password {
      width: 460rpx;
      height: 96rpx;
      margin: 0 auto;
      border-radius: 16rpx;
      background: rgb(230, 235, 246);
      opacity: 0.5;
      margin-top: 32rpx;
    }

    .login-button {
      width: 450rpx;
      height: 96rpx;
      border-radius: 16px;
      background: rgb(1, 178, 125);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 32rpx auto;
      color: #fff;
      font-size: 32rpx;
      border-radius: 16rpx;
      margin-top: 80rpx;
    }

    input {
      padding-left: 36rpx;
      color: #4c4c4c;
    }

    .text {
      text-align: center;
      padding-top: 160rpx;

      .register {
        text-decoration: underline;
      }

    }

    .textLogin {
      text-align: center;
      padding-top: 20rpx;

      .login {
        text-decoration: underline;
      }
    }
  }
}
</style>
