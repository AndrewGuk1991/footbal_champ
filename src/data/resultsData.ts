export type GameEventType = 'goal' | 'yellow_card' | 'red_card'

export type GameEvent = {
    id: string;
    minute: number;
    period: 1 | 2;
    type: GameEventType;
    playerName: string;
    team: 'hosts' | 'guests';
    isPenalty?: boolean;

};

export type Game = {
    id: string;
    nameHosts: string
    nameGuests: string
    goalsHosts: number
    goalsGuests: number
    dateMatch: string
    timeMatch: string
    referee: string
    events: GameEvent[]
}


export type MatchDay = {
    name: string
    date: string
    games: Game[]
}

export type ResultsDataType = {
    [key: string]: MatchDay;
};

export const RESULTS_DATA: ResultsDataType = {
    "match-day-1": {
        name: "1 тур",
        date: "21.08.2025",
        games: [
            {
                id: 'game-1',
                nameHosts: "Пикант",
                nameGuests: "Арсенал",
                goalsHosts: 4,
                goalsGuests: 1,
                referee: 'Гончаренко Александр',
                dateMatch: "21.08.2025",
                timeMatch: "19:00",
                events: [
                    {
                        id: "ev1",
                        minute: 5,
                        period: 1,
                        type: "goal",
                        playerName: "Баран Валерий",
                        team: "hosts",
                    },
                    {
                        id: "ev2",
                        minute: 7,
                        period: 1, // 1-й тайм
                        type: "goal",
                        playerName: "Мовчун Павел",
                        team: "hosts"
                    },
                    {
                        id: "ev3",
                        minute: 10, // Например, 45+2 минута
                        period: 1,  // Все еще 1-й тайм (компенсированное время)
                        type: "goal",
                        playerName: "Свирид",
                        team: "hosts"
                    },
                    {
                        id: "ev4",
                        minute: 18,
                        period: 1,
                        type: "goal",
                        playerName: "Карпов Константин",
                        team: "guests",
                        isPenalty: true
                    },
                    {
                        id: "ev5",
                        minute: 25,
                        period: 2,
                        type: "goal",
                        playerName: "Мовчун Павел",
                        team: "hosts",
                        isPenalty: true
                    }
                ]
            },
            {
                id: 'game-2',
                nameHosts: "Пинскдрев",
                nameGuests: "Аякс",
                goalsHosts: 2,
                goalsGuests: 1,
                dateMatch: "21.08.2025",
                timeMatch: "19:00",
                referee: 'Гончаренко Александр',
                events: [
                    {
                        id: "ev1",
                        minute: 10,
                        period: 1,
                        type: "goal",
                        playerName: "Зырко Вячеслав",
                        team: "hosts"
                    },
                    {
                        id: "ev2",
                        minute: 19,
                        period: 1,
                        type: "goal",
                        playerName: "Зырко Вячеслав",
                        team: "guests"
                    },
                    {
                        id: "ev3",
                        minute: 35,
                        period: 2,
                        type: "goal",
                        playerName: "Полюхович Геннадий",
                        team: "hosts"
                    },
                ]
            }
        ]
    },
    "match-day-2": {
        name: "2 тур",
        date: "26.08.2025",
        games: [
            {
                id: 'game-1',
                nameHosts: "Пикант",
                nameGuests: "Аякс",
                goalsHosts: 1,
                goalsGuests: 0,
                referee: 'Гончаренко Александр',
                dateMatch: "26.08.2025",
                timeMatch: "19:00",
                events: [
                    {
                        id: "ev1",
                        minute: 30,
                        period: 2,
                        type: "goal",
                        playerName: "Баран Валерий",
                        team: "hosts",
                    },
                ]
            },
            {
                id: 'game-2',
                nameHosts: "Динамо",
                nameGuests: "Спутник",
                goalsHosts: 3,
                goalsGuests: 2,
                dateMatch: "26.08.2025",
                timeMatch: "19:00",
                referee: 'Домантович Александр',
                events: [
                    {
                        id: "ev1",
                        minute: 5,
                        period: 1,
                        type: "goal",
                        playerName: "Козел Виталий",
                        team: "hosts"
                    },
                    {
                        id: "ev2",
                        minute: 10,
                        period: 1,
                        type: "goal",
                        playerName: "Сущинский Илья",
                        team: "guests"
                    },
                    {
                        id: "ev3",
                        minute: 15,
                        period: 1,
                        type: "goal",
                        playerName: "Козел Владимир",
                        team: "hosts"
                    },
                    {
                        id: "ev4",
                        minute: 22,
                        period: 2,
                        type: "goal",
                        playerName: "Курьянович Денис",
                        team: "guests"
                    },
                    {
                        id: "ev5",
                        minute: 35,
                        period: 2,
                        type: "goal",
                        playerName: "Козел Владимир",
                        team: "hosts"
                    },
                ]
            }
        ]
    },
    "match-day-3": {
        name: "3 тур",
        date: "28.08.2025",
        games: [
            {
                id: 'game-1',
                nameHosts: "Аякс",
                nameGuests: "Одиссей",
                goalsHosts: 4,
                goalsGuests: 1,
                referee: 'Домантович Александр',
                dateMatch: "28.08.2025",
                timeMatch: "19:00",
                events: [
                    {
                        id: "ev1",
                        minute: 12,
                        period: 1,
                        type: "goal",
                        playerName: "Попитич Арсений",
                        team: "guests",
                    },
                    {
                        id: "ev2",
                        minute: 20,
                        period: 1,
                        type: "goal",
                        playerName: "Лемешевский Даниил",
                        team: "hosts",
                    },
                    {
                        id: "ev3",
                        minute: 22,
                        period: 1,
                        type: "goal",
                        playerName: "Полюхович Геннадий",
                        team: "hosts",
                    },
                    {
                        id: "ev4",
                        minute: 44,
                        period: 2,
                        type: "goal",
                        playerName: "Ковалицкий Роман",
                        team: "hosts",
                    },
                    {
                        id: "ev5",
                        minute: 48,
                        period: 2,
                        type: "goal",
                        playerName: "Киселёв Дмитрий",
                        team: "hosts",
                    },
                ]
            },
            {
                id: 'game-2',
                nameHosts: "Пикант",
                nameGuests: "Spirits&Витязь",
                goalsHosts: 7,
                goalsGuests: 1,
                dateMatch: "28.08.2025",
                timeMatch: "19:00",
                referee: 'Гончаренко Александр',
                events: [
                    {
                        id: "ev1",
                        minute: 4,
                        period: 1,
                        type: "goal",
                        playerName: "Павелко",
                        team: "hosts"
                    },
                    {
                        id: "ev2",
                        minute: 8,
                        period: 1,
                        type: "goal",
                        playerName: "Вакульчик Олег",
                        team: "guests"
                    },
                    {
                        id: "ev3",
                        minute: 30,
                        period: 2,
                        type: "goal",
                        playerName: "Татаревич Артем",
                        team: "hosts"
                    },
                    {
                        id: "ev4",
                        minute: 33,
                        period: 2,
                        type: "goal",
                        playerName: "Свирид",
                        team: "hosts"
                    },
                    {
                        id: "ev5",
                        minute: 35,
                        period: 2,
                        type: "goal",
                        playerName: "Баран Валерий",
                        team: "hosts"
                    },
                    {
                        id: "ev6",
                        minute: 41,
                        period: 2,
                        type: "goal",
                        playerName: "Полюхович Григорий",
                        team: "hosts"
                    },
                    {
                        id: "ev7",
                        minute: 47,
                        period: 2,
                        type: "goal",
                        playerName: "Баран Валерий",
                        team: "hosts"
                    },
                    {
                        id: "ev8",
                        minute: 49,
                        period: 2,
                        type: "goal",
                        playerName: "Баран Валерий",
                        team: "hosts"
                    },
                ]
            },
            {
                id: 'game-3',
                nameHosts: "Пинскдрев",
                nameGuests: "Динамо",
                goalsHosts: 1,
                goalsGuests: 1,
                dateMatch: "28.08.2025",
                timeMatch: "20:00",
                referee: 'Домантович Александр',
                events: [
                    {
                        id: "ev1",
                        minute: 20,
                        period: 1,
                        type: "goal",
                        playerName: "Зырко Вячеслав",
                        team: "hosts"
                    },
                    {
                        id: "ev2",
                        minute: 50,
                        period: 2,
                        type: "goal",
                        playerName: "Ляшкевич Владислав",
                        team: "guests"
                    },
                ]
            },
            {
                id: 'game-4',
                nameHosts: "Арсенал",
                nameGuests: "Спутник Полесья",
                goalsHosts: 1,
                goalsGuests: 8,
                dateMatch: "28.08.2025",
                timeMatch: "20:00",
                referee: 'Гончаренко Александр',
                events: [
                    {
                        id: "ev1",
                        minute: 12,
                        period: 1,
                        type: "goal",
                        playerName: "Курьянович Денис",
                        team: "guests"
                    },
                    {
                        id: "ev2",
                        minute: 25,
                        period: 1,
                        type: "goal",
                        playerName: "Велесницкий Геннадий",
                        team: "guests"
                    },
                    {
                        id: "ev3",
                        minute: 29,
                        period: 2,
                        type: "goal",
                        playerName: "Трепачко Виктор",
                        team: "guests"
                    },
                    {
                        id: "ev4",
                        minute: 42,
                        period: 2,
                        type: "goal",
                        playerName: "Велесницкий Геннадий",
                        team: "guests"
                    },
                    {
                        id: "ev5",
                        minute: 43,
                        period: 2,
                        type: "goal",
                        playerName: "Сущинский Илья",
                        team: "guests"
                    },
                    {
                        id: "ev6",
                        minute: 44,
                        period: 2,
                        type: "goal",
                        playerName: "Одилбеков Гулзархан",
                        team: "guests"
                    },
                    {
                        id: "ev7",
                        minute: 45,
                        period: 2,
                        type: "goal",
                        playerName: "Одилбеков Гулзархан",
                        team: "guests"
                    },
                    {
                        id: "ev8",
                        minute: 46,
                        period: 2,
                        type: "goal",
                        playerName: "Андрукевич Виталий",
                        team: "hosts"
                    },
                    {
                        id: "ev9",
                        minute: 50,
                        period: 2,
                        type: "goal",
                        playerName: "Сущинский Илья",
                        team: "guests"
                    },
                ]
            },
        ]
    },
    "match-day-4": {
        name: "4 тур",
        date: "02.09.2025",
        games: [
            {
                id: 'game-1',
                nameHosts: "Spirits&Витязь",
                nameGuests: "Спутник Полесья",
                goalsHosts: 1,
                goalsGuests: 2,
                referee: 'Гончаренко Александр',
                dateMatch: "02.09.2025",
                timeMatch: "19:00",
                events: [
                    {
                        id: "ev1",
                        minute: 38,
                        period: 2,
                        type: "goal",
                        playerName: "Трепачко Виктор",
                        team: "guests",
                    },
                    {
                        id: "ev2",
                        minute: 46,
                        period: 2,
                        type: "goal",
                        playerName: "Одилбеков Гулзархан",
                        team: "guests",
                    },
                    {
                        id: "ev3",
                        minute: 50,
                        period: 2,
                        type: "goal",
                        playerName: "Резенко",
                        team: "hosts",
                    },
                ]
            },
            {
                id: 'game-2',
                nameHosts: "Арсенал",
                nameGuests: "Пинскдрев",
                goalsHosts: 1,
                goalsGuests: 8,
                dateMatch: "02.09.2025",
                timeMatch: "19:00",
                referee: 'Домантович Александр',
                events: [
                    {
                        id: "ev1",
                        minute: 12,
                        period: 1,
                        type: "goal",
                        playerName: "Шелест Юрий",
                        team: "guests"
                    },
                    {
                        id: "ev2",
                        minute: 18,
                        period: 1,
                        type: "goal",
                        playerName: "Зырко Вячеслав",
                        team: "guests"
                    },
                    {
                        id: "ev3",
                        minute: 25,
                        period: 1,
                        type: "goal",
                        playerName: "Лукьянович",
                        team: "hosts"
                    },
                    {
                        id: "ev4",
                        minute: 26,
                        period: 2,
                        type: "goal",
                        playerName: "Малец Дмитрий",
                        team: "guests"
                    },
                    {
                        id: "ev5",
                        minute: 30,
                        period: 2,
                        type: "goal",
                        playerName: "Курильчик Андрей",
                        team: "guests"
                    },
                    {
                        id: "ev6",
                        minute: 33,
                        period: 2,
                        type: "goal",
                        playerName: "Колесник Михаил",
                        team: "guests"
                    },
                    {
                        id: "ev7",
                        minute: 42,
                        period: 2,
                        type: "goal",
                        playerName: "Бойба Николай",
                        team: "guests"
                    },
                    {
                        id: "ev8",
                        minute: 46,
                        period: 2,
                        type: "goal",
                        playerName: "Зырко Вячеслав",
                        team: "guests"
                    },
                    {
                        id: "ev9",
                        minute: 50,
                        period: 2,
                        type: "goal",
                        playerName: "Малащийкий Александр",
                        team: "guests"
                    },
                ]
            },
            {
                id: 'game-3',
                nameHosts: "Аякс",
                nameGuests: "Динамо",
                goalsHosts: 0,
                goalsGuests: 2,
                dateMatch: "02.09.2025",
                timeMatch: "20:00",
                referee: 'Домантович Александр',
                events: [
                    {
                        id: "ev1",
                        minute: 36,
                        period: 2,
                        type: "goal",
                        playerName: "Ляшкевич Максим",
                        team: "guests"
                    },
                    {
                        id: "ev2",
                        minute: 50,
                        period: 2,
                        type: "goal",
                        playerName: "Козел Виталий",
                        team: "guests"
                    },
                ]
            },
            {
                id: 'game-4',
                nameHosts: "Пикант",
                nameGuests: "Одиссей",
                goalsHosts: 5,
                goalsGuests: 2,
                dateMatch: "02.09.2025",
                timeMatch: "20:00",
                referee: 'Гончаренко Александр',
                events: [
                    {
                        id: "ev1",
                        minute: 11,
                        period: 1,
                        type: "goal",
                        playerName: "Лодыга Александр",
                        team: "guests"
                    },
                    {
                        id: "ev2",
                        minute: 21,
                        period: 1,
                        type: "goal",
                        playerName: "Шпаковский Даниил",
                        team: "hosts"
                    },
                    {
                        id: "ev3",
                        minute: 25,
                        period: 1,
                        type: "goal",
                        playerName: "Пивень",
                        team: "guests"
                    },
                    {
                        id: "ev4",
                        minute: 27,
                        period: 2,
                        type: "goal",
                        playerName: "Свирид",
                        team: "hosts"
                    },
                    {
                        id: "ev5",
                        minute: 29,
                        period: 2,
                        type: "goal",
                        playerName: "Мовчун Павел",
                        team: "hosts"
                    },
                    {
                        id: "ev6",
                        minute: 36,
                        period: 2,
                        type: "goal",
                        playerName: "Бут-Гусаим Денис",
                        team: "hosts"
                    },
                    {
                        id: "ev7",
                        minute: 48,
                        period: 2,
                        type: "goal",
                        playerName: "Мовчун Павел",
                        team: "hosts"
                    },
                ]
            },
        ]
    },
    "match-day-5": {
        name: "5 тур",
        date: "04.09.2025",
        games: [
            {
                id: 'game-1',
                nameHosts: "Пикант",
                nameGuests: "Спутник-Полесья",
                goalsHosts: 0,
                goalsGuests: 2,
                referee: 'Домантович Александр',
                dateMatch: "04.09.2025",
                timeMatch: "19:00",
                events: [
                    {
                        id: "ev1",
                        minute: 21,
                        period: 1,
                        type: "goal",
                        playerName: "Сущинский Илья",
                        team: "guests",
                    },
                    {
                        id: "ev2",
                        minute: 25,
                        period: 1,
                        type: "goal",
                        playerName: "Ребковец Леонид",
                        team: "guests",
                    },

                ]
            },
            {
                id: 'game-2',
                nameHosts: "Одиссей",
                nameGuests: "Динамо",
                goalsHosts: 1,
                goalsGuests: 3,
                referee: 'Куратник Павел',
                dateMatch: "04.09.2025",
                timeMatch: "19:00",
                events: [
                    {
                        id: "ev1",
                        minute: 15,
                        period: 1,
                        type: "goal",
                        playerName: "Шевчук Олег",
                        team: "guests",
                    },
                    {
                        id: "ev2",
                        minute: 30,
                        period: 2,
                        type: "goal",
                        playerName: "Конончук Герман",
                        team: "hosts",
                    },
                    {
                        id: "ev3",
                        minute: 31,
                        period: 2,
                        type: "goal",
                        playerName: "Куделич Павел",
                        team: "guests",
                    },
                    {
                        id: "ev4",
                        minute: 42,
                        period: 2,
                        type: "goal",
                        playerName: "Козловский Алексей (в свои ворота)",
                        team: "guests",
                    },

                ]
            },
            {
                id: 'game-3',
                nameHosts: "Spirits&Витязь",
                nameGuests: "Пинскдрев",
                goalsHosts: 2,
                goalsGuests: 2,
                referee: 'Домантович Александр',
                dateMatch: "04.09.2025",
                timeMatch: "20:00",
                events: [
                    {
                        id: "ev1",
                        minute: 13,
                        period: 1,
                        type: "goal",
                        playerName: "Репецкий Александр",
                        team: "hosts",
                    },
                    {
                        id: "ev2",
                        minute: 27,
                        period: 2,
                        type: "goal",
                        playerName: "Кулина Станислав",
                        team: "guests",
                    },
                    {
                        id: "ev3",
                        minute: 36,
                        period: 2,
                        type: "goal",
                        playerName: "Кононович Дмитрий",
                        team: "guests",
                    },
                    {
                        id: "ev4",
                        minute: 44,
                        period: 2,
                        type: "goal",
                        playerName: "Воронин",
                        team: "hosts",
                    },

                ]
            },
            {
                id: 'game-4',
                nameHosts: "Аякс",
                nameGuests: "Арсенал",
                goalsHosts: 7,
                goalsGuests: 0,
                referee: 'Куратник Павел',
                dateMatch: "04.09.2025",
                timeMatch: "20:00",
                events: [
                    {
                        id: "ev1",
                        minute: 5,
                        period: 1,
                        type: "goal",
                        playerName: "Полюхович Геннадий",
                        team: "hosts",
                    },
                    {
                        id: "ev2",
                        minute: 10,
                        period: 1,
                        type: "goal",
                        playerName: "Лемешевский Даниил",
                        team: "hosts",
                    },
                    {
                        id: "ev3",
                        minute: 15,
                        period: 1,
                        type: "goal",
                        playerName: "Радионов Евгений",
                        team: "hosts",
                    },
                    {
                        id: "ev4",
                        minute: 21,
                        period: 1,
                        type: "goal",
                        playerName: "Сидоревич Владимир",
                        team: "hosts",
                    },
                    {
                        id: "ev5",
                        minute: 43,
                        period: 2,
                        type: "goal",
                        playerName: "Радионов Евгений",
                        team: "hosts",
                    },
                    {
                        id: "ev6",
                        minute: 44,
                        period: 2,
                        type: "goal",
                        playerName: "Полюхович Геннадий",
                        team: "hosts",
                    },
                    {
                        id: "ev7",
                        minute: 49,
                        period: 2,
                        type: "goal",
                        playerName: "Сидоревич Владимир",
                        team: "hosts",
                    },
                ]
            },

        ]
    },
    "match-day-6": {
        name: "6 тур",
        date: "09.09.2025",
        games: [
            {
                id: 'game-1',
                nameHosts: "Спутник-Полесья",
                nameGuests: "Пинскдрев",
                goalsHosts: 1,
                goalsGuests: 3,
                referee: 'Гончаренко Александр',
                dateMatch: "09.09.2025",
                timeMatch: "19:00",
                events: [
                    {
                        id: "ev1",
                        minute: 15,
                        period: 1,
                        type: "goal",
                        playerName: "Колесник Михаил",
                        team: "guests",
                    },
                    {
                        id: "ev2",
                        minute: 22,
                        period: 1,
                        type: "goal",
                        playerName: "Каменец Дмитрий",
                        team: "guests",
                    },
                    {
                        id: "ev3",
                        minute: 41,
                        period: 2,
                        type: "goal",
                        playerName: "Каменец Дмитрий",
                        team: "guests",
                    },
                    {
                        id: "ev4",
                        minute: 47,
                        period: 2,
                        type: "goal",
                        playerName: "Курьянович Денис",
                        team: "hosts",
                    },

                ]
            },
            {
                id: 'game-2',
                nameHosts: "Пикант",
                nameGuests: "Динамо",
                goalsHosts: 5,
                goalsGuests: 0,
                referee: 'Домантович Александр',
                dateMatch: "09.09.2025",
                timeMatch: "19:00",
                events: [
                    {
                        id: "ev1",
                        minute: 22,
                        period: 1,
                        type: "goal",
                        playerName: "Павелко",
                        team: "hosts",
                    },
                    {
                        id: "ev2",
                        minute: 27,
                        period: 2,
                        type: "goal",
                        playerName: "Головко Михаил",
                        team: "hosts",
                    },
                    {
                        id: "ev3",
                        minute: 31,
                        period: 2,
                        type: "goal",
                        playerName: "Павелко",
                        team: "hosts",
                    },
                    {
                        id: "ev4",
                        minute: 49,
                        period: 2,
                        type: "goal",
                        playerName: "Мовчун Павел",
                        team: "hosts",
                    },
                    {
                        id: "ev5",
                        minute: 50,
                        period: 2,
                        type: "goal",
                        playerName: "Павелко",
                        team: "hosts",
                    },

                ]
            },
            {
                id: 'game-3',
                nameHosts: "Одиссей",
                nameGuests: "Арсенал",
                goalsHosts: 8,
                goalsGuests: 0,
                referee: 'Гончаренко Александр',
                dateMatch: "09.09.2025",
                timeMatch: "20:00",
                events: [
                    {
                        id: "ev1",
                        minute: 6,
                        period: 1,
                        type: "goal",
                        playerName: "Манюк Александр",
                        team: "hosts",
                    },
                    {
                        id: "ev2",
                        minute: 15,
                        period: 1,
                        type: "goal",
                        playerName: "Ляшук",
                        team: "hosts",
                    },
                    {
                        id: "ev3",
                        minute: 21,
                        period: 1,
                        type: "goal",
                        playerName: "Ляшук",
                        team: "hosts",
                    },
                    {
                        id: "ev4",
                        minute: 24,
                        period: 1,
                        type: "goal",
                        playerName: "Манюк Александр",
                        team: "hosts",
                    },
                    {
                        id: "ev5",
                        minute: 30,
                        period: 2,
                        type: "goal",
                        playerName: "Ляшук",
                        team: "hosts",
                    },
                    {
                        id: "ev6",
                        minute: 34,
                        period: 2,
                        type: "goal",
                        playerName: "Пивень",
                        team: "hosts",
                    },
                    {
                        id: "ev7",
                        minute: 36,
                        period: 2,
                        type: "goal",
                        playerName: "Цебрук Назар",
                        team: "hosts",
                    },
                    {
                        id: "ev8",
                        minute: 50,
                        period: 2,
                        type: "goal",
                        playerName: "Колбович",
                        team: "hosts",
                    },
                ]
            },
            {
                id: 'game-4',
                nameHosts: "Spirits&Витязь",
                nameGuests: "Аякс",
                goalsHosts: 1,
                goalsGuests: 0,
                referee: 'Домантович Александр',
                dateMatch: "09.09.2025",
                timeMatch: "20:00",
                events: [
                    {
                        id: "ev1",
                        minute: 13,
                        period: 1,
                        type: "goal",
                        playerName: "Воронин",
                        team: "hosts",
                    }
                ]
            },
        ]
    },
    "match-day-7": {
        name: "7 тур",
        date: "11.09.2025",
        games: [
            {
                id: 'game-1',
                nameHosts: "Динамо",
                nameGuests: "Арсенал",
                goalsHosts: 5,
                goalsGuests: 1,
                referee: 'Куратник Павел',
                dateMatch: "11.09.2025",
                timeMatch: "19:00",
                events: [
                    {
                        id: "ev1",
                        minute: 8,
                        period: 1,
                        type: "goal",
                        playerName: "Козел Виталий",
                        team: "hosts",
                    },
                    {
                        id: "ev2",
                        minute: 19,
                        period: 1,
                        type: "goal",
                        playerName: "Шиг Даниил",
                        team: "hosts",
                    },
                    {
                        id: "ev3",
                        minute: 32,
                        period: 2,
                        type: "goal",
                        playerName: "Редько",
                        team: "hosts",
                    },
                    {
                        id: "ev4",
                        minute: 40,
                        period: 2,
                        type: "goal",
                        playerName: "Андрукевич Виталий",
                        team: "guests",
                    },
                    {
                        id: "ev5",
                        minute: 48,
                        period: 2,
                        type: "goal",
                        playerName: "Шиг Даниил",
                        team: "hosts",
                    },
                    {
                        id: "ev6",
                        minute: 49,
                        period: 2,
                        type: "goal",
                        playerName: "Ляшкевич Владислав",
                        team: "hosts",
                    },

                ]
            },

        ]
    },


}
