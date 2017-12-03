import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { firebaseApp } from './firebase/firebase';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import { logUser } from './reducers/index';
import { logUserIn } from './actions/index';

const store = createStore(
    logUser,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('user already signed in');
        store.dispatch(logUserIn(user.email));
    } else {
        console.log('guest');        
    }
})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <div className="container">
                    <Link to="/">HomePage</Link>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
                <Switch>
                    <Route path="/" component={App} exact={true} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);