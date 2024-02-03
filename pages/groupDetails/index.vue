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
            <svg t="1706931905336" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6691" width="200" height="200"><path d="M580.722174 437.990403 580.722174 78.171384 436.794158 78.171384 436.794158 437.990403 76.975139 437.990403 76.975139 581.918419 436.794158 581.918419 436.794158 941.737438 580.722174 941.737438 580.722174 581.918419 940.542216 581.918419 940.542216 437.990403Z" fill="#ffffff" p-id="6692"></path></svg>
          </div>
          <div class="text">关注</div>
        </div>
      </div>

      <div class="newStatus">最新动态</div>

      <!-- <div class="applyGroups">申请加入圈子</div> -->
    </div>
  </div>
</template>

<script setup>
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
      position: fixed;
      bottom: 0;
    }
  }
}
</style>