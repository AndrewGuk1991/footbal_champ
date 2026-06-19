import {Box, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {PATH} from "./Main.tsx";
import {NavLink} from "react-router-dom";


export const SideBar = () => {

    const menuItems = [
        { text: 'Расписание игр', path: PATH.SCHEDULE },
        { text: 'Команды', path: PATH.TEAMS },
        { text: 'Таблица', path: PATH.TABLE },
    ];


    return (
        <Box sx={{ textAlign: 'center'}}>
            <List>
                {menuItems.map((item) => (
                    <ListItem
                        key={item.text}
                        disablePadding>
                        <ListItemButton
                            component={NavLink}
                            to={item.path}
                            sx={{
                                textAlign: 'center',
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