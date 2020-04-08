import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

// State
import ContactState from "./context/contact/ContactState"

import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <ContactState>
      <Router>
        <App />
      </Router>
    </ContactState>
  </React.StrictMode>,
  document.getElementById("root")
)
