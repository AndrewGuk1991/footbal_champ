import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box } from "@mui/material";
import { getPlayersWithGoals } from "../common/getPlayersWithGoals.ts";
import { TEAMS_DATA } from "../data/teamsData.ts";
import { alpha } from "@mui/material/styles";

export const Strikers = () => {

    const columns = ['#', 'Игрок', 'Команда', 'Голы'];

    const sortedPlayers = getPlayersWithGoals(TEAMS_DATA).sort((a, b) => b.goals - a.goals);

    return (
        <TableContainer
            component={Paper}
            variant="outlined"
            sx={{
                // ИСПРАВЛЕНО: Возвращено центрирование таблицы по центру экрана на ПК
                margin: '20px auto',
                width: '100%',
                maxWidth: 600,
                borderRadius: 2,
                backgroundColor: (theme) => theme.palette.background.paper,
                borderColor: (theme) => theme.palette.divider,
                overflow: 'hidden'
            }}
        >
            <Typography variant="h5" sx={{ padding: '24px 24px 12px 24px', fontWeight: 'bold', color: (theme) => theme.palette.text.primary }}>
                Бомбардиры
            </Typography>

            <Box sx={{ width: '100%' }}>
                <Table
                    aria-label="top strikers table"
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
                            {columns.map((column, index) => (
                                <TableCell
                                    key={column}
                                    sx={{
                                        fontWeight: 'bold',
                                        color: (theme) => theme.palette.text.primary,
                                        borderColor: (theme) => theme.palette.divider,
                                        px: { xs: '8px', sm: '16px' },
                                        py: { xs: '10px', sm: '16px' },
                                        fontSize: { xs: '0.8rem', sm: '0.875rem' },
                                        width: index === 0 ? '10%' : index === 1 ? '46%' : index === 2 ? '26%' : '18%'
                                    }}
                                    align={index === 3 ? 'center' : 'left'}
                                >
                                    {column}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedPlayers.map((player, index) => {
                            const isFirstPlace = index === 0; // Флаг для определения лучшего бомбардира

                            return (
                                <TableRow
                                    key={`${player.surname}_${player.team}_${index}`}
                                    sx={{
                                        '&:last-child td, &:last-child th': { border: 0 },
                                        // ИСПРАВЛЕНО: Выделение первой строчки легким синим градиентом
                                        backgroundColor: (theme) =>
                                            isFirstPlace
                                                ? alpha(theme.palette.primary.main, 0.06)
                                                : 'transparent',

                                        '&:hover': {
                                            backgroundColor: (theme) =>
                                                isFirstPlace
                                                    ? alpha(theme.palette.primary.main, 0.1) // Чуть ярче ховер для лидера
                                                    : theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)'
                                        }
                                    }}
                                >
                                    {/* Порядковый номер */}
                                    <TableCell
                                        align="left"
                                        sx={{
                                            // Если первое место — подсвечиваем номер синим
                                            color: (theme) => isFirstPlace ? theme.palette.primary.main : 'text.secondary',
                                            borderColor: (theme) => theme.palette.divider,
                                            px: { xs: '8px', sm: '16px' },
                                            fontSize: { xs: '0.85rem', sm: '0.95rem' },
                                            fontWeight: isFirstPlace ? 'bold' : 'medium',
                                            width: '50px'
                                        }}
                                    >
                                        {index + 1}
                                    </TableCell>

                                    {/* Имя и фамилия */}
                                    <TableCell
                                        align="left"
                                        sx={{
                                            fontWeight: isFirstPlace ? 'bold' : 'medium',
                                            color: (theme) => theme.palette.text.primary,
                                            borderColor: (theme) => theme.palette.divider,
                                            px: { xs: '8px', sm: '16px' },
                                            fontSize: { xs: '0.85rem', sm: '0.95rem' },
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}
                                    >
                                        {player.surname} {player.name}
                                    </TableCell>

                                    {/* Название команды */}
                                    <TableCell
                                        align="left"
                                        sx={{
                                            color: isFirstPlace ? 'text.primary' : 'text.secondary',
                                            borderColor: (theme) => theme.palette.divider,
                                            px: { xs: '8px', sm: '16px' },
                                            fontSize: { xs: '0.85rem', sm: '0.95rem' },
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}
                                    >
                                        {player.team}
                                    </TableCell>

                                    {/* Количество голов + Значок Золотой бутсы */}
                                    <TableCell
                                        align="center"
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: { xs: '0.95rem', sm: '1.05rem' },
                                            borderColor: (theme) => theme.palette.divider,
                                            px: { xs: '8px', sm: '16px' },
                                            color: (theme) => theme.palette.primary.main
                                        }}
                                    >
                                        <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                                            {player.goals}
                                            {/* ИСПРАВЛЕНО: Элегантный значок золотой бутсы/кубка рядом с лучшим результатом */}
                                            {isFirstPlace && (
                                                <Typography
                                                    component="span"
                                                    sx={{
                                                        fontSize: { xs: '1rem', sm: '1.15rem' },
                                                        lineHeight: 1,
                                                        filter: 'drop-shadow(0px 0px 4px rgba(255, 193, 7, 0.4))', // Легкое золотое свечение
                                                        userSelect: 'none'
                                                    }}
                                                >
                                                </Typography>
                                            )}
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Box>
        </TableContainer>
    );
};
