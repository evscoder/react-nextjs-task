import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import isError from '../helper/isError';
import {getRequestFrames} from "@/api/frames/getFrames";
import {FrameItemProps} from "@/components/container/Frames/Frame";

type Props = {
    data: FrameItemProps[]
    loading: boolean | null
    error: string
    maxPage: number
}

const initialState: Props = {
    data: [],
    loading: null,
    error: '',
    maxPage: 3,
};

const framesSlice = createSlice({
    name: 'framesSlice',
    initialState: initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(getRequestFrames.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(getRequestFrames.fulfilled, (state, action) => {
                state.loading = false;

                if (action.payload) {
                    state.data = [...state.data, ...action.payload];
                }
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.loading = false;
            });
    }
});

export const {
} = framesSlice.actions;

export default framesSlice.reducer;
