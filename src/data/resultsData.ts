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
            }
        ]
    },


}
