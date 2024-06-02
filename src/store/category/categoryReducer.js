import { createSlice } from "@reduxjs/toolkit";
// import { setCategoriesMap } from "./categoryAction";


const INITIAL_STATE={
    categoriesMap:[]
}

export const categorySlice=createSlice({
    name:'category',
    initialState:INITIAL_STATE,
    reducers:{
        setCategoriesMap(state,action){
            state.categoriesMap=action.payload
        }
    }
})

export const {setCategoriesMap}=categorySlice.actions;
export const categoryReducer=categorySlice.reducer;
// export const categoryReducer = (state = { categoriesMap: [] }, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case 'setCategoriesMap':
//             console.log('Updating categoriesMap with payload:', payload); // Add this line
//             return {
//                 ...state,
//                 categoriesMap: payload
//             };
//         default:
//             return state;
//     }
// };
