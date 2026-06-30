import './App.css';
import { Layout } from "./Layout.tsx";
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

// Создаем ультратемную конфигурацию с синими акцентами
const ultraDarkBlueTheme = createTheme({
    palette: {
        mode: 'dark', // Включает темный режим для всех компонентов MUI
        primary: {
            main: '#1e88e5',  // Приглушенный, но чёткий синий акцент
            light: '#64b5f6', // Светло-синий для ховеров
            dark: '#0d47a1',  // Глубокий тёмно-синий
            contrastText: '#ffffff',
        },
        background: {
            default: '#070c14', // Ультратёмный, почти чёрный фон всего приложения
            paper: '#0e1622',   // Тёмно-серый с глубоким холодным отливом для карточек и таблиц
        },
        text: {
            primary: '#ffffff',   // Чистый белый для высокой читаемости заголовков
            secondary: '#707e94', // Сдержанный стальной цвет для дат, времени и второстепенных текстов
        },
        divider: 'rgba(255, 255, 255, 0.05)', // Едва заметные, очень тонкие разделительные линии
    },
    shape: {
        borderRadius: 8,
    },
});

export const App = () => {
    return (
        <ThemeProvider theme={ultraDarkBlueTheme}>
            <CssBaseline /> {/* Окрашивает фон body в цвет #070c14 */}
            <Layout />
        </ThemeProvider>
    );
};
