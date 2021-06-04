import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
/* import CoffeeComponent from './components/CoffeeComponent' */
import Menu from './views/Menu';
import About from './views/About';
import Login from './views/Login';
import Register from './views/Register';
import Navbar from './components/Navbar';

function App() {
  const [openNav, setOpenNav] = useState(false);
  function navOpen() {
    setOpenNav(!openNav);
  }
  return (
    <div className="App">
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
      <header className="App-header">
        {/*  {setOpenNav && <Navbar />} */}
        {/*  <Menu /> */}
        <Switch>
          <Route path="/menu" component={Menu} exact />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        {/* <CoffeeComponent /> */}
      </header>

      <main></main>
    </div>
  );
}

export default App;
