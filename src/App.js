import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Forget from "./Components/Forget";
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";
import Step3 from "./Components/Step3";
import Step4 from "./Components/Step4";
import Step5 from "./Components/Step5";
import Menu from "./Components/Menu";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { connect } from 'react-redux'


class App extends Component {

  check_status_menu = ()=>{
    if (this.props.check_status_menu === true) return <Menu/>
    return <Login/>
  }

  render() {
    return (
      <div className="App">
        <ToastContainer />
        <Router>
          <Switch>
            <Route exact path="/">
              {this.check_status_menu()}
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/forget">
              <Forget />
            </Route>
            <Route path="/step1">
              <Step1 />
            </Route>
            <Route path="/step2">
              <Step2 />
            </Route>
            <Route path="/step3">
              <Step3 />
            </Route>
            <Route path="/step4">
              <Step4 />
            </Route>
            <Route path="/step5">
              <Step5 />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    check_status_menu: state.check_status_menu
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    notification: (type_notifi, title_notifi) => {
      dispatch({ type: "NOTIFICATION", type_notifi, title_notifi })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);