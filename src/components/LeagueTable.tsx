import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Box
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
            variant="outlined"
            sx={{
                width: '100%',
                maxWidth: 800,
                // ИСПРАВЛЕНО: '20px auto' центрирует контейнер на ПК, когда экран шире 800px
                margin: '20px auto',
                borderRadius: 2,
                backgroundColor: (theme) => theme.palette.background.paper,
                overflow: 'hidden'
            }}
        >
            {/* Заголовок остаётся прижат к левому краю внутри самой таблицы */}
            <Typography variant="h5" sx={{ padding: '24px 24px 12px 24px', fontWeight: 'bold' }}>
                Турнирная таблица
            </Typography>

            <Box sx={{ width: '100%' }}>
                <Table
                    aria-label="football standings table"
                    sx={{
                        width: '100%',
                        tableLayout: 'auto'
                    }}
                >
                    <TableHead>
                        <TableRow
                            sx={{
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#f5f5f5'
                            }}
                        >
                            {columns.map((col) => {
                                const isNo = col === '№';
                                const isTeam = col === 'Команда';

                                return (
                                    <TableCell
                                        key={col}
                                        align={isTeam ? 'left' : 'center'}
                                        sx={{
                                            fontWeight: 'bold',
                                            color: (theme) => theme.palette.text.primary,
                                            borderColor: (theme) => theme.palette.divider,
                                            px: { xs: '4px', sm: '16px' },
                                            py: { xs: '10px', sm: '16px' },
                                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                            width: isNo ? '6%' : isTeam ? '34%' : '7.5%',
                                        }}
                                    >
                                        {col}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {sortedTeams.map((team, index) => (
                            <TableRow
                                key={team.id}
                                hover
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell
                                    align="center"
                                    sx={{
                                        color: 'text.secondary',
                                        borderColor: (theme) => theme.palette.divider,
                                        px: { xs: '4px', sm: '16px' },
                                        fontSize: { xs: '0.75rem', sm: '0.875rem' }
                                    }}
                                >
                                    {index + 1}
                                </TableCell>

                                <TableCell
                                    align="left"
                                    sx={{
                                        fontWeight: 'medium',
                                        color: (theme) => theme.palette.text.primary,
                                        borderColor: (theme) => theme.palette.divider,
                                        px: { xs: '4px', sm: '16px' },
                                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}
                                >
                                    {team.title}
                                </TableCell>

                                <TableCell align="center" sx={{ borderColor: (theme) => theme.palette.divider, px: { xs: '4px', sm: '16px' }, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{team.games}</TableCell>
                                <TableCell align="center" sx={{ borderColor: (theme) => theme.palette.divider, px: { xs: '4px', sm: '16px' }, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{team.wins}</TableCell>
                                <TableCell align="center" sx={{ borderColor: (theme) => theme.palette.divider, px: { xs: '4px', sm: '16px' }, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{team.draws}</TableCell>
                                <TableCell align="center" sx={{ borderColor: (theme) => theme.palette.divider, px: { xs: '4px', sm: '16px' }, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{team.loses}</TableCell>
                                <TableCell align="center" sx={{ color: 'text.secondary', borderColor: (theme) => theme.palette.divider, px: { xs: '4px', sm: '16px' }, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{team.goalsScored}</TableCell>
                                <TableCell align="center" sx={{ color: 'text.secondary', borderColor: (theme) => theme.palette.divider, px: { xs: '4px', sm: '16px' }, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{team.goalsAgainst}</TableCell>
                                <TableCell align="center" sx={{ color: 'text.secondary', borderColor: (theme) => theme.palette.divider, fontWeight: 'medium', px: { xs: '4px', sm: '16px' }, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>{team.goalsDifference}</TableCell>

                                <TableCell
                                    align="center"
                                    sx={{
                                        fontWeight: 'bold',
                                        borderColor: (theme) => theme.palette.divider,
                                        color: (theme) => theme.palette.primary.main,
                                        px: { xs: '4px', sm: '16px' },
                                        fontSize: { xs: '0.8rem', sm: '1.05rem' }
                                    }}
                                >
                                    {team.points}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </TableContainer>
    );
}
