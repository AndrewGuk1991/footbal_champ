import { Box, Typography } from "@mui/material";

type ShirtIconProps = {
    number: number | string;
};

export const ShirtIcon = ({ number }: ShirtIconProps) => {
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 26,
                height: 26,
                mr: 1.5,
                flexShrink: 0,
                // ИСПРАВЛЕНО: Глубокий темно-серый цвет из вашей темы
                color: 'background.paper',
                filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.3))',
            }}
        >
            {/* SVG Силуэт футбольной формы */}
            <svg viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%' }}>
                <path
                    fill="currentColor"
                    // ИСПРАВЛЕНО: Тонкая обводка цвета text.secondary, чтобы майка не сливалась с фоном приложения
                    stroke="#707e94"
                    strokeWidth="0.5"
                    d="M18.5 2H15.8C15.4 3.2 14.3 4 13 4C11.7 4 10.6 3.2 10.2 2H7.5C6.1 2 5 3.1 5 4.5V8.5C5 9.3 5.7 10 6.5 10H8V20.5C8 21.3 8.7 22 9.5 22H16.5C17.3 22 18 21.3 18 20.5V10H19.5C20.3 10 21 9.3 21 8.5V4.5C21 3.1 19.9 2 18.5 2Z"
                />
            </svg>

            <Typography
                sx={{
                    position: 'absolute',
                    top: '48%',
                    left: '52%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '0.65rem',
                    fontWeight: 'bold',
                    color: 'text.primary',
                    lineHeight: 1,
                    userSelect: 'none',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {number}
            </Typography>
        </Box>
    );
};
