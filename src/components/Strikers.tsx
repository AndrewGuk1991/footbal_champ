import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";


export const Strikers = () => {

    const columns = ['Игрок', 'Команда', 'Голы']

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
                    <TableRow>

                    </TableRow>
                </TableBody>
            </Table>
            <TableBody>

            </TableBody>
        </TableContainer>

    )
}