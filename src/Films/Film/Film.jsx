import React from 'react';
import { Menu } from '../../Menu/Menu';
import './Film.css';
import { filmMenuArr, filmContentArr } from './filmArr';

export const Film = () => {
    return (
        <>
            <Menu array={filmMenuArr} />
            <main className='content'>
                <h2>{filmContentArr[0].filmName}</h2>
                <div className="film">
                    <div id="slideshow">
                        <div className="slide-wrapper">
                            {filmContentArr[0].slideImgArr.map(elem => {
                                return (
                                    <div className='slide'>
                                        <img src={elem} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="info">
                        <ul className="descript">
                            {filmContentArr[0].filmInfo.map(elem => {
                                return (
                                    <li className={elem.classNameLi}>
                                        <b>{elem.type}</b>{elem.value}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div>
                    <h4>Скриншоты</h4>
                    <hr />
                    <div className="screen">
                        {filmContentArr[0].screenImgArr.map(elem => {
                            return (
                                <img src={elem} />
                            )
                        })}
                    </div>
                    <hr />
                    <h2>{filmContentArr[0].filmName}</h2>
                    <div id="player" poster="../../../public/pictures/player.jpg">
                    </div>
                    <span className='span'>Предыдущий Фильм: <a href=""> {filmContentArr[0].previousFilm}</a></span>
                    <span>Следующий Фильм: <a href=""> {filmContentArr[0].nextFilm}</a></span>
                    <hr />
                    <h3>Сюжет</h3>
                    <p className="plot">{filmContentArr[0].plot}</p>
                </div>
                <hr />
            </main>
        </>
    )
}
