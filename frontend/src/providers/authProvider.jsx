import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()

  const handleRegister = (user) => {
    axios.post('http://localhost:3001/api/auth', user ) 
      .then( res => {
        setUser(res.data.data)
        navigate('/')
      })
      .catch( res => {
        console.log(res)
        setErrors({ 
          variant: 'danger',
          msg: res.response.data.errors.full_messages[0]
        })
      })
  }

  const handleLogin = (user) => {
    axios.post('http://localhost:3001/api/auth/sign_in', user)
      .then( res => {
        setUser(res.data.data)
        navigate('/')
      })
      .catch( res => {
        console.log(res)
        setErrors({ 
          variant: 'danger',
          msg: res.response.data.errors[0]
        })
      })
  }

  const handleLogout = () => {
        setUser(null)
        navigate('/')
  }
  
  return (
    <AuthContext.Provider value={{
      user, 
      errors, 
      setErrors,
      handleRegister,
      handleLogin, 
      handleLogout,
      authenticated: user !== null,
      setUser: (user) => setUser(user),  
    }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;