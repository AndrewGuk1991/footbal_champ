import {Box} from "@mui/material";
import {TeamCard} from "../TeamCard.tsx";

const pikantDefenders = [
    { name: 'Павел', surname: 'Гриб', number: 3 },
    { name: 'Олег', surname: 'Володько', number: 5 },
    { name: 'Евгений', surname: 'Дрозд', number: 14 },
    { name: 'Николай', surname: 'Лозицкий', number: 18 },
];

const pikantMidfielders = [
    { name: 'Денис', surname: 'Курилович', number: 11 },
    { name: 'Алексей', surname: 'Хомич', number: 16 },
    { name: 'Валерий', surname: 'Марчук', number: 21 },
    { name: 'Кирилл', surname: 'Шпаковский', number: 23 },
];

const pikantForwards = [
    { name: 'Эдуард', surname: 'Логвин', number: 19 },
    { name: 'Станислав', surname: 'Гузаревич', number: 77 },
    { name: 'Антон', surname: 'Прокопович', number: 99 },
];


export const PikantCard = () => {
    return (
        <Box>
            <TeamCard
                teamName={'Пикант'}
                defenders={pikantDefenders}
                midfielders={pikantMidfielders}
                forwards={pikantForwards}/>
        </Box>
    )
}