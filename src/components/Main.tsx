import {Box, Container} from "@mui/material";
import {LeagueTable} from "./LeagueTable.tsx";
import {Teams} from "./Teams.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {GameSchedule} from "./GameSchedule.tsx";
import {NotFound} from "./NotFound.tsx";

export const PATH = {
    TEAMS: '/teams',
    TABLE: '/table',
    SCHEDULE: '/schedule',
    NOTFOUND: '/notfound'
} as const

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
                <Routes>
                    <Route path={'/'} element={<Navigate to={PATH.SCHEDULE} replace/>}/>
                    <Route path={PATH.TEAMS} element={<Teams/>}/>
                    <Route path={PATH.TABLE} element={<LeagueTable/>}/>
                    <Route path={PATH.SCHEDULE} element={<GameSchedule/>}/>
                    <Route path={PATH.NOTFOUND} element={<NotFound/>}/>
                    <Route path="*" element={<Navigate to={PATH.NOTFOUND}/>} />
                </Routes>
            </Container>
        </Box>
    )
}