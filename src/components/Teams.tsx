import {List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material"
import { rows } from "./LeagueTable"
import {NavLink, Route, Routes} from "react-router-dom";
import {AjaxCard} from "./teamsCards/AjaxCard.tsx";
import {PinskdrewCard} from "./teamsCards/PinskdrewCard.tsx";
import {SputnikCard} from "./teamsCards/SputnikCard.tsx";
import {PikantCard} from "./teamsCards/PikantCard.tsx";
import {TEAMS_ROUTES} from "../common/routes.ts";


export const Teams = () => {

    const getTeamPath = (teamName: string): string => {
        switch (teamName.toLowerCase()) {
            case 'аякс': return TEAMS_ROUTES.AJAX;
            case 'пинскдрев': return TEAMS_ROUTES.PINSKDREW;
            case 'спутник': return TEAMS_ROUTES.SPUTNIK;
            case 'пикант': return TEAMS_ROUTES.PIKANT;
            default: return '';
        }
    };

    return (
        <>
            <Routes>
                <Route path={'/'} element={<List component="ol" sx={{ listStyleType: 'decimal', pl: 4 }}>
                    <Typography variant="h4">Команды</Typography>
                    {rows.map((row) => (
                        <ListItem
                            key={row.id}
                            sx={{ display: 'list-item' }}
                            disablePadding
                        >
                            <ListItemButton
                                component={NavLink}
                                to={getTeamPath(row.team)}
                                sx={{
                                    textAlign: 'center',
                                    '&.active': {
                                        backgroundColor: (theme) => theme.palette.action.selected,
                                        color: (theme) => theme.palette.primary.main,
                                        fontWeight: 'bold'
                                    }
                                }}>
                            <ListItemText primary={row.team} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>}/>
                <Route path={TEAMS_ROUTES.AJAX} element={<AjaxCard/>}/>
                <Route path={TEAMS_ROUTES.PINSKDREW} element={<PinskdrewCard/>}/>
                <Route path={TEAMS_ROUTES.SPUTNIK} element={<SputnikCard/>}/>
                <Route path={TEAMS_ROUTES.PIKANT} element={<PikantCard/>}/>
            </Routes>
        </>

    )
}