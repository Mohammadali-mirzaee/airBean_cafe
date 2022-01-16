import '../scss/About.scss';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import user from '../images/user.png';

function About() {
  const [openNav, setOpenNav] = useState(false);
  function navOpen() {
    setOpenNav(!openNav);
  }
  const currentUser = useSelector((state) => {
    return state.currentUser;
  });

  return (
    <div className="about">
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

      <div className="titelKaffe">
        <h1>Vårt Kaffe</h1>
        <p className="text">
          Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
          grounds dripper, crema, strong whipped, variety extra iced id lungo
          half and half mazagran. Pumpkin spice.
        </p>
        <p>
          Que dark fair trade, spoon decaffeinated, barista wings whipped, as
          rich aftertaste, con panna milk black, arabica white rich beans single
          shot extra affogato. So affogato macchiato sit extraction instant
          grinder seasonal organic, turkish single shot, single ,<br></br>
          <br></br>
          and robusta strong to go so dripper. Viennese froth, grounds
          caramelization skinny aromatic cup kopi-luwak, fair trade flavour,
          frappuccino medium, café au lait flavour cultivar ut bar instant
          kopi-luwak. Roast id macchiato, single shot siphon mazagran milk fairy
          crema.
        </p>
      </div>
      <div className="user">
        <img src={user} alt="userImage" />
        <h2>{currentUser.fullname}</h2>
        <p>Student</p>
      </div>
    </div>
  );
}
export default About;
