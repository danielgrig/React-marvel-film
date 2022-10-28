import React from "react";
import './Nav.css';
import { sectionArr, menuArr } from "./navArr";
import { Link } from "react-router-dom";
import { Menu } from "../Menu/Menu";


export const Nav = () => {

    return (
        <>
            <Menu array={menuArr} />
            <div className="flPrKm">
                {
                    sectionArr.map(elem => {
                        return (
                            <Link 
                                to={elem.link} 
                                className={elem.divClassName}
                                onClick={() => window.scroll(0, 0)}
                            >
                                <span className={elem.spanClassName}>{elem.value}</span>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}