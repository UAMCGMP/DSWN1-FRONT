import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from './components/pages/LandingPage';
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import ShelterAdmin from './components/pages/ShelterAdmin'
import Adopt from './components/pages/Adopt'
import { isAuthenticated } from "./auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );



const Routes = () => (

    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register}/>
        <PrivateRoute exact path='/adm' component={ShelterAdmin} />
        <Route exact path='/adopt' component={Adopt} />
    </Switch>

);

export default Routes;