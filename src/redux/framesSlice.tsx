import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import isError from '../helper/isError';
import {getRequestFrames} from "@/api/frames/getFrames";
import {FrameItemProps} from "@/components/container/Frames/Frame";

type Props = {
    data: FrameItemProps[]
    loading: boolean | null
    error: string
    maxPage: number
    initLoading: boolean
    pageCount: number
}

const initialState: Props = {
    data: [],
    loading: null,
    error: '',
    maxPage: 3,
    initLoading: false,
    pageCount: 2
};

const framesSlice = createSlice({
    name: 'framesSlice',
    initialState: initialState,
    reducers: {
        moreFrames: ((state, {payload}) => {
            state.pageCount = payload;
        })
    },
    extraReducers: builder => {
        builder
            .addCase(getRequestFrames.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(getRequestFrames.fulfilled, (state, action) => {
                if (action.payload) {
                    state.data = [...state.data, ...action.payload];
                }

                state.loading = false;
                state.initLoading = true;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.loading = false;
            });
    }
});

export const {
    moreFrames
} = framesSlice.actions;

export default framesSlice.reducer;
