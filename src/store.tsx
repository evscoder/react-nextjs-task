import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from "@/redux/cardsSlice";

export const store = configureStore({
    reducer: {
        cardsSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
