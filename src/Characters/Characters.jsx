import React, { useState } from 'react';
import './Characters.css'
import { filterCharacter, arrCharactersCont } from './charactersArr';

export const Characters = () => {
    const [search, setSearch] = useState('')

    return (
        <>
            <nav className='nav'>
                <div class="menuh">
                    <ul class="menu">
                        {
                            filterCharacter.map(elem => {
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
                    <input value={search} placeholder="Название фильма" className="search" onChange={e => { setSearch(e.target.value) }} />
                    <input type="button" value=" " class="button" />
                </div>
            </nav>
            <main className="films">
                {
                    arrCharactersCont
                        // .filter(item => item.filmName.toLowerCase().startsWith(search.toLowerCase()))
                        .map(elem => {
                            return (
                                <div className='drop'>
                                    <a className={elem.className}>
                                        <span>Подробнее...</span>
                                    </a>
                                    <div className='info'>
                                        <h3 className='filmName'>{elem.charName}</h3>
                                        {/* <ul className='descript'>
                                            {elem.filmsInfo.map(elem => {
                                                return (
                                                    <li className={elem.classNameLi}><b>{elem.type}</b>{elem.value}</li>
                                                )
                                            })}
                                        </ul> */}
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