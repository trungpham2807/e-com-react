// import * as types from "../constants/review.constant";
// const initialState = {
//     reviews: [],
//     loading : false,
// };

// const reviewReducer = (state= initialState, action) => {
//     const {type, payload} = action;
//     switch(type){
//         case types.POST_REVIEW_REQUEST:
//             return{...state, loading: true}
//         case types.POST_REVIEW_SUCCESS:
//             return{...state, reviews: payload, loading: false}
//         case types.POST_REVIEW_FAIL:
//             return{...state, loading: false}
//             default:
//                 return state
//     }
   
// }

// export default reviewReducer