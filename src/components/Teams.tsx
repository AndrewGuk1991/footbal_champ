import {List, ListItem, ListItemText, Typography} from "@mui/material"
import { rows } from "./LeagueTable"


export const Teams = () => {
    return (
        <>
            <Typography variant="h4">Команды</Typography>
            <List component="ol" sx={{ listStyleType: 'decimal', pl: 4 }}>
                {rows.map((row) => (
                    <ListItem
                        key={row.id}
                        sx={{ display: 'list-item' }}
                        disablePadding
                    >
                        <ListItemText primary={row.team} />
                    </ListItem>
                ))}
            </List>
        </>

    )
}