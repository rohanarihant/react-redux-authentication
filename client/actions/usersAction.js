import axios from 'axios';
import { browserHistory} from 'react-router';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../auth/setAuthorizationToken';
import {showMessage} from './flashMessages';

export function userCreate(userData){
     console.log('user create action is triggered');
     return (dispatch, state) => {
          axios.post('/api/users/create', {data: userData})
          .then(response => {
               browserHistory.push('/login');
          }).catch( (err) => {console.log("Error: "+ err)});
     }
}

export function login(userData){
     console.log('user login triggered');
     return dispatch=> {
          axios.post('/api/users/login', {data: userData})
          .then(response => {
               if(response.data.error){
                    dispatch(showMessage(response.data.error))
               }
               else{
                    //set jwt token in header for server to authenticate user
                    setAuthorizationToken(response.data.token);
                    //decode the jwt token ehich has user information sent from the server
                    let userInfo = jwtDecode(response.data.token);
                    dispatch(setCurrentUser(userInfo, response.data.token, true))
                    browserHistory.push('/home');
               }
          }).catch((err) => {console.log('Error: '+err)});
     }
}

export function setCurrentUser(user, token, authenticated){
     return {
          type:'SET_CURRENT_USER',
          user: user,
          token: token,
          isAuthenticated: authenticated
     };
}

export function logout(){
     return dispatch => {
          dispatch(setCurrentUser({}, null, false));
          setAuthorizationToken(false);
          browserHistory.push('/');
     }
}
