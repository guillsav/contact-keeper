import React, { Fragment } from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas, faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"

import "./App.css"

library.add(fab, fas, faCheckSquare, faCoffee)

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Fragment>
  )
}

export default withRouter(App)
