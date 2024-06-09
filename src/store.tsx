import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from "@/redux/cardsSlice";
import framesSlice from "@/redux/framesSlice";

export const store = configureStore({
    reducer: {
        cardsSlice,
        framesSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
