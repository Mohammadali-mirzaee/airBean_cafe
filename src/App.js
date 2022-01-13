import './App.css';
import { Route, Switch } from 'react-router-dom';
import Menu from './views/Menu';
import About from './views/About';
import Login from './views/Login';
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
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/nav" component={Navbar} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/status" component={Status} />
      </Switch>
    </div>
  );
}

export default App;
