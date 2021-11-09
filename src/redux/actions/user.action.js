import * as types from "../constants/user.constant";
import api from "../../apiService";
import { toast } from "react-toastify";

const getCart = () => async (dispatch) => {
  dispatch({ type: types.CART_GET_ITEM_REQUEST, payload: null });

  try {

    const res = await api.get(`/users/me`);
    dispatch({ type: types.CART_GET_ITEM_SUCCESS, payload: res.data.data.user.cart });
  } catch (error) {
    dispatch({ type: types.CART_GET_ITEM_FAIL, payload: null });
  }
};

const addToCart = ({productCart}) => async (dispatch) => {
  dispatch({ type: types.CART_ADD_ITEM_REQUEST, payload: null });
  try {
    await api.post(`/users/cart`, {productId: productCart, quantity: 1});
    dispatch({ type: types.CART_ADD_ITEM_SUCCESS, payload: null });
    toast.success("Add product to cart success");
  } catch (error) {
    dispatch({ type: types.CART_ADD_ITEM_FAIL, payload: null });
    toast.error(`error add to cart ${error.message}`);
  }
};

const removeFromCart = (cartId) => async (dispatch) => {
  dispatch({ type: types.CART_DELETE_ITEM_REQUEST, payload: null });
  try {
    await api.delete(`/users/cart`);
    dispatch({ type: types.CART_DELETE_ITEM_SUCCESS, payload: null });
    toast.success("delete item success");
    dispatch(getCart());
  } catch (error) {
    dispatch({ type: types.CART_DELETE_ITEM_FAIL, payload: null });
    toast.error(` delete product from cart error \n ${error.message}`);
  }
};

export const userActions = {
  getCart,
  addToCart,
  removeFromCart,
};