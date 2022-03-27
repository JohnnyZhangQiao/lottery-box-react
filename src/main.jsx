import React from 'react';
import ReactDOM from 'react-dom';
import { Toast } from 'antd-mobile';
import App from './App';
import { initialize } from '@/utils/workflow';
// 初始化总线
initialize().then(flat => {
    if (!flat) {
        Toast.show({
            icon: 'fail',
            content: '初始化失败'
        });
        return;
    }
    ReactDOM.render(<React.StrictMode>
      <App />
    </React.StrictMode>, document.getElementById('root'));
});
//# sourceMappingURL=main.jsx.map