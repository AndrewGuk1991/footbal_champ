import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RESULTS_DATA } from "../../data/resultsData.ts";
import { MatchRow } from "./MatchRow.tsx";

export const GameResults = () => {
    return (
        <Box sx={{ width: '100%', maxWidth: 600, margin: '0 auto', padding: 2 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>Результаты матчей:</Typography>
            {Object.entries(RESULTS_DATA).map(([matchDayId, matchDay]) => (
                <Accordion
                    key={matchDayId}
                    disableGutters
                    sx={{
                        mb: 2,
                        borderRadius: 2,
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                        '&:before': { display: 'none' },
                        '&:first-of-type': { borderRadius: 2 },
                        '&:last-of-type': { borderRadius: 2 },
                        overflow: 'hidden',
                        // Убираем белый фон карточки по умолчанию, чтобы работал background.paper из темы
                        backgroundColor: (theme) => theme.palette.background.paper,
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                            // Динамически меняем фон шапки в зависимости от режима (светлый/тёмный)
                            backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : '#fafafa'
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', pr: 2, alignItems: 'center' }}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: 'bold',
                                    // Используем основной цвет текста темы вместо жёсткого #333
                                    color: (theme) => theme.palette.text.primary
                                }}
                            >
                                {matchDay.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {matchDay.date}
                            </Typography>
                        </Box>
                    </AccordionSummary>

                    <AccordionDetails
                        sx={{
                            // Убираем белый хардкод #fff и берем цвет карточек из темы
                            backgroundColor: (theme) => theme.palette.background.paper,
                            p: 0,
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {matchDay.games.map((game, index) => (
                            <MatchRow
                                key={index}
                                matchDayId={matchDayId}
                                gameIndex={index}
                                game={game}
                            />
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};
