import { List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Заменили NavLink на useNavigate
import { TEAMS_DATA } from "../data/teamsData.ts";
import { APP_ROUTES } from "../common/routes.ts";
import { alpha } from "@mui/material/styles";

export const Teams = () => {
    const teamsKeysList = Object.keys(TEAMS_DATA);
    const navigate = useNavigate()

    return (
        <Paper
            variant="outlined"
            sx={{
                maxWidth: '50%',
                p: 3,
                margin: '20px auto',
                borderRadius: 2,
                backgroundColor: (theme) => theme.palette.background.paper
            }}
        >
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: (theme) => theme.palette.text.primary }}>
                Команды
            </Typography>

            <List component="ol" sx={{ listStyleType: 'decimal', pl: 4 }}>
                {teamsKeysList.map((teamKey) => {
                    return (
                        <ListItem
                            key={TEAMS_DATA[teamKey].id}
                            sx={{
                                display: 'list-item',
                                color: (theme) => theme.palette.text.secondary
                            }}
                            disablePadding
                        >
                            <ListItemButton
                                onClick={() => navigate(`${APP_ROUTES.TEAMS}/${teamKey}`)}
                                sx={{
                                    borderRadius: 1,
                                    mb: 0.5,
                                    transition: 'all 0.2s ease',
                                    color: (theme) => theme.palette.text.primary,

                                    '&:hover': {
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'dark'
                                                ? alpha(theme.palette.primary.main, 0.08)
                                                : alpha(theme.palette.primary.main, 0.04),
                                        color: (theme) => theme.palette.primary.main
                                    }
                                }}
                            >
                                <ListItemText
                                    primary={TEAMS_DATA[teamKey].title}
                                    sx={{ '& .MuiTypography-root': { fontWeight: 500 } }}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Paper>
    );
};
