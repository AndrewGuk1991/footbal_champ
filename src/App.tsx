import './App.css';
import { Layout } from "./Layout.tsx";
// 1. Импортируем необходимые компоненты и функции из MUI
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

// 2. Создаем конфигурацию темной темы
const darkPurpleTheme = createTheme({
    palette: {
        mode: 'dark', // Включает темный режим для всех компонентов MUI
        primary: {
            main: '#9c27b0', // Главный фиолетовый цвет (MUI Purple)
            light: '#ba68c8', // Светлый оттенок фиолетового (для ховеров)
            dark: '#7b1fa2',  // Темный оттенок фиолетового
        },
        background: {
            default: '#121212', // Цвет фона всего приложения
            paper: '#1e1e1e',   // Цвет фона карточек, аккордеонов и списков
        },
    },
    // Опционально: можно скруглить углы у компонентов по умолчанию в тон фиолетовой теме
    shape: {
        borderRadius: 8,
    },
});

export const App = () => {
    return (
        // 3. Оборачиваем Layout в ThemeProvider и добавляем CssBaseline для сброса стилей браузера
        <ThemeProvider theme={darkPurpleTheme}>
            <CssBaseline /> {/* Гарантирует, что фон body станет темным */}
            <Layout />
        </ThemeProvider>
    );
};
