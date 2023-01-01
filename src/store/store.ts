import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import productSlice from "./productSlice";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        product: productSlice
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
