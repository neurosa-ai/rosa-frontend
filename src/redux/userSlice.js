// import { createSlice } from "@reduxjs/toolkit";

// interface userState {
//     value: number;
// }

// const initialState: userState = {
//     value: null,
// }

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setUser: (state, action) => {
//             state.value = action.payload;
//         },
//     }
// })

// export const { setUser } = userSlice.actions

// export default userSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
