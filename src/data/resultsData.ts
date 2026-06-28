import {type MatchDayId} from "../common/routes.ts";

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

export type ResultsDataType = Record<MatchDayId, MatchDay>;

export const RESULTS_DATA: ResultsDataType = {
    md1: {
        name: "1 тур",
        date: "21.08.2025",
        games: [
            // {
            //     nameHosts: "Пикант",
            //     nameGuests: "Арсенал",
            //     goalsHosts: 17,
            //     goalsGuests: 2,
            //     referee: 'Гончаренко Александр',
            //     dateMatch: "21.08.2025",
            //     timeMatch: "19:00",
            //     events: [
            //         {
            //             id: "ev1",
            //             minute: 14,
            //             period: 1, // 1-й тайм
            //             type: "goal",
            //             playerName: "Букайо Сака",
            //             team: "hosts",
            //         },
            //         {
            //             id: "ev2",
            //             minute: 42,
            //             period: 1, // 1-й тайм
            //             type: "yellow_card",
            //             playerName: "Энцо Фернандес",
            //             team: "guests"
            //         },
            //         {
            //             id: "ev3",
            //             minute: 47, // Например, 45+2 минута
            //             period: 1,  // Все еще 1-й тайм (компенсированное время)
            //             type: "goal",
            //             playerName: "Габриэл Жезус",
            //             team: "hosts"
            //         },
            //         {
            //             id: "ev5",
            //             minute: 88,
            //             period: 2, // 2-й тайм
            //             type: "goal",
            //             playerName: "Коул Палмер",
            //             team: "guests",
            //             isPenalty: true
            //         }
            //     ]
            // },
            {
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
}
