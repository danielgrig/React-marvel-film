import React, { useState } from "react";
import './Nav.css';


export const Nav = (props) => {

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
            func: () => props.func(false),
            divClassName: "input1",
            spanClassName: "input1Name"
        },
        {
            value: 'Персонажи',
            func: () => alert('b'),
            divClassName: "input2",
            spanClassName: "input2Name"
        },
        {
            value: 'Комиксы',
            func: () => alert('c'),
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
                            <div className={elem.divClassName} onClick={elem.func}>
                                <span className={elem.spanClassName}>{elem.value}</span>
                            </div>
                        )
                    })
                }
            </div>
        </nav>
    )
}