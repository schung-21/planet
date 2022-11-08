import { createSlice } from '@reduxjs/toolkit';

export const starSlice = createSlice({
    name: 'star',
    initialState: {
        shape: '',
        color: '',
        medium: '',
        period: ''
    },
    reducers: {}
});

// export const selectPlanet = state => state.planet;
// export default planetSlice.reducer;