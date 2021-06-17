import { FETCH_MENUE_CFAE } from '../actions/cafeAction';
import { ADD_TO_CART } from '../actions/cafeAction';
import { ADD_USER } from '../actions/cafeAction';
import { SET_ORDER } from '../actions/cafeAction';
/* import { INCREMENT_CAFE } from '../actions/cafeAction';
 */ const initState = {
  menu: [],
  cartArray: [],
  user: [],
  order: [],
};
export const cafeReducer = (state = initState, action) => {
  let cartARR = state.cartArray;
  let order = state.order;

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
    case SET_ORDER: {
      order.push(action.payload);
      return {
        ...state,
        order: [...state.order, action.payload],
      };
    }
    /*  case INCREMENT_CAFE:
      const cafe = state.find((c) => action.cartARR === c.itemCount);
      return state; */
    /*  case ADD_USER: {
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    } */

    default:
      return state;
  }
};
