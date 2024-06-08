import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import isError from '../helper/isError';
import {CardItemProps} from "@/components/container/Cards/CardItem";
import {getRequestCards} from "@/api/cards/getCards";

type Props = {
    data: CardItemProps[]
    loading: boolean | null
    error: string
}

const initialState: Props = {
    data: [],
    loading: null,
    error: ''
};

const cardsSlice = createSlice({
    name: 'cardsSlice',
    initialState: initialState,
    reducers: {
        sliceAction: (state, { payload }) => {
            state.loading = payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getRequestCards.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(getRequestCards.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.loading = false;
            });
    }
});

export const {
    sliceAction
} = cardsSlice.actions;

export default cardsSlice.reducer;
