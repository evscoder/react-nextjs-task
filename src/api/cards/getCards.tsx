import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {paths} from '@/root/paths';

const getRequestCards = createAsyncThunk('slice/getRequestCards', async (_, { rejectWithValue }) => {
    try {
        const {data} = await axios.get(`${paths.api}/cards.json`, {
            method: 'POST'
        });

        return data;
    } catch(error) {
        return rejectWithValue('Server Error');
    }
});

export {
    getRequestCards
};
