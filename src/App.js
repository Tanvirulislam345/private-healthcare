import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Services/Services';
import Home from './components/Home/Home';
import DisplayService from './components/DisplayService/DisplayService';
import Trainer from './components/Trainer/Trainer';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/service/:serviceId">
            <DisplayService></DisplayService>
          </PrivateRoute>
          <Route path="/trainer">
            <Trainer></Trainer>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/signUp">
            <SignUp></SignUp>
          </Route>
          <Route path="/logIn">
            <Login></Login>
          </Route>
          <Route path="/contact">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
