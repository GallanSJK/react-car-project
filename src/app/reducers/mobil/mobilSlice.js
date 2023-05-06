import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMobilApi } from './mobilApi';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export const fetchMobil = createAsyncThunk(
    'mobil/fetchMobil',
    async() => {
        const res = await fetchMobilApi()
        return res.data;
    }
)

export const filteMobil = createAsyncThunk(
  'mobil/filterMobil',
  async(payload) => {
      const res = fetchMobilApi(payload);
      return res
  }
)

export const mobilSlice = createSlice({
    name: 'mobil',
    initialState: {
        data: [],
        initData: [],
        loading: 'idle',
        message: ''
    },
    reducers: {
      filterMobil: (state, action) => {
        const filters = action.payload
        state.data = state.initData.filter(el => {
            return Object.keys(filters).every(filter => {
              let availableAt = true,
              capacity = true,
              typeDriver = true;
                if(filter === 'availableAt') {
                    const d1 = new Date(filters[filter]);
                    const d2 = new Date(el[filter]);
                    console.log(d1, d2)
                    // return d1.getTime() >= d2.getTime() 
                    availableAt = d1.getTime() >= d2.getTime() 
                }
                if(filter === 'capacity') {
                  capacity = el[filter] >= filters[filter]
                }
                if(filter === 'typeDriver') {
                  typeDriver = el[filter] >= filters[filter]
                }
                return capacity && availableAt && typeDriver
            });
        })
      },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMobil.pending, (state) => {
                state.loading = 'loading'
            })
            .addCase(fetchMobil.fulfilled, (state, action) => {
                state.loading = 'idle';
                const cars = action.payload.map((car) => {
                  const isPositive = getRandomInt(0, 1) === 1;
                  const timeAt = new Date();
                  const mutator = getRandomInt(1000000, 100000000);
                  const availableAt = String(new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator)))
                  const typeDriver = isPositive ? 'Lepas Kunci' : 'Dengan Supir'
                  const capacity = getRandomInt(2, 8)
                  return {
                    ...car,
                    capacity,
                    typeDriver,
                    availableAt,
                  };
                })
                state.data = cars
                state.initData = cars
            })
            .addCase(fetchMobil.rejected, (state, action) => {
                state.loading = 'idle';
                state.message = action.payload.data
            })
    }
})

export const selectMobil = (state) => state.mobil.data
export const selectMobilLoading = (state) => state.mobil.loading
export const { filterMobil } = mobilSlice.actions
export default mobilSlice.reducer