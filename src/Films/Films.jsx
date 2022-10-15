import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Films.css';
import '../Nav/Nav.css';
import { arrFilmsCont, filterFilms } from './filmsArr';
import { Menu } from '../Menu/Menu';

export const Films = () => {
    const [search, setSearch] = useState('')

    return (
        <>
            <Menu array={filterFilms} search={search} setSearch={setSearch} />
            <main className="films">
                {
                    arrFilmsCont
                        .filter(item => item.filmName.toLowerCase().startsWith(search.toLowerCase()))
                        .map(elem => {
                            return (
                                <div className='drop'>
                                    <Link to={`/film/${elem.id}`} className={elem.classNameA} onClick={() => window.scroll(0, 0)}>
                                        <span>Подробнее...</span>
                                    </Link>
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