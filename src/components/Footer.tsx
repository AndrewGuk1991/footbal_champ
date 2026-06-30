import { Box, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) => theme.palette.background.paper,
                borderTop: '1px solid',
                borderColor: (theme) => theme.palette.divider,
                textAlign: 'center',
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}
        >
            <Typography
                variant="body2"
                sx={{ color: (theme) => theme.palette.text.primary }}
            >
                © {new Date().getFullYear()} Моё Приложение. Все права защищены.
            </Typography>
        </Box>
    );
};
