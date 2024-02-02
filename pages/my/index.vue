<template>
  <div>
    <div class="my-info-container">
      <div class="myAvatar"></div>
      <div>
        <div class="name">七七六</div>
        <div class="company">深圳初心文化船模有限公司</div>
      </div>
    </div>

    <div class="my-container-num">
      <div class="left-num">
        <div class="number">23</div>
        <div class="text">好友数</div>
      </div>
      <div class="right-num">
        <div class="number"></div>
        <div class="share-text">分享名片</div>
      </div>
      <div class="middle-num">
        <div class="number">123</div>
        <div class="text">动态数</div>
      </div>
    </div>

    <div class="my-items">
      <div class="item" @click="toMyHome()">
        <div class="icon1">
          <img src="../../static/my/home.png" />
        </div>

        <div class="content">
          <div class="text">个人主页</div>
          <div class="icon">
            <div>
              <svg t="1706780894950" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="7618" width="200" height="200">
                <path
                  d="M301.99808 44.9792l-47.04768 47.09888 419.9424 419.98848-419.9424 419.90144 47.0528 47.0528 419.93728-419.89632h0.00512l47.104-47.09888-47.0528-47.04768z"
                  fill="#333333" p-id="7619"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="item" @click="toMyAttention()">
        <div class="icon1">
          <img src="../../static/my/attention.png" />
        </div>
        <div class="content">
          <div class="text">我的关注</div>
          <div class="icon">
            <div>
              <svg t="1706780894950" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="7618" width="200" height="200">
                <path
                  d="M301.99808 44.9792l-47.04768 47.09888 419.9424 419.98848-419.9424 419.90144 47.0528 47.0528 419.93728-419.89632h0.00512l47.104-47.09888-47.0528-47.04768z"
                  fill="#333333" p-id="7619"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="icon1">
          <img src="../../static/my/quanzi.png" />
        </div>
        <div class="content">
          <div class="text">我的圈子</div>
          <div class="icon">
            <div>
              <svg t="1706780894950" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="7618" width="200" height="200">
                <path
                  d="M301.99808 44.9792l-47.04768 47.09888 419.9424 419.98848-419.9424 419.90144 47.0528 47.0528 419.93728-419.89632h0.00512l47.104-47.09888-47.0528-47.04768z"
                  fill="#333333" p-id="7619"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="item" @click="toSetting()">
        <div class="icon1">
          <img src="../../static/my/shezhi.png" />
        </div>
        <div class="content">
          <div class="text">设置</div>
          <div class="icon">
            <div>
              <svg t="1706780894950" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="7618" width="200" height="200">
                <path
                  d="M301.99808 44.9792l-47.04768 47.09888 419.9424 419.98848-419.9424 419.90144 47.0528 47.0528 419.93728-419.89632h0.00512l47.104-47.09888-47.0528-47.04768z"
                  fill="#333333" p-id="7619"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/*
 * 我的首页
 */
const toMyHome = () => {
  uni.navigateTo({
    url: '/pages/myHome/index'
  });
}

/*
 *  我的关注
 */
const toMyAttention = () => {
  uni.navigateTo({
    url: '/pages/myAttention/index'
  })
}

const toSetting = () => {
  uni.navigateTo({
    url: '/pages/setting/index'
  })
}
</script>

<style lang="scss" scoped>
.my-info-container {
  width: 100%;
  min-height: 100rpx;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: 128rpx;

  .myAvatar {
    width: 200rpx;
    height: 200rpx;
    background: #f0f0f0;
    border-radius: 50%;
    margin-left: 40rpx;
  }

  .name {
    font-size: 48rpx;
    margin-left: 20rpx;
    color: rgba(0, 0, 0, 1)
  }

  .company {
    margin-top: 18rpx;
    margin-left: 20rpx;
    font-size: 26rpx;
    color: rgba(0, 33, 80, 1)
  }
}

.my-container-num {
  width: 100%;
  min-height: 1rpx;
  height: auto;
  margin-top: 80rpx;

  .left-num {
    width: 33.3%;
    float: left;
    text-align: center;
    border-right: 1px solid #f0f0f0;

    .number {
      color: rgba(0, 33, 80, 1);
      font-size: 40rpx;
    }

    .text {
      color: rgba(122, 134, 154, 1);
      font-size: 28rpx;
      margin-top: 10rpx;
    }
  }

  .right-num {
    width: 33.3%;
    float: right;
    text-align: center;

    .share-text {
      // margin-top: 60rpx;
    }
  }

  .middle-num {
    width: 33.3%;
    margin-left: 33.3%;
    text-align: center;
    border-right: 1px solid rgba(227, 229, 232, 1);

    .number {
      color: rgba(0, 33, 80, 1);
      font-size: 40rpx;
    }

    .text {
      color: rgba(122, 134, 154, 1);
      font-size: 28rpx;
      margin-top: 10rpx;
    }
  }
}

.my-items {
  margin-top: 20rpx;

  .item {
    height: 162rpx;
    display: flex;
    align-items: center;

    .icon1 {
      width: 100rpx;
      height: 148rpx;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 42rpx;
        height: 40rpx;
        margin-top: 5rpx;
      }
    }

    .content {
      height: 100%;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #f0f0f0;
      font-size: 32rpx;
      color: rgba(0, 33, 80, 1);

      .icon {
        width: 120rpx;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 120rpx;
          height: 42rpx;
        }
      }
    }
  }
}
</style>