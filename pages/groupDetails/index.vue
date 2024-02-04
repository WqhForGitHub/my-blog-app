<template>
  <div class="group-detail">
    <div class="header">
      <svg @click="backTo()" t="1706836365824" class="icon" viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="5989" width="200" height="200">
        <path
          d="M532.526499 904.817574L139.506311 511.797385 532.526499 118.777197c12.258185-12.258185 12.432147-32.892131-0.187265-45.51052-12.707416-12.707416-32.995485-12.703323-45.511543-0.187265L75.166957 484.739123c-7.120165 7.120165-10.163477 17.065677-8.990768 26.624381-1.500167 9.755178 1.5104 20.010753 8.990768 27.491121l411.660734 411.660734c12.258185 12.258185 32.892131 12.432147 45.511543-0.187265 12.707416-12.707416 12.7023-32.995485 0.187265-45.51052z"
          p-id="5990"></path>
      </svg>

      <div class="text">群详情</div>
    </div>

    <div class="group-name">口罩、医疗器械行业玩人群</div>
    <div class="groups-info">
      <div>0 帖子</div>
      <div>1 圈友</div>
      <div>0 活跃度</div>
    </div>

    <div class="groups-detail">
      <div class="text">“进入后可以查看所有人的电话信息，您进入后可以查看所有人的电话信息，进入后可以查看所有人的电话信息，来来来加入吧！”</div>
      <div class="title-text">活跃圈友</div>
      <div class="activeFriends">
        <div class="avatar"></div>
        <div class="name-container">
          <div class="info">
            <div class="name">王小胖</div>
            <div class="tel">手机：186********</div>
          </div>
          <div class="company">深圳初心文化船模有限公司</div>
        </div>
        <div class="attention">
          <div class="plus">
            <svg t="1706931905336" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="6691" width="200" height="200">
              <path
                d="M580.722174 437.990403 580.722174 78.171384 436.794158 78.171384 436.794158 437.990403 76.975139 437.990403 76.975139 581.918419 436.794158 581.918419 436.794158 941.737438 580.722174 941.737438 580.722174 581.918419 940.542216 581.918419 940.542216 437.990403Z"
                fill="#ffffff" p-id="6692"></path>
            </svg>
          </div>
          <div class="text">关注</div>
        </div>
      </div>

      <div class="newStatus">最新动态</div>

      <div class="blog-item">
        <div class="blog-avatar"></div>
        <div class="blog-content">
          <div class="info">
            <div class="name">徐小胖</div>
            <div class="time">2022-02-11 18:00:00</div>
          </div>
          <div class="moreAvatar">
            <svg t="1706841688469" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="7228" id="mx_n_1706841688469" width="200" height="200">
              <path d="M224 512m-80 0a80 80 0 1 0 160 0 80 80 0 1 0-160 0Z" fill="#000000" p-id="7229"></path>
              <path d="M512 512m-80 0a80 80 0 1 0 160 0 80 80 0 1 0-160 0Z" fill="#000000" p-id="7230"></path>
              <path d="M800 512m-80 0a80 80 0 1 0 160 0 80 80 0 1 0-160 0Z" fill="#000000" p-id="7231"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="blog-text">圣诞节放射科大夫很少看到发说的话房价快速的开发</div>
      <div class="blog-picture">
        <div class="picture"></div>
        <div class="picture"></div>
        <div class="picture"></div>
        <div class="picture"></div>
        <div class="picture"></div>
        <div class="picture"></div>
      </div>

      <div class="operator-container">
        <div class="like-icon">
          <svg t="1706843042578" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="9156" width="200" height="200">
            <path
              d="M667.786667 117.333333C832.864 117.333333 938.666667 249.706667 938.666667 427.861333c0 138.250667-125.098667 290.506667-371.573334 461.589334a96.768 96.768 0 0 1-110.186666 0C210.432 718.368 85.333333 566.112 85.333333 427.861333 85.333333 249.706667 191.136 117.333333 356.213333 117.333333c59.616 0 100.053333 20.832 155.786667 68.096C567.744 138.176 608.170667 117.333333 667.786667 117.333333z"
              fill="#002251" p-id="9157"></path>
          </svg>

          <div class="like-num">111</div>
        </div>
        <div></div>

      </div>

      <!-- <div class="applyGroups" @click="applyGroups()">申请加入圈子</div> -->

      <div class="button-groups">
        <div class="publish" @click="publish()">
          <div class="icon">
            <svg t="1707012911742" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="4211" width="200" height="200">
              <path
                d="M863.328262 481.340895l-317.344013 0.099772L545.984249 162.816826c0-17.664722-14.336138-32.00086-32.00086-32.00086s-31.99914 14.336138-31.99914 32.00086l0 318.400215-322.368714-0.17718c-0.032684 0-0.063647 0-0.096331 0-17.632039 0-31.935493 14.239806-32.00086 31.904529-0.096331 17.664722 14.208843 32.031824 31.871845 32.095471l322.59234 0.17718 0 319.167424c0 17.695686 14.336138 32.00086 31.99914 32.00086s32.00086-14.303454 32.00086-32.00086L545.982529 545.440667l317.087703-0.099772c0.063647 0 0.096331 0 0.127295 0 17.632039 0 31.935493-14.239806 32.00086-31.904529S880.960301 481.404542 863.328262 481.340895z"
                fill="rgba(0, 65, 196, 1)" p-id="4212"></path>
            </svg>
          </div>
          <div>发表动态</div>
        </div>
        <div class="share" >分享圈子</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const backTo = () => {
  uni.navigateBack({
    delta: 1
  });
}

const applyGroups = () => {
  uni.navigateTo({
    url: '/pages/realNameAuth/index'
  })
}

const publish = () => {
  uni.navigateTo({
    url: '/pages/publishActivity/index'
  })
}
</script>

<style lang="scss" scoped>
.group-detail {
  width: 100vw;
  height: 100vh;
  background: #0041C4;
  position: absolute;

  .header {
    width: 100%;
    height: 80rpx;
    background: #0041C4;
    color: #fff;
    display: flex;
    align-items: center;

    svg {
      width: 40rpx;
      height: 40rpx;
      margin-left: 20rpx;
    }

    .text {
      margin-left: 240rpx;
      font-size: 30rpx;
    }
  }

  .group-name {
    color: #fff;
    margin-left: 42rpx;
    margin-top: 42rpx;
    font-size: 40rpx;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .groups-info {
    display: flex;
    margin-left: 42rpx;
    margin-top: 14rpx;
    color: #fff;
    font-size: 26rpx;
  }

  .groups-detail {
    height: calc(100vh - 258rpx);
    background: #fff;
    margin-top: 36rpx;
    border-radius: 50rpx 50rpx 0 0;
    overflow-y: scroll;


    .text {
      padding-top: 46rpx;
      padding-left: 40rpx;
      padding-right: 40rpx;
      font-size: 26rpx;
      color: rgba(122, 134, 154, 1);
    }

    .title-text {
      margin-top: 56rpx;
      margin-left: 40rpx;
      font-size: 36rpx;
      color: rgba(0, 34, 81, 1);
    }

    .activeFriends {
      display: flex;

      .avatar {
        width: 96rpx;
        height: 96rpx;
        background: #000;
        border-radius: 50%;
        margin-left: 40rpx;
        margin-top: 62rpx;
      }

      .name-container {
        margin-top: 62rpx;
        margin-left: 20rpx;

        .info {
          display: flex;
          margin-top: 10rpx;

          .name {
            font-size: 28rpx;
            color: rgba(0, 33, 80, 1);
          }

          .tel {
            font-size: 22rpx;
            margin-left: 20rpx;
            margin-top: 5rpx;
            color: rgba(122, 134, 154, 1);
          }
        }

        .company {
          font-size: 24rpx;
          color: rgba(122, 134, 154, 1);
          margin-top: 14rpx;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }

      .attention {
        width: 130rpx;
        height: 60rpx;
        margin-top: 90rpx;
        margin-left: 156rpx;
        display: flex;
        background: #0041C4;
        border-radius: 20rpx;

        .plus {
          width: 20rpx;
          height: 20rpx;
          margin-left: 16rpx;
          margin-top: 11rpx;

          svg {
            width: 30rpx;
            height: 30rpx;
          }
        }

        .text {
          padding-top: 12rpx;
          padding-left: 16rpx;
          white-space: nowrap;
          color: #fff;
        }
      }
    }

    .newStatus {
      margin-top: 100rpx;
      margin-left: 40rpx;
      color: #002251;
      font-size: 36rpx;
    }

    .applyGroups {
      width: 100vw;
      height: 118rpx;
      position: fixed;
      bottom: 0;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #0041C4;
      font-size: 32rpx;
    }

    .button-groups {
      width: 100%;
      display: flex;
      position: fixed;
      bottom: 0;
      height: 119rpx;

      .publish {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32rpx;
        color: rgba(0, 65, 196, 1);
        border: 1px solid #fff;

        .icon {
          width: 50rpx;
          height: 50rpx;

          svg {
            width: 50rpx;
            height: 50rpx;
          }
        }
      }

      .share {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 65, 196, 1);
        color: #fff;
        font-size: 32rpx;
      }
    }
  }
}

.blog-item {
  display: flex;

  .blog-avatar {
    width: 50rpx;
    height: 50rpx;
    background: #000;
    border-radius: 50%;
    margin-left: 36rpx;
    margin-top: 38rpx;
  }

  .blog-content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info {
      .name {
        text-align: left;
        font-size: 28rpx;
        margin-left: 20rpx;
      }

      .time {
        font-size: 20rpx;
        color: rgba(122, 134, 154, 1);
        margin-top: 8rpx;
        margin-left: 20rpx;
      }
    }

    .moreAvatar {
      margin-right: 40rpx;
      margin-top: 16rpx;

      svg {
        width: 50rpx;
        height: 50rpx;
      }
    }

  }
}

.blog-text {
  margin-left: 104rpx;
  margin-right: 36rpx;
  margin-top: 18rpx;
  height: 100rpx;
  color: rgba(0, 34, 81, 1);
  font-size: 32rpx;
}

.blog-picture {
  min-height: 1rpx;
  height: auto;
  margin-left: 94rpx;
  margin-right: 40rpx;
  display: flex;
  flex-wrap: wrap;

  .picture {
    width: 184rpx;
    height: 184rpx;
    background: #000;
    border-radius: 30rpx;
    margin-left: 12rpx;
    margin-top: 12rpx;
  }
}

.operator-container {
  width: 100%;
  min-height: 1rpx;
  height: auto;
  display: flex;

  .like-icon {
    min-height: 1rpx;
    height: auto;
    display: flex;
    align-items: center;

    svg {
      width: 40rpx;
      height: 30rpx;
      margin-left: 104rpx;
      margin-top: 42rpx;
    }

    .like-num {
      margin-top: 42rpx;
      font-size: 26rpx;
    }
  }
}
</style>