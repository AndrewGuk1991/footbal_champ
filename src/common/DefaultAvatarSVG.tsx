

import { Box, Typography } from "@mui/material";

type DefaultAvatarSVGProps = {
    number: number | string;
};

export const DefaultAvatarSVG = ({ number }: DefaultAvatarSVGProps) => {
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                flexShrink: 0,
                backgroundColor: 'background.paper',
                userSelect: 'none',
            }}
        >
            {/* SVG Силуэт игрока со спины с детальной головой */}
            <svg viewBox="0 0 100 100" fill="none" style={{ width: '90%', height: '90%' }}>
                {/* Определение градиентов для объема */}
                <defs>
                    {/* Синий градиент футболки из вашей темы */}
                    <linearGradient id="blueGradient" x1="50" y1="36" x2="50" y2="90" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#1e88e5" />
                        <stop offset="100%" stopColor="#0d47a1" />
                    </linearGradient>
                    {/* Градиент для тени на шее и волосах */}
                    <linearGradient id="avatarShadow" x1="50" y1="10" x2="50" y2="40" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#1a2436" />
                        <stop offset="100%" stopColor="#0a101d" />
                    </linearGradient>
                </defs>

                {/* ГРУППА: ГОЛОВА И ШЕЯ (ВИД СЗАДИ) */}
                <g>
                    {/* Шея */}
                    <path
                        d="M44 32 L44 38 L56 38 L56 32 Z"
                        fill="#1a2436"
                        stroke="#707e94"
                        strokeWidth="0.7"
                    />

                    {/* Левое ухо */}
                    <path
                        d="M37 22 C36 22 35.5 24 37 25.5 C38 26.5 39 26 39 24"
                        fill="#1a2436"
                        stroke="#707e94"
                        strokeWidth="0.7"
                    />

                    {/* Правое ухо */}
                    <path
                        d="M63 22 C64 22 64.5 24 63 25.5 C62 26.5 61 26 61 24"
                        fill="#1a2436"
                        stroke="#707e94"
                        strokeWidth="0.7"
                    />

                    {/* Голова (базовая форма затылка) */}
                    <ellipse cx="50" cy="22" rx="12" ry="11" fill="url(#avatarShadow)" />

                    {/* Спортивная прическа (контур затылка и стрижки сверху) */}
                    <path
                        d="M38 21
                           C37 16, 42 10, 50 10
                           C58 10, 63 16, 62 21
                           C62 23, 60 24, 59 23
                           C56 19, 44 19, 41 23
                           C40 24, 38 23, 38 21 Z"
                        fill="#090f1a"
                        stroke="#707e94"
                        strokeWidth="0.8"
                    />
                </g>

                {/* ГРУППА: ТОРС И КУСКИ РУКАВОВ */}
                <g>
                    {/* Воротник футболки */}
                    <path
                        d="M40 37 C43 40, 57 40, 60 37"
                        stroke="#707e94"
                        strokeWidth="1.5"
                        fill="none"
                    />

                    {/* Плечи и тело футболки */}
                    <path
                        d="M15 90
                           C15 72, 24 43, 38 37
                           C42 39, 58 39, 62 37
                           C76 43, 85 72, 85 90
                           Z"
                        fill="url(#blueGradient)"
                        stroke="#1e88e5"
                        strokeWidth="1"
                    />
                </g>
            </svg>

            {/* Большой номер на спине силуэта */}
            <Typography
                sx={{
                    position: 'absolute',
                    top: '65%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: { xs: '2.4rem', sm: '3.3rem' },
                    fontWeight: 900,
                    color: 'text.primary',
                    lineHeight: 1,
                    letterSpacing: '-2px',
                    textShadow: '0px 3px 8px rgba(0,0,0,0.9), 0px 0px 12px rgba(255,255,255,0.08)'
                }}
            >
                {number}
            </Typography>
        </Box>
    );
};
