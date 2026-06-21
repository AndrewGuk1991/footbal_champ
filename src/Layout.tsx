import {Box} from '@mui/material';
import {SideBar} from "./components/SideBar.tsx";
import {Footer} from "./components/Footer.tsx";
import {Main} from "./components/Main.tsx";
import {Header} from "./components/Header.tsx";


export const Layout = () => {

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Header/>
            <Box sx={{display: 'flex', flexGrow: 1, pt: ['56px', '64px']}}>
                <SideBar/>
                <Main/>
            </Box>
            <Footer/>

        </Box>
    );
};
