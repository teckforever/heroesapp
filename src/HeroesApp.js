import React, { useReducer, useEffect } from 'react'
import { AuthContext } from './components/auth/AuthContext'
import { authReducer } from './components/auth/authReducer'
import { AppRouter } from './routers/AppRouter'


const init = () => {
  
  // EN CASO DE QUE EL VALOR NO EXISTA O REGRESE NULL
  return JSON.parse(localStorage.getItem('user')) || { logged: false }

}

export const HeroesApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {

    localStorage.setItem('user', JSON.stringify(user))

  }, [user])

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
