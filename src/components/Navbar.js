import '../scss/nav.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CancelOutlined from '@material-ui/icons/CancelOutlined';

function Navbar() {
  const [closeNav, setClose] = useState(true);
  function navClose() {
    setClose(!closeNav);
  }
  function changlik() {
    setClose(!closeNav);
  }

  return (
    <div>
      {closeNav && (
        <div className="sideNav">
          <CancelOutlined className="close-nav" onClick={navClose} />

          <div className="nav-list">
            <Link onClick={changlik} to="/menu">
              Menu
            </Link>
            <Link onClick={changlik} to="/about">
              Vårt Kaffe
            </Link>
            <Link onClick={changlik} to="/profile">
              Profile
            </Link>
            <Link onClick={changlik} to="/status">
              Order Status
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default Navbar;
