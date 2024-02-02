<template>
  <div>
    <div class="header">
      <svg @click="backTo()" t="1706836365824" class="icon" viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="5989" width="200" height="200">
        <path
          d="M532.526499 904.817574L139.506311 511.797385 532.526499 118.777197c12.258185-12.258185 12.432147-32.892131-0.187265-45.51052-12.707416-12.707416-32.995485-12.703323-45.511543-0.187265L75.166957 484.739123c-7.120165 7.120165-10.163477 17.065677-8.990768 26.624381-1.500167 9.755178 1.5104 20.010753 8.990768 27.491121l411.660734 411.660734c12.258185 12.258185 32.892131 12.432147 45.511543-0.187265 12.707416-12.707416 12.7023-32.995485 0.187265-45.51052z"
          p-id="5990"></path>
      </svg>

      <div class="text">个人主页</div>
    </div>

    <div class="avatar"></div>
    <div class="name">王小胖</div>
    <div class="info">好友数 22 动态数 3</div>
    <div class="company">深圳初心文化船模有限公司</div>

    <div class="tab-container">
      <div :class="{ 'upload': tabActive, 'uploaded': !tabActive }" @click="clickUpload()">上架动态</div>
      <div :class="{ 'uploaded': tabActive, 'upload': !tabActive }" @click="clickUploaded()">已下架</div>
    </div>

    <div class="active">
      <div :class="{ 'active1': tabActive }"></div>
      <div :class="{ 'active2': !tabActive }"></div>
    </div>

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
  </div>
</template>

<script setup>
import { ref } from 'vue'
let tabActive = ref(true);

const clickUpload = () => {
  tabActive.value = true
}

const clickUploaded = () => {
  tabActive.value = false
}

const backTo = () => {
  uni.navigateBack({
    delta: 1
  });
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80rpx;
  background: #fff;
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

.avatar {
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
  background: #000;
  margin: 0 auto;
  margin-top: 60rpx;
}

.name {
  color: rgba(0, 33, 80, 1);
  font-size: 40rpx;
  text-align: center;
  margin-top: 26rpx;
}

.info {
  font-size: 30rpx;
  color: rgba(0, 33, 80, 1);
  text-align: center;
  margin-top: 14rpx;
}

.company {
  font-size: 24rpx;
  text-align: center;
  margin-top: 16rpx;
}

.tab-container {
  width: 100%;
  display: flex;
  font-size: 36rpx;
  margin-top: 48rpx;
  margin-left: 40rpx;

  .uploaded {
    margin-left: 40rpx;
    color: rgba(122, 134, 154, 1);
  }

  .upload {
    margin-left: 40rpx;
    color: rgba(0, 34, 81, 1);
  }
}

.active {
  display: flex;

  .active1 {
    width: 36rpx;
    height: 6rpx;
    background: #000;
    margin-left: 140rpx;
    margin-top: 10rpx;
    color: rgba(0, 34, 81, 1);
  }

  .active2 {
    width: 36rpx;
    height: 6rpx;
    background: #000;
    margin-top: 10rpx;
    color: rgba(0, 34, 81, 1);
    margin-left: 300rpx;
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