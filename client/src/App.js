import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
import NissanStore from './components/nissanStore/NissanStore';
import NissanHome from './components/nissanHome/NissanHome';
import CarDetails from './components/detailProduct/CarDetails';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/SimpliCar/" render={() => (
          <>
          <Route path="/SimpliCar/" component={Header}/>
          <Route exact path="/SimpliCar/" component={NissanHome}/>
          <Route exact path="/SimpliCar/store" component={NissanStore}/>
          <Route exact path="/SimpliCar/detail/:id" component={CarDetails}/>
          <Route path="/SimpliCar/" component={Footer}/>
          </>
        )}/>
      </Switch>
    </div>
  );
}

export default App;
