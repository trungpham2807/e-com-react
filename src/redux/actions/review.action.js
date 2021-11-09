// import * as types from "../constants/review.constant";
// import api from "../../apiService";
// import {productAction} from "../actions/product.action"

// const addReview = ({productId, rating, review}) => async (dispatch) => {
//   dispatch({ type: types.POST_REVIEW_REQUEST, payload: null });
//   try {
//     const {data} = await api.post(`/reviews`, {
//         "productId": [productId],
//         "content": review,
//         "rating": rating,
//   });
//     dispatch({ type: types.POST_REVIEW_SUCCESS, payload: null});
//     dispatch(productAction.getSingleProduct({productId}));
// } catch (error) {
//     dispatch({ type: types.POST_REVIEW_FAIL, payload: null });
//   }
// };


// export const reviewActions = {
//   addReview,
// };