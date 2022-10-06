import React, { useState } from 'react';
import './Films.css';
import '../Nav/Nav.css';
import { arrFilmsCont, filterFilms } from './filmsArr';

export const Films = () => {

    const [search, setSearch] = useState('')

    return (
        <>
        <nav className='nav'>
                <div class="menuh">
                    <ul class="menu">
                    {
                        filterFilms.map(elem => {
                            return (
                                <li>
                                    <div>{elem.value}</div>
                                    {elem.subMenu ? <ul className='submenu'>
                                        {elem.subMenu.map(elem => {
                                            return (
                                                <li>
                                                    <div>{elem}</div>
                                                </li>
                                            )
                                        })}
                                    </ul> : null}
                                </li>
                            )
                        })
                    }
                    </ul>
                    <input value={search} placeholder="Название фильма" className="search" onChange={e => { setSearch(e.target.value)}}/>
                        <input type="button" value=" " class="button" />
                </div>
        </nav>
    <main className="films">
        {
        arrFilmsCont
            .filter(item => item.filmName.toLowerCase().startsWith(search.toLowerCase()))
            .map(elem => {
                return (
                    <div className='drop'>
                        <a className={elem.classNameA}>
                            <span>Подробнее...</span>
                        </a>
                        <div className='info'>
                            <h3 className='filmName'>{elem.filmName}</h3>
                            <ul className='descript'>
                                {elem.filmsInfo.map(elem => {
                                    return (
                                        <li className={elem.classNameLi}><b>{elem.type}</b>{elem.value}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })
        }
        <hr />
    </main>
    </> 
    )
}