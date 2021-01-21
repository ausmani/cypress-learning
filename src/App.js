import React ,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import SignUp from "./Components/signup";
import SignIn from "./Components/signin";
import Home from "./Components/home";
import './vendor/bootstrap/css/bootstrap.min.css'

function App() {

    const [signInState,setSignInState] = useState(true)
    const [signUpState,setSignUpState] = useState(false)
    const [homState,setHomeState] = useState(false)

    function changeComponent (component){

        switch (component) {
            case 'signIn':
                setHomeState(false)
                setSignUpState(false)
                setSignInState(true)
                break;
            case 'signUp':

                setHomeState(false)
                setSignUpState(true)
                setSignInState(false);

                break;
            case 'home':
                setHomeState(true)
                setSignUpState(false)
                setSignInState(false);

        }

    }
    return (
        <div className="App">
            <SignUp dtype={signUpState?'':'d-none'} changeComponent={changeComponent}/>
            <SignIn dtype={signInState?'':'d-none'} changeComponent={changeComponent}/>
            <Home dtype={homState?'':'d-none'} changeComponent={changeComponent}/>
        </div>
    );
}

export default App;
