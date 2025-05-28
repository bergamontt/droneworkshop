import { Routes, Route } from "react-router-dom";
import { getAllAntennas } from '../services/AntennaService';
import { getAllBatteries } from '../services/BatteryService.jsx';
import { getAllCameras } from '../services/CameraService.jsx';
import { getAllFrames } from '../services/FrameService.jsx';
import { getAllMotors } from '../services/MotorService.jsx';
import { getAllPropellers } from '../services/PropellerService.jsx';
import { getAllRX } from '../services/RXService';
import { getAllStacks } from '../services/StackService';
import { getAllVTX } from '../services/VTXService';
import Tutorials from "./Tutorials.jsx";
import DroneComponents from "./DroneComponents.jsx";
import ComponentsSidebar from "../components/common/ComponentsSidebar.jsx";

function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<></>}/>

            <Route path="/drone_components" element={<ComponentsSidebar />}>
                <Route path="antenna" element={<DroneComponents fetch={getAllAntennas}/>}/>
                <Route path="battery" element={<DroneComponents fetch={getAllBatteries}/>}/>
                <Route path="camera" element={<DroneComponents fetch={getAllCameras}/>}/>
                <Route path="frame" element={<DroneComponents fetch={getAllFrames}/>}/>
                <Route path="motor" element={<DroneComponents fetch={getAllMotors}/>}/>
                <Route path="propeller" element={<DroneComponents fetch={getAllPropellers}/>}/>
                <Route path="rx" element={<DroneComponents fetch={getAllRX}/>}/>
                <Route path="stack" element={<DroneComponents fetch={getAllStacks}/>}/>
                <Route path="vtx" element={<DroneComponents fetch={getAllVTX}/>}/>
            </Route>

            <Route path="/tutorials" element={<Tutorials />}/>
        </Routes>
    );
}

export default AppRoutes