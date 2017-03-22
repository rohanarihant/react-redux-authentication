import React from 'react';

export default class Home extends React.Component {

     render(){
          console.log(this.props,'props in home');
          return(
               <div className="preloader-wrapper big active">
                         Hello welcome to Home page
               </div>
          )
     }
}
