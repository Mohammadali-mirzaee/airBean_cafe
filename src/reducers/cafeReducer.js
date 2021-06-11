import { FETCH_MENUE_CFAE } from '../actions/cafeAction';
import { ADD_TO_CART } from '../actions/cafeAction';
const initState = {
  menu: [],
  cartArray: [],
};
export const cafeReducer = (state = initState, action) => {
  let cartARR = state.cartArray;

  /*  console.log(state.menu); */
  switch (action.type) {
    case FETCH_MENUE_CFAE: {
      return {
        ...state,
        menu: [...state.menu, action.payload],
        /*  cart: [...state.menu, action.payload], */
      };
    }

    case ADD_TO_CART: {
      cartARR.push(action.payload);
      return {
        ...state,
        cartARR: [...state.cartArray, action.payload],
      };
    }
    default:
      return state;
  }
};
