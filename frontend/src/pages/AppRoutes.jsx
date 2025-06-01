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
import LogInPage from './authentification/LogInPage.jsx';
import RegisterPage from './authentification/RegisterPage.jsx';
import ManageProfilePage from './authentification/ManageProfilePage.jsx';
import ChangePasswordPage from "./authentification/ChangePasswordPage.jsx";
import DroneComponents from "./DroneComponents.jsx";
import DroneComponent from './DroneComponent.jsx';
import ComponentsSidebar from "../components/common/ComponentsSidebar.jsx";
import ForumMainPage from "./forum/ForumMainPage.jsx";
import ForumPostPage from "./forum/ForumPostPage.jsx";

function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<></>}/>

            <Route path="/drone_components" element={<ComponentsSidebar />}>
                <Route path="antenna" key="antenna" element={<DroneComponents fetch={getAllAntennas} name="antenna" />}/>
                <Route path="antenna/:componentId" element={<DroneComponent fetch={getAntennaById} />}/>
                
                <Route path="battery" key="battery" element={<DroneComponents fetch={getAllBatteries} name="battery" />}/>
                <Route path="battery/:componentId" element={<DroneComponent fetch={getBatteryById} />}/>

                <Route path="camera" key="camera" element={<DroneComponents fetch={getAllCameras} name="camera" />}/>
                <Route path="camera/:componentId" element={<DroneComponent fetch={getCameraById} />}/>
                
                <Route path="frame" key="frame" element={<DroneComponents fetch={getAllFrames} name="frame" />}/>
                <Route path="frame/:componentId" element={<DroneComponent fetch={getFrameById} />}/>
                
                <Route path="motor" key="motor" element={<DroneComponents fetch={getAllMotors} name="motor" />}/>
                <Route path="motor/:componentId" element={<DroneComponent fetch={getMotorById} />}/>
                
                <Route path="propeller" key="propeller" element={<DroneComponents fetch={getAllPropellers} name="propeller" />}/>
                <Route path="propeller/:componentId" element={<DroneComponent fetch={getPropellerById} />}/>
                
                <Route path="rx" key="rx" element={<DroneComponents fetch={getAllRX} name="rx" />}/>
                <Route path="rx/:componentId" element={<DroneComponent fetch={getRXById} />}/>
                
                <Route path="stack" key="stack" element={<DroneComponents fetch={getAllStacks} name="stack" />}/>
                <Route path="stack/:componentId" element={<DroneComponent fetch={getStackById} />}/>

                <Route path="vtx" key="vtx" element={<DroneComponents fetch={getAllVTX} name="vtx" />}/>
                <Route path="vtx/:componentId" element={<DroneComponent fetch={getVTXById} />}/>
            </Route>

            <Route path="/tutorials" element={<Tutorials />}/>

            <Route path="/log-in" element={<LogInPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/profile" element={<ManageProfilePage />}/>
            <Route path="/change-password" element={<ChangePasswordPage />}/>

            <Route path="/forum" element={<ForumMainPage />}/>
            <Route path="/forum/:postId" element={<ForumPostPage />}/>
        </Routes>
    );
}

export default AppRoutes