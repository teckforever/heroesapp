import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { Navbar } from '../components/ui/NavBar'

import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'

import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            {/* EN ESTE CASO EL NAVBAR NO PODRIA CONSUMIR LAS PROPS PERO HAY OTRA MANERA DE HACERLO */}
            {/* EXTRAYENDOLO LAS PROPS DEL DASHBOARD {HISTORY} Y PASANDOLA COMO PROPIEDAD AL NAVBAR */}
            <div>
                <Switch>

                    {/* EL ROUTER LE ENVIA LAS PROPS DE HISTORY Y DEMAS A LAS RUTAS Y NO A LOS COMPONENTES */}
                    <Route exact path={'/marvel'} component={MarvelScreen} />
                    <Route exact path={'/hero/:heroeId'} component={HeroScreen} />
                    <Route exact path={'/dc'} component={DcScreen} />
                    <Route exact path={'/search'} component={SearchScreen} />

                    {/* SINO ENCUENTRA NINGUNO DE LOS DE ARRIBA ENTRA AL REDIRECT  */}
                    <Redirect to={'/marvel'} />

                </Switch>

            </div>
        </>
    )
}
