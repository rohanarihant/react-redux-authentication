import React from 'react';
import {Link} from 'react-router';

export default class NavBar extends React.Component{

     logout(e){
       e.preventDefault();
       this.props.logout();
     }

     render(){
          const { user } = this.props;

          // navigation links if user is logged in
          const userLinks = (
               <ul className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/auth">Required Auth </Link></li>
                    <li><Link to="/home">Authenticated User </Link></li>
                    <li><Link to="/">Hello, {user.user.username}</Link></li>
                    <li onClick={this.logout.bind(this)}><Link to="">Logout</Link></li>
               </ul>
          );

          // navigation link if user is not logged in
          const guestLinks = (
               <ul className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/auth">Required Auth </Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
               </ul>
          );

          return (
               <div className="navbar-fixed">
                    <nav>
                         <div className="nav-wrapper light-blue darken-1">
                              <Link to="/" className="brand-logo"> React-Auth</Link>
                              { user.user.username ? userLinks : guestLinks }
                         </div>
                    </nav>
               </div>
          )
     }
};

NavBar.propTypes = {
     user: React.PropTypes.object.isRequired,
     logout:React.PropTypes.func.isRequired
}
