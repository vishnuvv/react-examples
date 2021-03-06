import React, {Component} from 'react';
import '../css/App.css';

import HomePage from "./pages/HomePage";

import Header from "./Header";
import Footer from "./Footer";

import {Route, Redirect} from "react-router-dom";

import {HOME, SIGNIN, SIGNUP, GAME} from "../helpers/pathHelper";

import {Container, Segment} from 'semantic-ui-react'
import SignUpPage from "./pages/SignUpPage";

import SignInPage from "./pages/SignInPage";

import "semantic-ui-css/semantic.min.css";

import GamePage from "./pages/GamePage";
import {withAuthentication} from "./session";

class App extends Component {
    render() {
        return (
            <Segment>
                <Header/>
                <Route path={HOME} exact component={HomePage}/>
                <Route path={SIGNIN} exact component={SignInPage}/>
                <Route path={SIGNUP} exact component={SignUpPage}/>
                <Route path={GAME} exact component={GamePage}/>
                <Route render={() => (<Redirect to={HOME}/>)}></Route>
                <Footer/>
            </Segment>
        );
    }
}

App.propTypes = {};

export default withAuthentication(App);