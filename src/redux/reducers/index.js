import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import productReducer from "./product.reducer";
import userReducer from "./user.reducer";
import reviewReducer from "./review.reducer";
export default combineReducers({
  auth: authReducer,
  productList: productReducer,
  user: userReducer,
  // review: reviewReducer,
});