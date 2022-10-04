import React from "react";
import './Header.css'

export const Header = (props) => {
    return (
        <header>
            <span className="logo" onClick={() => props.func(true)}></span>
        </header>
    )
}