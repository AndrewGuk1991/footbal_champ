import {TEAMS_ROUTES} from "../common/routes.ts";

export type Player = {
    name: string;
    surname: string;
    number: number;
}

export type TeamData = {
    title: string;
    defenders: Player[];
    midfielders: Player[];
    forwards: Player[];
}

export const TEAMS_DATA: Record<string, TeamData> = {
    [TEAMS_ROUTES.AJAX]: {
        title: 'Аякс',
        defenders: [
            { name: 'Виталий', surname: 'Головчик', number: 2 },
            { name: 'Роман', surname: 'Ковалицкий', number: 3 },
            { name: 'Кирилл', surname: 'Карпенко', number: 4 },
            { name: 'Виталий', surname: 'Кот', number: 5 },
        ],
        midfielders: [
            { name: 'Марк', surname: 'Кот', number: 6 },
            { name: 'Владимир', surname: 'Сидоревич', number: 7 },
            { name: 'Андрей', surname: 'Гук', number: 8 },
            { name: 'Евгенний', surname: 'Радионов', number: 11 },
        ],
        forwards: [
            { name: 'Вадим', surname: 'Шикула', number: 12 },
            { name: 'Геннадий', surname: 'Полюхович', number: 9 },
            { name: 'Даниил', surname: 'Лемешевский', number: 10 },
            { name: 'Виктор', surname: 'Ибраев', number: 13 },
        ]
    },
    [TEAMS_ROUTES.PINSKDREW]: {
        title: 'Пинскдрев',
        defenders: [
            { name: 'Иван', surname: 'Шелест', number: 2 },
            { name: 'Сергей', surname: 'Борисевич', number: 3 },
            { name: 'Олег', surname: 'Король', number: 4 },
            { name: 'Николай', surname: 'Дрозд', number: 15 },
        ],
        midfielders: [
            { name: 'Дмитрий', surname: 'Прокопович', number: 6 },
            { name: 'Александр', surname: 'Кохнович', number: 7 },
            { name: 'Михаил', surname: 'Павловец', number: 8 },
            { name: 'Артур', surname: 'Лешкевич', number: 10 },
        ],
        forwards: [
            { name: 'Вячеслав', surname: 'Зырко', number: 9 },
            { name: 'Максим', surname: 'Лозицкий', number: 11 },
            { name: 'Кирилл', surname: 'Гришко', number: 17 },
            { name: 'Павел', surname: 'Якубович', number: 21 },
        ]
    },
    [TEAMS_ROUTES.SPUTNIK]: {
        title: 'Спутник',
        defenders: [
            { name: 'Василий', surname: 'Кравчук', number: 4 },
            { name: 'Артем', surname: 'Мельник', number: 5 },
            { name: 'Егор', surname: 'Бычков', number: 12 },
            { name: 'Денис', surname: 'Ткаченко', number: 14 },
        ],
        midfielders: [
            { name: 'Роман', surname: 'Шевченко', number: 6 },
            { name: 'Илья', surname: 'Бондарь', number: 8 },
            { name: 'Никита', surname: 'Мороз', number: 10 },
            { name: 'Антон', surname: 'Клименко', number: 22 },
        ],
        forwards: [
            { name: 'Владислав', surname: 'Павлов', number: 7 },
            { name: 'Кирилл', surname: 'Марченко', number: 9 },
            { name: 'Ярослав', surname: 'Савченко', number: 11 },
            { name: 'Даниил', surname: 'Коваль', number: 99 },
        ]
    },
    [TEAMS_ROUTES.PIKANT]: {
        title: 'Пикант',
        defenders: [
            { name: 'Геннадий', surname: 'Тарасевич', number: 3 },
            { name: 'Валерий', surname: 'Юшкевич', number: 5 },
            { name: 'Леонид', surname: 'Грицевич', number: 13 },
            { name: 'Станислав', surname: 'Шпаковский', number: 18 },
        ],
        midfielders: [
            { name: 'Константин', surname: 'Малышко', number: 8 },
            { name: 'Анатолий', surname: 'Паскевич', number: 14 },
            { name: 'Виталий', surname: 'Сакович', number: 16 },
            { name: 'Георгий', surname: 'Барановский', number: 20 },
        ],
        forwards: [
            { name: 'Филипп', surname: 'Михневич', number: 9 },
            { name: 'Эдуард', surname: 'Жуковский', number: 10 },
            { name: 'Руслан', surname: 'Левкович', number: 11 },
            { name: 'Юрий', surname: 'Борисевич', number: 77 },
        ]
    },
    [TEAMS_ROUTES.DINAMO]: {
        title: 'Динамо',
        defenders: [
            { name: 'Александр', surname: 'Иванов', number: 2 },
            { name: 'Дмитрий', surname: 'Петров', number: 4 },
            { name: 'Сергей', surname: 'Новиков', number: 5 },
            { name: 'Павел', surname: 'Морозов', number: 14 }
        ],
        midfielders: [
            { name: 'Алексей', surname: 'Смирнов', number: 6 },
            { name: 'Максим', surname: 'Козлов', number: 7 },
            { name: 'Игорь', surname: 'Лебедев', number: 8 },
            { name: 'Артем', surname: 'Соколов', number: 10 }
        ],
        forwards: [
            { name: 'Никита', surname: 'Кузнецов', number: 9 },
            { name: 'Михаил', surname: 'Попов', number: 11 },
            { name: 'Илья', surname: 'Васильев', number: 22 },
            { name: 'Данила', surname: 'Федоров', number: 77 }
        ]
    },
    [TEAMS_ROUTES.ODYSSEY]: {
        title: 'Одиссей',
        defenders: [
            { name: 'Олег', surname: 'Павлов', number: 3 },
            { name: 'Антон', surname: 'Марков', number: 15 },
            { name: 'Ярослав', surname: 'Орлов', number: 18 },
            { name: 'Владислав', surname: 'Зайцев', number: 23 }
        ],
        midfielders: [
            { name: 'Егор', surname: 'Макаров', number: 16 },
            { name: 'Денис', surname: 'Волков', number: 17 },
            { name: 'Кирилл', surname: 'Соловьев', number: 20 },
            { name: 'Тимофей', surname: 'Борисов', number: 21 }
        ],
        forwards: [
            { name: 'Матвей', surname: 'Киселев', number: 11 },
            { name: 'Роман', surname: 'Сорокин', number: 19 },
            { name: 'Иван', surname: 'Фролов', number: 25 },
            { name: 'Глеб', surname: 'Кудрявцев', number: 99 }
        ]
    },
    [TEAMS_ROUTES.VITYAZ]: {
        title: 'Витязь',
        defenders: [
            { name: 'Святослав', surname: 'Поляков', number: 2 },
            { name: 'Богдан', surname: 'Савельев', number: 44 },
            { name: 'Всеволод', surname: 'Романов', number: 55 },
            { name: 'Ростислав', surname: 'Тарасов', number: 71 }
        ],
        midfielders: [
            { name: 'Владимир', surname: 'Белов', number: 8 },
            { name: 'Станислав', surname: 'Рыбаков', number: 13 },
            { name: 'Ян', surname: 'Куликов', number: 14 },
            { name: 'Дамир', surname: 'Жуков', number: 88 }
        ],
        forwards: [
            { name: 'Артур', surname: 'Тимофеев', number: 7 },
            { name: 'Тимур', surname: 'Афанасьев', number: 9 },
            { name: 'Филипп', surname: 'Дмитриев', number: 10 },
            { name: 'Руслан', surname: 'Тихонов', number: 91 }
        ]
    },
    [TEAMS_ROUTES.ARSENAL]: {
        title: 'Арсенал',
        defenders: [
            { name: 'Константин', surname: 'Карпов', number: 3 },
            { name: 'Леонид', surname: 'Власов', number: 5 },
            { name: 'Виталий', surname: 'Федотов', number: 12 },
            { name: 'Валерий', surname: 'Никитин', number: 16 }
        ],
        midfielders: [
            { name: 'Эдуард', surname: 'Малышев', number: 4 },
            { name: 'Георгий', surname: 'Алексеев', number: 8 },
            { name: 'Вадим', surname: 'Беляев', number: 17 },
            { name: 'Вячеслав', surname: 'Кузнецов', number: 20 }
        ],
        forwards: [
            { name: 'Евгений', surname: 'Степанов', number: 10 },
            { name: 'Григорий', surname: 'Егоров', number: 11 },
            { name: 'Юрий', surname: 'Козлов', number: 19 },
            { name: 'Анатолий', surname: 'Смирнов', number: 27 }
        ]
    }
};