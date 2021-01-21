// @flow
import * as React from 'react';
import {Link , useHistory} from "react-router-dom";

const SignIn = (props) => {

    const history = useHistory();

    function signInSubmit(e) {
        e.preventDefault();
        history.push("/home")
    }
 return (
  <>

      <div className="signup-form">
          <form  method="post" onSubmit={signInSubmit}>
              <h2>Sign In</h2>
              <p className="hint-text">Enter you credentials.</p>

              <div className="form-group">
                  <input type="email" className="form-control" name="email" placeholder="User Email" required="required"/>
              </div>
              <div className="form-group">
                  <input type="password" className="form-control" name="password" placeholder="User Password"
                         required="required"/>
              </div>


              <div className="form-group">
                  <button type="submit" className="btn btn-success btn-lg btn-block ">Log In</button>
              </div>
          </form>
          <div className="text-center">Want to create an account? <Link className="userSignUp" to="/signup" >Sign Up</Link></div>
      </div>
  </>
 );
};
export default SignIn;