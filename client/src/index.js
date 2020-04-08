import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

// State
import AuthState from "./context/auth/AuthState"
import AlertState from "./context/alert/AlerState"
import ContactState from "./context/contact/ContactState"
import setAuthToken from "./utils/setAuthToken"

import App from "./App"

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

ReactDOM.render(
  <AuthState>
    <ContactState>
      <AlertState>
        <Router>
          <App />
        </Router>
      </AlertState>
    </ContactState>
  </AuthState>,
  document.getElementById("root")
)
