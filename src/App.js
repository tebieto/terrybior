import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import SHopPage from './pages/shop/shop.component.jsx'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={SHopPage} />
        <Route exact path='*' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
