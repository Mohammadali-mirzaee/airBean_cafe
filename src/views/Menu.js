import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setMenu } from '../actions/cafeAction';
function Menu() {
  const dispatch = useDispatch();

  const menu = useSelector((state) => {
    console.log(state.menu);
    return state.menu;
  });

  /*  const [menu, setMenu] = useState([]); */

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:5000/api/coffee');
      const data = await response.json();
      console.log(data.menu);
      dispatch(setMenu(data.menu));
      setMenu(() => {
        return data.menu;
        /* return [...data.menu]; */
      });
    })();
  }, []);

  const history = useHistory();

  return (
    <div>
      <button
        className="back"
        onClick={() => {
          history.push('/');
        }}
      >
        &#8592;
      </button>
      <p>{menu}</p>
      <table className="menuTable">
        <tbody>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
          {menu.map((Item, index) => (
            <tr key={index}>
              <td>
                <button key={Item.id}>+</button>
              </td>
              <td>{Item.title}</td>
              <td>{Item.desc}</td>
              <td>{Item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <section key={menu.id}>
        <td>{menu.title}</td>
        <td>{menu.desc}</td>
        <td>{menu.price}</td>
      </section> */}
    </div>
  );
}

export default Menu;
