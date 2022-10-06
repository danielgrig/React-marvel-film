import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";


export const Nav = () => {

    const arr1 = [
        {
            value: 'Новинки',
            func: () => alert(1) 
        },
        {
            value: 'Скоро на сайте',
            func: () => alert(2) 
        }
    ]

    const arr2 = [
        {
            value: 'Фильмы',
            link: '/films',
            divClassName: "input1",
            spanClassName: "input1Name"
        },
        {
            value: 'Персонажи',
            link: '/persons',
            divClassName: "input2",
            spanClassName: "input2Name"
        },
        {
            value: 'Комиксы',
            link: '/comics',
            divClassName: "input3",
            spanClassName: "input3Name"
        }
    ]

    return (
        <nav className="nav">
            <div className="menuh">
                {
                    arr1.map(elem => {
                        return <div onClick={elem.func}>{elem.value}</div>
                    })
                }
            </div>
            <div className="flPrKm">
                {
                    arr2.map(elem => {
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