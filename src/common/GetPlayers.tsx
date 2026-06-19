

import { List, ListItem, ListItemText } from "@mui/material";
import type {Player} from "./types.ts";


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
