// @flow
import * as React from 'react';

const SignIn = (props) => {

    function signInSubmit(e) {
        e.preventDefault();
        props.changeComponent("home")
    }
 return (
  <>

      <div className={`signup-form  ${props.dtype}`}>
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
          <div className="text-center">Want to create an account? <a href="#" className="userSignUp" onClick={(e)=>{e.preventDefault();props.changeComponent('signUp')}}>Sign Up</a></div>
      </div>
  </>
 );
};
export default SignIn;