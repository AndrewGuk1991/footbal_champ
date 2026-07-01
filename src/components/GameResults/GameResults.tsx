import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RESULTS_DATA } from "../../data/resultsData.ts";
import { MatchRow } from "./MatchRow.tsx";
import { alpha } from "@mui/material/styles"; // Импортируем утилиту для прозрачности синего цвета

export const GameResults = () => {
    return (
        <Box
            sx={{
                // 1. Полная резиновая адаптивность по ширине
                width: '100%',
                maxWidth: 600,
                margin: '20px auto',
                // Меньше отступы по бокам на мобильных телефонах
                padding: { xs: 1, sm: 2 }
            }}
        >
            {/* 2. Адаптивный заголовок: h5 с жирным начертанием в цвет темы */}
            <Typography
                variant="h5"
                sx={{
                    mb: 3,
                    fontWeight: 'bold',
                    color: (theme) => theme.palette.text.primary,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    px: { xs: 1, sm: 0 }
                }}
            >
                Расписание игр и результаты
            </Typography>

            {Object.entries(RESULTS_DATA).map(([matchDayId, matchDay]) => (
                <Accordion
                    key={matchDayId}
                    disableGutters
                    // 3. Заменили жесткую тень на современный аутлайн в едином стиле проекта
                    variant="outlined"
                    sx={{
                        mb: 2,
                        borderRadius: 2,
                        '&:before': { display: 'none' },
                        '&:first-of-type': { borderRadius: 2 },
                        '&:last-of-type': { borderRadius: 2 },
                        overflow: 'hidden',
                        backgroundColor: (theme) => theme.palette.background.paper,
                        borderColor: (theme) => theme.palette.divider,

                        // Элегантный синий контур вокруг всего аккордеона при фокусе или наведении (опционально)
                        '&:hover': {
                            borderColor: (theme) => alpha(theme.palette.primary.main, 0.2)
                        }
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'text.secondary' }} />}
                        sx={{
                            // 4. Мягкая сине-серая подсветка шапки тура под ультратемный стиль
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark'
                                    ? alpha(theme.palette.primary.main, 0.03)
                                    : '#fafafa',
                            borderBottom: '1px solid',
                            borderColor: (theme) => theme.palette.divider,
                            px: 2,
                            py: 0.5
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', pr: 1, alignItems: 'center' }}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: 'bold',
                                    color: (theme) => theme.palette.text.primary,
                                    fontSize: { xs: '0.95rem', sm: '1rem' }
                                }}
                            >
                                {matchDay.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    fontSize: { xs: '0.8rem', sm: '0.875rem' }
                                }}
                            >
                                {matchDay.date}
                            </Typography>
                        </Box>
                    </AccordionSummary>

                    <AccordionDetails
                        sx={{
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
