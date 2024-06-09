import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {paths} from '@/root/paths';

const getRequestFrames = createAsyncThunk('slice/getRequestFrames', async (id: string, { rejectWithValue }) => {
    try {
        const {data} = await axios.get(`${paths.api}/frames.json`, {
            method: 'POST'
        });

        return data[`${id}`];
    } catch(error) {
        return rejectWithValue('Server Error');
    }
});

export {
    getRequestFrames
};
