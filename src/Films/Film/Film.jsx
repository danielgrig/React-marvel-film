import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../../Menu/Menu';
import './Film.css';
import { filmMenuArr, filmContentArr } from './filmArr';

export const Film = (props) => {

    return (
        <>
            <Menu array={filmMenuArr} />
            <main className='content'>
                <h2>{filmContentArr[props.keyFilm].filmName}</h2>
                <div className="film">
                    <div id="slideshow">
                        <div className="slide-wrapper">
                            {filmContentArr[props.keyFilm].slideImgArr.map(elem => {
                                return (
                                    <div className='slide'>
                                        <img src={elem} alt=''/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="info">
                        <ul className="descript">
                            {filmContentArr[props.keyFilm].filmInfo.map(elem => {
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
                        {filmContentArr[props.keyFilm].screenImgArr.map(elem => {
                            return (
                                <img src={elem} alt=''/>
                            )
                        })}
                    </div>
                    <hr />
                    <h2>{filmContentArr[props.keyFilm].filmName}</h2>
                    <div id="player" poster="../../../public/pictures/player.jpg">
                    </div>
                    <span className='span'>Предыдущий Фильм: <Link to={filmContentArr[props.keyFilm].previousFilmLink}> {filmContentArr[props.keyFilm].previousFilm}</Link></span>
                    <span>Следующий Фильм: <Link to={filmContentArr[props.keyFilm].nextFilmLink}> {filmContentArr[props.keyFilm].nextFilm}</Link></span>
                    <hr />
                    <h3>Сюжет</h3>
                    <p className="plot">{filmContentArr[props.keyFilm].plot}</p>
                </div>
                <hr />
            </main>
        </>
    )
}
