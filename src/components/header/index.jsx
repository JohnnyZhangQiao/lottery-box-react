import { Popup, List } from 'antd-mobile';
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect, memo } from 'react';
import style from './header.module.less';
import routes from '@/routes/routesConfig';
import { isLogin, fetchUserInfo } from '@/utils/userLogin';
import { useAppSelector } from '@/store';
import { userSelector } from '@/store/features/userSlice';
const Header = () => {
    const [popupShow, setPopupShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const user = useAppSelector(userSelector); // 或直接获取  const user = useAppSelector(store => store.user);
    useEffect(() => {
        setPopupShow(false);
    }, [location.pathname]);
    useEffect(() => {
        if (isLogin()) {
            fetchUserInfo();
        }
    }, []);
    return (<div>
      <div className={style['app-header']}>
        <span className={style['header-tool']} onClick={() => {
            setPopupShow(flag => !flag);
        }}>
          ≡
        </span>
        <div className={style['title']} onClick={() => navigate('/index')}>
          <img className={style['header-logo']} src="/src/assets/images/logo.png" alt="潮玩"/>
          <span>潮玩盲盒</span>
        </div>
        <div className={style['user-site']} onClick={() => navigate('/user')}>
          {!isLogin() ? (<span>登录</span>) : (<div className={style['user-icon']}>
              <img src={user.avatar} className={style['avatar']}/>
              <div className={style['user-name']}>{user.username}</div>
            </div>)}
        </div>
      </div>
      <Popup position="left" visible={popupShow}>
        <List header="潮玩盲盒" className={style['header-list']}>
          {routes
            .filter(r => r.meta?.navigation)
            .map((item, key) => {
            return (<List.Item key={key} onClick={() => {
                    navigate(item.pathname);
                    setPopupShow(false);
                }}>
                  {item.meta?.navigation}
                </List.Item>);
        })}
        </List>
      </Popup>
    </div>);
};
export default memo(Header);
//# sourceMappingURL=index.jsx.map