import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Card,
    CardContent,
    Divider,
    List,
    ListItem,
    ListItemText,
    Chip,
    Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SportsIcon from '@mui/icons-material/Sports';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {type GameEvent, RESULTS_DATA} from "../data/resultsData.ts";


const GameEventIcon = ({ type }: { type: GameEvent['type'] }) => {
    switch (type) {
        case 'goal':
            return <Typography sx={{ fontSize: '1.2rem', mr: 1 }}>⚽</Typography>;
        case 'yellow_card':
            return <FiberManualRecordIcon sx={{ color: '#ffeb3b', mr: 1, fontSize: '1.5rem', transform: 'scaleX(0.7)' }} />;
        case 'red_card':
            return <FiberManualRecordIcon sx={{ color: '#f44336', mr: 1, fontSize: '1.5rem', transform: 'scaleX(0.7)' }} />;
        default:
            return null;
    }
};

export const GameResults = () => {
    return (
        <Box sx={{
            width: 'max-content',
            maxWidth: '100%',
            margin: '0 auto',
            borderRadius: 2,
            padding: 2 }}>
            {Object.entries(RESULTS_DATA).map(([matchDayId, matchDay]) => (
                <Accordion key={matchDayId} defaultExpanded sx={{ mb: 2, borderRadius: 2, '&:before': { display: 'none' } }}>

                    {/* ИСПРАВЛЕНО: expandMoreIcon заменен на expandIcon */}
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', pr: 2, alignItems: 'center' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                {matchDay.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {matchDay.date}
                            </Typography>
                        </Box>
                    </AccordionSummary>

                    <AccordionDetails sx={{ backgroundColor: '#f9f9f9', p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {matchDay.games.map((game, index) => (
                            <Card key={index} variant="outlined" sx={{ borderRadius: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                <CardContent>

                                    {/* Мета-информация о матче */}
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2, color: 'text.secondary' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <EventIcon fontSize="small" />
                                            <Typography variant="caption">{game.dateMatch}</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <AccessTimeIcon fontSize="small" />
                                            <Typography variant="caption">{game.timeMatch}</Typography>
                                        </Box>
                                        {game.referee && (
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                <SportsIcon fontSize="small" />
                                                <Typography variant="caption">Судья: {game.referee}</Typography>
                                            </Box>
                                        )}
                                    </Box>

                                    {/* ИСПРАВЛЕНО: Вместо Grid используется Box с Flexbox layout */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
                                        <Box sx={{ flex: 1, textAlign: 'right' }}>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                                {game.nameHosts}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ flexShrink: 0 }}>
                                            <Chip
                                                label={`${game.goalsHosts} : ${game.goalsGuests}`}
                                                color="primary"
                                                sx={{ fontSize: '1.2rem', fontWeight: 'bold', px: 1, height: 36 }}
                                            />
                                        </Box>

                                        <Box sx={{ flex: 1, textAlign: 'left' }}>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                                {game.nameGuests}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* События матча */}
                                    {game.events && game.events.length > 0 && (
                                        <>
                                            <Divider sx={{ my: 1.5 }}>
                                                <Typography variant="caption" color="text.secondary">События матча</Typography>
                                            </Divider>
                                            <List dense disablePadding sx={{ maxWidth: 500, margin: '0 auto' }}>
                                                {game.events
                                                    .sort((a, b) => a.minute - b.minute)
                                                    .map((event) => {
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
                                                                <Box sx={{ display: 'flex', alignItems: 'center', mx: 1 }}>
                                                                    <GameEventIcon type={event.type} />
                                                                </Box>

                                                                <ListItemText
                                                                    primary={
                                                                        <Typography variant="body2">
                                                                            <Box component="span" sx={{ mr: 0.5, color: 'text.secondary', fontWeight: 'medium' }}>
                                                                                {event.minute}'
                                                                            </Box>
                                                                            {event.playerName}
                                                                            {event.isPenalty && (
                                                                                <Box component="span" sx={{ ml: 0.5, color: 'error.main', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                                                                    (П)
                                                                                </Box>
                                                                            )}
                                                                        </Typography>
                                                                    }
                                                                    secondary={
                                                                        <Typography variant="caption" color="text.secondary">
                                                                            {event.period}-й тайм
                                                                        </Typography>
                                                                    }
                                                                />
                                                            </ListItem>
                                                        );
                                                    })}
                                            </List>
                                        </>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};
