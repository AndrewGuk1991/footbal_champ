import type {TeamData} from "../data/teamsData.ts";

type PlayerWithGoals = {
    name: string;
    surname: string;
    number: number;
    goals: number;
    team: string;
};

export const getPlayersWithGoals = (teamsData: Record<string, TeamData>): PlayerWithGoals[] => {
    const playersWithGoals: PlayerWithGoals[] = [];

    Object.values(teamsData).forEach(teamData => {
        const teamName = teamData.title;

        teamData.defenders
            .filter(defender => defender.goals !== undefined && defender.goals > 0)
            .forEach(defender => {
                playersWithGoals.push({
                    ...defender,
                    team: teamName,
                    goals: defender.goals!
                });
            });

        teamData.midfielders
            .filter(midfielder => midfielder.goals !== undefined && midfielder.goals > 0)
            .forEach(midfielder => {
                playersWithGoals.push({
                    ...midfielder,
                    team: teamName,
                    goals: midfielder.goals!
                });
            });

        teamData.forwards
            .filter(forward => forward.goals !== undefined && forward.goals > 0)
            .forEach(forward => {
                playersWithGoals.push({
                    ...forward,
                    team: teamName,
                    goals: forward.goals!
                });
            });
    });

    return playersWithGoals;
}