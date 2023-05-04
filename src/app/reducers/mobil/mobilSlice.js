import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMobilApi } from './mobilApi';

export const fetchMobil = createAsyncThunk(
    'mobil/fetchMobil',
    async() => {
        const res = await fetchMobilApi()
        return res.data;
    }
)

export const mobilSlice = createSlice({
    name: 'mobil',
    initialState: {
        data: [],
        loading: 'idle',
        message: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMobil.pending, (state) => {
                state.loading = 'loading'
            })
            .addCase(fetchMobil.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.data = action.payload
                // state.initData = action.payload
            })
            .addCase(fetchMobil.rejected, (state, action) => {
                state.loading = 'idle';
                state.message = action.payload.data
            })
    }
})

export const selectMobil = (state) => state.mobil.data
export const selectMobilLoading = (state) => state.mobil.loading
export default mobilSlice.reducer