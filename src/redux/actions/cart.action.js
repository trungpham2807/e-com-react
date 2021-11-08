// import * as types from "../constants/cart.constants";
// import api from "../../apiService";
// import { toast } from "react-toastify";

// const getCart = () => async (dispatch) => {
//   dispatch({ type: types.CART_GET_ITEM_REQUEST, payload: null });

//   try {
//     let url = "${process.env.REACT_APP_BACKEND_API}/users/cart";
//     const res = await api.get(url);
//     dispatch({ type: types.CART_GET_ITEM_SUCCESS, payload: data.data });
//   } catch (error) {
//     dispatch({ type: types.CART_GET_ITEM_FAIL, payload: null });
//   }
// };

// const addToCart = (book) => async (dispatch) => {
//   dispatch({ type: types.CART_ADD_ITEM_REQUEST, payload: null });
//   try {
//     await api.post(`/cart`, book);
//     dispatch({ type: types.CART_ADD_ITEM_SUCCESS, payload: null });
//     toast.success(`Add ${book.title} to cart success`);
//   } catch (error) {
//     dispatch({ type: types.CART_ADD_ITEM_FAIL, payload: null });
//     toast.error(`loser ${error.message}`);
//   }
// };

// const removeFromCart = (productId) => async (dispatch) => {
//   dispatch({ type: types.CART_DELETE_ITEM_REQUEST, payload: null });
//   try {
//     await api.delete(`/cart/${productId}`);
//     dispatch({ type: types.CART_DELETE_ITEM_SUCCESS, payload: null });
//     toast.success("remove book");
//     dispatch(getCart());
//   } catch (error) {
//     dispatch({ type: types.CART_DELETE_ITEM_FAIL, payload: null });
//     toast.error(` error \n ${error.message}`);
//   }
// };

// export const cartActions = {
//   getCart,
//   addToCart,
//   removeFromCart,
// };