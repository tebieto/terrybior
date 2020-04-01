import React from 'react';
import { Route, Switch } from 'react-router-dom';


import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import SHopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={SHopPage} />
        <Route exact path='*' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
