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
import { TEAMS_DATA } from "../data/teamsData.ts";

const columns = ['№', 'Команда', 'И', 'В', 'Н', 'П', 'Мз', 'Мп', 'Разн', 'О'];

export const LeagueTable = () => {

    const sortedTeams = Object.values(TEAMS_DATA)
        .sort((a, b) => {
            if (b.points !== a.points) {
                return b.points - a.points;
            }

            const diffA = parseInt(a.goalsDifference, 10) || 0;
            const diffB = parseInt(b.goalsDifference, 10) || 0;

            return diffB - diffA;
        });

    return (
        <TableContainer
            component={Paper}
            variant="outlined" // Современный плоский стиль без тяжелых теней
            sx={{
                maxWidth: 800,
                margin: '20px auto',
                borderRadius: 2,
                backgroundColor: (theme) => theme.palette.background.paper
            }}
        >
            {/* Добавили отступы и жирность заголовку, чтобы он подходил под общий стиль проекта */}
            <Typography variant="h5" sx={{ padding: '24px 24px 12px 24px', fontWeight: 'bold' }}>
                Турнирная таблица
            </Typography>

            <Table aria-label="football standings table">
                <TableHead>
                    <TableRow
                        sx={{
                            // Мягкая подсветка шапки таблицы для разделения контента
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#f5f5f5'
                        }}
                    >
                        {columns.map((col) => (
                            <TableCell
                                key={col}
                                align={col === 'Команда' ? 'left' : 'center'}
                                sx={{
                                    fontWeight: 'bold',
                                    color: (theme) => theme.palette.text.primary,
                                    borderColor: (theme) => theme.palette.divider
                                }}
                            >
                                {col}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {sortedTeams.map((team, index) => (
                        <TableRow
                            key={team.id}
                            hover // Встроенный ховер MUI автоматически адаптируется под темную тему
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center" sx={{ color: 'text.secondary', borderColor: (theme) => theme.palette.divider }}>
                                {index + 1}
                            </TableCell>

                            <TableCell align="left" sx={{ fontWeight: 'medium', color: (theme) => theme.palette.text.primary, borderColor: (theme) => theme.palette.divider }}>
                                {team.title}
                            </TableCell>

                            <TableCell align="center" sx={{ borderColor: (theme) => theme.palette.divider }}>{team.games}</TableCell>
                            <TableCell align="center" sx={{ borderColor: (theme) => theme.palette.divider }}>{team.wins}</TableCell>
                            <TableCell align="center" sx={{ borderColor: (theme) => theme.palette.divider }}>{team.draws}</TableCell>
                            <TableCell align="center" sx={{ borderColor: (theme) => theme.palette.divider }}>{team.loses}</TableCell>
                            <TableCell align="center" sx={{ color: 'text.secondary', borderColor: (theme) => theme.palette.divider }}>{team.goalsScored}</TableCell>
                            <TableCell align="center" sx={{ color: 'text.secondary', borderColor: (theme) => theme.palette.divider }}>{team.goalsAgainst}</TableCell>

                            <TableCell
                                align="center"
                                sx={{
                                    color: 'text.secondary',
                                    borderColor: (theme) => theme.palette.divider,
                                    // Слегка подсвечиваем положительную разницу мячей зеленым, а отрицательную красным (опционально)
                                    fontWeight: 'medium'
                                }}
                            >
                                {team.goalsDifference}
                            </TableCell>

                            <TableCell
                                align="center"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: '1.05rem',
                                    borderColor: (theme) => theme.palette.divider,
                                    // Главный акцент: красивое выделение очков фиолетовым цветом из вашей темы
                                    color: (theme) => theme.palette.primary.main
                                }}
                            >
                                {team.points}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
