// import {List, ListItem} from "@mui/material";
//
// type Player = {
//     name: string
//     surname: string,
//     number: number,
// }
//
// export const GetPlayers = ({players}: { players: Player[] }) => {
//     return (
//         <List>
//             {players.map((player, index) => (
//                 <ListItem key={index}>
//                     <b>{player.number} </b>
//                     <span> {player.surname} </span>
//                     <span> {player.name}</span>
//                 </ListItem>
//             ))}
//         </List>
//     )
// }


import { List, ListItem, ListItemText } from "@mui/material";

type Player = {
    name: string;
    surname: string;
    number: number;
};


export const GetPlayers = ({ players }: {players: Player[];}) => {
    return (
        <List>
            {players.map((player) => (
                <ListItem
                    key={player.number}
                    sx={{ px: 0 }}
                >
                    <ListItemText
                        primary={
                            <>
                                <b>№{player.number}</b> — {player.surname} {player.name}
                            </>
                        }
                    />
                </ListItem>
            ))}
        </List>
    );
};
