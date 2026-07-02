import { Box, Typography, Paper, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { GetPlayers } from "../common/GetPlayers.tsx";
import { TEAMS_DATA } from "../data/teamsData.ts";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../common/routes.ts";

export const TeamCard = () => {
    const { teamRoute } = useParams<{ teamRoute: string }>();
    const navigate = useNavigate();

    const currentTeam = teamRoute ? TEAMS_DATA[teamRoute] : null;

    if (!currentTeam) {
        return <Navigate to={APP_ROUTES.NOTFOUND} replace />;
    }

    // Вспомогательный компонент для блока позиции
    const renderPositionBlock = (title: string, playersList: any) => (
        <Paper
            variant="outlined"
            sx={{
                p: 2.5,
                borderRadius: 2,
                backgroundColor: (theme) => theme.palette.background.paper,
                borderColor: (theme) => theme.palette.divider,

                // Настройки ширины карточки
                width: { xs: '100%', sm: 'auto' }, // На ПК ширина подстраивается под контент
                minWidth: { sm: '260px' },         // Базовая минимальная ширина карточки
                flexGrow: { xs: 0, sm: 1 },        // Разрешаем карточке расти, если фамилии длинные
                flexShrink: 0,                     // Карточка никогда не сожмется меньше контента

                // Стилизуем внутренний список игроков, чтобы длинные фамилии не переносились и не сужались
                '& .MuiTypography-root': {
                    whiteSpace: 'nowrap',          // ИСПРАВЛЕНО: запрещает перенос длинных фамилий на новую строку
                }
            }}
        >
            <Typography
                variant="subtitle1"
                sx={{
                    fontWeight: 'bold',
                    color: (theme) => theme.palette.primary.main,
                    mb: 1.5,
                    borderBottom: '1px solid',
                    borderColor: (theme) => theme.palette.divider,
                    pb: 0.5,
                    whiteSpace: 'nowrap'
                }}
            >
                {title}
            </Typography>
            <Box sx={{ width: '100%' }}>
                <GetPlayers players={playersList} />
            </Box>
        </Paper>
    );

    return (
        <Box
            sx={{
                width: '100%',
                // Максимальная ширина контейнера, чтобы на огромных мониторах все не растягивалось бесконечно
                maxWidth: { xs: '100%', sm: '1200px' },
                margin: '20px auto',
                px: { xs: 1, sm: 3 }
            }}
        >
            {/* Кнопка возврата к списку команд */}
            <Button
                onClick={() => navigate(APP_ROUTES.TEAMS)}
                startIcon={<ArrowBackIcon />}
                sx={{
                    mb: 2,
                    color: (theme) => theme.palette.text.secondary,
                    textTransform: 'none',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    '&:hover': {
                        color: (theme) => theme.palette.primary.main,
                        backgroundColor: 'transparent'
                    }
                }}
            >
                Назад к командам
            </Button>

            {/* Главный заголовок страницы */}
            <Typography
                variant="h5"
                component="h2"
                sx={{
                    fontWeight: 'bold',
                    color: (theme) => theme.palette.text.primary,
                    fontSize: { xs: '1.2rem', sm: '1.5rem' },
                    mb: 3
                }}
            >
                Состав команды {currentTeam.title}:
            </Typography>

            {/* Контейнер-сетка для блоков позиций */}
            <Box
                sx={{
                    display: 'flex',
                    // ИСПРАВЛЕНО: 'wrap' заставляет блоки падать на новую строку, если им тесно
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 3,
                    width: '100%'
                }}
            >
                {renderPositionBlock("Защитники:", currentTeam.defenders)}
                {renderPositionBlock("Полузащитники:", currentTeam.midfielders)}
                {renderPositionBlock("Нападающие:", currentTeam.forwards)}
            </Box>
        </Box>
    );
};
