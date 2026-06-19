import {Box} from "@mui/material";
import {TeamCard} from "../TeamCard.tsx";


const sputnikDefenders = [
    { name: 'Дмитрий', surname: 'Король', number: 2 },
    { name: 'Александр', surname: 'Шепелевич', number: 4 },
    { name: 'Сергей', surname: 'Боричевский', number: 15 },
    { name: 'Игорь', surname: 'Тихончук', number: 22 },
];

const sputnikMidfielders = [
    { name: 'Никита', surname: 'Малащицкий', number: 6 },
    { name: 'Максим', surname: 'Ковалевич', number: 8 },
    { name: 'Артем', surname: 'Павловец', number: 17 },
    { name: 'Иван', surname: 'Шостак', number: 20 },
];

const sputnikForwards = [
    { name: 'Владислав', surname: 'Якубович', number: 7 },
    { name: 'Илья', surname: 'Кисель', number: 9 },
    { name: 'Михаил', surname: 'Козак', number: 10 },
];


export const SputnikCard = () => {
    return (
        <Box>
            <TeamCard
                teamName={'Спутник'}
                defenders={sputnikDefenders}
                midfielders={sputnikMidfielders}
                forwards={sputnikForwards}/>
        </Box>
    )
}