import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import AddCar from './components/addcar/AddCar';
import CarDetails from './components/cardetails/CarDetails';
import AuthProvider from './context/AuthProvider';
import Sign from './components/sign/Sign';
import Register from './components/login/Register';
import MakeAdmin from './components/makeadmin/MakeAdmin';
import PrivateRoute from './components/privateroute/PrivateRoute';
import Header from './components/header/Header';
import MyRent from './components/myrent/MyRent';
import AllRent from './components/allrent/AllRent';
import Car from './components/cars/Car';
import About from './components/about/About';
import MyReservation from './components/myreservation/MyReservation';
import CarReservation from './components/carreservation/CarReservation';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/addcar">
          <AddCar></AddCar>
        </Route>
        <Route exact path="/reservation">
          <CarReservation></CarReservation>
        </Route>
        <Route exact path="/myreserve">
          <MyReservation></MyReservation>
        </Route>
        <Route exact path="/makeadmin">
          <MakeAdmin></MakeAdmin>
       </Route>
        <Route exact path="/login">
         <Sign></Sign>
        </Route>
        <Route exact path="/register">
         <Register></Register>
        </Route>
        <Route exact path="/car">
         <Car></Car>
        </Route>
        <Route exact path="/myrent">
         <MyRent></MyRent>
        </Route>
        <Route exact path="/contact">
         <Contact></Contact>
        </Route>
        <Route exact path="/rents">
        <AllRent></AllRent>
       </Route>
        <PrivateRoute exact path="/menudetails/:id">
         <CarDetails></CarDetails>
        </PrivateRoute>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
