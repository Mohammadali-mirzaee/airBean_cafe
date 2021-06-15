export const FETCH_MENUE_CFAE = 'FETCH_MENUE_CFAE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT_CAFE = 'INCREMENT_CAFE';
/* export const ADD_USER = 'ADD_USER';
 */ export const setMenu = (menu) => {
  console.log(menu);
  return {
    type: 'FETCH_MENUE_CFAE',
    payload: menu,
  };
};

export const setCart = (cart) => {
  console.log(cart);
  return {
    type: 'ADD_TO_CART',
    payload: cart,
  };
};
/* 
export const increament = (cart) => {
  return {
    type: 'INCREMENT_CAFE',
    cart,
  };
}; */
/* export const setUser = (user) => {
  return {
    type: 'ADD_USER',
    payload: user,
  };
}; */

export default { setMenu, setCart /* setUser */ };
