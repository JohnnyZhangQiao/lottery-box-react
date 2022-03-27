import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '@/types/user/info';
import { RootState } from '@/store';

export const counterSlice = createSlice({
  // 命名空间
  name: 'user',
  // 初始值
  initialState: {
    token: '',
    userId: '',
    username: '',
    avatar: ''
  } as TUser,
  reducers: {
    setUserInfo: (state: TUser, action: PayloadAction<Partial<TUser>>) => {
      const { payload } = action;
      if (typeof payload === 'object') {
        Object.keys(payload).forEach((key: string) => {
          // @ts-ignore
          state[key] = payload[key];
        });
      }
    }
  }
});

// 导出actions
export const { setUserInfo } = counterSlice.actions;

// 导出selector
export const userSelector = (state: RootState) => state.user;

// 导出reducer，在创建store时使用到
export default counterSlice.reducer;
