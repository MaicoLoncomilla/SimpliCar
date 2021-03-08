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
        <Route path="/" render={() => (
          <>
          <Route path="/" component={Header}/>
          <Route exact path="/" component={NissanHome}/>
          <Route exact path="/store" component={NissanStore}/>
          <Route exact path="/detail/:id" component={CarDetails}/>
          <Route path="/" component={Footer}/>
          </>
        )}/>
      </Switch>
    </div>
  );
}

export default App;
