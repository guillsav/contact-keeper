import React, { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AlertContext from "../../context/alert/alertContext"

const Alerts = () => {
  const alertContext = useContext(AlertContext)
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <FontAwesomeIcon icon="info-circle" /> {alert.msg}
      </div>
    ))
  )
}

export default Alerts
