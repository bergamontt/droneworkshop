import { Routes, Route } from "react-router-dom";
import DroneComponents from "./DroneComponents.jsx";
import { getAllAntennas } from '../services/AntennaService';
import { getAllBatteries } from '../services/BatteryService.jsx';
import { getAllCameras } from '../services/CameraService.jsx';
import { getAllFrames } from '../services/FrameService.jsx';
import { getAllMotors } from '../services/MotorService.jsx';
import { getAllPropellers } from '../services/PropellerService.jsx';
import { getAllRX } from '../services/RXService';
import { getAllStacks } from '../services/StackService';
import { getAllVTX } from '../services/VTXService';

function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<></>}/>
            <Route path="/drone_components" element={<DroneComponents />}/>
            <Route path="/drone_components/antenna" element={<DroneComponents fetch={getAllAntennas}/>}/>
            <Route path="/drone_components/battery" element={<DroneComponents fetch={getAllBatteries}/>}/>
            <Route path="/drone_components/camera" element={<DroneComponents fetch={getAllCameras}/>}/>
            <Route path="/drone_components/frame" element={<DroneComponents fetch={getAllFrames}/>}/>
            <Route path="/drone_components/motor" element={<DroneComponents fetch={getAllMotors}/>}/>
            <Route path="/drone_components/propeller" element={<DroneComponents fetch={getAllPropellers}/>}/>
            <Route path="/drone_components/rx" element={<DroneComponents fetch={getAllRX}/>}/>
            <Route path="/drone_components/stack" element={<DroneComponents fetch={getAllStacks}/>}/>
            <Route path="/drone_components/vtx" element={<DroneComponents fetch={getAllVTX}/>}/>
        </Routes>
    );
}

export default AppRoutes