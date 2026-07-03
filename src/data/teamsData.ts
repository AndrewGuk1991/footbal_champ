
export type Player = {
    name: string;
    surname: string;
    number: number;
    goals?: number;
    games?: number;
    photo?: string;
}

export type TeamData = {
    title: string;
    id: number;
    games: number;
    wins: number;
    draws: number;
    loses: number;
    goalsScored: number;
    goalsAgainst: number;
    goalsDifference: string;
    points: number;
    defenders: Player[];
    midfielders: Player[];
    forwards: Player[];
}


export const TEAMS_DATA: Record<string, TeamData> = {
    'ajax': {
        title: 'Аякс',
        id: 1,
        games: 14,
        wins: 8,
        draws: 0,
        loses: 6,
        goalsScored: 41,
        goalsAgainst: 15,
        goalsDifference: '+26',
        points: 24,
        defenders: [
            { name: 'Виталий', surname: 'Головчик', number: 2, games: 14 },
            { name: 'Роман', surname: 'Ковалицкий', number: 3, games: 14 },
            { name: 'Кирилл', surname: 'Карпенко', number: 4, games: 14 },
            { name: 'Виталий', surname: 'Кот', number: 5, games: 14 },
        ],
        midfielders: [
            { name: 'Марк', surname: 'Кот', number: 6, games: 14 },
            { name: 'Владимир', surname: 'Сидоревич', number: 7, goals: 4, games: 14 },
            { name: 'Андрей', surname: 'Гук', number: 8, games: 14 },
            { name: 'Евгенний', surname: 'Радионов', number: 11, games: 14 },
        ],
        forwards: [
            { name: 'Вадим', surname: 'Шикула', number: 12, games: 14 },
            { name: 'Геннадий', surname: 'Полюхович', number: 9, goals: 7, games: 14 },
            { name: 'Даниил', surname: 'Лемешевский', number: 10, goals: 11, games: 14 },
            { name: 'Виктор', surname: 'Ибраев', number: 13, games: 14 },
            { name: 'Дмитрий', surname: 'Киселев', number: 14, goals: 4, games: 14 },
        ]
    },
    'pinskdrew': {
        title: 'Пинскдрев',
        id: 2,
        games: 14,
        wins: 9,
        draws: 3,
        loses: 2,
        goalsScored: 44,
        goalsAgainst: 14,
        goalsDifference: '+30',
        points: 30,
        defenders: [
            { name: 'Иван', surname: 'Шелест', number: 2, games: 14 },
            { name: 'Сергей', surname: 'Борисевич', number: 3, games: 14 },
            { name: 'Олег', surname: 'Король', number: 4, games: 14 },
            { name: 'Николай', surname: 'Дрозд', number: 15, games: 14 },
        ],
        midfielders: [
            { name: 'Дмитрий', surname: 'Каменец', number: 6, goals: 4, games: 14 },
            { name: 'Александр', surname: 'Кохнович', number: 9, games: 14 },
            { name: 'Михаил', surname: 'Павловец', number: 8, games: 14 },
            { name: 'Иван', surname: 'Антоник', number: 10, goals: 5, games: 14 },
        ],
        forwards: [
            { name: 'Вячеслав', surname: 'Зырко', number: 7, goals: 9, games: 14 },
            { name: 'Николай', surname: 'Бойба', number: 11, goals: 8, games: 14 },
            { name: 'Кирилл', surname: 'Гришко', number: 17, games: 14 },
            { name: 'Павел', surname: 'Якубович', number: 21, games: 14 },
        ]
    },
    'sputnik': {
        title: 'Спутник',
        id: 3,
        games: 14,
        wins: 8,
        draws: 1,
        loses: 5,
        goalsScored: 35,
        goalsAgainst: 22,
        goalsDifference: '+13',
        points: 24,
        defenders: [
            { name: 'Василий', surname: 'Кравчук', number: 4 },
            { name: 'Артем', surname: 'Мельник', number: 5 },
            { name: 'Егор', surname: 'Бычков', number: 12 },
            { name: 'Денис', surname: 'Ткаченко', number: 14 },
        ],
        midfielders: [
            { name: 'Роман', surname: 'Шевченко', number: 6 },
            { name: 'Илья', surname: 'Сущинский', number: 8, goals: 6 },
            { name: 'Никита', surname: 'Мороз', number: 10 },
            { name: 'Антон', surname: 'Клименко', number: 22 },
        ],
        forwards: [
            { name: 'Виктор', surname: 'Трепачко', number: 7, goals: 7 },
            { name: 'Гулзархан', surname: 'Одилбеков', number: 9, goals: 4 },
            { name: 'Ярослав', surname: 'Савченко', number: 11 },
            { name: 'Даниил', surname: 'Коваль', number: 99 },
        ]
    },
    'pikant': {
        title: 'Пикант',
        id: 4,
        games: 14,
        wins: 12,
        draws: 1,
        loses: 1,
        goalsScored: 67,
        goalsAgainst: 15,
        goalsDifference: '+52',
        points: 37,
        defenders: [
            { name: 'Геннадий', surname: 'Тарасевич', number: 3 },
            { name: 'Валерий', surname: 'Юшкевич', number: 5 },
            { name: 'Леонид', surname: 'Грицевич', number: 13 },
            { name: 'Станислав', surname: 'Шпаковский', number: 18 },
        ],
        midfielders: [
            { name: '...', surname: 'Павелко', number: 8, goals: 10 },
            { name: 'Валерий', surname: 'Баран', number: 14, goals: 9 },
            { name: 'Константин', surname: 'Кончаленко', number: 16, goals: 4 },
            { name: 'Георгий', surname: 'Барановский', number: 20 },
        ],
        forwards: [
            { name: 'Павел', surname: 'Мовчун', number: 9, goals: 17 },
            { name: '...', surname: 'Свирид', number: 10, goals: 13 },
            { name: 'Руслан', surname: 'Левкович', number: 11 },
            { name: 'Юрий', surname: 'Борисевич', number: 77 },
        ]
    },
    'dinamo': {
        title: 'Динамо',
        id: 5,
        games: 14,
        wins: 6,
        draws: 1,
        loses: 7,
        goalsScored: 29,
        goalsAgainst: 30,
        goalsDifference: '-1',
        points: 19,
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
            { name: 'Владислав', surname: 'Ляшкевич', number: 9, goals: 4 },
            { name: 'Даниил', surname: 'Шиг', number: 11, goals: 4 },
            { name: 'Илья', surname: 'Васильев', number: 22 },
            { name: 'Данила', surname: 'Федоров', number: 77 }
        ]
    },
    'odyssey': {
        title: 'Одиссей',
        id: 6,
        games: 14,
        wins: 4,
        draws: 1,
        loses: 9,
        goalsScored: 34,
        goalsAgainst: 41,
        goalsDifference: '-7',
        points: 13,
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
            { name: '...', surname: 'Ляшук', number: 11, goals: 4 },
            { name: '...', surname: 'Пивень', number: 19, goals: 4 },
            { name: '...', surname: 'Самуйлик', number: 25, goals: 4 },
            { name: 'Глеб', surname: 'Кудрявцев', number: 99 }
        ]
    },
    'vityaz': {
        title: 'Spirits&Витязь',
        id: 7,
        games: 14,
        wins: 4,
        draws: 1,
        loses: 9,
        goalsScored: 26,
        goalsAgainst: 43,
        goalsDifference: '-17',
        points: 13,
        defenders: [
            { name: 'Святослав', surname: 'Поляков', number: 2 },
            { name: 'Богдан', surname: 'Савельев', number: 44 },
            { name: 'Всеволод', surname: 'Романов', number: 55 },
            { name: 'Ростислав', surname: 'Тарасов', number: 71 }
        ],
        midfielders: [
            { name: 'Олег', surname: 'Вакульчик', number: 8, goals: 5 },
            { name: 'Станислав', surname: 'Рыбаков', number: 13 },
            { name: 'Ян', surname: 'Куликов', number: 14 },
            { name: 'Дамир', surname: 'Жуков', number: 88 }
        ],
        forwards: [
            { name: '...', surname: 'Воронин', number: 7, goals: 6 },
            { name: 'Тимур', surname: 'Афанасьев', number: 9 },
            { name: 'Филипп', surname: 'Дмитриев', number: 10 },
            { name: 'Руслан', surname: 'Тихонов', number: 91 }
        ]
    },
    'arsenal': {
        title: 'Арсенал',
        id: 8,
        games: 14,
        wins: 1,
        draws: 0,
        loses: 13,
        goalsScored: 13,
        goalsAgainst: 109,
        goalsDifference: '-96',
        points: 3,
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

