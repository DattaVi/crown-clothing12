import { createSelector } from "reselect";

const selectCartReducer=(state)=>state.cart;
export const selectToggleState=createSelector(
    [selectCartReducer],
    (cartSlice)=>cartSlice.togglestate
);

export const selectCartItems=createSelector(
    [selectCartReducer],
    (cartSlice)=>cartSlice.cartItems
)

export const selectTotalItems=createSelector(
    [selectCartReducer],
    (cartSlice)=>cartSlice.totalItems
)

export const selectTotalPrice=createSelector(
    [selectCartReducer],
    (cartSlice)=>cartSlice.totalPrice
)

// export const selectToggleState = (state) => state.cart.togglestate;
// export const selectCartItems = (state) => state.cart.cartItems;
// export const selectTotalItems = (state) => state.cart.totalItems;
// export const selectTotalPrice = (state) => state.cart.totalPrice;
