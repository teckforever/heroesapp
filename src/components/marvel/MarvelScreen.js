import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            MarvelScreen
            <hr />
            <HeroList publisher={'Marvel Comics'} />
        </div>
    )
}
