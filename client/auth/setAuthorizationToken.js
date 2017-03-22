import axios from 'axios';

//set the jwt token in request header for authentication
export default function setAuthorizationToken(token){
     console.log('set authenticated token triggered');
     if(token){
          axios.defaults.headers.common['token'] = token;
     }else{
          delete axios.defaults.headers.common['token'];
     }
}
