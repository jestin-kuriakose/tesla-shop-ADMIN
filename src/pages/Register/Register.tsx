import { useState } from 'react'
import './Register.scss'
import axios from 'axios'
import Alert from '../../components/Alert/Alert'

const BASE_URL = 
    process.env.NODE_ENV === "production" ?
    "https://frail-slip-ox.cyclic.app" :
    "http://localhost:3000"

interface UserInput {
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string
}

interface AlertType {
    type: string,
    message: string
}

const Register = () => {
    const [userInput, setUserInput] = useState<UserInput | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [alert, setAlert] = useState<AlertType | null>(null)

    const handleChange = (e: any) => {
        const {value, name} = e.target
        setUserInput((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setIsLoading(true)
        setAlert(null)

        try {
            const res = await axios.post(BASE_URL + '/register', userInput)
            setIsLoading(false)
            setAlert( { type: "success", message: res.data.message } )
        } catch(err: any) {
            setIsLoading(false)
            setAlert( { type: "error", message: err.response.data.error } )
        }
    }

  return (
    <div className='register'>
        <div className="register__container">
            <h1 className="register__title">Register</h1>

            {alert && <Alert alert={alert} setAlert={setAlert} />}

            <form onSubmit={handleSubmit} className="register__form">
                <input onChange={handleChange} name='firstName' type="text" placeholder='First Name' className="register__input" required />
                <input onChange={handleChange} name='lastName' type="text" placeholder='Last Name' className="register__input" required/>
                <input onChange={handleChange} name='email' type="email" placeholder='Email' className="register__input" required/>
                <input onChange={handleChange} name='password' type="password" placeholder='Password' className="register__input" required/>
                <button 
                    className="register__button btn-primary" 
                    disabled={isLoading}
                    type='submit'>{isLoading ? "Loading..." : "Register"}
                </button>
            </form>

        </div>
    </div>
  )
}

export default Register