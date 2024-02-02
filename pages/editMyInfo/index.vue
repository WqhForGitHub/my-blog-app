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

		<div class="edit-container">
			<div class="my-container">
				<div class="real-name">真实姓名</div>
				<input placeholder="请输入姓名" />
			</div>
		</div>

		<div class="biaotext">标语</div>
		<input type="textarea"  class="text" placeholder="请输入标语（可写所属公司，如XXXXX有限公司代表）" />
		<div class="confirmButton">确认</div>
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

.edit-container {
	width: 100%;

	.my-container {
		display: flex;
		margin-top: 68rpx;
		margin-left: 40rpx;
		margin-right: 40rpx;
		padding-bottom: 46rpx;
		justify-content: space-between;
		border-bottom: 1px solid #E2E4E7;
		color: #002150;
		font-size: 32rpx;

		.real-name {
			color: #002150;
		}
	}
}

.biaotext {
	margin-top: 40rpx;
	margin-left: 40rpx;
	color: #002150;


}

.text {
	margin-left: 40rpx;
	margin-right: 40rpx;
	margin-top: 34rpx;
	font-size: 32rpx;
}

.confirmButton {
	width: 80%;
	height: 120rpx;
	background: #0041C4;
	border-radius: 10rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	margin: 160rpx auto;
}

</style>

