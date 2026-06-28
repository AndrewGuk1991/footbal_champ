import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { getPlayersWithGoals } from "../common/getPlayersWithGoals.ts";
import { TEAMS_DATA } from "../data/teamsData.ts";

export const Strikers = () => {

    const columns = ['#', 'Игрок', 'Команда', 'Голы'];

    const sortedPlayers = getPlayersWithGoals(TEAMS_DATA).sort((a, b) => b.goals - a.goals);

    return (
        <TableContainer component={Paper} sx={{
            margin: '20px auto',
            width: 'max-content',
            maxWidth: '100%',
            borderRadius: 2,
            boxShadow: 3    }}>
            <Typography variant="h5" sx={{ padding: '24px 24px 12px 24px', fontWeight: 'bold' }}>
                Бомбардиры
            </Typography>
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                        {columns.map((column, index) => (
                            <TableCell
                                key={column}
                                sx={{ fontWeight: 'bold' }}
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
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left" sx={{ color: 'text.secondary', width: '50px' }}>
                                {index + 1}
                            </TableCell>

                            <TableCell align="left" sx={{ fontWeight: 'medium' }}>
                                {player.surname} {player.name}
                            </TableCell>

                            <TableCell align="left" sx={{ color: 'text.secondary' }}>
                                {player.team}
                            </TableCell>

                            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: '1.05rem' }}>
                                {player.goals}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
