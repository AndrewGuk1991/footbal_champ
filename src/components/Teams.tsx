import { List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TEAMS_DATA } from "../data/teamsData.ts";
import { APP_ROUTES } from "../common/routes.ts";
import { alpha } from "@mui/material/styles"; // Импортируем утилиту для прозрачности синего цвета
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const Teams = () => {
    const teamsKeysList = Object.keys(TEAMS_DATA);
    const navigate = useNavigate();

    return (
        <Paper
            variant="outlined"
            sx={{
                width: '100%',
                maxWidth: { xs: '100%', sm: '70%', md: '50%' },
                p: { xs: 2, sm: 3 },
                margin: '20px auto',
                borderRadius: 2,
                // 1. Привязываем фон карточки к глубокому темно-серому оттенку #0e1622
                backgroundColor: (theme) => theme.palette.background.paper,
                // 2. Линия границы теперь тонкая и полупрозрачная (в тон всей темы)
                borderColor: (theme) => theme.palette.divider,
                overflow: 'hidden'
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    mb: 2,
                    fontWeight: 'bold',
                    // 3. Используем чистый белый цвет для заголовка
                    color: (theme) => theme.palette.text.primary
                }}
            >
                Команды лиги
            </Typography>

            <List disablePadding>
                {teamsKeysList.map((teamKey) => {
                    const team = TEAMS_DATA[teamKey];
                    return (
                        <ListItem
                            key={team.id}
                            disablePadding
                            sx={{
                                borderBottom: '1px solid',
                                // 4. Деликатная разделительная линия между строками команд
                                borderColor: (theme) => theme.palette.divider,
                                '&:last-child': { borderBottom: 0 }
                            }}
                        >
                            <ListItemButton
                                onClick={() => navigate(`${APP_ROUTES.TEAMS}/${teamKey}`)}
                                sx={{
                                    borderRadius: 1,
                                    my: 0.5,
                                    py: { xs: 1.5, sm: 1.2 },
                                    px: 1.5,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    transition: 'all 0.2s ease',
                                    // 5. Цвет названия команды по умолчанию белый
                                    color: (theme) => theme.palette.text.primary,

                                    // 6. Настройка ховера под ультратемный синий стиль
                                    '&:hover': {
                                        // Подмешиваем 8% прозрачности к вашему синему акценту #1e88e5
                                        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.08),
                                        // Текст названия команды плавно загорается фирменным синим цветом
                                        color: (theme) => theme.palette.primary.main,

                                        // При наведении стрелочка смещается и тоже становится синей
                                        '& .mui-chevron': {
                                            transform: 'translateX(4px)',
                                            color: (theme) => theme.palette.primary.main
                                        }
                                    }
                                }}
                            >
                                <ListItemText
                                    primary={team.title}
                                    sx={{
                                        '& .MuiTypography-root': {
                                            fontWeight: 500,
                                            fontSize: { xs: '0.95rem', sm: '1rem' }
                                        }
                                    }}
                                />

                                {/* 7. Стрелочка перехода в тон стального цвета text.secondary по умолчанию */}
                                <ChevronRightIcon
                                    className="mui-chevron"
                                    sx={{
                                        color: (theme) => theme.palette.text.secondary,
                                        fontSize: '1.25rem',
                                        transition: 'transform 0.2s ease, color 0.2s ease'
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Paper>
    );
};
