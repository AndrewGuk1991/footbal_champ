import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import type { Player } from "../data/teamsData.ts";
import { ShirtIcon } from "./ShirtIcon.tsx"; // Импортируем нашу вынесенную майку
import { Link, useParams } from "react-router-dom";
import { APP_ROUTES } from "./routes.ts"; // Убедитесь, что путь к вашим роутам указан верно

export const GetPlayers = ({ players }: { players: Player[] }) => {
    // Получаем текущую команду из URL (например, 'ajax'), чтобы построить правильную ссылку на игрока
    const { teamRoute } = useParams<{ teamRoute: string }>();

    // Безопасная проверка: если игроков в массиве нет
    if (!players || players.length === 0) {
        return (
            <Typography variant="body2" sx={{ color: 'text.secondary', pl: 1, fontStyle: 'italic', mt: 1 }}>
                Нет заявленных игроков
            </Typography>
        );
    }

    return (
        <List disablePadding>
            {players.map((player) => (
                <ListItem
                    key={player.number}
                    disablePadding
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        py: 0.2, // Немного уменьшили вертикальный отступ ListItem, так как ListItemButton добавляет свои внутренние padding
                    }}
                >
                    {/* ListItemButton делает всю строку кликабельной интерактивной кнопкой-ссылкой */}
                    <ListItemButton
                        component={Link}
                        to={`${APP_ROUTES.TEAMS}/${teamRoute}/player/${player.number}`}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1, // Фиксированный аккуратный зазор между майкой и текстом
                            px: 1,
                            py: 0.5,
                            borderRadius: 1, // Легкое скругление при наведении ховера
                            textDecoration: 'none', // Убираем стандартное подчеркивание ссылки
                            '&:hover': {
                                backgroundColor: (theme) => theme.palette.action.hover,
                            }
                        }}
                    >
                        {/* Рендерим импортированную синюю майку с номером */}
                        <ShirtIcon number={player.number} />

                        {/* Выводим ФИО игрока с правильным белым цветом темы */}
                        <ListItemText
                            primary={`${player.surname} ${player.name}`}
                            sx={{
                                m: 0,
                                '& .MuiTypography-root': {
                                    color: (theme) => theme.palette.text.primary,
                                    fontSize: '0.95rem',
                                    fontWeight: 500
                                }
                            }}
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};
