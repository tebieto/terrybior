import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import SHopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
  unsubscribeFriomAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFriomAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }

      setCurrentUser({ currentUser: userAuth });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFriomAuth();
  }

  render() {
    return (
      <div>
        <Header />
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
