import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component.jsx';
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {
  unsubscribeFriomAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFriomAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFriomAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp/>)} />
          <Route exact path='*' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
