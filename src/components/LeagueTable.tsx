
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';

// 8 столбцов (например, для футбольной таблицы)
const columns = [' ', 'Команда', 'И', 'В', 'П', 'Мз', 'Мп', 'Разн', 'О'];

// Генерируем 9 строк тестовых данных
const rows = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    team: ['Пикант', 'Пинскдрев', 'Спутник Полесья', 'Аякс', 'Динамо', 'Одиссей', 'Витязь', 'Арсенал'],
    mp: 10, w: 5, d: 3, l: 2, gf: 15, dif: 3, pts: 18
}));

export const LeagueTable = () => {
    return (
        <TableContainer component={Paper} sx={{ maxWidth: 800, margin: '20px auto' }}>
            <Table aria-label="football standings table">
                {/* Шапка таблицы (8 столбцов) */}
                <TableHead>
                    <TableRow>
                        {columns.map((col) => (
                            <TableCell key={col} align={col === 'Team' ? 'left' : 'center'} sx={{ fontWeight: 'bold' }}>
                                {col}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                {/* Тело таблицы (9 строк) */}
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id} hover>
                            <TableCell align="center">{row.id}</TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'medium' }}>{row.team[row.id - 1]}</TableCell>
                            <TableCell align="center">{row.mp}</TableCell>
                            <TableCell align="center">{row.w}</TableCell>
                            <TableCell align="center">{row.d}</TableCell>
                            <TableCell align="center">{row.l}</TableCell>
                            <TableCell align="center">{row.gf}</TableCell>
                            <TableCell align="center" >{row.dif}</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>{row.pts}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

