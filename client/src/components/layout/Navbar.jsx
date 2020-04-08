import React, { Fragment, useContext } from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AuthContext from "../../context/auth/authContext"

const Navbar = ({ title, icon, history }) => {
  const authContext = useContext(AuthContext)

  const { isAuthenticated, logout, user } = authContext

  const onLogout = () => {
    logout()
    history.push("/login")
  }

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a href="#!" onClick={onLogout}>
          <FontAwesomeIcon icon="sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </Fragment>
  )

  return (
    <nav className="navbar bg-primary">
      <h1>
        <FontAwesomeIcon icon={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "id-card-alt",
}

export default Navbar
