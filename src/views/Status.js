import '../scss/Status.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import * as dayjs from 'dayjs';
import CircularProgress from '@material-ui/core/CircularProgress';

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
    <div id="status">
      {!serverError && !loading && orderExists && (
        <div className="status-cafe">
          <div className="top">
            <p className="orderNumber">
              Order number <strong>#{latestOrder.orderNumber}</strong>
            </p>
            {status === 'Delivered' ? (
              <p>delivered</p>
            ) : (
              <p>Waiting Time ...</p>
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
              <h2>Din order är på väg!</h2>
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
          <button className="cool" onClick={returnToNav}>
            Go back
          </button>
        </div>
      )}
      {loading && (
        <div className="loading">
          <h2>Fetching order... hang tight...</h2>
          <CircularProgress style={{ color: '#0e927d' }} size="1rem" />
        </div>
      )}
    </div>
  );
}

export default Status;
