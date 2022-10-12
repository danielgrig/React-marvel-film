import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Menu } from '../../Menu/Menu';
import { arrFilmsCont } from '../filmsArr';
import './Film.css';

export const filmMenuArr = [
    {
        value: 'Главная',
        link: '/'
    },
    {
        value: 'Фильмы',
        link: '/films'
    }
]

export const Film = () => {
    const params = useParams()
    const selectFilms = arrFilmsCont.find(item => item.id === params.id)
    const index = arrFilmsCont.indexOf(selectFilms)

    return (
        <>
            <Menu array={filmMenuArr} />
            <main className='content'>
                <h2>{selectFilms.filmName}</h2>
                <div className="film">
                    <div id="slideshow">
                        <div className="slide-wrapper">
                            {selectFilms.slideImgArr.map(elem => {
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
                            {selectFilms.filmInfo.map(elem => {
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
                        {selectFilms.screenImgArr.map(elem => {
                            return (
                                <img src={elem} alt=''/>
                            )
                        })}
                    </div>
                    <hr />
                    <h2>{selectFilms.filmName}</h2>
                    <div id="player" poster="../../../public/pictures/player.jpg">
                    </div>
                    <span className='span'>Предыдущий Фильм: <Link to={`/film/${arrFilmsCont[index + 1].id}`} className='back-film'> {selectFilms.previousFilm}</Link></span>
                    <span>Следующий Фильм: <Link to={`/film/${!(index - 1) ? arrFilmsCont[index].id : arrFilmsCont[index - 1].id}`} className='forwardFilm'> {selectFilms.nextFilm}</Link></span>
                    <hr />
                    <h3>Сюжет</h3>
                    <p className="plot">{selectFilms.plot}</p>
                </div>
                <hr />
            </main>
        </>
    )
}
