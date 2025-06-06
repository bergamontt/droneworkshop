import { NavLink } from '@mantine/core';
import { Outlet, useNavigate } from "react-router-dom";
import antennas from '../../assets/antennas.svg';
import rx_antenna from '../../assets/rx_antenna.svg';
import vtx_antenna from '../../assets/vtx_antenna.svg';
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
import '../../styles/ComponentsSidebar.css'

function ComponentsSidebar() {
    
    const componentsContainerStyles = {
        display: "flex",
        width: "100%",
        height: "100%"
    }
    
    const navigate = useNavigate();

    return (
    <div style={componentsContainerStyles}>
        <div className='components-sidebar-container'>
            <NavLink
                label={<SidebarLabel text="АНТЕНИ" />}
                leftSection={<SidebarIcon link={antennas}/>}
            >
                <NavLink
                    leftSection={<SidebarIcon link={rx_antenna}/>}
                    label={<SidebarLabel text="RX АНТЕНИ" />}
                    onClick={() => navigate('/drone_components/antenna_rx')}
                />
                <NavLink 
                    leftSection={<SidebarIcon link={vtx_antenna}/>}
                    label={<SidebarLabel text="VTX АНТЕНИ" />} 
                    onClick={() => navigate('/drone_components/antenna_vtx')}
                />
            </NavLink>
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