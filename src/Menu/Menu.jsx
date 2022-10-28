import React from 'react'
import './Menu.css'
import { Search } from './Search/Search'
import { useLocation, Link } from 'react-router-dom'

export const Menu = (props) => {

    const location = useLocation()

    return (
        <nav className='nav'>
            <div className="menuh">
                <ul className="menu">
                    {
                        props.array.map(elem => {
                            return (
                                <li>
                                    <Link to={elem.link} className='menuLink'>{elem.value}</Link>
                                    {elem.subMenu ? <ul className='submenu'>
                                        {elem.subMenu.map(elem => {
                                            return (
                                                <li>
                                                    <div className='menuLink'>{elem}</div>
                                                </li>
                                            )
                                        })}
                                    </ul> : null}
                                </li>
                            )
                        })
                    }
                </ul>
                {location.pathname === '/films' && <Search search={props.search} setSearch={props.setSearch} />}
            </div>
        </nav>
    )
}