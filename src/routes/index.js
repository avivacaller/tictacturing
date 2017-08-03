//an index.js file can be referred to just from it's directory name

import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'
import TicTacToe from '../containers/TicTacToe'
import Profile from '../containers/Profile'
import auth from '../utils/auth'
import Relay from 'react-relay'

/*const ViewerQueries = {
    //make sure each of my routes has access to an object called viewer and this will
    //have access to viewer in my api
    viewer:()=> Relay.QL`query{viewer}`
}*/

const createRoutes = () => {
    return(
        <Route
            path='/'
            component={Template}
            //queries={ViewerQueries}
            auth={auth}
        >

            <IndexRoute
            component={TicTacToe}
            //queries={ViewerQueries}
            />

            <Route
                path={'/profile'}
                component={Profile}
                //queries={ViewerQueries}
            />
        </Route>
    )
}

const Routes = createRoutes()

export default Routes