import { Routes, Route } from "react-router-dom";
import { getAllAntennas, getAntennaById } from '../services/AntennaService';
import { getAllBatteries, getBatteryById } from '../services/BatteryService.jsx';
import { getAllCameras, getCameraById } from '../services/CameraService.jsx';
import { getAllFrames, getFrameById } from '../services/FrameService.jsx';
import { getAllMotors, getMotorById } from '../services/MotorService.jsx';
import { getAllPropellers, getPropellerById } from '../services/PropellerService.jsx';
import { getAllRX, getRXById } from '../services/RXService';
import { getAllStacks, getStackById } from '../services/StackService';
import { getAllVTX, getVTXById } from '../services/VTXService';
import Tutorials from "./Tutorials.jsx";
import LogInPage from './LogInPage.jsx';
import DroneComponents from "./DroneComponents.jsx";
import DroneComponent from './DroneComponent.jsx';
import ComponentsSidebar from "../components/common/ComponentsSidebar.jsx";

function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<></>}/>

            <Route path="/drone_components" element={<ComponentsSidebar />}>
                <Route path="antenna" element={<DroneComponents fetch={getAllAntennas} name="antenna" />}/>
                <Route path="antenna/:componentId" element={<DroneComponent fetch={getAntennaById} />}/>
                
                <Route path="battery" element={<DroneComponents fetch={getAllBatteries} name="battery" />}/>
                <Route path="battery/:componentId" element={<DroneComponent fetch={getBatteryById} />}/>

                <Route path="camera" element={<DroneComponents fetch={getAllCameras} name="camera" />}/>
                <Route path="camera/:componentId" element={<DroneComponent fetch={getCameraById} />}/>
                
                <Route path="frame" element={<DroneComponents fetch={getAllFrames} name="frame" />}/>
                <Route path="frame/:componentId" element={<DroneComponent fetch={getFrameById} />}/>
                
                <Route path="motor" element={<DroneComponents fetch={getAllMotors} name="motor" />}/>
                <Route path="motor/:componentId" element={<DroneComponent fetch={getMotorById} />}/>
                
                <Route path="propeller" element={<DroneComponents fetch={getAllPropellers} name="propeller" />}/>
                <Route path="propeller/:componentId" element={<DroneComponent fetch={getPropellerById} />}/>
                
                <Route path="rx" element={<DroneComponents fetch={getAllRX} name="rx" />}/>
                <Route path="rx/:componentId" element={<DroneComponent fetch={getRXById} />}/>
                
                <Route path="stack" element={<DroneComponents fetch={getAllStacks} name="stack" />}/>
                <Route path="stack/:componentId" element={<DroneComponent fetch={getStackById} />}/>

                <Route path="vtx" element={<DroneComponents fetch={getAllVTX} name="vtx" />}/>
                <Route path="vtx/:componentId" element={<DroneComponent fetch={getVTXById} />}/>
            </Route>

            <Route path="/tutorials" element={<Tutorials />}/>

            <Route path="/login" element={<LogInPage />}/>
        </Routes>
    );
}

export default AppRoutes