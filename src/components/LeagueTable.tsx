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
                    {Object.keys(TEAMS_DATA).map((teamKey) => (
                        <TableRow key={teamKey} hover>
                            <TableCell align="center">{TEAMS_DATA[teamKey].id}</TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'medium' }}>{TEAMS_DATA[teamKey].title}</TableCell>
                            <TableCell align="center">{TEAMS_DATA[teamKey].games}</TableCell>
                            <TableCell align="center">{TEAMS_DATA[teamKey].wins}</TableCell>
                            <TableCell align="center">{TEAMS_DATA[teamKey].draws}</TableCell>
                            <TableCell align="center">{TEAMS_DATA[teamKey].loses}</TableCell>
                            <TableCell align="center">{TEAMS_DATA[teamKey].goalsScored}</TableCell>
                            <TableCell align="center">{TEAMS_DATA[teamKey].goalsAgainst}</TableCell>
                            <TableCell align="center">{TEAMS_DATA[teamKey].goalsDifference}</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>{TEAMS_DATA[teamKey].points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
