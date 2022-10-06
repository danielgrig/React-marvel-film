import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <Link to='/' className="logo"></Link>
        </header>
    )
}