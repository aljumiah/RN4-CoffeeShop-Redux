import axios from "axios";
import * as actionTypes from "./types";

export const getCoffeeShops = () => {
  return async dispatch => {
    dispatch(setCoffeeShopsLoading());
    try {
      const res = await axios.get("http://coffee.q8fawazo.me/api/?format=json");
      const coffeeShops = res.data;
      dispatch({
        type: actionTypes.GET_COFFEESHOPS,
        payload: coffeeShops
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};

export const addItemToCart = item => {
  return async dispatch => {
    // dispatch(setCoffeeShopsLoading());
    dispatch({
      type: actionTypes.ADD_ITEM,
      payload: item
    });
  };
};

export const removeItemFromCart = item => {
  return async dispatch => {
    // dispatch(setCoffeeShopsLoading());
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      payload: item
    });
  };
};
export const checkoutCart = () => {
  return async dispatch => {
    // dispatch(setCoffeeShopsLoading());
    dispatch({
      type: actionTypes.CHECKOUT
    });
  };
};

export const setCoffeeShopsLoading = () => ({
  type: actionTypes.COFFEESHOPS_LOADING
});
