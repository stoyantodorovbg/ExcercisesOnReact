import React from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute.js'
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import SomeParamPage from './components/SomeParamPage'
import NotFound from './components/NotFoundPage';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/home' component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/contact' render={props => (
            <h2>
                It's message! ;)
            </h2>
        )}/>
        <Route path='/page/with/:id' component={SomeParamPage}/>
        <PrivateRoute path='/private' component={AboutPage}/>
        <Redirect from='/about-us' to='/about' />
        <Route component={NotFound}/>
    </Switch>
)

export default Routes