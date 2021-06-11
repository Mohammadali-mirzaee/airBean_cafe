export const FETCH_MENUE_CFAE = 'FETCH_MENUE_CFAE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const setMenu = (menu) => {
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

export default { setMenu, setCart };
