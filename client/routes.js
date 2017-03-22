import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/App';
import IndexPage from './components/IndexPage';
import SignupPage from './containers/Signup';
import LoginPage from './containers/Login';
import Home from './components/Home';
import SecretAuth from './components/SecretAuth';
// user Authentication higher order component (requrie auth)
import requireAuth from './auth/requireAuth';


export default (
     <Route path="/" component={App} >
          <IndexRoute component={IndexPage} />
          <Route path="signup" component={SignupPage} />
          <Route path="login" component={LoginPage} />
          <Route path="auth" component={requireAuth(SecretAuth)} />
          <Route path="home" component={requireAuth(Home)} />

     </Route>
)
