import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from './features/userSlice';
const store = configureStore({
    reducer: {
        user: userSlice
    }
});
// 全局hook
export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();
export default store;
//# sourceMappingURL=index.js.map