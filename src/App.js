import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Menu from './views/Menu';
import About from './views/About';
import Login from './views/Login';
import { Fragment } from 'react';
import Profile from './views/Profile';
import Status from './views/Status';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';

function App() {
  let currentUser = useSelector((state) => {
    return state.currentUser;
  });
  return (
    <div className="App">
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Login />} />

          <Route
            exact
            path="/nav"
            element={currentUser.loggedIn ? <Navbar /> : <Navigate to="/" />}
          />

          <Route
            exact
            path="/profile"
            element={currentUser.loggedIn ? <Profile /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/about"
            element={currentUser.loggedIn ? <About /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/menu"
            element={currentUser.loggedIn ? <Menu /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/status"
            element={currentUser.loggedIn ? <Status /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/login"
            element={currentUser.loggedIn ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
      </Fragment>
    </div>
  );
}

export default App;
