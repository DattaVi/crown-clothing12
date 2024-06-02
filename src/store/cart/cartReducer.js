import { createSlice } from "@reduxjs/toolkit";
// import { addItemToCart, removeItemEntirelyFromCart, removeItemFromCart, setTogglestate } from "./cartAction";


const addCardItem=(cartItems,productToAdd)=>{
    const index=cartItems.findIndex(item=>item.id===productToAdd.id);
    if(index!==-1){
        const newcartItems=[...cartItems];
        newcartItems[index]={...newcartItems[index],quantity:newcartItems[index].quantity+1};

        return newcartItems;
    }
    else{
        return [...cartItems,{...productToAdd,quantity:1}]
    }
    return cartItems;
}

const removeCardItem=(cartItems,productToRemove)=>{
    const index=cartItems.findIndex(item=>item.id===productToRemove.id)
    if(index!==-1){
        if(cartItems[index].quantity<=1){
            return removeEntirelyFromCartHelper(cartItems,productToRemove);
        }
        else{
            const newarr=[...cartItems]
            newarr[index]={...newarr[index],quantity:newarr[index].quantity-1};
            return newarr;
        }
    }
    return cartItems;
}

const removeEntirelyFromCartHelper=(cartItems,productToRemove)=>{
    return cartItems.filter((item)=>item.id!==productToRemove.id)
}

const initial_State={
    togglestate:false,
    cartItems:[],
    totalItems:0,
    totalPrice:0
}

export const cartSlice=createSlice({
    name:'cart',
    initialState:initial_State,
    reducers:{
        setTogglestate(state,action){
            state.togglestate=action.payload
        },
        addItemToCart(state,action){
        const newCartItems=addCardItem(state.cartItems,action.payload)
        state.cartItems=newCartItems
        state.totalItems=newCartItems.reduce((total, item) => total + item.quantity, 0)
        state.totalPrice=newCartItems.reduce((total, item) => total + item.quantity * item.price, 0)
        },
        removeItemFromCart(state,action){
            const newItems = removeCardItem(state.cartItems, action.payload)
            state.cartItems=newItems
            state.totalItems=newItems.reduce((total, item) => total + item.quantity, 0)
            state.totalPrice=newItems.reduce((total, item) => total + item.quantity * item.price, 0)
        },
        removeItemEntirelyFromCart(state,action){
            const changedItems = removeEntirelyFromCartHelper(state.cartItems, action.payload);
            state.cartItems=changedItems
            state.totalItems=changedItems.reduce((total, item) => total + item.quantity, 0)
            state.totalPrice=changedItems.reduce((total, item) => total + item.quantity * item.price, 0)
        }

    }

});

export const {setTogglestate,addItemToCart,removeItemFromCart,removeItemEntirelyFromCart}=cartSlice.actions;
export const cartReducer=cartSlice.reducer;

// export const cartReducer = (state = initialState, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case 'setTogglestate':
//             return {
//                 ...state,
//                 togglestate: payload
//             };
//         case 'addCartItem':
//             const newCartItems = addCardItem(state.cartItems, payload);
//             return {
//                 ...state,
//                 cartItems: newCartItems,
//                 totalItems: newCartItems.reduce((total, item) => total + item.quantity, 0),
//                 totalPrice: newCartItems.reduce((total, item) => total + item.quantity * item.price, 0)
//             };
//         case 'removeItemFromCart':
//             const newItems = removeCardItem(state.cartItems, payload);
//             return {
//                 ...state,
//                 cartItems: newItems,
//                 totalItems: newItems.reduce((total, item) => total + item.quantity, 0),
//                 totalPrice: newItems.reduce((total, item) => total + item.quantity * item.price, 0)
//             };
//         case 'removeEntirelyFromCart':
//             const changedItems = removeEntirelyFromCartHelper(state.cartItems, payload);
//             return {
//                 ...state,
//                 cartItems: changedItems,
//                 totalItems: changedItems.reduce((total, item) => total + item.quantity, 0),
//                 totalPrice: changedItems.reduce((total, item) => total + item.quantity * item.price, 0)
//             };
//         default:
//             return state;
//     }
// };
