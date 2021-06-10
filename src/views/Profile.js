import './Profile.scss';
import { useState } from 'react';
import Navbar from '../components/Navbar';
function Profile() {
  const [openNav, setOpenNav] = useState(false);
  function navOpen() {
    setOpenNav(!openNav);
  }
  return (
    <div>
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
      <div className="profile">
        <div>
          <svg
            width="94"
            height="94"
            viewBox="0 0 94 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="47" cy="47" r="47" fill="#F3E4E1" />
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="94"
              height="94"
            >
              <circle cx="47" cy="47" r="47" fill="#F3E4E1" />
            </mask>
            <g mask="url(#mask0)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M52.5546 56.3248C62.5736 53.8402 70 44.7873 70 34C70 21.2975 59.7025 11 47 11C34.2975 11 24 21.2975 24 34C24 44.7873 31.4264 53.8402 41.4454 56.3248C18.1059 59.0727 0 78.9219 0 103C0 128.957 21.0426 150 47 150C72.9574 150 94 128.957 94 103C94 78.9219 75.8941 59.0727 52.5546 56.3248Z"
                fill="#E5674E"
              />
            </g>
          </svg>
        </div>

        <section className="user">
          <p>This is profile sida</p>
          <p>Mohammadali.mirzaee@gmail.com</p>
        </section>
        <div className="titleOrder">
          <h1>Orerhistorik</h1>
        </div>

        <div className="container">
          <div className="lefthis">
            <div className="left">
              <p>#AB1123282323Z</p>
              <p>Totalsumma</p>
            </div>
            <div className="left">
              <p>#AB1123282323Z </p>
              <p>Totalsumma</p>
            </div>
            <div className="left">
              <p>#AB1123282323Z</p>
              <p>Totalsumma</p>
            </div>
            <div className="leftTotal">
              <p>Total spenderat</p>
            </div>
          </div>
          <div className="righthis">
            <div className="right">
              <p>20/03/06</p>
              <p>233 kr</p>
            </div>
            <div className="right">
              <p>20/03/06</p>
              <p>233 kr</p>
            </div>
            <div className="right">
              <p>20/03/06</p>
              <p>233 kr</p>
            </div>
            <div className="rightTotal">
              <p>1788 kr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
