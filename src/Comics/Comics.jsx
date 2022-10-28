import React from "react";
import { Menu } from "../Menu/Menu";
import './comics.css'


const back = [
    {
        value: 'Назад',
        link: '/'
    }  
]

export const Comics = () => {
    return (
        <>
            <Menu array={back} />
            <main className="films">
                <div className="text">
                    <h1>Эта страница находиться в разработке</h1>
                </div>
               
            </main>
        </>
    )
}