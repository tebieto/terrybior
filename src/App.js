import React from 'react';
import { Route, Switch } from 'react-router-dom';


import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import SHopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFriomAuth = null;

  componentDidMount() {
    this.unsubscribeFriomAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFriomAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={SHopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
          <Route exact path='*' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
