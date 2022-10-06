import React from "react";
import './Nav.css';
import { sectionArr, menuArr } from "./navArr";
import { Link } from "react-router-dom";


export const Nav = () => {

    return (
        <nav className="nav">
            <div className="menuh">
                {
                    menuArr.map(elem => {
                        return <div onClick={elem.func}>{elem.value}</div>
                    })
                }
            </div>
            <div className="flPrKm">
                {
                    sectionArr.map(elem => {
                        return (
                            <Link to={elem.link} className={elem.divClassName}>
                                <span className={elem.spanClassName}>{elem.value}</span>
                            </Link>
                        )
                    })
                }
            </div>
        </nav>
    )
}