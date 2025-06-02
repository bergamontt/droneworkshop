import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications';
import Header from './components/common/Header.jsx'
import AppRoutes from "./pages/AppRoutes.jsx";
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './App.css'

function App() {
    return(
        <MantineProvider>
            <Notifications zIndex={3000} />
            <BrowserRouter>
                <Header/>
                <AppRoutes/>
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App