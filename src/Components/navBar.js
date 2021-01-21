// @flow 
import React from 'react';
import {Link ,useLocation} from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    console.log(location.pathname)
    if(location.pathname==='/home' || location.pathname==='/post/create')
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Home Page</a>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="/post/create">Post</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link signout" to="/login">Sign Out</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
    else
        return (<></>)
};
export default NavBar;