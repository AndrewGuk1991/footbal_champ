import {Box, Typography} from "@mui/material";
import {GetPlayers} from "../common/GetPlayers.tsx";

const deffenders = [
    {
        name: 'Виталий',
        surname: 'Головчик',
        number: 2
    },
    {
        name: 'Роман',
        surname:'Ковалицкий',
        number: 3,
    },
    {
        name: 'Кирилл',
        surname:'Карпенко',
        number: 4,
    },
    {
        name: 'Виталий',
        surname:'Кот',
        number: 5,
    },
]

const midfielders = [
    {
        name: 'Марк',
        surname: 'Кот',
        number: 6
    },
    {
        name: 'Владимир',
        surname: 'Сидоревич',
        number: 7
    },
    {
        name: 'Андрей',
        surname: 'Гук',
        number: 8
    },
    {
        name: 'Евгенний',
        surname: 'Радионов',
        number: 11
    },
]

const forwards = [
    {
        name: 'Вадим',
        surname:'Шикула',
        number: 12,
    },
    {
        name: 'Геннадий',
        surname:'Полюхович',
        number: 9,
    },
    {
        name: 'Даниил',
        surname:'Лемешевский',
        number: 10,
    },
    {
        name: 'Виктор',
        surname:'Ибраев',
        number: 13,
    },
]

export const AjaxCard = () => {
    return (
        <Box>
            <h2>Состав команды Аякс:</h2>
            <Typography>Защитники:</Typography>
            <GetPlayers players={deffenders} />
            <Typography>Полузащитники:</Typography>
            <GetPlayers players={midfielders} />
            <Typography>Нападающие:</Typography>
            <GetPlayers players={forwards} />
        </Box>
    )
}