import './Cart.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Cart() {
  function donOrder() {}
  const [item, setItem] = useState();
  return (
    <div className="cart">
      <div className="titel">
        <h1>Din beställning</h1>
      </div>

      <div className="cartItem">
        <div className="produkt">
          <p>BryggKaffe</p>
          <p>98 kr</p>
        </div>
        <div className="btn">
          <i class="arrow up"></i>
          <p>1</p>
          <i class="arrow down"></i>
        </div>
      </div>
      <div className="total">
        <p>Total</p>
        <span>
          <p>98 kr</p>
        </span>
      </div>
      <Link to="/status">
        <div onClick={donOrder} className="tackeBtn">
          <button>Take My Money</button>
        </div>
      </Link>
    </div>
  );
}
export default Cart;
