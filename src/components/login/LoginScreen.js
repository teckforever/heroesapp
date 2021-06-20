import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types'


export const LoginScreen = ({ history }) => {


    const { dispatch } = useContext(AuthContext)

    //REDIRECCIONAMIENTO PERO DESAPARECE EL HISTORIAL DE LA PAGINA QUE ESTUVE 
    const handleClick = () => {

        // SI LA VARIABLE NO EXISTE O SI ALGUIEN LIMPIO EL LOCALSTORAGE SE MANDA EN '/'
        const lastPath = localStorage.getItem('lastPath') || '/'

        const user = {
            type: types.login,
            payload: { name: 'David' }
        }

        dispatch(user)

        history.replace(lastPath)

    }

    return (
        <div>
            Login
            <hr />
            <button className="btn btn-info" onClick={handleClick}>Ingresar</button>
        </div>
    )
}
