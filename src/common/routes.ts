
export const APP_ROUTES = {
    TEAMS: '/teams',
    TABLE: '/table',
    SCHEDULE: '/schedule',
    NOTFOUND: '/notfound',
    STRIKERS: '/strikers',
    RESULTS: '/results',
} as const


export const TEAMS_ROUTES = {
    AJAX: 'ajax',
    PINSKDREW: 'pinskdrew',
    SPUTNIK: 'sputnik',
    PIKANT: 'pikant',
    DINAMO: 'dinamo',
    ODYSSEY: 'odyssey',
    VITYAZ: 'vityaz',
    ARSENAL: 'arsenal',
} as const

export type MatchDayId = `md${number}`;

export const TOTAL_MATCH_DAYS = 14;

// Массив ['md1', 'md2', ..., 'md14'] для построения навигации в UI
export const MATCH_DAYS_IDS = Array.from(
    { length: TOTAL_MATCH_DAYS },
    (_, i) => `md${i + 1}` as MatchDayId
);

// Сгенерированный объект роутов: { md1: 'match-day-1', md2: 'match-day-2', ... }
export const MD_ROUTES = MATCH_DAYS_IDS.reduce((acc, id, index) => {
    acc[id] = `match-day-${index + 1}`;
    return acc;
}, {} as Record<MatchDayId, string>);
