export function request({
  url = "",
  data = {},
  method = "GET",
  dataType = "json",
  sucessCallback = () => {},
  errorCallback,
} = {}) {
  uni.request({
    url,
    data,
    method,
    timeout: 30000,
    dataType,
    header: {},
    success: (res) => {
      sucessCallback(res);
    },
  });
}
