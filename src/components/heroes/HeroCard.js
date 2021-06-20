import React from 'react'
import { Link } from 'react-router-dom'

//CONTROL ALT DERECHA - SELECCIONA TODOS LOS DATOS HASTA DONDE ESTEN
//CONTROL ESCRIBE DESPUES DE QUE EL TEXTO TERMINE
//ALT CLICK - SELECCIONA VARIAS FILAS PARA ESCRIBIR

export const HeroCard = ({
    id,
    superhero, 
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="card ms-3" style={{ maxWidth: 540 }}>

            <div className="row no-gutters">

                <div className="col-md-4">
                    <img src={`https://teckforever.github.io/heroesapp/assets/heroes/${id}.jpg`} className="card-img" alt={superhero} />
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <div className="card-title">
                            {superhero}
                        </div>
                        <p className="card-text">{alter_ego}</p>

                        {
                            (alter_ego !== characters)
                            && <p className="card-text">{characters}</p>
                        }

                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>

                        <Link to={`./hero/${id}`}>
                        Ver mas...</Link>

                    </div>
                </div>

            </div>

        </div>
    )
}
