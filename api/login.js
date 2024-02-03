const baseURL = "http://192.168.0.13:4000";

export const login = `${baseURL}/publicKey`; // 获取密钥接口

export const loginIn = `${baseURL}/login`; // 登录接口

export const token = localStorage.getItem("token");

export const register = `${baseURL}/register`; // 注册接口
