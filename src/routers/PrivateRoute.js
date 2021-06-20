import React from 'react'
import { Route, Redirect } from 'react-router'

import PropTypes from 'prop-types'

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
    //REST PARA CAPTURAR LAS VARIABLES EXATH COMPONENT ETC REVISAR
}) => {

    // ESTUDIAR QUE ES LO QUE VIENE ACÁ
    //console.log(rest)

    localStorage.setItem('lastPath', rest.location.pathname)

    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/login" />)
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}