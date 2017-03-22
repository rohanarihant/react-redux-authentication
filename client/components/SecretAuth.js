import React from 'react';
import Loader from './Loader';

export default class SecretAuth extends React.Component {
      render(){
           return(
                <div>
                    <h4>Congratulation You are Authenticated</h4>
                    <Loader />
                    <Loader />
                </div>
           )
      }
}
