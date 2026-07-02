import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Card, CardContent, Divider, List, ListItem, ListItemText, Chip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { RESULTS_DATA } from "../../data/resultsData.ts";

export const MatchDetails = () => {
    const { matchDayId, gameIndex } = useParams<{ matchDayId: string; gameIndex: string }>();
    const navigate = useNavigate();

    const matchDay = matchDayId && matchDayId in RESULTS_DATA
        ? RESULTS_DATA[matchDayId as keyof typeof RESULTS_DATA]
        : null;

    const game = matchDay && gameIndex ? matchDay.games[parseInt(gameIndex, 10)] : null;

    if (!game) {
        return (
            <Box sx={{ p: 3, textAlign: 'center' }}>
                <Typography color="error" variant="h6">Матч не найден</Typography>
                <Button onClick={() => navigate(-1)} startIcon={<ArrowBackIcon />} sx={{ mt: 2 }}>
                    Назад
                </Button>
            </Box>
        );
    }

    const firstPeriodEvents = (game.events || [])
        .filter(event => event.period === 1)
        .sort((a, b) => a.minute - b.minute);

    const secondPeriodEvents = (game.events || [])
        .filter(event => event.period === 2)
        .sort((a, b) => a.minute - b.minute);

    const renderEventsList = (eventsList: typeof game.events) => (
        <List dense disablePadding>
            {eventsList.map((event) => {
                const isHostEvent = event.team === 'hosts';
                return (
                    <ListItem
                        key={event.id}
                        disablePadding
                        sx={{
                            display: 'flex',
                            flexDirection: isHostEvent ? 'row' : 'row-reverse',
                            py: 0.75,
                            px: { xs: 1, sm: 2 }
                        }}
                    >
                        {/* Иконка мяча красится в синий акцент */}
                        <Box sx={{
                            mx: 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            color: 'primary.main'
                        }}>
                            <SportsSoccerIcon sx={{ fontSize: '1.1rem' }} />
                        </Box>

                        <ListItemText
                            sx={{ m: 0, textAlign: isHostEvent ? 'left' : 'right' }}
                            primary={
                                <Typography variant="body2" sx={{ color: 'text.primary' }}>
                                    <Box component="span" sx={{ color: 'primary.light', fontWeight: 'bold', mr: isHostEvent ? 0.5 : 0, ml: isHostEvent ? 0 : 0.5 }}>
                                        {event.minute}'
                                    </Box>{" "}
                                    {event.playerName} {event.isPenalty && <Box component="span" sx={{ color: 'error.main', fontWeight: 'bold' }}>(П)</Box>}
                                </Typography>
                            }
                        />
                    </ListItem>
                );
            })}
        </List>
    );

    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto', padding: { xs: 1.5, sm: 3 } }}>
            <Button
                onClick={() => navigate(-1)}
                startIcon={<ArrowBackIcon />}
                sx={{ mb: 2, color: 'text.secondary', '&:hover': { color: 'primary.light' } }}
            >
                Назад к результатам
            </Button>

            <Card
                variant="outlined"
                sx={{
                    borderRadius: 3,
                    backgroundColor: 'background.paper',
                    borderColor: 'divider',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
                }}
            >
                <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                    <Typography variant="caption" color="text.secondary" sx={{ mb: 3, display: 'block', textAlign: 'center', letterSpacing: 0.5 }}>
                        {game.dateMatch} в {game.timeMatch} {game.referee && `| Судья: ${game.referee}`}
                    </Typography>

                    {/* Адаптивное табло: на мобилках в колонку, на десктопе в ряд */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: { xs: 1.5, sm: 3 },
                        mb: 4
                    }}>
                        <Typography variant="h6" sx={{ flex: 1, textAlign: { xs: 'center', sm: 'right' }, fontWeight: 'bold', wordBreak: 'break-word' }}>
                            {game.nameHosts}
                        </Typography>

                        <Chip
                            label={`${game.goalsHosts} : ${game.goalsGuests}`}
                            color="primary"
                            sx={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                px: 2,
                                height: 46,
                                boxShadow: '0 4px 14px rgba(30, 136, 229, 0.4)',
                                order: { xs: -1, sm: 0 } // Счет всегда сверху на мобильных устройствах
                            }}
                        />

                        <Typography variant="h6" sx={{ flex: 1, textAlign: { xs: 'center', sm: 'left' }, fontWeight: 'bold', wordBreak: 'break-word' }}>
                            {game.nameGuests}
                        </Typography>
                    </Box>

                    {game.events && game.events.length > 0 && (
                        <>
                            <Divider sx={{ my: 3, borderColor: 'divider' }}>
                                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 'bold', letterSpacing: 1.5 }}>
                                    ХРОНИКА МАТЧА
                                </Typography>
                            </Divider>

                            {/* Первый тайм */}
                            {firstPeriodEvents.length > 0 && (
                                <Box sx={{ mb: 3 }}>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            fontWeight: 'bold',
                                            mb: 1.5,
                                            textAlign: 'center',
                                            backgroundColor: 'rgba(255, 255, 255, 0.03)', // Адаптировано под темную тему
                                            color: 'primary.light',
                                            py: 0.75,
                                            borderRadius: 1,
                                            border: '1px solid',
                                            borderColor: 'divider'
                                        }}
                                    >
                                        1-й тайм
                                    </Typography>
                                    {renderEventsList(firstPeriodEvents)}
                                </Box>
                            )}

                            {/* Второй тайм */}
                            {secondPeriodEvents.length > 0 && (
                                <Box sx={{ mb: 1 }}>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            fontWeight: 'bold',
                                            mb: 1.5,
                                            textAlign: 'center',
                                            backgroundColor: 'rgba(255, 255, 255, 0.03)', // Адаптировано под темную тему
                                            color: 'primary.light',
                                            py: 0.75,
                                            borderRadius: 1,
                                            border: '1px solid',
                                            borderColor: 'divider'
                                        }}
                                    >
                                        2-й тайм
                                    </Typography>
                                    {renderEventsList(secondPeriodEvents)}
                                </Box>
                            )}
                        </>
                    )}
                </CardContent>
            </Card>
        </Box>
    );
};
