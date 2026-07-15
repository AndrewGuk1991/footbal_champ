import player_8 from './../assets/photoPlayers/photo_8.jpg'

export type Player = {
    name: string;
    surname: string;
    number: number;
    goals?: number;
    games?: number;
    photo?: string;
    yellowCards?: number;
    redCards?: number;
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
    goalkeepers: Player[];
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
        goalkeepers: [
            { name: 'Денис', surname: 'Мелюх', number: 1, games: 7, redCards: 1 },
            { name: 'Сергей', surname: 'Абрамчук', number: 98, games: 7 },
        ],
        defenders: [
            { name: 'Виталий', surname: 'Головчик', number: 2, games: 14 },
            { name: 'Роман', surname: 'Ковалицкий', number: 3, games: 14 },
            { name: 'Кирилл', surname: 'Карпенко', number: 4, games: 14 },
            { name: 'Виталий', surname: 'Кот', number: 5, games: 14 },
        ],
        midfielders: [
            { name: 'Марк', surname: 'Кот', number: 6, games: 14 },
            { name: 'Владимир', surname: 'Сидоревич', number: 7, goals: 4, games: 14 },
            { name: 'Андрей', surname: 'Гук', number: 8, games: 14, yellowCards: 1, photo: player_8, goals: 2 },
            { name: 'Евгенний', surname: 'Радионов', number: 11, games: 14, goals: 2 },
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
        goalkeepers: [
            { name: 'Александр', surname: 'Адамович', number: 4, games: 14, yellowCards: 1 }
        ],
        defenders: [
            { name: 'Михаил', surname: 'Колесник', number: 2, games: 14 },
            { name: 'Андрей', surname: 'Вайтович', number: 3, games: 14 },
        ],
        midfielders: [
            { name: 'Дмитрий', surname: 'Каменец', number: 6, goals: 4, games: 14 },
            { name: 'Станислав', surname: 'Кулина', number: 9, games: 14 },
            { name: 'Дмитрий', surname: 'Кононович', number: 8, games: 14 },
            { name: 'Иван', surname: 'Антоник', number: 10, goals: 5, games: 14 },
            { name: 'Дмитрий', surname: 'Малец', number: 14, games: 14 },
        ],
        forwards: [
            { name: 'Вячеслав', surname: 'Зырко', number: 7, goals: 9, games: 14 },
            { name: 'Николай', surname: 'Бойба', number: 11, goals: 8, games: 14 },
            { name: 'Артур', surname: 'Демчишин', number: 17, games: 14 },
            { name: 'Андрей', surname: 'Курильчик', number: 21, games: 14 },
            { name: 'Александр', surname: 'Малащицкий', number: 18, games: 14 },

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
        goalkeepers: [
            { name: 'Павел', surname: 'Дубина', number: 4, games: 14 },
        ],
        defenders: [

            { name: 'Вадим', surname: 'Кислюк', number: 5, games: 14 },
            { name: 'Георгий', surname: 'Пешко', number: 12, games: 14 },
            { name: 'Роман', surname: 'Зельман', number: 14, games: 14 },
            { name: 'Леонид', surname: 'Ребковец', number: 21, games: 14 },
        ],
        midfielders: [
            { name: 'Геннадий', surname: 'Велесницкий', number: 6, games: 14 },
            { name: 'Илья', surname: 'Сущинский', number: 8, goals: 6, games: 14 },
            { name: 'Денис', surname: 'Курьянович', number: 10, games: 14 },
            { name: 'Богдан', surname: 'Малайчук', number: 22, games: 14 },
            { name: 'Роман', surname: 'Трухан', number: 15, games: 14 },
        ],
        forwards: [
            { name: 'Виктор', surname: 'Трепачко', number: 7, goals: 7, games: 14 },
            { name: 'Гулзархан', surname: 'Одилбеков', number: 9, goals: 4, games: 14 },
            { name: 'Дмитрий', surname: 'Буката', number: 11, games: 14 },
            { name: 'Владислав', surname: 'Уваров', number: 16, games: 14 },
            { name: 'Петр', surname: 'Голод', number: 99, games: 14 },
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
        goalkeepers: [
            { name: 'Даниил', surname: 'Шпаковский', number: 1, games: 14 },
        ],
        defenders: [
            { name: 'Денис', surname: 'Бут-Гусаим', number: 3, games: 14 },
            { name: 'Григорий', surname: 'Полюхович', number: 5, games: 14 },
            { name: 'Артем', surname: 'Татаревич', number: 13, games: 14 },
        ],
        midfielders: [
            { name: '...', surname: 'Павелко', number: 8, goals: 10, games: 14 },
            { name: 'Константин', surname: 'Кончаленко', number: 16, goals: 4, games: 14 },
            { name: 'Михаил', surname: 'Головко', number: 20, games: 14 },
        ],
        forwards: [
            { name: 'Павел', surname: 'Мовчун', number: 9, goals: 17, games: 14 },
            { name: '...', surname: 'Свирид', number: 10, goals: 13, games: 14 },
            { name: 'Валерий', surname: 'Баран', number: 14, goals: 9, games: 14 },
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
        goalkeepers: [
            { name: 'Иван', surname: 'Козел', number: 1 },
        ],
        defenders: [
            { name: 'Александр', surname: 'Вакулич', number: 2 },
            { name: 'Олег', surname: 'Шевчук', number: 4 },
        ],
        midfielders: [
            { name: 'Виталий', surname: 'Козел', number: 6 },
            { name: 'Павел', surname: 'Куделич', number: 7 },
            { name: 'Максим', surname: 'Ляшкевич', number: 8 },
        ],
        forwards: [
            { name: 'Владислав', surname: 'Ляшкевич', number: 9, goals: 4 },
            { name: 'Даниил', surname: 'Шиг', number: 11, goals: 4 },
            { name: 'Павел', surname: 'Пошелюк', number: 22 },
            { name: 'Александр', surname: 'Троцкий', number: 77 }
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
        goalkeepers: [],
        defenders: [
            { name: 'Назар', surname: 'Цебрук', number: 3 },
            { name: 'Александр', surname: 'Манюк', number: 15 },
            { name: '...', surname: 'Колбович', number: 18 },
        ],
        midfielders: [
            { name: 'Арсений', surname: 'Попитич', number: 16 },
            { name: 'Александр', surname: 'Лодыга', number: 17 },
            { name: 'Алексей', surname: 'Козловский', number: 20 },
            { name: 'Герман', surname: 'Конончук', number: 21, goals: 1 },
        ],
        forwards: [
            { name: '...', surname: 'Ляшук', number: 11, goals: 4 },
            { name: '...', surname: 'Пивень', number: 19, goals: 4 },
            { name: '...', surname: 'Самуйлик', number: 25, goals: 4 }
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
        goalkeepers: [],
        defenders: [
            { name: 'Юрий', surname: 'Рокало', number: 2 },
            { name: '...', surname: 'Ахремюк', number: 44 },
            { name: 'Всеволод', surname: 'Романов', number: 55 },
        ],
        midfielders: [
            { name: 'Олег', surname: 'Вакульчик', number: 8, goals: 5 },
            { name: 'Виталий', surname: 'Рокало', number: 13 },
            { name: 'Ян', surname: 'Куликов', number: 14 },
        ],
        forwards: [
            { name: '...', surname: 'Воронин', number: 7, goals: 6 },
            { name: 'Александр', surname: 'Репецкий', number: 9 },
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
        goalkeepers: [
            { name: 'Валерий', surname: 'Андрукевич', number: 1 },
        ],
        defenders: [
            { name: '...', surname: 'Лукьянович', number: 3 },
            { name: 'Леонид', surname: 'Власов', number: 5 },
            { name: 'Виталий', surname: 'Федотов', number: 12 },
        ],
        midfielders: [
            { name: 'Эдуард', surname: 'Малышев', number: 4 },
            { name: 'Георгий', surname: 'Алексеев', number: 8 },
            { name: 'Вадим', surname: 'Беляев', number: 17 },
        ],
        forwards: [
            { name: 'Виталий', surname: 'Андрукевич', number: 10 },
            { name: 'Григорий', surname: 'Егоров', number: 11 },
            { name: 'Юрий', surname: 'Козлов', number: 19 },
        ]
    }
};

