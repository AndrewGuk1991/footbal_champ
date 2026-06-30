import { Box, Typography, Paper, Button } from "@mui/material"; // Добавили импорт Button
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Импортируем иконку стрелки назад
import { GetPlayers } from "../common/GetPlayers.tsx";
import { TEAMS_DATA } from "../data/teamsData.ts";
import { Navigate, useParams, useNavigate } from "react-router-dom"; // Добавили useNavigate
import { APP_ROUTES } from "../common/routes.ts";

export const TeamCard = () => {
    const { teamRoute } = useParams<{ teamRoute: string }>();
    const navigate = useNavigate(); // Инициализируем хук навигации

    const currentTeam = teamRoute ? TEAMS_DATA[teamRoute] : null;

    if (!currentTeam) {
        return <Navigate to={APP_ROUTES.NOTFOUND} replace />;
    }

    return (
        <Box sx={{ maxWidth: '70%', margin: '20px auto' }}>
            {/* Кнопка возврата к списку команд */}
            <Button
                onClick={() => navigate(APP_ROUTES.TEAMS)} // Переход на /teams
                startIcon={<ArrowBackIcon />}
                sx={{
                    mb: 2,
                    color: (theme) => theme.palette.text.secondary,
                    textTransform: 'none', // Отменяет принудительный CAPS LOCK у текста кнопки
                    '&:hover': {
                        color: (theme) => theme.palette.primary.main, // Подсвечиваем фиолетовым при наведении
                    }
                }}
            >
                Назад к командам
            </Button>

            <Paper
                variant="outlined"
                sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: (theme) => theme.palette.background.paper,
                    borderColor: (theme) => theme.palette.divider
                }}
            >
                <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: (theme) => theme.palette.text.primary
                    }}
                >
                    Состав команды {currentTeam.title}:
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ width: '30%' }}>
                        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
                            Защитники:
                        </Typography>
                        <GetPlayers players={currentTeam.defenders} />
                    </Box>

                    <Box sx={{ width: '30%' }}>
                        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
                            Полузащитники:
                        </Typography>
                        <GetPlayers players={currentTeam.midfielders} />
                    </Box>

                    <Box sx={{ width: '30%' }}>
                        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
                            Нападающие:
                        </Typography>
                        <GetPlayers players={currentTeam.forwards} />
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};
