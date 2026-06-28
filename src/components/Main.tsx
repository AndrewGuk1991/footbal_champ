import {Box, Container} from "@mui/material";
import {LeagueTable} from "./LeagueTable.tsx";
import {Teams} from "./Teams.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {GameSchedule} from "./GameSchedule.tsx";
import {NotFound} from "./NotFound.tsx";
import {APP_ROUTES} from "../common/routes.ts";
import {Strikers} from "./Strikers.tsx";
import {Results} from "./Results.tsx";

export const Main = () => {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                backgroundColor: (theme) => theme.palette.background.default,
            }}
        >
            <Container maxWidth="lg">
                <Routes>
                    <Route path={'/'} element={<Navigate to={APP_ROUTES.SCHEDULE} replace/>}/>
                    <Route path={`${APP_ROUTES.TEAMS}/*`} element={<Teams/>}/>
                    <Route path={APP_ROUTES.TABLE} element={<LeagueTable/>}/>
                    <Route path={APP_ROUTES.SCHEDULE} element={<GameSchedule/>}/>
                    <Route path={APP_ROUTES.STRIKERS} element={<Strikers/>}/>
                    <Route path={APP_ROUTES.RESULTS} element={<Results/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Container>
        </Box>
    )
}