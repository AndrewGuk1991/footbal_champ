import { List, ListItem, ListItemText, Typography } from "@mui/material";
import type { Player } from "../data/teamsData.ts";
import { ShirtIcon } from "./ShirtIcon.tsx"; // Импортируем нашу вынесенную майку

export const GetPlayers = ({ players }: { players: Player[] }) => {
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
                        py: 0.6, // Аккуратный отступ между строками игроков
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
                </ListItem>
            ))}
        </List>
    );
};
