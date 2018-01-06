import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFoundPage";

const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/home' component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
        <Route component={NotFound}/>
    </Switch>
)

export default Routes