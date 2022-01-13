import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addToCart } from '../redux/cafeAction';
import './Menu.scss';
import Cart from './Cart';
import Navbar from '../components/Navbar';
function Menu() {
  const [menu, setMenu] = useState(() => []);
  const [menuLoaded, setMenuLoaded] = useState(false);

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

  return (
    <div className="menu">
      {openNav && <Navbar />}
      {openCart && <Cart />}
      <svg
        onClick={navOpen}
        className="navicon"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="24" fill="white" />
        <rect x="11" y="14" width="26" height="2" rx="1" fill="#222222" />
        <rect x="11" y="23" width="26" height="2" rx="1" fill="#222222" />
        <rect x="11" y="32" width="26" height="2" rx="1" fill="#222222" />
      </svg>

      <svg
        className="cartIcon"
        onClick={cartOpen}
        width="80"
        height="80"
        viewBox="0 3 80 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <circle cx="46" cy="46" r="30" fill="#2F2926" />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.0486 38.0488V40.7723H43.9511V38.0488C43.9511 36.9173 44.8684 36 45.9999 36C47.1314 36 48.0486 36.9173 48.0486 38.0488ZM41.9511 38.0488C41.9511 35.8127 43.7638 34 45.9999 34C48.2359 34 50.0486 35.8127 50.0486 38.0488V40.7723V41.4227H51.5428C52.6103 41.4227 53.4897 42.2612 53.5405 43.3276L53.9978 52.9314C54.0521 54.0721 53.142 55.0266 52.0001 55.0266H40C38.8581 55.0266 37.948 54.0721 38.0023 52.9314L38.4596 43.3276C38.5104 42.2612 39.3898 41.4227 40.4574 41.4227H41.9511V40.7723V38.0488ZM40.4574 43.4227H51.5428L52.0001 53.0266H40L40.4574 43.4227Z"
          fill="white"
        />
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="92"
            height="92"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="8" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

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
