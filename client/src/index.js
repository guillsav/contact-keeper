import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

// State
import AuthState from "./context/auth/AuthState"
import AlertState from "./context/alert/AlerState"
import ContactState from "./context/contact/ContactState"

import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <App />
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById("root")
)
