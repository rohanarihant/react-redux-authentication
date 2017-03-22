import LoginPage from '../components/Login.component';
import {login} from '../actions/usersAction';
import {removeMessages} from '../actions/flashMessages';
import { connect} from 'react-redux';
import { browserHistory } from 'react-router';


function mapStateToProps(state){
     console.log(state.usersReducer.isAuthenticated,'usersReducer');
     if(state.usersReducer.isAuthenticated == true){
          browserHistory.push('/home')

          console.log('logged');

     }
     return {
          flashMessages: state.flashMessagesReducer
     }
}

export default connect(mapStateToProps, {login, removeMessages})(LoginPage);
