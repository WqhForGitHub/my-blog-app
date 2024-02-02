<template>
  <div>
    <div class="header">
      <svg @click="backTo()" t="1706836365824" class="icon" viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="5989" width="200" height="200">
        <path
          d="M532.526499 904.817574L139.506311 511.797385 532.526499 118.777197c12.258185-12.258185 12.432147-32.892131-0.187265-45.51052-12.707416-12.707416-32.995485-12.703323-45.511543-0.187265L75.166957 484.739123c-7.120165 7.120165-10.163477 17.065677-8.990768 26.624381-1.500167 9.755178 1.5104 20.010753 8.990768 27.491121l411.660734 411.660734c12.258185 12.258185 32.892131 12.432147 45.511543-0.187265 12.707416-12.707416 12.7023-32.995485 0.187265-45.51052z"
          p-id="5990"></path>
      </svg>

      <div class="text">我的关注</div>
    </div>

    <div class="attention-list">
      <div class="attention-people">
        <div class="avatar"></div>
        <div class="info-container">
          <div class="info">
            <div class="name">徐小胖</div>
            <div class="tel">手机：186**********</div>
          </div>

          <div class="company">深圳初心文化船模有限公司...</div>
        </div>

      </div>

      <div class="attention-people">
        <div class="avatar"></div>
        <div class="info-container">
          <div class="info">
            <div class="name">徐小胖</div>
            <div class="tel">手机：186**********</div>
          </div>

          <div class="company">深圳初心文化船模有限公司...</div>
        </div>

      </div>

      <div class="attention-people">
        <div class="avatar"></div>
        <div class="info-container">
          <div class="info">
            <div class="name">徐小胖</div>
            <div class="tel">手机：186**********</div>
          </div>

          <div class="company">深圳初心文化船模有限公司...</div>
        </div>

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

.attention-list {
  width: 100%;
  min-height: 1vh;
  height: auto;

  .attention-people {
    margin-left: 80rpx;
    margin-top: 60rpx;
    display: flex;

    .avatar {
      width: 96rpx;
      height: 96rpx;
      background: #000;
      border-radius: 50%;
    }

    .info-container {
      margin-left: 20rpx;
    }

    .info {
      display: flex;

      .name {
        font-size: 28rpx;
        color: rgba(0, 33, 80, 1);
        margin-top: 10rpx;
      }

      .tel {
        margin-left: 30rpx;
        font-size: 22rpx;
        color: rgba(122, 134, 154, 1);
        margin-top: 12rpx;
      }
    }

    .company {
      font-size: 24rpx;
      color: rgba(122, 134, 154, 1);
      margin-top: 13rpx;
    }
  }
}
</style>