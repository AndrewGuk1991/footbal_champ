
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

export type MatchWeekId = `mw${number}`;


export const WEEKS_COUNT = 14;
export const MATCH_WEEKS_IDS = Array.from(
    { length: WEEKS_COUNT },
    (_, i) => `mw${i + 1}` as MatchWeekId
);

// Результат: { mw1: 'match-week-1', mw2: 'match-week-2', ... }
export const MW_ROUTES = MATCH_WEEKS_IDS.reduce((acc, id, index) => {
    acc[id] = `match-week-${index + 1}`;
    return acc;
}, {} as Record<MatchWeekId, string>);
