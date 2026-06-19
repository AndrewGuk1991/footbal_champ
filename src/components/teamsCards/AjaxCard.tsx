import {Box} from "@mui/material";
import {TeamCard} from "../TeamCard.tsx";


const ajaxDeffenders = [
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

const ajaxMidfielders = [
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

const ajaxForwards = [
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
            <TeamCard
                teamName={'Аякс'}
                defenders={ajaxDeffenders}
                midfielders={ajaxMidfielders}
                forwards={ajaxForwards}/>
        </Box>
    )
}