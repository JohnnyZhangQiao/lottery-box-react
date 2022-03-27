import request from '@/api/index';
import { setUserInfo } from '@/store/features/userSlice';
import store from '@/store';
/**
 * 是否登录
 */
export const isLogin = () => {
    const { user } = store.getState();
    if (user.token)
        return true;
    const token = localStorage.getItem('ACCESS_TOKEN');
    store.dispatch(setUserInfo({ token: token || '' }));
    return !!token;
};
/**
 * 登录
 * @param username
 * @param password
 */
export const login = (username, password) => {
    return request.user
        .userAuthority({
        data: {
            username,
            password
        }
    })
        .then(data => {
        const { token } = data;
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
            store.dispatch(setUserInfo({ token }));
            return true;
        }
    })
        .then(data => {
        // 登录成功才会获取用户信息
        if (data) {
            fetchUserInfo();
        }
        return data;
    });
};
/**
 * 获取用户信息
 */
export const fetchUserInfo = () => {
    request.user.userInfo().then(data => {
        store.dispatch(setUserInfo({
            avatar: data.avatar,
            username: data.username,
            userId: data.userId
        }));
    });
};
//# sourceMappingURL=userLogin.js.map