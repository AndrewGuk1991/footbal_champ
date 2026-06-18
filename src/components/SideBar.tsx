import {Box, List, ListItem, ListItemButton, ListItemText} from "@mui/material";


export const SideBar = () => {

    return (
        <Box sx={{ textAlign: 'center'}}>
            <List>
                {['Главная', 'Составы', 'Календарь'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}