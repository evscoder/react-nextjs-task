import {createSlice} from '@reduxjs/toolkit';

type Props = {
    success: boolean
}

const initialState: Props = {
    success: false
};

const sliceSubscribe = createSlice({
    name: 'sliceSubscribe',
    initialState: initialState,
    reducers: {
        formSuccess: ((state, {payload}) => {
            state.success = payload;
        })
    }
});

export const {
    formSuccess
} = sliceSubscribe.actions;

export default sliceSubscribe.reducer;
