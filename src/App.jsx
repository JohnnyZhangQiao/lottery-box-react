import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DotLoading } from 'antd-mobile';
import { Provider } from 'react-redux';
import RouterComponent from '@/routes';
import Header from '@/components/header';
import store from '@/store';
import style from './app.module.less';
const App = () => {
    return (<Provider store={store}>
      <div className={style.appBody}>
        <React.Suspense fallback={<DotLoading />}>
          <BrowserRouter>
            <Header />
            <RouterComponent />
          </BrowserRouter>
        </React.Suspense>
      </div>
    </Provider>);
};
export default App;
//# sourceMappingURL=App.jsx.map