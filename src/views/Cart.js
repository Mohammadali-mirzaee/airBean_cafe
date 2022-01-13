import './Cart.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import {
  increment,
  decrement,
  removeItem,
  emptyCart,
  checkDiscount,
} from '../redux/cafeAction';

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
  const history = useHistory();

  const [cartLength, setCartLength] = useState(0);
  const [orderArray, setOrderArray] = useState([]);

  function increaseQty(id, quantity, price) {
    dispatch(increment(id, quantity, price));
  }

  function decreaseQty(id, quantity, price) {
    dispatch(decrement(id, quantity, price));
  }

  function deleteItem(id, quantity, price) {
    dispatch(removeItem(id, quantity, price));
  }

  async function takeOrder() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: orderArray,
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
    history.push('/status');
  }
  useEffect(() => {
    function discountCheck() {
      dispatch(checkDiscount());
    }
    discountCheck();
  }, [cartTotal, dispatch]);

  useEffect(() => {
    function getCartLength() {
      let badge = 0;
      for (let i = 0; i < cart.length; i++) {
        badge = badge + cart[i].quantity;
      }

      setCartLength(badge);
    }

    getCartLength();
  }, [cart, cartTotal]);

  return (
    <div className="cart">
      {cart.length === 0 && (
        <p style={{ textAlign: 'center', fontSize: '0.8em' }}>
          Go on. Treat yourself! 🙂
        </p>
      )}
      <div className="titel">
        <h1>Din beställning</h1>
      </div>
      {cart.map((item) => {
        return (
          <div>
            <div className="cartItem">
              <div key={item.id} className="produkt">
                <p>{item.title}</p>
                <p>
                  {item.price}
                  kr
                </p>
              </div>
              <button
                className="remove"
                onClick={() => deleteItem(item.id, item.quantity, item.price)}
              ></button>

              <div className="btn">
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
            <div className="total">
              <p>Total</p>
              <span>
                <p>{cartTotal}</p>
              </span>
              <div className="tackeBtn">
                <button onClick={takeOrder}>Take My Money </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Cart;
