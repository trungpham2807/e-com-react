// import * as types from "../constants/cart.constants";

// initialState = {
//     cartItems: [],
//     loading: false,
// }
// export const cartReducer = (state = initialState, action) => {
//     switch(action.type){
//         case CART_ADD_ITEM_SUCCESS: 
//         const item = action.payload;
//         const existItem = state.cartItems.find(x=> x.product === item.product)
//         if(existItem){
//             return{
//                 ...state,
//                 cartItems: state.cartItems.map( x => x.product === existItem.product? item :x)
//             }
//         }else{
//             return{ 
//                 ...state,
//                 cartItems: [...state.cartItems, item]
//             };
//         }

//     default: 
//     return state;
// }
// }