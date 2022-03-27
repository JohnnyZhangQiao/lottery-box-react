import { Request } from './request';
export default {
    fetchList: (options) => Request.axiosInstance({
        url: '/fetchList',
        method: 'post',
        desc: '获取盲盒列表',
        isJSON: true,
        ...options
    }),
    boxDetail: (options) => Request.axiosInstance({
        url: '/boxDetail',
        method: 'post',
        desc: '获取盲盒详情',
        isJSON: true,
        ...options
    })
};
//# sourceMappingURL=box.js.map