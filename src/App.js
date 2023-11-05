import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import ExploreMain from './Components/Explore/ExploreMain/ExploreMain';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import ServicesDetails from './Components/ServicesDetails/ServicesDetails';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <ExploreMain></ExploreMain>
          </Route>
          <PrivateRoute path="/service/:serviceId">
            <ServicesDetails></ServicesDetails>
          </PrivateRoute>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
