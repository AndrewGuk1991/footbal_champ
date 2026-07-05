import { Box, Button, Divider, Paper, Stack, Typography, Fade } from "@mui/material"; // ДОБАВЛЕНО: Fade
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import NumbersIcon from '@mui/icons-material/Numbers';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShieldIcon from '@mui/icons-material/Shield';
import StyleIcon from '@mui/icons-material/Style';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { TEAMS_DATA } from "../data/teamsData.ts";
import { APP_ROUTES } from "../common/routes.ts";
import defaultAvatar from "./../assets/default-avatar-profile-icon.png";

export const PlayerProfile = () => {
    const { teamRoute, number } = useParams<{ teamRoute: string; number: string }>();
    const navigate = useNavigate();
    const currentTeam = teamRoute ? TEAMS_DATA[teamRoute] : null;

    if (!currentTeam) {
        return <Navigate to={APP_ROUTES.NOTFOUND} replace />;
    }

    const allPlayers = [
        ...(currentTeam.goalkeepers || []).map(p => ({ ...p, role: 'Вратарь' })),
        ...currentTeam.defenders.map(p => ({ ...p, role: 'Защитник' })),
        ...currentTeam.midfielders.map(p => ({ ...p, role: 'Полузащитник' })),
        ...currentTeam.forwards.map(p => ({ ...p, role: 'Нападающий' }))
    ];

    const player = allPlayers.find(p => p.number === Number(number));

    if (!player) {
        return <Navigate to={APP_ROUTES.NOTFOUND} replace />;
    }

    const infoItems = [
        { icon: <ShieldIcon sx={{ color: 'text.secondary' }} />, label: 'Позиция', value: player.role },
        { icon: <NumbersIcon sx={{ color: 'text.secondary' }} />, label: 'Игровой номер', value: player.number },
        { icon: <AccessTimeIcon sx={{ color: 'text.secondary' }} />, label: 'Матчей сыграно', value: player.games || 0 },
        { icon: <SportsSoccerIcon sx={{ color: 'text.secondary' }} />, label: 'Забитые голы', value: player.goals || 0 },
        {
            icon: <StyleIcon sx={{
                color: '#ffd54f',
                transform: 'rotate(90deg)',
                fontSize: '1.2rem'
            }} />,
            label: 'Желтые карточки',
            value: player.yellowCards || 0
        },
        {
            icon: <StyleIcon sx={{
                color: '#e57373',
                transform: 'rotate(90deg)',
                fontSize: '1.2rem'
            }} />,
            label: 'Красные карточки',
            value: player.redCards || 0
        },
    ];

    return (
        // Оборачиваем всю карточку в Fade для плавного проявления при монтировании компонента
        <Fade in={true} timeout={500}>
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '800px',
                    margin: '0 auto',
                    pt: { xs: 2, sm: 4 },
                    pb: { xs: 4, sm: 6 },
                    px: { xs: 2, sm: 3 }
                }}
            >
                <Button
                    onClick={() => navigate(`${APP_ROUTES.TEAMS}/${teamRoute}`)}
                    startIcon={<ArrowBackIcon />}
                    sx={{
                        mb: { xs: 2, sm: 3 },
                        color: 'text.secondary',
                        textTransform: 'none',
                        fontSize: '1rem',
                        transition: 'color 0.2s ease',
                        '&:hover': {
                            color: 'primary.light',
                            backgroundColor: 'transparent'
                        }
                    }}
                >
                    Назад к составу
                </Button>

                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 2.5, sm: 4 },
                        borderRadius: 2,
                        backgroundColor: 'background.paper',
                        backgroundImage: 'none',
                        border: '1px solid',
                        borderColor: 'divider',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: { xs: 3, sm: 4 },
                        alignItems: { xs: 'center', sm: 'flex-start' }
                    }}
                >
                    {/* Аватар игрока */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                        <Box
                            sx={{
                                width: { xs: 180, sm: 200 },
                                height: { xs: 180, sm: 200 },
                                borderRadius: 2,
                                overflow: 'hidden',
                                border: '1px solid',
                                borderColor: 'divider',
                                backgroundColor: 'background.default',
                                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            <Box
                                component="img"
                                src={player.photo ? player.photo : defaultAvatar}
                                alt={`${player.name} ${player.surname}`}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: !player.photo ? 'opacity(0.4) grayscale(1)' : 'none'
                                }}
                            />
                        </Box>
                    </Box>

                    {/* Информационный блок */}
                    <Box sx={{ flexGrow: 1, width: '100%' }}>
                        <Typography
                            variant="h4"
                            component="h1"
                            sx={{
                                fontWeight: 'bold',
                                color: 'text.primary',
                                textAlign: { xs: 'center', sm: 'left' },
                                mb: 0.5,
                                fontSize: { xs: '1.75rem', sm: '2.125rem' }
                            }}
                        >
                            {player.name} {player.surname}
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: 'text.secondary',
                                textAlign: { xs: 'center', sm: 'left' },
                                mb: { xs: 2, sm: 3 }
                            }}
                        >
                            Команда: {currentTeam.title}
                        </Typography>

                        <Divider sx={{ mb: 2, borderColor: 'divider' }} />

                        {/* Список характеристик */}
                        <Stack spacing={1.5}>
                            {infoItems.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                        justifyContent: { xs: 'center', sm: 'flex-start' }
                                    }}
                                >
                                    {item.icon}
                                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                                        <Box component="span" sx={{ color: 'text.secondary', fontWeight: 'normal' }}>
                                            {item.label}:
                                        </Box>{' '}
                                        {item.value}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Box>
                </Paper>
            </Box>
        </Fade>
    );
};
