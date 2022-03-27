import ReactLazilyComponent from 'react-lazily-component';

// 页面路由配置
export default [
  {
    pathname: '/',
    component: ReactLazilyComponent(() => import('@/pages/index'))
  },
  {
    pathname: '/index',
    name: 'Index',
    title: '首页',
    component: ReactLazilyComponent(() => import('@/pages/index')),
    meta: {
      navigation: '首页'
    }
  },
  {
    pathname: '/boxDetail/:bId',
    name: 'BoxDetail',
    component: ReactLazilyComponent(() => import('@/pages/boxDetail'))
  },
  {
    pathname: '/login',
    name: 'Login',
    component: ReactLazilyComponent(() => import('@/pages/login'))
  },
  {
    pathname: '/user',
    name: 'User',
    component: ReactLazilyComponent(() => import('@/pages/user')),
    meta: {
      navigation: '个人中心',
      requireAuth: true
    }
  }
];
