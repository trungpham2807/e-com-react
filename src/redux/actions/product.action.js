import * as types from "../constants/product.constant"
import api from "../../apiService"

// Get product list action
 const getProductList = (pageNum, limit, query) => async (dispatch) => {
    dispatch({
        type: types.GET_PRODUCT_LIST_REQUEST, payload: null
    });
    try{

        let url = `${process.env.REACT_APP_BACKEND_API}/products?page=${pageNum}&limit=${limit}`;
        // let url = "http://cs-ecom-be.herokuapp.com/api/products?"
        if (query) {
            url += `&q=${query}`
        };        
        const res = await api.get(url);
        dispatch({type: types.GET_PRODUCT_LIST_SUCCESS, payload: res.data.data.products})
    }catch(error){
        console.log(error);
        dispatch({type: types.GET_PRODUCT_LIST_FAIL})
    }
}
// Get single product action

const getSingleProduct = (productId) => async (dispatch) => {
    dispatch({
        type: types.GET_SINGLE_PRODUCT_REQUEST, payload: null
    });
    try{

        let url = `${process.env.REACT_APP_BACKEND_API}/products/${productId}`;
        // let url = "http://cs-ecom-be.herokuapp.com/api/products?"
        const res = await api.get(url);
        console.log(res.data.data, "data receive")
        dispatch({type: types.GET_SINGLE_PRODUCT_SUCCESS, payload: res.data.data.product})
    }catch(error){
        console.log(error);
        dispatch({type: types.GET_SINGLE_PRODUCT_FAIL})
    }
}

const addReview = ({productId, rating, review}) => async (dispatch) => {
    dispatch({ type: types.POST_REVIEW_REQUEST, payload: null });
    try {
      const {data} = await api.post(`/reviews`, {
          "productId": [productId],
          "content": review,
          "rating": rating,
    });
      dispatch({ type: types.POST_REVIEW_SUCCESS, payload: null});
      dispatch(productAction.getSingleProduct({productId}));
  } catch (error) {
      dispatch({ type: types.POST_REVIEW_FAIL, payload: null });
    }
  };
// export all action
export const productAction = {
    getProductList,
    getSingleProduct,
    addReview,
}