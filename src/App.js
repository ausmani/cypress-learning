import React, {useState} from 'react'
import './App.css';
import SignUp from "./Components/signup";
import SignIn from "./Components/signin";
import Home from "./Components/home";
import PostForm from "./Components/PostForm";
import './vendor/bootstrap/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./Components/navBar";
import NF404 from "./Components/NF404";
import initialPosts from './posts';
function App() {

    const [posts, addPost] = useState(initialPosts);

    function createPost(obj) {
        const newPost = [...posts, obj]
        addPost(newPost)

    }


    return (

        <div className="App">

            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path="/login" component={SignIn}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/" render={() => <SignIn/>}/>
                    <Route exact path="/home" render={() => <Home posts={posts}/>}/>
                    <Route exact path="/post/create" render={() => <PostForm createPost={createPost}/>}/>
                    <Route path="*" render={() => <NF404/>}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
