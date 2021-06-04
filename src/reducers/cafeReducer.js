const initState = {
  menu: [],
};

export const cafeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_MENU':
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return state;
  }
};

/* export const getMenu = (state) => state.cafe;
 */
