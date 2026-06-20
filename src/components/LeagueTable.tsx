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

// 1. Выносим команды в чистый массив
const teamsList = ['Пикант', 'Пинскдрев', 'Спутник', 'Аякс', 'Динамо', 'Одиссей', 'Витязь', 'Арсенал'];

// 2. Ровно 9 столбцов (добавили 'Н' для соответствия футбольной статистике)
const columns = ['№', 'Команда', 'И', 'В', 'Н', 'П', 'Мз', 'Разн', 'О'];

// 3. Правильно генерируем строки: одна команда на одну строку
export const rows = Array.from({ length: teamsList.length }, (_, index) => ({
    id: index + 1,
    team: teamsList[index], // Теперь здесь строка "Пикант", "Пинскдрев" и т.д.
    mp: 10,
    w: 5,
    d: 3,
    l: 2,
    gf: 15,
    dif: 3,
    pts: 18
}));

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
                                // ИСПРАВЛЕНО: проверяем русское слово 'Команда'
                                align={col === 'Команда' ? 'left' : 'center'}
                                sx={{ fontWeight: 'bold' }}
                            >
                                {col}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                {/* Тело таблицы (8 строк по количеству команд) */}
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} hover>
                            <TableCell align="center">{row.id}</TableCell>
                            {/* ИСПРАВЛЕНО: выводим row.team напрямую */}
                            <TableCell align="left" sx={{ fontWeight: 'medium' }}>{row.team}</TableCell>
                            <TableCell align="center">{row.mp}</TableCell>
                            <TableCell align="center">{row.w}</TableCell>
                            <TableCell align="center">{row.d}</TableCell>
                            <TableCell align="center">{row.l}</TableCell>
                            <TableCell align="center">{row.gf}</TableCell>
                            <TableCell align="center">{row.dif}</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>{row.pts}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
