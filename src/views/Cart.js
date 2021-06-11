import './Cart.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Cart() {
  const addItem = useSelector((state) => {
    console.log(state.cartArray);
    return state.cartArray;
  });
  /*  console.log(
    useSelector((state) => {
      return state.cartArr;
    })
  ); */
  return (
    <div className="cart">
      {/*       <h2>{addItem.length}</h2>
       */}{' '}
      <div className="titel">
        <h1>Din beställning</h1>
      </div>
      {addItem.map((item, index) => {
        return (
          <div>
            <div className="cartItem">
              <div key={index} className="produkt">
                <p>{item.title}</p>
                <p>{item.price}</p>
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
          </div>
        );
      })}
      <Link to="/status">
        <div className="tackeBtn">
          <button>Take My Money</button>
        </div>
      </Link>
    </div>
  );
}
export default Cart;
