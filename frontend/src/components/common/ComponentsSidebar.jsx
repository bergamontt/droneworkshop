import { NavLink } from '@mantine/core';
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

function DroneComponents() {
    return (
    <dev>
      <NavLink
        href="#required-for-focus"
        label={<SidebarLabel text="ANTENNAS" />}
        leftSection={<SidebarIcon link={antenna}/>}
      />
      <NavLink
        href="#required-for-focus"
        label={<SidebarLabel text="BATTERIES" />}
        leftSection={<SidebarIcon link={battery}/>}
      />
      <NavLink
        href="#required-for-focus"
        label={<SidebarLabel text="CAMERAS" />}
        leftSection={<SidebarIcon link={camera}/>}
      />
      <NavLink
        href="#required-for-focus"
        label={<SidebarLabel text="FRAMES" />}
        leftSection={<SidebarIcon link={frame}/>}
      />
      <NavLink
        href="#required-for-focus"
        label={<SidebarLabel text="MOTORS" />}
        leftSection={<SidebarIcon link={motor}/>}
      />
      <NavLink
        href="#required-for-focus"
        label={<SidebarLabel text="PROPELLERS" />}
        leftSection={<SidebarIcon link={propeller}/>}
      />
      <NavLink
        href="#required-for-focus"
        label={<SidebarLabel text="RX" />}
        leftSection={<SidebarIcon link={rx}/>}
      />
      <NavLink
        href="#required-for-focus"
        label={<SidebarLabel text="STACK" />}
        leftSection={<SidebarIcon link={stack}/>}
      />
      <NavLink
        href="#required-for-focus"
        label={<SidebarLabel text="VTX" />}
        leftSection={<SidebarIcon link={vtx}/>}
      />
    </dev>
  );
}

export default DroneComponents