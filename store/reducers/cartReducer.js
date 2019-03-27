import * as actionType from "../actions/types";

const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_ITEM:
      let foundItem = state.items.find(
        item =>
          item.drink === action.payload.drink &&
          item.option === action.payload.option
      );
      if (foundItem) {
        foundItem.quantity++;
        return {
          ...state,
          items: [...state.items]
        };
      } else {
        return {
          ...state,
          items: state.items.concat(action.payload)
        };
      }
    case actionType.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item != action.payload)
      };
    case actionType.CHECKOUT:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};

export default cartReducer;
