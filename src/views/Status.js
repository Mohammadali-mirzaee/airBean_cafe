import './Status.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as dayjs from 'dayjs';

function Status() {
  const currentUser = useSelector((state) => {
    return state.currentUser;
  });

  const history = useNavigate();

  const [status, setStatus] = useState('');
  const [latestOrder, setLatestOrder] = useState({});
  const [serverError, setServerError] = useState(false);
  const [orderExists, setOrderExists] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getOrders() {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/order/${currentUser.userID}`
        );
        const data = await response.json();

        let sorted = data.reverse();
        console.log(sorted);

        setServerError(false);
        setLatestOrder(sorted[0]);
        setStatus(sorted[0].status);
        setOrderExists(true);
        setLoading(false);
      } catch (error) {
        console.log('Task failed successfully');
        setServerError(true);
        setLoading(false);
      }
    }
    getOrders();
  }, [currentUser]);

  const returnToNav = () => {
    history('/nav');
  };

  return (
    <div className="order-status">
      {!serverError && !loading && orderExists && (
        <div className="main-content">
          <div className="top">
            <p className="orderNumber">
              Order number <strong>#{latestOrder.orderNumber}</strong>
            </p>
            {status === 'Delivered' ? (
              /*  <img
                src={delivered}
                alt="drone and coffee cup"
                className="drone"
              /> */

              <p>delivered</p>
            ) : (
              <p>Wait</p>
              /*               <img src={drone} alt="airbean drone" className="drone" />
               */
            )}
          </div>
          {status === 'Delivered' ? (
            <div className="middle">
              <h3>
                Your last order was delivered on{' '}
                {dayjs(latestOrder.ETA).format('MMMM D')} at{' '}
                {dayjs(latestOrder.ETA).format('h:mm a')}
              </h3>
            </div>
          ) : (
            <div className="middle">
              <h1>Your order is on the way!</h1>
              <p>{status}</p>
            </div>
          )}

          <button className="cool" onClick={returnToNav}>
            Ok, cool!
          </button>
        </div>
      )}
      {serverError && (
        <div className="whoops">
          <h3>Nothing to see here!</h3>
          {/*           <img src={oops} alt="spilled coffee" />
           */}{' '}
          <button className="cool" onClick={returnToNav}>
            Go back
          </button>
        </div>
      )}
      {loading && (
        <div className="loading">
          <h2>Fetching order... hang tight...</h2>
          {/*           <CircularProgress style={{ color: '#0e927d' }} />
           */}{' '}
        </div>
      )}
    </div>
  );
}

export default Status;
