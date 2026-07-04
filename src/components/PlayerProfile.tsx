import {Box, Button, Divider, Paper, Stack, Typography} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import NumbersIcon from '@mui/icons-material/Numbers';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShieldIcon from '@mui/icons-material/Shield';
import StyleIcon from '@mui/icons-material/Style';
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {TEAMS_DATA} from "../data/teamsData.ts";
import {APP_ROUTES} from "../common/routes.ts";
import defaultAvatar from "./../assets/default-avatar-profile-icon.png";

export const PlayerProfile = () => {
    const { teamRoute, number } = useParams<{ teamRoute: string; number: string }>();
    const navigate = useNavigate();
    const currentTeam = teamRoute ? TEAMS_DATA[teamRoute] : null;

    if (!currentTeam) {
        return <Navigate to={APP_ROUTES.NOTFOUND} replace />;
    }

    const allPlayers = [
        ...(currentTeam.goalkeepers || []).map(p => ({ ...p, role: 'Вратарь' })), // ДОБАВЛЕНО: сборка вратарей
        ...currentTeam.defenders.map(p => ({ ...p, role: 'Защитник' })),
        ...currentTeam.midfielders.map(p => ({ ...p, role: 'Полузащитник' })),
        ...currentTeam.forwards.map(p => ({ ...p, role: 'Нападающий' }))
    ];


    const player = allPlayers.find(p => p.number === Number(number));

    if (!player) {
        return <Navigate to={APP_ROUTES.NOTFOUND} replace />;
    }

    return (
        <Box sx={{ width: '100%', maxWidth: '800px', margin: '20px auto', px: { xs: 2, sm: 3 } }} >
            <Button
                onClick={() => navigate(`${APP_ROUTES.TEAMS}/${teamRoute}`)}
                startIcon={<ArrowBackIcon />}
                sx={{
                    mb: 3,
                    color: (theme) => theme.palette.text.secondary,
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': { color: (theme) => theme.palette.primary.main, backgroundColor: 'transparent' }
                }}
            >
                Назад к составу
            </Button>

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
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', shrink: 0 }}>
                    <Box
                        sx={{
                            width: { xs: 160, sm: 200 },
                            height: { xs: 160, sm: 200 },
                            borderRadius: 2,
                            overflow: 'hidden',
                            border: '1px solid',
                            borderColor: (theme) => theme.palette.divider,
                            backgroundColor: '#070c14',
                            boxShadow: 3
                        }}
                    >
                        <Box component="img" src={player.photo ? player.photo : defaultAvatar} alt={`${player.name} ${player.surname}`} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                </Box>

                <Box sx={{ flexGrow: 1, width: '100%' }}>
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', textAlign: { xs: 'center', sm: 'left' }, mb: 0.5 }} >
                        {player.name} {player.surname}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: (theme) => theme.palette.text.secondary, textAlign: { xs: 'center', sm: 'left' }, mb: 3 }} >
                        Команда: {currentTeam.title}
                    </Typography>

                    <Divider sx={{ mb: 2 }} />

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
                            <SportsSoccerIcon color="action" />
                            <Typography variant="body1">
                                <strong>Забитые голы:</strong> {player.goals || 0}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <StyleIcon sx={{ color: '#ffeb3b', transform: 'rotate(90deg)', fontSize: '1.2rem' }} />
                            <Typography variant="body1">
                                <strong>Желтые карточки:</strong> {player.yellowCards || 0}
                            </Typography>
                        </Box>
                        {/* ДОБАВЛЕНО: Поле с красной карточкой */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <StyleIcon sx={{ color: '#f44336', transform: 'rotate(90deg)', fontSize: '1.2rem' }} />
                            <Typography variant="body1">
                                <strong>Красные карточки:</strong> {player.redCards || 0}
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Paper>
        </Box>
    );
};
