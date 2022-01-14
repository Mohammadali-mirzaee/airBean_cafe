import './Profile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { logout } from '../redux/cafeAction';
import * as dayjs from 'dayjs';
import Navbar from '../components/Navbar';

function Profile() {
  const currentUser = useSelector((state) => {
    return state.currentUser;
  });

  let [history, setHistory] = useState([]);
  let [historyLoaded, setHistoryLoaded] = useState(false);
  let [totalSpent, setTotalSpent] = useState(0);
  let [totalDiscounts, setTotalDiscounts] = useState(0);
  let [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const routeHistory = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function fetchHistory() {
      try {
        const response = await fetch(
          `http://localhost:5000/api/order/${currentUser.userID}`
        );
        const data = await response.json();
        setHistory(data);
        setLoading(false);
        setHistoryLoaded(true);

        let total = 0;

        for (let i = 0; i < data.length; i++) {
          total = total + data[i].price;
          setTotalSpent(total);
        }
      } catch (error) {
        console.log(' error ');
        setLoading(false);
        setHistoryLoaded(false);
      }
    }

    fetchHistory();
  }, [currentUser.userID]);

  useEffect(() => {
    function getDiscounts() {
      let discounts = 0;
      let discountedOrders = history.filter((order) => order.discount > 0);

      for (let order of discountedOrders) {
        discounts = discounts + order.discount;
      }

      setTotalDiscounts(discounts);
    }
    getDiscounts();
  }, [history, setTotalDiscounts]);

  function logoutUser() {
    dispatch(logout());
    routeHistory('/');
  }
  const [openNav, setOpenNav] = useState(false);
  function navOpen() {
    setOpenNav(!openNav);
  }

  return (
    <div className="profile">
      {openNav && <Navbar />}

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
      <h1 className="username">{currentUser.fullname}</h1>
      <p className="email">{currentUser.email}</p>
      <button className="logout" onClick={logoutUser}>
        Log out
      </button>

      {historyLoaded && !loading && (
        <div className="order-history">
          <h2>Order history</h2>
          {history.map((item) => {
            return (
              <div key={item.orderNumber} className="order-container">
                <p className="orderno">ORDER # {item.orderNumber}</p>
                <p className="date">{dayjs(item.ETA).format('YYYY/MM/DD')}</p>
                <p className="total">Total price</p>
                <p className="price">{item.price} kr</p>
                <div className="line"></div>
              </div>
            );
          })}
          {totalDiscounts > 0 && (
            <div className="discounts">
              <p>Total discounts</p>
              <p>- {totalDiscounts} kr</p>
            </div>
          )}
          <div className="total">
            <p className="spent">Total spent</p>
            <p className="grandtotal">{totalSpent - totalDiscounts} kr</p>
          </div>
        </div>
      )}
      {!historyLoaded && !loading && (
        <div className="whoops">
          <h3>Something went Wrong... please try again!</h3>
        </div>
      )}
      {loading && (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}

export default Profile;
