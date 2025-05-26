import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/common/Header.jsx'
import AppRoutes from "./pages/AppRoutes.jsx";

function App() {
    return(
        <BrowserRouter>
            <Header/>
            <AppRoutes/>
        </BrowserRouter>
    );
}

export default App