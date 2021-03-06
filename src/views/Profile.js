import '../scss/Profile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { logout } from '../redux/cafeAction';
import * as dayjs from 'dayjs';
import Navbar from '../components/Navbar';
import MenuRounded from '@material-ui/icons/MenuRounded';
import user from '../images/user.png';

function Profile() {
  const currentUser = useSelector((state) => {
    return state.currentUser;
  });

  let [history, setHistory] = useState([]);
  let [historyLoaded, setHistoryLoaded] = useState(false);
  let [totalSpent, setTotalSpent] = useState(0);
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

  function logoutUser() {
    dispatch(logout());
    routeHistory('/');
  }
  const [openNav, setOpenNav] = useState(false);
  function navOpen() {
    setOpenNav(!openNav);
  }
  const navIcon = {
    margin: '1rem',
    color: 'white',
  };

  return (
    <div id="profile">
      {openNav && <Navbar />}
      <MenuRounded style={navIcon} fontSize="large" onClick={navOpen} />

      <div className="avatar">
        <img src={user} alt="userIamge" />
        <h2 className="username">{currentUser.fullname}</h2>
        <p className="email">{currentUser.email}</p>
        <button className="logout" onClick={logoutUser}>
          log out
        </button>
      </div>

      {historyLoaded && !loading && (
        <div className="order-history">
          <h2>Order historik</h2>
          {history.map((items) => {
            return (
              <div key={items.orderNumber} className="order-container">
                <div>
                  <p>#{items.orderNumber}</p>
                  <p>Total ordersumma </p>
                </div>
                <div>
                  <p>{dayjs(items.ETA).format('YYYY/MM/DD')}</p>
                  <p>
                    {items.price}
                    kr
                  </p>
                </div>
              </div>
            );
          })}

          <div className="total">
            <h3>Totala spenderat</h3>
            <p className="grandtotal">{totalSpent}kr</p>
          </div>
        </div>
      )}
      {!historyLoaded && !loading && (
        <div className="whoops">
          <h3>N??got Gick Fel... Testa en g??ng till!</h3>
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
