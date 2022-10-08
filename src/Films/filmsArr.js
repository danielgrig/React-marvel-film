import { v4 } from 'uuid'

export const filterFilms = [
    {
        value: 'Главная',
        link: '/'
    },
    {
        value: 'ГОД',
        subMenu: [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008]
    },
    {
        value: 'Актеры',
        subMenu: ['Роберт Дауни-Мл.', 'Крис Эванс', 'Скарлетт Йоханссон', 'Крис Хемсворт', 'Марк Руффало', 'Джереми Реннер', 'Сэмюэл Л. Джексон', 'Энтони Маки', 'Дон Чидл', 'Том Хиддлстон', 'Крис Пратт', 'Зои Салдана', 'Идрисс Эльба', 'Вин Дизель', 'Пол Радд']
    },
    {
        value: 'Персонажи',
        subMenu: ['Железный Человек', 'Капитан Америка', 'Тор', 'Локи', 'Халк', 'Человек Паук', 'Воитель', 'Доктор Стрэндж', 'Сокол', 'Ник Фьюри', 'Зимний Солдат', 'Соколиный Глаз', 'Чёрная Вдова', 'Человек Муравей', 'Оса', 'Чёрная Пантера', 'Алая Ведьма', 'Вижен', 'Капитан Марвел', 'Звёздный Лорд', 'Грут', 'Гамора', 'Дракс', 'Ракета']
    }
]

export const arrFilmsCont = [
    {
        id: v4(),
        link: '/dr-strange2',
        classNameA: 'dr-strenge2',
        filmName: 'Доктор Стрэндж: В мультивселенной безумия (2022)',
        filmsInfo: [
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
                type: 'В главных ролях: ',
                value: ' Бенедикт Камбербэтч, Сочил Гомес, Элизабет Олсен'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Доктор Стрэндж, Америка Чавес, Алая Ведьма'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'Во вселенной оказывается гостья, которая пришла из параллельного мира. Ей нужна помощь, так как на неё открыл охоту монстр, способный уничтожить мультивселенную.Ему нужна Америка Чавес, ...'

            }
        ]
    },
    {
        id: v4(),
        link: '/moon-knight',
        classNameA: 'moon-knight',
        filmName: 'Лунный Рыцарь (2022)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Джастин Бенсон, Мохамед Диаб, Аарон Мурхед'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 1 сезон, 6 серии по 45-50 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Оскар Айзек, Итан Хоук, Мэй Каламави'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Лунный Рыцарь'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: ' До того, как узнать о сверхъестественных способностях, Марк Спектр был обычным городским обывателем. Он приходился сыном раввину, которому повезло укрыться от террора нацистов, бежав в...'

            }
        ]
    },
    {
        id: v4(),
        link: '/spider-man3',
        classNameA: 'spider-man3',
        filmName: 'Человек-паук: Нет пути домой (2021)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Джон Уоттс'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 150 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Том Холланд, Бенедикт Камбербэтч'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Человек-Паук, Доктор Стрэндж'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'Тайна раскрыта – теперь все знают, кто на самом деле скрывается под костюмом Человека-паука. Питер Паркер стал центром всеобщего внимания...'

            }
        ]
    },
    {
        id: v4(),
        link: '/eternal',
        classNameA: 'eternal',
        filmName: 'Вечные (2021)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Хлоя Чжао'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 157 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Джемма Чан,Ричард Мэдден,Кумэйл Нанджиани,Лия Макхью,Брайан Тайри Генри,Лорен Ридлофф,Барри Кеоган,Кит Харингтон,Сальма Хайек,Анджелина Джоли'
            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Аяк, Серси, Икарис, Кинго, Спрайт, Фастос, Маккари, Друиг, Гильгамеш, Фина'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'В 5000 году до н. э. десять могущественных Вечных были посланы Целестиалом Аришемом на Землю для уничтожения агрессивной расы Девиантов. На протяжении тысячелетий они защищали человечество от Девиантов'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'shan-chi',
        filmName: 'Шан-Чи и легенда десяти колец (2021)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Дестин Дэниел Креттон'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 132 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Симу Лю, Аквафина, Тони Люн Чу Вай'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Шан-Чи'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'Тысячу лет назад Сюй Венву находит десять колец — мистическое оружие, дарующее своему обладателю бессмертие и великую силу.Он собирает армию воинов под названием «Десять колец».На протяжении столетий он завоёвывает царства и свергает правительства...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'hawkeye',
        filmName: 'Соколиный Глаз (2021)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Берт, Кэти Эллвуд, Риз Томас'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 1 сезон 6 серии 40-62 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Джереми Реннер, Хейли Стайнфелд'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Соколиный Глаз'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'Через год после событий фильма «Мстители: Финал» (2019) Клинт Бартон вынужден работать вместе с Кейт Бишоп, чтобы противостоять врагам из своего прошлого, когда он был Ронином...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'black-widow',
        filmName: 'Чёрная вдова (2021)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Кейт Шортланд'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 132 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Скарлетт Йоханссон, Флоренс Пью, Дэвид Харбор'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Чёрная Вдова'
            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: '1995 год. Русские агенты под прикрытием, суперсолдат Алексей Шостаков и Чёрная вдова Мелина Востокофф живут в Огайо вместе с приёмными дочерьми Наташей Романофф и Еленой Беловой.Они завершают миссию по краже разведданных «Щ.И.Т.а» и     сбегают на Кубу, где встречаются со своим боссом...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'what-if',
        filmName: 'Что, Если... ? (2021)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Брайан Эндрюс'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 1 сезон 9 серии 30-37 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' . . .'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Персонажи от Марвел'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'После открытия мультивселенной в финале первого сезона «Локи», «Что, если…?» исследует различные временные линии, в которых основные моменты из фильмов кинематографической вселенной Marvel происходят иначе, а всеведущий Наблюдатель следит за образованием каждой новой временной линии.'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'loki',
        filmName: 'Локи (2021)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Кейт Херрон'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 1 сезон 6 серии 42-54 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Том Хиддлстон, София Ди Мартино'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Локи'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'Сразу же после кражи Тессеракта в фильме «Мстители: Финал» (2019) альтернативная версия Локи попадает в «Управление временны́ми изменениями» (УВИ), бюрократическую организацию, которая существует вне пространства и времени...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'falcon',
        filmName: 'Сокол и Зимний Солдат (2021)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Кари Скогланд'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 1 сезон 6 серии 49-60 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Себастиан Стэн, Энтони Маки'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Зимний Солдат, Сокол'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'Через полгода после получения звания Капитана Америки в фильме «Мстители: Финал» (2019) Сэм Уилсон объединяется с Баки Барнсом во всемирном приключении, которое подвергает их способности испытанию, когда они сражаются с анархистской группой Разрушителей флагов...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'vanda-vision',
        filmName: 'Ванда/Вижен (2021)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Мэтт Шекман'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 1 сезон 9 серии 30-50 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Элизабет Олсен, Пол Беттани'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Алая Ведьма, Вижен'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'Через три недели после событий фильма «Мстители: Финал» Ванда Максимофф и Вижн живут идеальной семейной жизнью в городке Уэствью, скрывая свои способности.Перешагивая десятилетия телевизионных ситкомов, герои начинают подозревать, что их реальность не то, чем кажется...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'spider-man2',
        filmName: 'Человек-паук: Вдали от дома (2019)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Джон Уоттс'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 129 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Том Холланд, Сэмюэл Л. Джексон, Джейк Джилленхол'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Человек-паук, Ник Фьюри'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'В Икстенко, Мексика, Ник Фьюри и Мария Хилл исследуют необычный природный шторм и сталкиваются с неким существом, позже опознанным как Элементаль Земли.Вдруг из ниоткуда появляется некий Квентин Бек и вступает в схватку с Элементалем...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'avengers-final',
        filmName: 'Мстители: Финал (2019)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Энтони Руссо, Джо Руссо'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 181 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Роберт Дауни-младший, Крис Эванс, Марк Руффало, Крис Хемсворт, ...'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Железный Человек, Халк, Капитан Америка, Чёрная Вдова,...'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'Половина всей жизни во Вселенной уничтожена. Спустя три недели после «Щелчка» Таноса, призванная на помощь Кэрол Дэнверс спасает дрейфующих в космосе Небулу и Тони Старка и возвращает их на Землю...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'capitan-marvel',
        filmName: 'Капитан Марвел (2019)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Анна Боден, Райан Флек'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 124 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Бри Ларсон, Сэмюэл Л. Джексон'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Капитан Марвел, Ник Фьюри'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: '1995 год. Хала, столица Империи Крии. Верс, член элитного разведывательного отряда «Звёздная сила», страдает от постоянных ночных кошмаров.Йон - Рогг, её личный наставник и командор отряда, уже несколько лет обучает её боевым искусствам, а также учит контролировать свои способности и эмоции.А Высший Разум(искусственный интеллект, правительство Крии) призывает Верс верно служить своей расе.'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'ant-man2',
        filmName: 'Человек Муравей и Оса (2018)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Пейтон Рид'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 118 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Пол Радд, Эванджелин Лилли'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Человек Муравей, Оса'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: '1987 год. Во время миссии по обезвреживанию сепаратистской ракеты, запущенной в сторону США, Джанет ван Дайн / Оса уменьшается до субатомных размеров и попадает в квантовый мир.После исчезновения жены Хэнк Пим продолжает воспитывать свою дочь Хоуп, полагая, что Джанет мертва...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'avengers-infinit',
        filmName: 'Мстители: Война бесконечности (2018)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Энтони Руссо, Джо Руссо'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 149 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Роберт Дауни-младший, Крис Хемсворт, Крис Эванс,...'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Железный Человек, Капитан Америка, Халк, Тор,...'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'Завладев Камнем Силы (одним из шести Камней Бесконечности) с планеты Ксандар, Танос и его приёмные дети, Эбеновый Зоб, Кулл Обсидиан, Проксима Полночная и Корвус Глэйв, перехватывают космический корабль, перевозящий выживших после уничтожения Асгарда асгардцев.Танос извлекает Камень Пространства из Тессеракта.Хеймдалл отправляет Халка на Землю с помощью Биврёста, затем Танос убивает его и уничтожает корабль...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'black-panther',
        filmName: 'Чёрная Пантера (2018)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Райан Куглер'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 134 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Чедвик Боузман, Майкл Б. Джордан'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Чёрная Пантера'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'Тысячелетия назад на Землю в Африку упал метеорит, содержащий в себе особый металл — вибраниум. Пять африканских племён воевали за территорию и ресурсы метеорита.Один из воинов проглотил «сердцевидную траву», пораженную вибраниумом, и получил сверхчеловеческие способности...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'tor3',
        filmName: 'Тор: Рагнарёк (2017)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Тайка Вайтити'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 130 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Крис Хемсворт, Том Хиддлстон, Марк Руффало'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Тор, Локи, Халк'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'Через два года после битвы в Заковии[комм 1] Тор оказывается в плену огненного демона Суртура, который сообщает Тору, что его отец Один отсутствует в Асгарде.Демон объясняет, что царство скоро будет разрушено во время пророчества Рагнарёка, когда Суртур объединит свою корону с Вечным пламенем, находящимся в Сокровищнице Одина...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'spider-man',
        filmName: 'Человек-Паук: Возвращение домой (2017)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Джон Уоттс'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 133 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Том Холланд, Роберт Дауни-младший'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Человек-паук, Железный Человек'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: '2012 год. Эдриан Тумс и его команда занимаются очисткой Нью-Йорка после вторжения Читаури, но их операция перешла под юрисдикцию Департамента по ликвидации разрушений(ДПЛР), совместного предприятия Тони Старка и правительства США...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'straji-galaktik2',
        filmName: 'Стражи Галактики: Часть 2 (2017)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Джеймс Ганн'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 136 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Крис Прэтт, Зои Салдана, Дейв Батиста'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Звёздный Лорд, Гамора, Дракс'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'После того как напарникам удалось спасти целую планету, они смело могут называться Стражами Галактики, хотя в недалёком прошлом каждый из героев был разыскиваемым преступником.А за Питером по прозвищу Звёздный Лорд гонялись ещё и члены банды «Опустошителей», озлобленные на парня из - за важного заказа...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'dr-strenge',
        filmName: 'Доктор Стрэндж (2016)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Скотт Дерриксон'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 115 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Бенедикт Камбербэтч, Чиветел Эджиофор'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Доктор Стрэндж'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'Мастер мистических искусств Кецилий и его приспешники («зилоты») прибывают в библиотеку Древней. Кецилий обезглавливает библиотекаря, вырывает страницу из древней книги Калиостро и, после противостояния с Древней сбегает...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'capitan-america3',
        filmName: 'Первый Мститель: Противостояние (2016)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Энтони Руссо, Джо Руссо'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 147 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Крис Эванс, Роберт Дауни-младший, Скарлетт Йоханссон'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Капитан Америка, Железный Человек, Чёрная Вдова'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'Госсекретарь США Таддеус Росс сообщает Мстителям, что Организация Объединённых Наций (ООН) готовится принять «Заковианский договор», согласно которому Мстители не будут являться частной организацией и будут действовать под надзором комиссии ООН...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'ant-man',
        filmName: 'Человек Муравей (2015)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Пейтон Рид'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 117 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Пол Радд, Майкл Дуглас, Эванджелин Лилли'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Человек Муравей, Оса'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: '1989 год. Учёный Хэнк Пим разработал «Частицы», способные уменьшать межатомное расстояние объектов, тем самым делая их маленькими, а также костюм Человека- муравья, способный уменьшать человека без повреждения мозговых тканей.Пим, узнав что его коллеги пытаются воссоздать формулу его частиц, подаёт в отставку...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'avengers2',
        filmName: 'Мстители: Эра Альтрона (2015)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Джосс Уидон'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 141 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Роберт Дауни-младший, Крис Хемсворт, Марк Руффало,...'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Железный Человек, Тор, Капитан Америка, Халк,...'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'В Заковии Мстители — Тони Старк, Стив Роджерс, Тор, Брюс Бэннер, Наташа Романофф и Клинт Бартон — штурмуют базу оставшихся участников организации «ГИДРА», главнокомандующий которых — Вольфганг фон Штрукер — проводил на людях эксперименты с помощью скипетра Локи...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'straji-galaktik',
        filmName: 'Стражи Галактики (2014)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Джеймс Ганн'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 121 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Крис Прэтт, Зои Салдана, Дейв Батиста,...'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Звёздный Лорд, Гамора, Дракс,...'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'В 1988 году, в Миссури, после смерти своей матери, мальчика по имени Питер Квилл похищает с Земли космический корабль Опустошителей во главе с Йонду Удонтой.В 2014 году Квилл прилетает на планету Мораг и крадёт Сферу...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'capitan-america2',
        filmName: 'Первый Мститель: Другая война (2014)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Энтони Руссо, Джо Руссо'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 136 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Крис Эванс, Скарлетт Йоханссон, Себастиан Стэн,...'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Капитан Америка, Чёрная Вдова, Зимний Солдат, Сокол,...'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'После битвы за Нью-Йорк, Стив Роджерс пытается приспособиться к современной жизни в Вашингтоне. На утренней пробежке он знакомится с Сэмом Уилсоном, бывшим десантником Вооружённых сил США.После знакомства, Роджерс, возглавляющий команду «У.Д.А.Р.» и его напарница Наташа Романофф спасают заложников с корабля «Лемурианская звезда»...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'tor2',
        filmName: 'Тор: Царство тьмы (2013)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Алан Тейлор'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 112 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Крис Хемсворт, Натали Портман, Том Хиддлстон,...'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Тор, Локи'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'Столетия назад, асгардский царь Бор, отец Одина, победил Тёмных эльфов во главе с Малекитом, который стремился вернуть Вселенную к её исходному состоянию, стерев все Девять миров силой Эфира, превращающего материю в антиматерию.После разгрома, Малекит, бросив свою армию, скрылся, а Бор велел зарыть Эфир так глубоко, как только возможно.'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'iron-man3',
        filmName: 'Железный Человек 3 (2013)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Шейн Блэк'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 130 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Роберт Дауни-младший, Гвинет Пэлтроу, Дон Чидл,...'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Железный Человек, Воитель'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'В 1999 году, в канун Нового года, Тони Старк знакомится с учёным Майей Хансен, изобретателем технологии «Экстре́мис» — технологии по регенерации тканей, повреждённых после тяжёлых травм.Учёный - инвалид Олдрич Киллиан приглашает пару в свою компанию «А.И.М.», и назначает встречу на крыше здания, однако Тони не приходит...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'avengers',
        filmName: 'Мстители (2012)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Джосс Уидон'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 142 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Роберт Дауни-младший, Крис Эванс, Марк Руффало,...'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Железный Человек, Капитан Америка, Халк, Тор,...'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'Асгардский бог Локи заключает сделку с повелителем инопланетной расы, известной как «Читаури»: в обмен на Тессеракт — неиссякаемый источник космической энергии, имеющий кубическую форму, и содержащий в себе Камень Пространства, читаури предоставят Локи армию для захвата Земли...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'capitan-america',
        filmName: 'Первый Мститель (2011)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Джо Джонстон'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 124 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Крис Эванс, Томми Ли Джонс, Себастиан Стэн,...'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Капитан Америка, Зимний Солдат'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'В 1942 году нацистский офицер Иоганн Шмидт и его приспешники нападают на город Тёнсберг в Норвегии с целью украсть Тессеракт — таинственный артефакт в форме куба, который Шмидт назвал «жемчужиной сокровищницы Одина»...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'tor',
        filmName: 'Тор (2011)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Кеннет Брана'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 114 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Крис Хемсворт, Натали Портман, Том Хиддлстон,...'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Тор, Локи'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'В 965 году Один, царь Асгарда, ведёт войну против Ледяных великанов Йотунхейма и их лидера Лафея, чтобы помешать им завоевать Девять царств, начиная с Земли.Воины Асгарда побеждают Ледяных Великанов в Тёнсберге, Норвегия, и захватывают источник их силы, ледяной ларец...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'iron-man2',
        filmName: 'Железный Человек 2 (2010)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Джон Фавро'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 125 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Роберт Дауни-младший, Гвинет Пэлтроу, Дон Чидл,...'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: '  Железный Человек, Воитель'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'В России Иван Ванко наблюдает смерть своего отца Антона Ванко — бывшего сотрудника компании «Stark Industries», и по чертежам своего отца собирает миниатюрный дуговой реактор.После того, как Тони Старк раскрывает всему миру, что он — «Железный человек» проходит шесть месяцев...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'hulk',
        filmName: 'Невероятный Халк (2008)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Луи Летерье'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 145 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Луи Летерье, Лив Тайлер, Тим Рот,...'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Халк, Мерзость'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'После неудачного эксперимента с гамма-лучами учёный Брюс Бэннер мутирует, превращаясь в состоянии гнева в зелёного монстра — Халка.При превращении от рук Халка страдает любимая — дочь генерала Росса, Бетти.Брюс скрывается от армии США, которая считает его своей собственностью...'

            }
        ]
    },
    {
        id: v4(),
        classNameA: 'iron-man',
        filmName: 'Железный Человек (2008)',
        filmsInfo: [
            {
                classNameLi: 'a',
                type: 'Режиссёр: ',
                value: ' Джон Фавро'

            },
            {
                classNameLi: 'b',
                type: 'Длительность: ',
                value: ' 126 мин'

            },
            {
                classNameLi: 'c',
                type: 'В главных ролях: ',
                value: ' Роберт Дауни-младший, Терренс Ховард, Терренс Ховард,...'

            },
            {
                classNameLi: 'd',
                type: 'Персонажи: ',
                value: ' Железный Человек'

            },
            {
                classNameLi: 'e',
                type: 'Кратко: ',
                value: 'Тони Старк, унаследовавший компанию «Stark Industries» от своего покойного отца Говарда Старка, отправляется в охваченный войной Афганистан вместе со своим другом и подполковником Джеймсом Роудсом на демонстрацию новой ракеты «Иерихон»...'

            }
        ]
    }
]

