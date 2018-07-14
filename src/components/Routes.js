import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import User from './User'
import UserManagement from './UserManagement'
import Controls from './Controls'
import Modes from './Modes'

const Router = () => (
 <Fragment>
    <Switch>
        <Route exact path='/' component={User} /*accessToken={this.props.accessToken}*//>
        <Route exact path='/UserManagement' component={UserManagement}/>
        <Route exact path='/Controls' component={Controls}/>
        <Route exact path='/Modes' component={Modes}/>
    </Switch>
 </Fragment>
)

export default Router