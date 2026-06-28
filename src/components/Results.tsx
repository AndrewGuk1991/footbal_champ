import {Paper, Typography} from "@mui/material";
import {GameResults} from "./GameResults.tsx";


export const Results = () => {
    // const resultItems = [{}]

    return (
        <Paper sx={{maxWidth: '50%', p: 3, margin: '20px auto'}}>
            <Typography variant="h4" sx={{mb: 2}}>Результаты матчей:</Typography>
            <GameResults />
        </Paper>
    )
}