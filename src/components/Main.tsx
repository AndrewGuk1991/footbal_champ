import {Box, Container} from "@mui/material";
import {LeagueTable} from "./LeagueTable.tsx";
import {Teams} from "./Teams.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {NotFound} from "./NotFound.tsx";
import {APP_ROUTES} from "../common/routes.ts";
import {Strikers} from "./Strikers.tsx";
import {GameResults} from "./GameResults/GameResults.tsx";
import {MatchDetails} from "./GameResults/MatchDetails.tsx";
import {TeamCard} from "./TeamCard.tsx";
import {PlayerProfile} from "./PlayerProfile.tsx";

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
                    <Route path={'/'} element={<Navigate to={APP_ROUTES.GAME_RESULTS} replace/>}/>
                    <Route path={APP_ROUTES.TEAMS} element={<Teams/>}/>
                    <Route path={APP_ROUTES.TABLE} element={<LeagueTable/>}/>
                    <Route path={APP_ROUTES.STRIKERS} element={<Strikers/>}/>
                    <Route path={APP_ROUTES.GAME_RESULTS} element={<GameResults />}/>

                    <Route path={`${APP_ROUTES.TEAMS}/:teamRoute`} element={<TeamCard />} />
                    <Route path={`${APP_ROUTES.TEAMS}/:teamRoute/player/:number`} element={<PlayerProfile/>} />

                    <Route path={`${APP_ROUTES.GAME_RESULTS}/:matchDayId/:gameId`} element={<MatchDetails />} />

                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Container>
        </Box>
    )
}

