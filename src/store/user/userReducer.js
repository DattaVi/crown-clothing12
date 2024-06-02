import { createSlice } from "@reduxjs/toolkit";
// import { setCurrUser } from "./userAction";

const INITIAL_STATE={
    currUser:null
}

export const userSlice=createSlice({
    name:'user',
    initialState:INITIAL_STATE,
    reducers:{
        setCurrUser(state,action){
            state.currUser=action.payload;
        }
    }
});

export const {setCurrUser}=userSlice.actions;
export const userReducer=userSlice.reducer;







//  export const userReducer=(state={currUser:null},action)=>{
//     const {type,payload}=action;
//     console.log("dispatched");
//     console.log(action);
//     switch(type){
//         case 'SET_USER':
//             return{
//                 ...state,
//                 currUser:payload
//             }
//         default:
//             return state;
//     }

// }

