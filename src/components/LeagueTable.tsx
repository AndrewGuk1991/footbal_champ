import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography
} from '@mui/material';
import {TEAMS_DATA} from "../data/teamsData.ts";

const columns = ['№', 'Команда', 'И', 'В', 'Н', 'П', 'Мз', 'Мп', 'Разн', 'О'];

export const LeagueTable = () => {

    const sortedTeams = Object.values(TEAMS_DATA)
        .sort((a, b) => {
            // Сначала сортируем по очкам (по убыванию)
            if (b.points !== a.points) {
                return b.points - a.points;
            }

            // Если очки равны, преобразуем строки с разницей мячей в числа и сортируем по убыванию
            const diffA = parseInt(a.goalsDifference, 10) || 0;
            const diffB = parseInt(b.goalsDifference, 10) || 0;

            return diffB - diffA;
        });

    return (
        <TableContainer component={Paper} sx={{ maxWidth: 800, margin: '20px auto' }}>
            <Typography variant="h4">
             Турнирная таблица
            </Typography>
            <Table aria-label="football standings table">
                <TableHead>
                    <TableRow>
                        {columns.map((col) => (
                            <TableCell
                                key={col}
                                align={col === 'Команда' ? 'left' : 'center'}
                                sx={{ fontWeight: 'bold' }}
                            >
                                {col}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {sortedTeams.map((team, index) => (
                        <TableRow key={team.id} hover>
                            <TableCell align="center">{index + 1}</TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'medium' }}>{team.title}</TableCell>
                            <TableCell align="center">{team.games}</TableCell>
                            <TableCell align="center">{team.wins}</TableCell>
                            <TableCell align="center">{team.draws}</TableCell>
                            <TableCell align="center">{team.loses}</TableCell>
                            <TableCell align="center">{team.goalsScored}</TableCell>
                            <TableCell align="center">{team.goalsAgainst}</TableCell>
                            <TableCell align="center">{team.goalsDifference}</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>{team.points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
