import {Box, Typography} from "@mui/material";


export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto', // Прижимает футер к самому низу страницы
                backgroundColor: (theme) => theme.palette.grey[200],
                textAlign: 'center',
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}
        >
            <Typography variant="body2" color="textSecondary">
                © {new Date().getFullYear()} Моё Приложение. Все права защищены.
            </Typography>
        </Box>
    )
}