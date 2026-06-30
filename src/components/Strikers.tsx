import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { getPlayersWithGoals } from "../common/getPlayersWithGoals.ts";
import { TEAMS_DATA } from "../data/teamsData.ts";

export const Strikers = () => {

    const columns = ['#', 'Игрок', 'Команда', 'Голы'];

    const sortedPlayers = getPlayersWithGoals(TEAMS_DATA).sort((a, b) => b.goals - a.goals);

    return (
        <TableContainer
            component={Paper}
            variant="outlined" // Используем аутлайн вместо жесткой тени для чистого современного вида
            sx={{
                margin: '20px auto',
                width: 'max-content',
                maxWidth: '100%',
                borderRadius: 2,
                // Позволяем теме самой управлять фоном контейнера Paper
                backgroundColor: (theme) => theme.palette.background.paper
            }}
        >
            <Typography variant="h5" sx={{ padding: '24px 24px 12px 24px', fontWeight: 'bold' }}>
                Бомбардиры
            </Typography>
            <Table>
                <TableHead>
                    <TableRow
                        sx={{
                            // Динамически подсвечиваем шапку: легкий белый шум для темной темы и мягкий серый для светлой
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : '#f5f5f5'
                        }}
                    >
                        {columns.map((column, index) => (
                            <TableCell
                                key={column}
                                sx={{
                                    fontWeight: 'bold',
                                    // Гарантируем правильный цвет заголовков колонок
                                    color: (theme) => theme.palette.text.primary,
                                    borderColor: (theme) => theme.palette.divider
                                }}
                                align={index === 3 ? 'center' : 'left'}
                            >
                                {column}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sortedPlayers.map((player, index) => (
                        <TableRow
                            key={`${player.surname}_${player.team}_${index}`}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                                // Добавляем легкую подсветку строки при наведении для удобства чтения таблицы
                                '&:hover': {
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)'
                                }
                            }}
                        >
                            <TableCell align="left" sx={{ color: 'text.secondary', width: '50px', borderColor: (theme) => theme.palette.divider }}>
                                {index + 1}
                            </TableCell>

                            <TableCell align="left" sx={{ fontWeight: 'medium', color: (theme) => theme.palette.text.primary, borderColor: (theme) => theme.palette.divider }}>
                                {player.surname} {player.name}
                            </TableCell>

                            <TableCell align="left" sx={{ color: 'text.secondary', borderColor: (theme) => theme.palette.divider }}>
                                {player.team}
                            </TableCell>

                            <TableCell
                                align="center"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: '1.05rem',
                                    borderColor: (theme) => theme.palette.divider,
                                    // Выделяем количество голов основным цветом вашей темы (фиолетовым)
                                    color: (theme) => theme.palette.primary.main
                                }}
                            >
                                {player.goals}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
