import { Request } from './request';
export default {
    userAuthority: (options) => Request.axiosInstance({
        url: '/userAuthority',
        method: 'post',
        desc: '鉴权',
        isJSON: true,
        ...options
    }),
    userInfo: (options) => Request.axiosInstance({
        url: '/userInfo',
        method: 'post',
        desc: '获取用户信息',
        isJSON: true,
        ...options
    })
};
//# sourceMappingURL=user.js.map