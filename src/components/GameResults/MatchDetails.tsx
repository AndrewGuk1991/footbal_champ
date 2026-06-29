import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Card, CardContent, Divider, List, ListItem, ListItemText, Chip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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

    // Разделяем события по таймам и сразу сортируем их по минутам
    const firstPeriodEvents = (game.events || [])
        .filter(event => event.period === 1)
        .sort((a, b) => a.minute - b.minute);

    const secondPeriodEvents = (game.events || [])
        .filter(event => event.period === 2)
        .sort((a, b) => a.minute - b.minute);

    // Функция-хелпер для рендеринга списка событий тайма (чтобы не дублировать JSX-код)
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
                            textAlign: isHostEvent ? 'left' : 'right',
                            py: 0.5
                        }}
                    >
                        <Box sx={{ mx: 1 }}>⚽</Box>
                        <ListItemText
                            primary={
                                <Typography variant="body2">
                                    <strong>{event.minute}'</strong> {event.playerName} {event.isPenalty && '(П)'}
                                </Typography>
                            }
                        />
                    </ListItem>
                );
            })}
        </List>
    );

    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 2 }}>
            <Button onClick={() => navigate(-1)} startIcon={<ArrowBackIcon />} sx={{ mb: 2 }}>
                Назад к результатам
            </Button>

            <Card variant="outlined" sx={{ borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <CardContent>
                    <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block', textAlign: 'center' }}>
                        {game.dateMatch} в {game.timeMatch} {game.referee && `| Судья: ${game.referee}`}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, mb: 3 }}>
                        <Typography variant="h6" sx={{ flex: 1, textAlign: 'right', fontWeight: 'bold' }}>
                            {game.nameHosts}
                        </Typography>
                        <Chip
                            label={`${game.goalsHosts} : ${game.goalsGuests}`}
                            color="primary"
                            sx={{ fontSize: '1.4rem', fontWeight: 'bold', px: 1.5, height: 40 }}
                        />
                        <Typography variant="h6" sx={{ flex: 1, textAlign: 'left', fontWeight: 'bold' }}>
                            {game.nameGuests}
                        </Typography>
                    </Box>

                    {game.events && game.events.length > 0 && (
                        <>
                            <Divider sx={{ my: 2 }}>
                                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
                                    ХРОНИКА МАТЧА
                                </Typography>
                            </Divider>

                            {/* Первый тайм */}
                            {firstPeriodEvents.length > 0 && (
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 'bold', mb: 1, textAlign: 'center', backgroundColor: '#f5f5f5', py: 0.5, borderRadius: 1 }}>
                                        1-й тайм
                                    </Typography>
                                    {renderEventsList(firstPeriodEvents)}
                                </Box>
                            )}

                            {/* Второй тайм */}
                            {secondPeriodEvents.length > 0 && (
                                <Box sx={{ mb: 1 }}>
                                    <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 'bold', mb: 1, textAlign: 'center', backgroundColor: '#f5f5f5', py: 0.5, borderRadius: 1 }}>
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
