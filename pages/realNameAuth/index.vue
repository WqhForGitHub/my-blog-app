<template>
  <div>
    <div class="header">
      <svg @click="backTo()" t="1706836365824" class="icon" viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="5989" width="200" height="200">
        <path
          d="M532.526499 904.817574L139.506311 511.797385 532.526499 118.777197c12.258185-12.258185 12.432147-32.892131-0.187265-45.51052-12.707416-12.707416-32.995485-12.703323-45.511543-0.187265L75.166957 484.739123c-7.120165 7.120165-10.163477 17.065677-8.990768 26.624381-1.500167 9.755178 1.5104 20.010753 8.990768 27.491121l411.660734 411.660734c12.258185 12.258185 32.892131 12.432147 45.511543-0.187265 12.707416-12.707416 12.7023-32.995485 0.187265-45.51052z"
          p-id="5990"></path>
      </svg>

      <div class="text">群详情</div>
    </div>

    <div class="realName-container">
      <div class="">真实姓名</div>
      <div class="input-container">
        <input placeholder="请输入您的姓名" />
      </div>
    </div>

    <div class="realName-container">
      <div class="">标语（可填写所属公司）</div>
      <div class="input-container">
        <input placeholder="请输入标语" />
      </div>
    </div>

    <div class="realName-container">
      <div class="">身份证号</div>
      <div class="input-container">
        <input placeholder="请输入您的身份证号" />
      </div>
    </div>

    <div class="next-button" @click="backTo()">Text</div>
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
  color: #000;
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

.realName-container {
  width: 90%;
  margin: 0 auto;
  margin-top: 60rpx;
  font-size: 28rpx;
  color: rgba(193, 199, 208, 1);

  .input-container {
    width: 90%;
    height: 88rpx;
    background: #F2F4F7;
    border-radius: 30rpx;
    margin-top: 26rpx;
    display: flex;
    align-items: center;
    padding-left: 32rpx;
    padding-right: 32rpx;

    input {
      width: 100%;
    }
  }
}

.next-button {
  width: 90%;
  height: 96rpx;
  background: #0041C4;
  border-radius: 20rpx;
  margin: 48rpx auto;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32rpx;
}
</style>