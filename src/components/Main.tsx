import {Box, Container} from "@mui/material";


export const Main = () => {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: 3,
                backgroundColor: (theme) => theme.palette.background.default,
            }}
        >
            <Container maxWidth="lg">
                {}
            </Container>
        </Box>
    )
}