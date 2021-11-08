import React from 'react'
import * as types from "../constants/product.constant"
const initialState = {
    products: [],
    loading: false,
    selectedProduct: {},
}
const productReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        // GET PRODUCT LIST
        case types.GET_PRODUCT_LIST_REQUEST:
            return{
                ...state, loading: true
            };
        case types.GET_PRODUCT_LIST_SUCCESS:
            return{
                ...state, loading: false, products: payload,
            }
        case types.GET_PRODUCT_LIST_FAIL:
            return{
                ...state, loading: false
            }
        // GET SINGLE PRODUCT
        case types.GET_SINGLE_PRODUCT_REQUEST:
            return{
                ...state, loading: true
            };
        case types.GET_SINGLE_PRODUCT_SUCCESS:
            return{
                ...state, loading: false, selectedProduct: payload,
            }
        case types.GET_SINGLE_PRODUCT_FAIL:
            return{
                ...state, loading: false
            }
        default:
            return state
    }
}

export default productReducer