import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    background: '',
    pattern: '',
};

export const planetSlice = createSlice({
    name: 'planet',
    initialState,
    reducers: {}
});