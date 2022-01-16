import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addToCart } from '../redux/cafeAction';
import '../scss/Menu.scss';
import Cart from './Cart';
import Navbar from '../components/Navbar';
import MenuRounded from '@material-ui/icons/MenuRounded';
import ShoppingCartRounded from '@material-ui/icons/ShoppingCartRounded';

function Menu() {
  const [menu, setMenu] = useState(() => []);
  const [menuLoaded, setMenuLoaded] = useState(false);

  const cart = useSelector((state) => {
    return state.cart;
  });
  function addItem(id, title, price, quantity) {
    dispatch(addToCart(id, title, price, quantity));
  }
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await fetch('http://localhost:5000/api/coffee');
        const data = await response.json();
        setMenu(data);
        setMenuLoaded(true);
      } catch (error) {
        setMenuLoaded(false);
        console.log('is a heckin error');
      }
    }
    fetchMenu();
  }, []);

  const [openNav, setOpenNav] = useState(false);
  function navOpen() {
    setOpenNav(!openNav);
  }
  const [openCart, setOpenCart] = useState(false);
  function cartOpen() {
    setOpenCart(!openCart);
  }
  const navIcon = {
    margin: '1rem',
  };

  return (
    <div className="menu">
      {openNav && <Navbar />}
      <MenuRounded style={navIcon} fontSize="large" onClick={navOpen} />
      {openCart && <Cart />}

      <div className="cart-num">
        <p>{cart.length}</p>
      </div>
      <ShoppingCartRounded className="cartIcon" onClick={cartOpen} />

      {menuLoaded ? (
        <section className="menuTable">
          <h1 className="menuTitle">Meny</h1>
          {menu.map((menuItem) => {
            return (
              <table key={menuItem.id}>
                <td>
                  <button
                    onClick={() =>
                      addItem(menuItem.id, menuItem.title, menuItem.price, 1)
                    }
                    className="addBtn"
                    key={menuItem.id}
                  >
                    +
                  </button>
                </td>
                <td>
                  <h1 className="titelItem">{menuItem.title}</h1>
                  <p>{menuItem.desc}</p>
                </td>
                <td>
                  <h1>{menuItem.price} kr</h1>
                </td>
              </table>
            );
          })}
        </section>
      ) : (
        <p>The menu was not available, please try again later.</p>
      )}
    </div>
  );
}

export default Menu;
