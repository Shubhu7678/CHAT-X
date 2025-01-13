import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    totalUsers: [],
    loading: false,
}

const userSlice = createSlice({

    name: 'user',
    initialState,
    reducers: {

        setTotalUsers: (state, action) => { 

            state.totalUsers = action.payload;
        },
        setLoading: (state, action) => {

            state.loading = action.payload;
        }
    }
})

export const { setTotalUsers, setLoading } = userSlice.actions;

export default userSlice.reducer;