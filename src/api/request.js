import axios from 'axios';
import { Toast } from 'antd-mobile';
export class Request {
    static axiosInstance;
    static init() {
        // 创建axios实例
        this.axiosInstance = axios.create({
            baseURL: '/api',
            timeout: 10000
        });
        // 初始化拦截器
        this.initInterceptors();
    }
    // 初始化拦截器
    static initInterceptors() {
        // 设置post请求头
        this.axiosInstance.defaults.headers.post['Content-Type'] =
            'application/x-www-form-urlencoded';
        /**
         * 请求拦截器
         * 每次请求前，如果存在token则在请求头中携带token
         */
        this.axiosInstance.interceptors.request.use((config) => {
            const token = localStorage.getItem('ACCESS_TOKEN');
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        }, (error) => {
            Toast.show({
                icon: 'fail',
                content: error
            });
        });
        // 响应拦截器
        this.axiosInstance.interceptors.response.use(
        // 请求成功
        (response) => {
            const { data: { code, message, data } } = response;
            if (response.status !== 200 || code !== 0) {
                Request.errorHandle(response, message);
            }
            return data;
        }, 
        // 请求失败
        (error) => {
            const { response } = error;
            if (response) {
                // 请求已发出，但是不在2xx的范围
                Request.errorHandle(response);
            }
            else {
                Toast.show({
                    icon: 'fail',
                    content: '网络连接异常,请稍后再试!'
                });
            }
            return Promise.reject(response?.data);
        });
    }
    /**
     * http握手错误
     * @param res 响应回调,根据不同响应进行不同操作
     * @param message
     */
    static errorHandle(res, message) {
        // 状态码判断
        switch (res.status) {
            case 401:
                break;
            case 403:
                break;
            case 404:
                Toast.show({
                    icon: 'fail',
                    content: '请求的资源不存在'
                });
                break;
            default:
                // 错误信息判断
                message &&
                    Toast.show({
                        icon: 'fail',
                        content: message
                    });
        }
    }
}
//# sourceMappingURL=request.js.map