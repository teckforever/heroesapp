import React, { useMemo } from 'react'

//OJO CON ESTA LIBRERIA SE IMPORTA ASI
import queryString from 'query-string'

import { HeroCard } from '../heroes/HeroCard'
import { useForm } from '../../hooks/useForm'
import { useLocation } from 'react-router-dom'
import { getHeroesByName } from '../../selectors/getHeroesByName'

export const SearchScreen = ({ history }) => {

    const location = useLocation();

    //SE COLOCA PARA QUE SIEMPRE TENGA VALOR, SI NO VIENE UNDEFINED
    const { q = '' } = queryString.parse(location.search);

    //console.log(q)
    //PENDIENTE EL QUERY DE BUSQUEDA

    const [formValue, handleInputChange] = useForm({ searchText: q })

    const { searchText } = formValue;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(searchText)

        history.push(`?q=${searchText}`);

    }

    return (
        <div className="container-fluid">

            <h3>Search Screen</h3>

            <hr />

            <div className="row">
                <div className="col-5">

                    <h4>Search Form</h4>
                    <hr />

                    <form action="">
                        <input
                            type="text"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            placeholder="Find You Hero"
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button className="btn btn-outline-primary btn-block m-1" onClick={handleSearch}>Search...</button>
                    </form>


                </div>

                <div className="col-md-7">

                    <p>Results</p>
                    <hr />

                    {
                        q === '' &&
                        <div className="alert alert-info">
                            Search a Hero
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className="alert alert-danger">
                            No se encontró el heroe {q}
                        </div>
                    }

                    {
                        heroesFiltered.map(data => {
                            return (
                                <HeroCard key={data.id} {...data} />
                            )
                        })
                    }

                </div>
            </div>


        </div>
    )
}
