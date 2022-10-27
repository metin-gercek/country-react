import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CountryPage from './pages/CountryPage'
import FavoriteCountries from './pages/FavoriteCountries'
import SideBar from './pages/SideBar'

const Routes = (props: any) => (
  <Switch>
    <Route exact path="/" component={SideBar} />
    <Route exact path="/country/:name" component={CountryPage} />
    <Route exact path="/favoritecountries" component={FavoriteCountries} />
  </Switch>
)

export default Routes
