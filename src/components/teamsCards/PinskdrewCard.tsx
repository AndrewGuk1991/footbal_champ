import {Box} from "@mui/material";
import {TeamCard} from "../TeamCard.tsx";

const pinskdrewDefenders = [
    { name: 'Юрий', surname: 'Леонидов', number: 13 },
    { name: 'Владимир', surname: 'Шоломицкий', number: 24 },
    { name: 'Роман', surname: 'Гречко', number: 32 },
    { name: 'Виктор', surname: 'Левковец', number: 44 },
];

const pinskdrewMidfielders = [
    { name: 'Вадим', surname: 'Бык', number: 8 },
    { name: 'Артур', surname: 'Кохнюк', number: 12 },
    { name: 'Вячеслав', surname: 'Барановский', number: 27 },
    { name: 'Руслан', surname: 'Ребковец', number: 88 },
];

const pinskdrewForwards = [
    { name: 'Даниил', surname: 'Шевчук', number: 9 },
    { name: 'Анатолий', surname: 'Климович', number: 11 },
    { name: 'Дмитрий', surname: 'Полховский', number: 71 },
];


export const PinskdrewCard = () => {
    return (
        <Box>
            <TeamCard
                teamName={'Пинскдрев'}
                defenders={pinskdrewDefenders}
                midfielders={pinskdrewMidfielders}
                forwards={pinskdrewForwards}/>
        </Box>
    )
}