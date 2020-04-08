import React, { Fragment } from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas, faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import Alerts from "./components/layout/Alerts"
import PrivateRoute from "./components/routing/PrivateRoute"

import "./App.css"

library.add(fab, fas, faCheckSquare, faCoffee)

const App = (props) => {
  return (
    <Fragment>
      <Navbar {...props} />
      <div className="container">
        <Alerts />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Fragment>
  )
}

export default withRouter(App)
