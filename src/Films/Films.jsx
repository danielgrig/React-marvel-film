import React from 'react';
import './Films.css';
import '../Nav/Nav.css';
import { arrFilmsCont, filterFilms } from './Array';


export const Films = () => {

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
                        <input type="text" placeholder="Название фильма" class="search" />
                        <input type="button" value=" " class="button" />
                </div>
        </nav>
    <main className="films">
        <h2>Четвёртая фаза</h2>
        {
            arrFilmsCont.map((elem) => {
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