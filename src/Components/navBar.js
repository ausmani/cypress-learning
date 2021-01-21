// @flow 
import * as React from 'react';

const NavBar = (props) => {
 return (
  <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Home Page</a>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link signout" href="#" onClick={(e)=>{e.preventDefault();props.changeComponent('signIn')}}>Sign Out</a>
                  </li>

              </ul>
          </div>
      </nav>
  </>
 );
};
export default NavBar;