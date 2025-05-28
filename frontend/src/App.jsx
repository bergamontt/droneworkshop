import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from '@mantine/core'
import Header from './components/common/Header.jsx'
import AppRoutes from "./pages/AppRoutes.jsx";
import '@mantine/core/styles.css';
import './App.css'

function App() {
    return(
        <MantineProvider>
            <BrowserRouter>
                <Header/>
                <AppRoutes/>
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App