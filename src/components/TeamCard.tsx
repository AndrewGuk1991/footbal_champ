import {Box, Typography} from "@mui/material";
import {GetPlayers} from "../common/GetPlayers.tsx";
import {TEAMS_DATA} from "../data/teamsData.ts";
import {Navigate, useParams} from "react-router-dom";
import {APP_ROUTES} from "../common/routes.ts";

export const TeamCard = () => {

    const { teamRoute } = useParams<{ teamRoute: string }>();

    const currentTeam = teamRoute ? TEAMS_DATA[teamRoute] : null;

    if (!currentTeam) {
        return <Navigate to={APP_ROUTES.NOTFOUND} replace />;
    }

    return (
        <Box sx={{ mb: 4, p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>

            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Состав команды {currentTeam.title}:
            </Typography>

            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2, fontWeight: 'medium' }}>
                Защитники:
            </Typography>
            <GetPlayers players={currentTeam.defenders} />

            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2, fontWeight: 'medium' }}>
                Полузащитники:
            </Typography>
            <GetPlayers players={currentTeam.midfielders} />

            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2, fontWeight: 'medium' }}>
                Нападающие:
            </Typography>
            <GetPlayers players={currentTeam.forwards} />
        </Box>
    )
}