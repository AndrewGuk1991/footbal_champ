import {Box, Typography} from "@mui/material";
import {GetPlayers} from "../common/GetPlayers.tsx";
import type {Player} from "../common/types.ts";

type TeamCardProps = {
    teamName: string;
    defenders: Player[];
    midfielders: Player[];
    forwards: Player[];
}

export const TeamCard = ({ teamName, defenders, midfielders, forwards }: TeamCardProps) => {
    return (
        <Box sx={{ mb: 4, p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
            {/* Используем Typography вместо h2 для соблюдения дизайн-системы MUI */}
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Состав команды {teamName}:
            </Typography>

            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2, fontWeight: 'medium' }}>
                Защитники:
            </Typography>
            <GetPlayers players={defenders} />

            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2, fontWeight: 'medium' }}>
                Полузащитники:
            </Typography>
            <GetPlayers players={midfielders} />

            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2, fontWeight: 'medium' }}>
                Нападающие:
            </Typography>
            <GetPlayers players={forwards} />
        </Box>
    )
}