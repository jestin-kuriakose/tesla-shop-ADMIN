import React from 'react'

const Alert = ({alert, setAlert}: any) => {
  return (
    <div className={alert.type === "success" ? "alert alert-success" : "alert-error"} role="alert">
        {alert.message}
        <button onClick={() => setAlert(null)} type="button" className="alert__close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
  )
}

export default Alert