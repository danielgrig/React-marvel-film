import React from 'react'
import './Menu.css'
import { Search } from './Search/Search'
import { useLocation } from 'react-router-dom'

export const Menu = (props) => {

    const location = useLocation()

    return (
        <nav className='nav'>
            <div class="menuh">
                <ul class="menu">
                    {
                        props.array.map(elem => {
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
                {location.pathname == '/films' && <Search search={props.search} setSearch={props.setSearch} />}
            </div>
        </nav>
    )
}