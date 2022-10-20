import React from 'react';
import {Link} from 'react-router-dom';
import { Menu } from '../Menu/Menu';
import './Characters.css'
import { filterCharacter, arrCharactersCont } from './charactersArr';


export const Characters = () => {
    //const [search, setSearch] = useState('')

    return (
        <>
            <Menu array={filterCharacter}/>
            <main className="films">
                {
                    arrCharactersCont
                        // .filter(item => item.filmName.toLowerCase().startsWith(search.toLowerCase()))
                        .map(elem => {
                            return (
                                <div className='drop'>
                                    <Link to='/' className={elem.className}>
                                        <span>Подробнее...</span>
                                    </Link>
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