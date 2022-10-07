import React from 'react';
import drStrange2in1 from './films/drStrenge2.jpg';
import drStrange2in2 from './films/drStrenge2(2).jpg';
import drStrange2in3 from './films/drStrenge2(3).jpg';
import drStrange2in4 from './films/drStrenge2(4).jpg';
import drStrange2Screen1 from './films/screen-dr-strange2.jpg';
import drStrange2Screen2 from './films/screen-dr-strange2(2).jpg';
import drStrange2Screen3 from './films/screen-dr-strange2(3).jpg';

export const filmMenuArr = [
    {
        value: 'Главная'
    },
    {
        value: 'Фильмы'
    }
]

export const filmContentArr = [
    {
        filmName: 'Доктор Стрэндж: В мультивселенной безумия',
        slideImgArr: [drStrange2in1, drStrange2in2, drStrange2in3, drStrange2in4],
        screenImgArr: [drStrange2Screen1, drStrange2Screen2, drStrange2Screen3],
        previousFilm: 'Лунный Рыцарь',
        nextFilm: 'Тор: Любовь и гром',
        filmInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Сэм Рэйми'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 126 мин'

            },
            {
                classNameLi: 'c',
                type: 'Жанр: ',
                value: ' Боевик, Фантастика, Ужасы, Приключения'

            },
            {
                classNameLi: 'd',
                type: 'Премьера: ',
                value: ' 4 мая 2022'

            },
            {
                classNameLi: 'e',
                type: 'В главных ролях: ',
                value: ' Бенедикт Камбербэтч, Сочил Гомес, Элизабет Олсен, Чиветел Эджиофор, Бенедикт Вонг, Майкл Стулбарг, Рэйчел Макадамс'

            },
            {
                classNameLi: 'f',
                type: 'Персонажи: ',
                value: ' Доктор Стрэндж, Америка Чавес, Алая Ведьма, Вонг, Барон Мордо'

            }
        ],
        plot: 'В пространстве между вселенными магический демон преследует Америку Чавес и альтернативную версию Доктора Стивена Стрэнджа(«Защитника» Стрэнджа), которые пытаются добраться до Книги Вишанти.Однако их настигает демон, и Стрэндж пытается его сдержать.Он принимает решение забрать силу Америки, тем самым убив её.Однако в процессе, существо высвобождается, и смертельно ранит Стрэнджа.Америка пытается добраться до книги, но её хватает демон и, испугавшись, она открывает портал в виде звезды.Полуживой Стрэндж обрубает ленты демона и умирает, после чего Америка и мёртвый «Защитник» Стрэндж переносятся на Землю - 616.'
    }
]