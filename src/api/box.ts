import { Request } from './request';
import { IRequestParams } from '@/types/global/request';
import { TBox, TBoxDetail } from '@/types/index/box';

export default {
  fetchList: (options?: IRequestParams): Promise<TBox> =>
    Request.axiosInstance({
      url: '/fetchList',
      method: 'post',
      desc: '获取盲盒列表',
      isJSON: true,
      ...options
    }),

  boxDetail: (options?: IRequestParams): Promise<TBoxDetail> =>
    Request.axiosInstance({
      url: '/boxDetail',
      method: 'post',
      desc: '获取盲盒详情',
      isJSON: true,
      ...options
    })
};
