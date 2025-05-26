import { Routes, Route } from "react-router-dom";
import DroneComponents from "./DroneComponents.jsx";

function AppRoutes() {
    return(
        <Routes>
           <Route path='/' element={<></>}/>
            <Route path="/drone_components" element={<DroneComponents />}/>
        </Routes>
    );
}

export default AppRoutes