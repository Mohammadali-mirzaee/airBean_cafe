import './Cart.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CafeOrder from '../components/CafeOrder';
import cafeAction from '../actions/cafeAction';
import Status from './Status';
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
  const dispatch = useDispatch();
  const [itemcount, setItemcount] = useState(1);
  const [pricee, setPrice] = useState();
  const [eta, setEta] = useState([]);

  const takeOrder = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/order', {
        body: JSON.stringify(),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        type: 'cors',
      });

      const data = await response.json();
      console.log(data.order);
      setEta(data.order.ETA);
      /* const dataMapp = data.map((item) => {
        return (
          <div>
            <p key={item.userID}>ETA:{item.ETA}</p>
          </div>
        );
      });
      dataMapp(); */
    } catch (error) {
      console.log(error);
    }
  };

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
                {/*                 <CafeOrder cafe={item.title} price={item.price} />
                 */}{' '}
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>

              <div className="btn">
                <i
                  onClick={() => {
                    /* dispatch(cafeAction.increament(itemcount + 1)); */

                    setItemcount(itemcount + 1);
                    setPrice(pricee);
                  }}
                  className="arrow up"
                ></i>
                <p>{itemcount}</p>
                <i
                  onClick={() => {
                    setItemcount(itemcount - 1);
                  }}
                  className="arrow down"
                ></i>
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
          <button onClick={takeOrder}>
            Take My Money
            {eta.map((etaItem, index) => {
              return <Status eta={etaItem.ETA} key={index} />;
            })}
          </button>
        </div>
      </Link>
    </div>
  );
}
export default Cart;
