import { useState, useEffect } from "react"; // 1. Импортируем useEffect
import { AppBar, IconButton, Toolbar, Typography, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery } from "@mui/material"; // Импортируем useMediaQuery
import { useTheme } from "@mui/material/styles"; // Импортируем useTheme для работы с брейкпоинтами
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../common/routes.ts";
import { alpha } from "@mui/material/styles";
import logo from "./../assets/logo.jpg";
import { Link as RouterLink } from 'react-router-dom';

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // 2. Подключаем тему и медиа-запрос. isDesktop станет true, когда экран будет равен 'sm' и выше (от 600px)
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

    const menuItems = [
        { text: 'Матчи', path: APP_ROUTES.GAME_RESULTS },
        { text: 'Таблица', path: APP_ROUTES.TABLE },
        { text: 'Команды', path: APP_ROUTES.TEAMS },
        { text: 'Бомбардиры', path: APP_ROUTES.STRIKERS },
    ];

    // 3. Следим за изменением ширины экрана. Если перешли на десктоп — принудительно закрываем шторку
    useEffect(() => {
        if (isDesktop && isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    }, [isDesktop, isMobileMenuOpen]);

    const toggleMobileMenu = (open: boolean) => () => {
        setIsMobileMenuOpen(open);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: (theme) => theme.palette.background.paper,
                boxShadow: 'none',
                borderBottom: '1px solid',
                borderColor: (theme) => theme.palette.divider
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Левая часть: Логотип + Название */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                        component={RouterLink} // 2. Указываем MUI использовать компонент ссылки вместо обычного тега
                        to={APP_ROUTES.GAME_RESULTS}         // 3. Задаем путь для перехода
                        sx={{
                            display: 'flex',   // Избегаем возможных сдвигов верстки
                            cursor: 'pointer', // Показываем палец при наведении
                            '&:hover': {
                                opacity: 0.9,  // Легкий визуальный отклик при наведении
                            },
                        }}
                    >
                        {/* Сам элемент изображения логотипа */}
                        <Box
                            component="img"
                            src={logo}
                            alt="ПЛФЛ"
                            sx={{
                                height: 36,
                                width: 'auto',
                                mr: 1.5,
                                borderRadius: '50%',
                                backgroundColor: '#ffffff',
                                p: 0.4
                            }}
                        />
                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            fontWeight: 'bold',
                            color: (theme) => theme.palette.text.primary,
                            fontSize: { xs: '1rem', md: '1.25rem' }
                        }}
                    >
                        ПЛФЛ
                    </Typography>
                </Box>

                {/* Правая часть для ПК: Горизонтальное меню */}
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1.5 }}>
                    {menuItems.map((item) => (
                        <Button
                            key={item.text}
                            component={NavLink}
                            to={item.path}
                            sx={{
                                color: (theme) => theme.palette.text.secondary,
                                textTransform: 'none',
                                fontWeight: 500,
                                borderRadius: 1.5,
                                fontSize: { sm: '0.95rem', md: '1.1rem' },
                                px: { sm: 2, md: 2.5 },
                                py: 0.5,
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                    color: (theme) => theme.palette.text.primary,
                                    backgroundColor: (theme) => alpha(theme.palette.text.primary, 0.04),
                                },
                                '&.active': {
                                    color: (theme) => theme.palette.primary.main,
                                    fontWeight: 600,
                                    backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.08),
                                    '&:hover': {
                                        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.12),
                                    }
                                }
                            }}
                        >
                            {item.text}
                        </Button>
                    ))}
                </Box>

                {/* Правая часть для мобильных: Кнопка-трансформер */}
                <IconButton
                    color="inherit"
                    edge="end"
                    onClick={toggleMobileMenu(!isMobileMenuOpen)}
                    sx={{
                        display: { xs: 'flex', sm: 'none' },
                        zIndex: (theme) => theme.zIndex.drawer + 2,
                        transition: 'transform 0.3s ease-in-out',
                        transform: isMobileMenuOpen ? 'rotate(90deg)' : 'none'
                    }}
                >
                    {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
            </Toolbar>

            {/* Выезжающее боковое меню (Drawer) */}{/* Выезжающее боковое меню (Drawer) */}
            <Drawer
                anchor="right"
                open={isMobileMenuOpen}
                onClose={toggleMobileMenu(false)}

                // 1. Отключаем портал. Это решает проблему aria-hidden без использования спорных пропсов
                disablePortal

                // 2. Оставляем slotProps только для стилизации фона и отступов
                slotProps={{
                    paper: {
                        sx: {
                            width: 250,
                            backgroundColor: (theme) => theme.palette.background.paper,
                            backgroundImage: 'none',
                            p: 2,
                            pt: 10
                        }
                    }
                }}
            >
                {/* Список ссылок в мобильном меню */}
                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                            <ListItemButton
                                component={NavLink}
                                to={item.path}
                                onClick={toggleMobileMenu(false)}
                                sx={{
                                    borderRadius: 1.5,
                                    color: (theme) => theme.palette.text.secondary,
                                    transition: 'all 0.2s ease',
                                    '&:hover': {
                                        color: (theme) => theme.palette.text.primary,
                                        backgroundColor: (theme) => alpha(theme.palette.text.primary, 0.04),
                                    },
                                    '&.active': {
                                        color: (theme) => theme.palette.primary.main,
                                        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.08),
                                        '& .MuiTypography-root': {
                                            fontWeight: 'bold',
                                        }
                                    }
                                }}
                            >
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

        </AppBar>
    );
};
