import { FETCH_MENUE_CFAE } from '../actions/cafeAction';

const initState = {
  menu: [],
  cart: [],
};

export const cafeReducer = (state = initState, action) => {
  /*  console.log(state.menu); */
  switch (action.type) {
    case FETCH_MENUE_CFAE:
      return {
        ...state,
        menu: [...state.menu, action.payload],
        cart: [...state.menu, action.payload],
      };
    default:
      return state;
  }
};
