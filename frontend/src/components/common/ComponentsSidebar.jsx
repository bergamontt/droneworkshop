import { NavLink } from '@mantine/core';
import { Outlet, useNavigate } from "react-router-dom";
import antenna from '../../assets/antenna.svg'
import battery from '../../assets/battery.svg'
import camera from '../../assets/camera.svg'
import frame from '../../assets/frame.svg'
import motor from '../../assets/motor.svg'
import propeller from '../../assets/propeller.svg'
import stack from '../../assets/stack.svg'
import rx from '../../assets/rx.svg'
import vtx from '../../assets/vtx.svg'
import SidebarIcon from './SidebarIcon.jsx'
import SidebarLabel from './SidebarLabel.jsx'

function ComponentsSidebar() {
    
    const sidebarContainerStyles = {
        "display": "flex",
        "width": "100%",
        "height": "100%"
    }
    
    const navigate = useNavigate();

    return (
    <div style={sidebarContainerStyles}>
        <div>
            <NavLink
                label={<SidebarLabel text="АНТЕНИ" />}
                leftSection={<SidebarIcon link={antenna}/>}
                onClick={() => navigate('/drone_components/antenna')}
            />
            <NavLink
                label={<SidebarLabel text="БАТКИ" />}
                leftSection={<SidebarIcon link={battery}/>}
                onClick={() => navigate('/drone_components/battery')}
            />
            <NavLink
                label={<SidebarLabel text="КАМЕРИ" />}
                leftSection={<SidebarIcon link={camera}/>}
                onClick={() => navigate('/drone_components/camera')}
            />
            <NavLink
                label={<SidebarLabel text="РАМИ" />}
                leftSection={<SidebarIcon link={frame}/>}
                onClick={() => navigate('/drone_components/frame')}
            />
            <NavLink
                label={<SidebarLabel text="МОТОРИ" />}
                leftSection={<SidebarIcon link={motor}/>}
                onClick={() => navigate('/drone_components/motor')}
            />
            <NavLink
                label={<SidebarLabel text="ПРОПЕЛЕРИ" />}
                leftSection={<SidebarIcon link={propeller}/>}
                onClick={() => navigate('/drone_components/propeller')}
            />
            <NavLink
                label={<SidebarLabel text="RX" />}
                leftSection={<SidebarIcon link={rx}/>}
                onClick={() => navigate('/drone_components/rx')}
            />
            <NavLink
                label={<SidebarLabel text="СТЕКИ" />}
                leftSection={<SidebarIcon link={stack}/>}
                onClick={() => navigate('/drone_components/stack')}
            />
            <NavLink
                label={<SidebarLabel text="VTX" />}
                leftSection={<SidebarIcon link={vtx}/>}
                onClick={() => navigate('/drone_components/vtx')}
            />
        </div>
        <Outlet/>
    </div>
  );
}

export default ComponentsSidebar;