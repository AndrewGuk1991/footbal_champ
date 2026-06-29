import { Box, Typography, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from "../../common/routes.ts";

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
                padding: '12px 16px',
                // 1. Берем системный цвет фона карточек из темы вместо #fff
                backgroundColor: (theme) => theme.palette.background.paper,
                borderRadius: 1,
                // 2. Делаем границу адаптивной (светлая/темная) вместо жесткого #f0f0f0
                borderBottom: '1px solid',
                borderColor: (theme) => theme.palette.divider,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                    // 3. Эффект наведения: подсвечиваем строку фирменным фиолетовым цветом с прозрачностью
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? 'rgba(156, 39, 176, 0.08)' : 'rgba(156, 39, 176, 0.04)',
                }
            }}
        >
            <Typography variant="body2" color="text.secondary" sx={{ width: 50, flexShrink: 0 }}>
                {game.timeMatch}
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    flex: 1,
                    textAlign: 'right',
                    fontWeight: 500,
                    pr: 2,
                    // 4. Гарантируем правильный цвет текста команд
                    color: (theme) => theme.palette.text.primary
                }}
            >
                {game.nameHosts}
            </Typography>

            <Box sx={{ flexShrink: 0, minWidth: 60, display: 'flex', justifyContent: 'center' }}>
                <Chip
                    label={`${game.goalsHosts} : ${game.goalsGuests}`}
                    size="small"
                    sx={{
                        fontWeight: 'bold',
                        // 5. Убираем серый хардкод #eaeaea. По умолчанию Chip в MUI сам отлично подстроится под тему.
                        // Если хотите выделить счет — можно добавить color="primary" или контролировать цвет через тему.
                        borderRadius: '4px',
                        fontSize: '0.9rem'
                    }}
                />
            </Box>

            <Typography
                variant="body1"
                sx={{
                    flex: 1,
                    textAlign: 'left',
                    fontWeight: 500,
                    pl: 2,
                    // 4. Гарантируем правильный цвет текста команд
                    color: (theme) => theme.palette.text.primary
                }}
            >
                {game.nameGuests}
            </Typography>
        </Box>
    );
};
