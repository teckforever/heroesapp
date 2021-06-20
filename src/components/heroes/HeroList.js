import React, { useMemo } from 'react'
import { getHeroeByPublisher } from '../../selectors/getHeroeByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

    //EVITAMOS EN CASO DE TENER UN ESTADO GENERAR OTRA VEZ LA FUNCION 
    const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher])

    return (
        <div>
            {
                heroes.map(hero => {
                    return (
                        <HeroCard key={hero.id} {...hero} />
                    )
                })
            }
        </div>
    )

}
