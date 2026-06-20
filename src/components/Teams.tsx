// src/components/Teams.tsx
import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { rows } from "./LeagueTable";
import { NavLink, Route, Routes } from "react-router-dom";
import { TeamCardWrapper } from "./TeamCardWrapper.tsx";
import { TEAMS_DATA } from "../data/teamsData.ts";

export const Teams = () => {
    // Динамический поиск ключа роута по русскому названию команды
    const getTeamPath = (teamName: string): string => {
        const normalizedName = teamName.toLowerCase().trim();

        // Ищем в TEAMS_DATA команду, у которой title совпадает с row.team
        const route = Object.keys(TEAMS_DATA).find(
            (key) => TEAMS_DATA[key].title.toLowerCase() === normalizedName
        );

        return route || '';
    };

    return (
        <Routes>
            {/* Основной список команд */}
            <Route path="/" element={
                <List component="ol" sx={{ listStyleType: 'decimal', pl: 4 }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>Команды</Typography>
                    {rows.map((row) => {
                        const path = getTeamPath(row.team);

                        // Если путь не найден (команды нет в TEAMS_DATA), не рендерим кнопку
                        if (!path) return null;

                        return (
                            <ListItem key={row.id} sx={{ display: 'list-item' }} disablePadding>
                                <ListItemButton
                                    component={NavLink}
                                    to={path}
                                >
                                    <ListItemText primary={row.team} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            }/>

            {/* Один роут для ВСЕХ карточек команд */}
            <Route path=":teamRoute" element={<TeamCardWrapper />} />
        </Routes>
    );
};
