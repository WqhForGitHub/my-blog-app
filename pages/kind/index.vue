<template>
  <div>
    <div class="search-container">
      <div class="icon">
        <img src="../../static/kind/search.png" />
      </div>

      <input class="uni-input" focus placeholder="搜索" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
</script>

<style lang="scss" scoped>
.search-container {
  width: 100%;
  height: 140rpx;
  display: flex;
  align-items: center;

  .icon {
    width: 80rpx;
    height: 80rpx;
    margin-top: 50rpx;
    margin-left: 40rpx;

    img {
      width: 60rpx;
      height: 60rpx;
    }
  }

  input {
    padding-left: 36rpx;
    padding-right: 36rpx;
    color: #4c4c4c;
  }

  .uni-input {
    width: 468rpx;
    height: 80rpx;
    border-radius: 40rpx;
    background: rgb(242, 245, 250);
    margin-top: 30rpx;
    margin-left: 10rpx;
  }
}

.kind-text {
  font-size: 48rpx;
  font-weight: 700;
  margin-left: 48rpx;
  margin-top: 76rpx;
}

.kind-container {
  width: 100%;
  min-height: 1px;
  height: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;


  .kind-item {
    width: 348rpx;
    height: 348rpx;
    border-radius: 30rpx;
    margin-top: 30rpx;

    img {
      width: 348rpx;
      height: 348rpx;
      border-radius: 30rpx;
      position: absolute;
    }
  }

  .label {
    margin-top: 240rpx;
    margin-left: 20rpx;
    display: flex;
    font-size: 36rpx;
    position: absolute;
    color: #fff;
  }

  .num {
    font-size: 25rpx;
    margin-left: 40rpx;
    margin-top: 295rpx;
    position: absolute;
    color: #fff;
  }
}
</style>