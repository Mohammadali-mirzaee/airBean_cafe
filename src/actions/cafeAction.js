/* export function fetchMenu(data) {
  fetch('http://localhost:5000/api/coffee', {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      menu: { data },
    }),
  });
  return {
    type: 'SET-MENU',
    payload: {
      menu: { data },
    },
  };
} */
export const setMenu = (menu) => {
  console.log(menu);
  return {
    type: 'SET_MENU',
    payload: menu,
  };
};
