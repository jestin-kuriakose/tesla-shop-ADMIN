import React, { ChangeEvent, FormEvent, useState } from 'react'
import axios from 'axios'
import "./Login.scss"
import Alert from '../../components/Alert/Alert'

interface UserInput {
    email?: string,
    password?: string
}

interface Alert {
    type: string,
    message: string
}

const Login = () => {
    const [userInput, setUserInput] = useState<UserInput>({})
    const [alert, setAlert] = useState<Alert | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setAlert(null)

        try {
            const response = await axios.post("http://localhost:3500/login", userInput)
            console.log(response.data.message)
            setAlert({ type: "success", message: response?.data.message })
            setIsLoading(false)
        } catch(err: any) {
            console.log(err.response)
            setAlert({ type: "error", message: err?.response?.data?.error })
            setIsLoading(false)
        }
    }

  return (
    <div className='login'>
        <div className="login__container">
            <h1 className="login__title">Login</h1>
            {alert && <Alert alert={alert} setAlert={setAlert} />}
            <form onSubmit={handleSubmit} className="login__form">
                <input onChange={handleChange} value={userInput.email} type="email" className="login__input" placeholder='Email Address' name='email' required/>
                <input onChange={handleChange} value={userInput.password} type="password" className="login__input" placeholder='Password' name='password' required/>
                <button  
                    disabled={isLoading}
                    className="login__button btn-primary" 
                    type='submit' role='button' name='LOGIN'>
                    {isLoading ? "Loading..." : "LOGIN"}
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login
