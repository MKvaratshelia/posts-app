import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rtkApi } from '../../../shared/api/rtkApi';
import postReducer from '../../../entities/Post/model/slice/postSlice';
import { uiReducer } from '../../../features/UI';

const store = configureStore({
    reducer: {
        post: postReducer,
        ui: uiReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
});

export const StoreProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};
