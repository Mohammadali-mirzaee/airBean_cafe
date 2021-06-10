export const FETCH_MENUE_CFAE = 'FETCH_MENUE_CFAE';
export const setMenu = (menu) => {
  console.log(menu);
  return {
    type: 'FETCH_MENUE_CFAE',
    payload: menu,
  };
};
