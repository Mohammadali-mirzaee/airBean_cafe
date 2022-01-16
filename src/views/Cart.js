import '../scss/Cart.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import ArrowBackRounded from '@material-ui/icons/ArrowBackRounded';

import { increment, decrement, emptyCart } from '../redux/cafeAction';

function Cart() {
  const cart = useSelector((state) => {
    return state.cart;
  });
  const cartTotal = useSelector((state) => {
    return state.total;
  });

  const currentUser = useSelector((state) => {
    return state.currentUser;
  });

  const dispatch = useDispatch();
  const history = useNavigate();

  const [orderArray, setOrderArray] = useState([]);

  function increaseQty(id, quantity, price) {
    dispatch(increment(id, quantity, price));
  }

  function decreaseQty(id, quantity, price) {
    dispatch(decrement(id, quantity, price));
  }

  async function takeOrder() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: orderArray,
        price: cartTotal,
        userId: currentUser.userID,
      }),
    };
    const response = await fetch(
      'http://localhost:5000/api/order',
      requestOptions
    );
    const data = await response.json();
    console.log(data);

    dispatch(emptyCart());
    history('/status');
  }

  return (
    <div className="cart">
      <div className="cart-article">
        <Link to="/nav">
          <ArrowBackRounded />
        </Link>

        {cart.length === 0 && (
          <p style={{ textAlign: 'center', fontSize: '0.8em' }}>
            Go on. Treat yourself! 🙂
          </p>
        )}

        <h1>Din beställning</h1>

        {cart.map((item) => {
          return (
            <div>
              <div className="cartItem">
                <div key={item.id}>
                  <p>{item.title}</p>
                  <p>
                    {item.price}
                    kr
                  </p>
                </div>

                <div className="quantity">
                  <i
                    onClick={() =>
                      increaseQty(item.id, item.quantity, item.price)
                    }
                    className="arrow up"
                  ></i>
                  <p>{item.quantity}</p>
                  <i
                    onClick={() =>
                      decreaseQty(item.id, item.quantity, item.price)
                    }
                    className="arrow down"
                  ></i>
                </div>
              </div>
            </div>
          );
        })}
        <div className="total">
          <p>Total</p>
          <p>{cartTotal}</p>
        </div>
        <div className="tackeBtn">
          <button onClick={takeOrder}>Take My Money </button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
