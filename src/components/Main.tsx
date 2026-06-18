import {Box, Container} from "@mui/material";
import {LeagueTable} from "./LeagueTable.tsx";
import {AjaxCard} from "./AjaxCard.tsx";


export const Main = () => {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: 3,
                backgroundColor: (theme) => theme.palette.background.default,
            }}
        >
            <Container maxWidth="lg">
                <LeagueTable/>
                <AjaxCard/>
            </Container>
        </Box>
    )
}