import * as types from "../constants/user.constant";

const initialState = {
    cartProduct : [],
    loading : false,
};

const userReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case types.CART_GET_ITEM_REQUEST:
            return{...state, loading: true};
    
        case types.CART_ADD_ITEM_REQUEST:
            return{...state, loading: true};
    
        case types.CART_DELETE_ITEM_REQUEST:
            return{...state, loading: true};
        case types.CART_GET_ITEM_SUCCESS:
            return{...state, loading: false, cartProduct: payload };
       
        case types.CART_ADD_ITEM_SUCCESS:
            return{...state, loading: false}
    
        case types.CART_DELETE_ITEM_SUCCESS:
            return{...state, loading: false}
        case types.CART_ADD_ITEM_FAIL:
            return{...state, loading: false}
        case types.CART_DELETE_ITEM_FAIL:
            return{...state, loading: false}
        default:
            return state
    
    }
}

export default userReducer;