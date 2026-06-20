import {Box, Container} from "@mui/material";
import {LeagueTable} from "./LeagueTable.tsx";
import {Teams} from "./Teams.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {GameSchedule} from "./GameSchedule.tsx";
import {NotFound} from "./NotFound.tsx";
import {APP_ROUTES} from "../common/routes.ts";

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
                    <Route path={'/'} element={<Navigate to={APP_ROUTES.SCHEDULE} replace/>}/>
                    <Route path={`${APP_ROUTES.TEAMS}/*`} element={<Teams/>}/>
                    <Route path={APP_ROUTES.TABLE} element={<LeagueTable/>}/>
                    <Route path={APP_ROUTES.SCHEDULE} element={<GameSchedule/>}/>
                    <Route path={APP_ROUTES.NOTFOUND} element={<NotFound/>}/>
                    <Route path="*" element={<Navigate to={APP_ROUTES.NOTFOUND}/>} />
                </Routes>
            </Container>
        </Box>
    )
}