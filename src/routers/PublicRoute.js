import React from 'react'
import { Route, Redirect } from 'react-router'

import PropTypes from 'prop-types'

//COLOCAR LAS RUTAS PUBLICAS CON ESTE SCRIPT EVITA QUE VUELVAN AL LOGIN
// EN CASO DE QUE NO ESTE AUTENTICADO ME DEVUELVE AL LOGIN SINO AL HOME DE MARVEL

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
    //REST PARA CAPTURAR LAS VARIABLES EXATH COMPONENT ETC
}) => {
    return (
        <Route {...rest}
            component={(props) => (
                (!isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/" />)
            )}
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}