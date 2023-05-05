import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMobilApi } from './mobilApi';

export const fetchMobil = createAsyncThunk(
    'mobil/fetchMobil',
    async() => {
        const res = await fetchMobilApi()
        return res.data;
    }
)

// export const filteMobil = createAsyncThunk(
//   'mobil/filterMobil',
//   async(payload) => {
//       const res = fetchMobilApi(payload);
//       return res
//   }
// )

export const mobilSlice = createSlice({
    name: 'mobil',
    initialState: {
        data: [],
        loading: 'idle',
        message: ''
    },
    reducers: {
      // filterMobil: (state, action) => {
      //   const filters = action.payload
      //   state.data = state.initData.filter(el => {
      //       return Object.keys(filters).every(filter => {
      //           if(filter === 'availableAt') {
      //               const d1 = new Date(filters[filter]);
      //               const d2 = new Date(el[filter]);
      //               console.log(d1, d2)
      //               return d1.getTime() >= d2.getTime() 
      //           }
      //           return filters[filter] === el[filter]
      //       });
      //   })
      // },
    },
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
// export const { filterMobil } = mobilSlice.actions
export default mobilSlice.reducer