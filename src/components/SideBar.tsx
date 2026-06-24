import {Box, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {NavLink} from "react-router-dom";
import {APP_ROUTES} from "../common/routes.ts";


export const SideBar = () => {

    const menuItems = [
        { text: 'Расписание игр', path: APP_ROUTES.SCHEDULE },
        { text: 'Команды', path: APP_ROUTES.TEAMS },
        { text: 'Таблица', path: APP_ROUTES.TABLE },
        { text: 'Бомбардиры', path: APP_ROUTES.STRIKERS },
    ];

    return (
        <Box>
            <List>
                {menuItems.map((item) => (
                    <ListItem
                        key={item.text}
                        disablePadding>
                        <ListItemButton
                            component={NavLink}
                            to={item.path}
                            sx={{
                                textAlign: 'left',
                                '&.active': {
                                    backgroundColor: (theme) => theme.palette.action.selected,
                                    color: (theme) => theme.palette.primary.main,
                                    fontWeight: 'bold'
                                }
                            }}>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

