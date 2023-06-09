import { Dispatch, SetStateAction } from "react"

interface AlertProps {
  alert: AlertTypes,
  setAlert: Dispatch<SetStateAction<AlertTypes | null>>
}

interface AlertTypes {
  type: string,
  message: string
}

const Alert = ({alert, setAlert}: AlertProps) => {
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