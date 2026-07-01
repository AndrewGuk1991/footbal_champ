import { Box, Typography, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from "../../common/routes.ts";
import { alpha } from "@mui/material/styles"; // Импортируем утилиту для прозрачности синего цвета

type MatchRowProps = {
    matchDayId: string;
    gameIndex: number;
    game: {
        nameHosts: string;
        nameGuests: string;
        goalsHosts: number;
        goalsGuests: number;
        timeMatch: string;
    };
}

export const MatchRow = ({ matchDayId, gameIndex, game }: MatchRowProps) => {
    const navigate = useNavigate();

    const handleRowClick = () => {
        navigate(`${APP_ROUTES.GAME_RESULTS}/${matchDayId}/${gameIndex}`);
    };

    return (
        <Box
            onClick={handleRowClick}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: { xs: '10px 12px', sm: '12px 16px' }, // Меньше внутренние отступы на мобилках
                backgroundColor: (theme) => theme.palette.background.paper,
                borderRadius: 1,
                borderBottom: '1px solid',
                borderColor: (theme) => theme.palette.divider,
                cursor: 'pointer',
                transition: 'all 0.2s ease',

                // ИСПРАВЛЕНО: Ховер теперь мягко светится фирменным синим цветом темы вместо старого фиолетового
                '&:hover': {
                    backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.06),
                    // При наведении строка слегка выделяется за счет изменения цвета границы
                    borderColor: (theme) => alpha(theme.palette.primary.main, 0.2)
                }
            }}
        >
            {/* Время матча с адаптивным размером шрифта */}
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                    width: { xs: 42, sm: 50 },
                    flexShrink: 0,
                    fontSize: { xs: '0.75rem', sm: '0.875rem' }
                }}
            >
                {game.timeMatch}
            </Typography>

            {/* Команда Хозяев */}
            <Typography
                variant="body1"
                sx={{
                    flex: 1,
                    textAlign: 'right',
                    fontWeight: 500,
                    pr: { xs: 1, sm: 2 },
                    color: (theme) => theme.palette.text.primary,
                    // Адаптивный шрифт + защита от переносов строк на маленьких экранах
                    fontSize: { xs: '0.85rem', sm: '0.95rem' },
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}
            >
                {game.nameHosts}
            </Typography>

            {/* Блок со счетом */}
            <Box sx={{ flexShrink: 0, minWidth: { xs: 50, sm: 60 }, display: 'flex', justifyContent: 'center' }}>
                <Chip
                    label={`${game.goalsHosts} : ${game.goalsGuests}`}
                    size="small"
                    sx={{
                        fontWeight: 'bold',
                        borderRadius: '4px',
                        fontSize: { xs: '0.8rem', sm: '0.9rem' },
                        // Подкрашиваем табло счета в цвет карточек вашей ультратемной темы,
                        // а текст делаем основным белым цветом
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.06)' : '#eaeaea',
                        color: (theme) => theme.palette.text.primary,
                        border: '1px solid',
                        borderColor: (theme) => theme.palette.divider,
                        px: 0.5
                    }}
                />
            </Box>

            {/* Команда Гостей */}
            <Typography
                variant="body1"
                sx={{
                    flex: 1,
                    textAlign: 'left',
                    fontWeight: 500,
                    pl: { xs: 1, sm: 2 },
                    color: (theme) => theme.palette.text.primary,
                    fontSize: { xs: '0.85rem', sm: '0.95rem' },
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}
            >
                {game.nameGuests}
            </Typography>
        </Box>
    );
};
