import drStrange2in1 from './films/drStrenge2.jpg';
import drStrange2in2 from './films/drStrenge2(2).jpg';
import drStrange2in3 from './films/drStrenge2(3).jpg';
import drStrange2in4 from './films/drStrenge2(4).jpg';
import drStrange2Screen1 from './films/screen-dr-strange2.jpg';
import drStrange2Screen2 from './films/screen-dr-strange2(2).jpg';
import drStrange2Screen3 from './films/screen-dr-strange2(3).jpg';
import moonKnight1 from './films/moon-knight.jpg'
import moonKnight2 from './films/moon-knight(2).jpg'
import moonKnight3 from './films/moon-knight(3).jpg'
import moonKnight4 from './films/moon-knight(4).jpg'
import moonKnightScreen1 from './films/screen-moon-knight.jpg'
import moonKnightScreen2 from './films/screen-moon-knight(2).jpg'
import moonKnightScreen3 from './films/screen-moon-knight(3).jpg'

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

export const filmContentArr = {
    drStrange2: {
        filmName: 'Доктор Стрэндж: В мультивселенной безумия',
        slideImgArr: [drStrange2in1, drStrange2in2, drStrange2in3, drStrange2in4],
        screenImgArr: [drStrange2Screen1, drStrange2Screen2, drStrange2Screen3],
        previousFilm: ' Лунный Рыцарь',
        previousFilmLink: '/moon-knight',
        nextFilm: ' Тор: Любовь и гром',
        nextFilmLink: '/thor4',
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
    },
    moonKnight: {
        filmName: 'Лунный Рыцарь (сериал)',
        slideImgArr: [moonKnight1, moonKnight2, moonKnight3, moonKnight4],
        screenImgArr: [moonKnightScreen1, moonKnightScreen2, moonKnightScreen3],
        previousFilm: ' Человек Паук։ Нет пути домой',
        previousFilmLink: '/spider-man3',
        nextFilm: ' Доктор Стрэндж։ В мультивселенной безумия',
        nextFilmLink: '/dr-strange2',
        filmInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Джастин Бенсон'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 45-50 мин'

            },
            {
                classNameLi: 'c',
                type: 'Жанр: ',
                value: ' Боевики, Драмы, Приключения, Ужасы, Фантастика'

            },
            {
                classNameLi: 'd',
                type: 'Премьера: ',
                value: ' 30 марта 2022'

            },
            {
                classNameLi: 'e',
                type: 'В главных ролях: ',
                value: ' Оскар Айзек, Итан Хоук, Гаспар Ульель, Ф. Мюррэй Абрахам, May Calamawy'

            },
            {
                classNameLi: 'f',
                type: 'Персонажи: ',
                value: ' Лунный Рыцарь'

            }
        ],
        plot: 'Основанный на персонаже комиксов Marvel, созданном писателем Дугом Мёнчем и художником Доном Перлином, «Лунный рыцарь» от исполнительного продюсера Джереми Слейтера рассказывает историю Стивена Гранта(Оскар Айзек), кроткого «продавца сувениров», живущего в одиночестве в Лондоне недалеко от музея, где он работает.Бывший морской пехотинец долгое время работал на ЦРУ, после чего стал наёмником.Находясь на грани жизни и смерти, был воскрешён древним божеством.Он становится Лунным рыцарем после того, как он создал канал для египетского бога луны Хонсу, который наделил его особыми способностями.Хотя Стивен предпочел бы проводить свои дни дома или водить посетителей показывая экспонаты музея Древнего Египта, он обычно застревает в кладовой сувенирного магазина из - за своей неорганизованности на рабочем месте. Каким бы сознанием не обладал Стивен, он часто теряет значительные его части вместе с любыми воспоминаниями о том, что происходит всякий раз, когда он впадает в одно из своих загадочных состояний фуги.У него наблюдается расстройство личности, в результате которого в бою иногда сражаются его альтер - эго.Итан Хоук и Мэй Каламави присоединяются к сюжету сериала в роли Артура Хэрроу и Лейлы соответственно.'
    }
}