import { Routes, Route } from "react-router-dom";
import { getAllAntennas, getAllRXAntennas, getAllVTXAntennas, getAntennaById, getAntennaDistributors, getAntennaManufacturers } from '../services/AntennaService';
import { getAllBatteries, getBatteryById, getBatteryDistributors, getBatteryManufacturers } from '../services/BatteryService.jsx';
import { getAllCameras, getCameraById, getCameraDistributors, getCameraManufacturers } from '../services/CameraService.jsx';
import { getAllFrames, getFrameById, getFrameDistributors, getFrameManufacturers } from '../services/FrameService.jsx';
import { getAllMotors, getMotorById, getMotorDistributors, getMotorManufacturers } from '../services/MotorService.jsx';
import { getAllPropellers, getPropellerById, getPropellerDistributors, getPropellerManufacturers } from '../services/PropellerService.jsx';
import { getAllRX, getRXById, getRXDistributors, getRXManufacturers } from '../services/RXService';
import { getAllStacks, getStackById, getStackDistributors, getStackManufacturers } from '../services/StackService';
import { getAllVTX, getVTXById, getVTXDistributors, getVTXManufacturers } from '../services/VTXService';
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
import WelcomePage from './WelcomePage.jsx'
import WritePostPage from "./forum/WritePostPage.jsx";
import ForumSidebar from "../components/common/ForumSidebar.jsx";
import WorkshopLayout from '../components/workshop/WorkshopLayout.jsx'
import SchemaPage from "./SchemaPage.jsx";
import PublicationsPage from "./workshop/PublicationsPage.jsx";
import DronesPage from "./workshop/DronesPage.jsx";
import DronePage from "./workshop/DronePage.jsx";
import PublicationPage from "./workshop/PublicationPage.jsx";

function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<WelcomePage/>}/>

            <Route path="/drone_components" element={<ComponentsSidebar />}>

                <Route path="antenna_rx" key="antenna_rx" element={
                    <DroneComponents 
                        fetch={getAllRXAntennas}
                        fetchManufacturers={getAntennaManufacturers} 
                        fetchDistributors={getAntennaDistributors} 
                        name="antenna_rx"
                    />}
                />
                <Route path="antenna_rx/:componentId" element={
                    <DroneComponent
                        fetch={getAntennaById}
                        name="antenna_rx"
                    />}
                />

                <Route path="antenna_vtx" key="antenna_vtx" element={
                    <DroneComponents 
                        fetch={getAllVTXAntennas}
                        fetchManufacturers={getAntennaManufacturers} 
                        fetchDistributors={getAntennaDistributors} 
                        name="antenna_vtx"
                    />}
                />
                <Route path="antenna_vtx/:componentId" element={
                    <DroneComponent
                        fetch={getAntennaById}
                        name="antenna_vtx"
                    />}
                />

                <Route path="battery" key="battery" element={
                    <DroneComponents 
                        fetch={getAllBatteries}
                        fetchManufacturers={getBatteryManufacturers} 
                        fetchDistributors={getBatteryDistributors} 
                        name="battery"
                    />}
                />
                <Route path="battery/:componentId" element={
                    <DroneComponent
                        fetch={getBatteryById}
                        name="battery"
                    />}
                />

                <Route path="camera" key="camera" element={
                    <DroneComponents 
                        fetch={getAllCameras}
                        fetchManufacturers={getCameraManufacturers} 
                        fetchDistributors={getCameraDistributors}  
                        name="camera"
                    />}
                />
                <Route path="camera/:componentId" element={
                    <DroneComponent
                        fetch={getCameraById}
                        name="camera"
                    />}
                />
                
                <Route path="frame" key="frame" element={
                    <DroneComponents 
                        fetch={getAllFrames}
                        fetchManufacturers={getFrameManufacturers} 
                        fetchDistributors={getFrameDistributors}  
                        name="frame"
                    />}
                />
                <Route path="frame/:componentId" element={
                    <DroneComponent
                        fetch={getFrameById}
                        name="frame"
                    />}
                />
                
                <Route path="motor" key="motor" element={
                    <DroneComponents 
                        fetch={getAllMotors}
                        fetchManufacturers={getMotorManufacturers} 
                        fetchDistributors={getMotorDistributors}  
                        name="motor"
                    />}
                />
                <Route path="motor/:componentId" element={
                    <DroneComponent
                        fetch={getMotorById}
                        name="motor"
                    />}
                />
                
                <Route path="propeller" key="propeller" element={
                    <DroneComponents 
                        fetch={getAllPropellers}
                        fetchManufacturers={getPropellerManufacturers} 
                        fetchDistributors={getPropellerDistributors}  
                        name="propeller"
                    />}
                />
                <Route path="propeller/:componentId" element={
                    <DroneComponent
                        fetch={getPropellerById}
                        name="propeller"
                    />}
                />
                
                <Route path="rx" key="rx" element={
                    <DroneComponents 
                        fetch={getAllRX} 
                        fetchManufacturers={getRXManufacturers} 
                        fetchDistributors={getRXDistributors}  
                        name="rx"
                    />}
                />
                <Route path="rx/:componentId" element={
                    <DroneComponent
                        fetch={getRXById}
                        name="rx"
                    />}
                />
                
                <Route path="stack" key="stack" element={
                    <DroneComponents 
                        fetch={getAllStacks} 
                        fetchManufacturers={getStackManufacturers} 
                        fetchDistributors={getStackDistributors}  
                        name="stack"
                    />}
                />
                <Route path="stack/:componentId" element={
                    <DroneComponent
                        fetch={getStackById}
                        name="stack"
                    />}
                />

                <Route path="vtx" key="vtx" element={
                    <DroneComponents 
                        fetch={getAllVTX} 
                        fetchManufacturers={getVTXManufacturers} 
                        fetchDistributors={getVTXDistributors}  
                        name="vtx"
                    />}
                />
                <Route path="vtx/:componentId" element={
                    <DroneComponent
                        fetch={getVTXById}
                        name="vtx"
                    />}
                />
            </Route>

            <Route path="/tutorials" element={<Tutorials />}/>

            <Route path="/log-in" element={<LogInPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/profile" element={<ManageProfilePage />}/>
            <Route path="/change-password" element={<ChangePasswordPage />}/>

            <Route path="/forum" element={<ForumSidebar />}>
                <Route path="/forum/main" element={<ForumMainPage />}/>    
                <Route path="/forum/main/:postId" element={<ForumPostPage />}/>
                <Route path="/forum/personal" element={<ForumMainPage personal={true} />} />
            </Route>
            <Route path="/write-post" element={<WritePostPage />}/>
            
            <Route path="/workshop" element={<WorkshopLayout />} >
                <Route path="main" element={<PublicationsPage personal={false} />}/>
                <Route path="published" element={<PublicationsPage personal={true} />}/>
                <Route path="drone/:droneId" element={<DronePage />}/>
                <Route path="publication/:publicationId" element={<PublicationPage />}/>
                <Route path="unpublished" element={<DronesPage/>} />
            </Route>

            <Route path="/create-schema" element={<SchemaPage />}/>
        
        </Routes>
    );
}

export default AppRoutes