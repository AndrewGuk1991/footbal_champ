import {List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import {NavLink, Route, Routes} from "react-router-dom";
import {TEAMS_DATA} from "../data/teamsData.ts";
import {TeamCard} from "./TeamCard.tsx";

export const Teams = () => {

    const teamsKeysList = Object.keys(TEAMS_DATA)

    return (
        <Routes>
            <Route path="/" element={
                <List component="ol" sx={{ listStyleType: 'decimal', pl: 4 }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>Команды</Typography>
                    {teamsKeysList.map((teamKey) => {
                        return (
                            <ListItem key={TEAMS_DATA[teamKey].id} sx={{ display: 'list-item' }} disablePadding>
                                <ListItemButton
                                    component={NavLink}
                                    to={teamKey}
                                >
                                    <ListItemText primary={TEAMS_DATA[teamKey].title} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            }/>

            <Route path=":teamRoute" element={<TeamCard />} />
        </Routes>
    );
};
