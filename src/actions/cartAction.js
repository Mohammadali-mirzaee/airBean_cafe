const addToCart = (cart) => {
  return {
    type: 'ADD_TOCART',
    payload: cart,
  };
};

export default addToCart;
