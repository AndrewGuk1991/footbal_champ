import {Box, Button, Divider, Paper, Stack, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import NumbersIcon from '@mui/icons-material/Numbers';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShieldIcon from '@mui/icons-material/Shield';
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {TEAMS_DATA} from "../data/teamsData.ts";
import {APP_ROUTES} from "../common/routes.ts";
import {DefaultAvatarSVG} from "../common/DefaultAvatarSVG.tsx";

export const PlayerProfile = () => {
    const { teamRoute, number } = useParams<{ teamRoute: string; number: string }>();
    const navigate = useNavigate();

    const currentTeam = teamRoute ? TEAMS_DATA[teamRoute] : null;

    if (!currentTeam) {
        return <Navigate to={APP_ROUTES.NOTFOUND} replace />;
    }

    // Собираем всех игроков в один массив для поиска
    const allPlayers = [
        ...currentTeam.defenders.map(p => ({ ...p, role: 'Защитник' })),
        ...currentTeam.midfielders.map(p => ({ ...p, role: 'Полузащитник' })),
        ...currentTeam.forwards.map(p => ({ ...p, role: 'Нападающий' }))
    ];

    // Ищем игрока по номеру
    const player = allPlayers.find(p => p.number === Number(number));

    if (!player) {
        return <Navigate to={APP_ROUTES.NOTFOUND} replace />;
    }

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '800px',
                margin: '20px auto',
                px: { xs: 2, sm: 3 }
            }}
        >
            {/* Кнопка назад к составу команды */}
            <Button
                onClick={() => navigate(`${APP_ROUTES.TEAMS}/${teamRoute}`)}
                startIcon={<ArrowBackIcon />}
                sx={{
                    mb: 3,
                    color: (theme) => theme.palette.text.secondary,
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                        color: (theme) => theme.palette.primary.main,
                        backgroundColor: 'transparent'
                    }
                }}
            >
                Назад к составу
            </Button>

            {/* Основная карточка профиля */}
            <Paper
                elevation={2}
                sx={{
                    p: { xs: 3, sm: 4 },
                    borderRadius: 3,
                    backgroundColor: (theme) => theme.palette.background.paper,
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 4,
                    alignItems: { xs: 'center', sm: 'flex-start' }
                }}
            >
                {/* Левый блок: Аватар или SVG заглушка */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', shrink: 0 }}>
                    <Box
                        sx={{
                            width: { xs: 160, sm: 200 },
                            height: { xs: 160, sm: 200 },
                            borderRadius: 2, // 8px по вашей теме
                            overflow: 'hidden',
                            border: '1px solid',
                            borderColor: (theme) => theme.palette.divider,
                            backgroundColor: '#070c14',
                            boxShadow: 3
                        }}
                    >
                        {player.photo ? (
                            <Box
                                component="img"
                                src={player.photo}
                                alt={`${player.name} ${player.surname}`}
                                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        ) : (
                            /* Рендерим кастомную заглушку с номером на спине */
                            <DefaultAvatarSVG number={player.number} />
                        )}
                    </Box>

                    {/* Маленький аккуратный номер под фото больше не нужен, так как он теперь крупно на спине! */}
                </Box>


                {/* Правая колонка: Информация об игроке */}
                <Box sx={{ flexGrow: 1, width: '100%' }}>
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            textAlign: { xs: 'center', sm: 'left' },
                            mb: 0.5
                        }}
                    >
                        {player.name} {player.surname}
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: (theme) => theme.palette.text.secondary,
                            textAlign: { xs: 'center', sm: 'left' },
                            mb: 3
                        }}
                    >
                        Команда: {currentTeam.title}
                    </Typography>

                    <Divider sx={{ mb: 2 }} />

                    {/* Сетка характеристик */}
                    <Stack spacing={2}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <ShieldIcon color="action" />
                            <Typography variant="body1">
                                <strong>Позиция:</strong> {player.role}
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <NumbersIcon color="action" />
                            <Typography variant="body1">
                                <strong>Игровой номер:</strong> {player.number}
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <AccessTimeIcon color="action" />
                            <Typography variant="body1">
                                <strong>Матчей сыграно:</strong> {player.games || 0}
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <SportsFootballIcon color="action" />
                            <Typography variant="body1">
                                <strong>Забитые голы:</strong> {player.goals || 0}
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Paper>
        </Box>
    );
};
