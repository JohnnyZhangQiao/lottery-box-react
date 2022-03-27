import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
    // 命名空间
    name: 'user',
    // 初始值
    initialState: {
        token: '',
        userId: '',
        username: '',
        avatar: ''
    },
    reducers: {
        setUserInfo: (state, action) => {
            const { payload } = action;
            if (typeof payload === 'object') {
                Object.keys(payload).forEach((key) => {
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
export const userSelector = (state) => state.user;
// 导出reducer，在创建store时使用到
export default counterSlice.reducer;
//# sourceMappingURL=userSlice.js.map