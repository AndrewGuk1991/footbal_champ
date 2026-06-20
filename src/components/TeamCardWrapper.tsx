
import { useParams, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import { TEAMS_DATA } from "../data/teamsData.ts";
import { APP_ROUTES } from "../common/routes.ts";
import {TeamCard} from "./TeamCard.tsx";

export const TeamCardWrapper = () => {
    // Получаем хвостик URL, например 'ajax' или 'sputnik'
    const { teamRoute } = useParams<{ teamRoute: string }>();

    // Ищем данные команды в нашем объекте
    const currentTeam = teamRoute ? TEAMS_DATA[teamRoute] : null;

    // Если такой команды нет в данных, отправляем на 404
    if (!currentTeam) {
        return <Navigate to={APP_ROUTES.NOTFOUND} replace />;
    }

    return (
        <Box>
            <TeamCard
                teamName={currentTeam.title}
                defenders={currentTeam.defenders}
                midfielders={currentTeam.midfielders}
                forwards={currentTeam.forwards}
            />
        </Box>
    );
};

