import React, { useMemo } from 'react'

import { getHeroById } from '../../selectors/getHeroById'
import { Redirect, useParams } from 'react-router-dom'

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams()

    const hero = useMemo(() => getHeroById(heroeId), [heroeId])

    //SI ALGO VIENE COMO UNDEFINED ES QUE NO EXISTE
    if (!hero) {
        return <Redirect to={'/'} />
    }

    const handleReturn = () => {

        //VALIDACIÓN POR SI SE COPIA LA DIRECCION EN OTRO NAVEGADOR PARA REGRESAR A LA PAGINA DEL INICIO DE LA APLICACION YA QUE EL HISTORIAL ES MENOR A 2

        if (history.length <= 2) {
            history.push('/')
        } else {
            history.goBack()
        }

    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeId}.jpg`} alt={superhero} className="img-thumbnail" />
            </div>

            <div className="col-8">
                <h3>{superhero}</h3>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First appearance: </b> {first_appearance}
                    </li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>
                <button className="btn btn-outline-info" onClick={handleReturn}>Return</button>


            </div>

        </div>
    )
}
