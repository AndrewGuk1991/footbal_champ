import { Box } from '@mui/material';
import { Footer } from "./components/Footer.tsx";
import { Main } from "./components/Main.tsx";
import { Header } from "./components/Header.tsx";

export const Layout = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box
                sx={{
                    display: 'flex',
                    flexGrow: 1,
                    pt: ['56px', '64px'], // Компенсация высоты фиксированного Header
                    justifyContent: 'center', // Центрирует содержимое по горизонтали
                    alignItems: 'flex-start'  // Прижимает контент к верху для правильного скролла
                }}
            >
                <Main />
            </Box>

            <Footer />
        </Box>
    );
};
