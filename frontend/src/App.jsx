import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications';
import Header from './components/common/Header.jsx'
import AppRoutes from "./pages/AppRoutes.jsx";
import '@mantine/core/styles.css';
import './App.css'
import '@mantine/notifications/styles.css';

function App() {
    return(
        <MantineProvider>
            <Notifications position="top-center" zIndex={1000} />
            <BrowserRouter>
                <Header/>
                <AppRoutes/>
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App