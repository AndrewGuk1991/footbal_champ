import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {getPlayersWithGoals} from "../common/getPlayersWithGoals.ts";
import {TEAMS_DATA} from "../data/teamsData.ts";


export const Strikers = () => {

    const columns = ['Игрок', 'Команда', 'Голы']

    const sortedPlayers = getPlayersWithGoals(TEAMS_DATA).sort((a, b) => b.goals - a.goals)

    return (
        <TableContainer component={Paper} sx={{margin: '20px auto', maxWidth: '60%'}}>
            <Typography variant="h4" sx={{padding: '30px'}}>
                Бомбардиры
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map(column => (
                            <TableCell
                                key={column}
                                sx={{ fontWeight: 'bold' }}
                                align={'center'}
                            >
                                {column}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        sortedPlayers.map(player => (
                            <TableRow key={player.number}>
                                <TableCell align={'center'}>{player.surname} {player.name}</TableCell>
                                <TableCell align={'center'}>{player.team}</TableCell>
                                <TableCell align={'center'}>{player.goals}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            <TableBody>

            </TableBody>
        </TableContainer>

    )
}