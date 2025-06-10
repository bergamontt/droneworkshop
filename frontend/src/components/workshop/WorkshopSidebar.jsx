import { NavLink, Button } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import { useJWT } from '../../hooks/useJWT';
import SidebarIcon from '../common/SidebarIcon';
import SidebarLabel from '../common/SidebarLabel';
import home from '../../assets/home.svg'
import schema from '../../assets/schema.svg'
import privateSchema from '../../assets/private.svg'
import '../../styles/Workshop.css'

function WorkshopSidebar() {
    const {isLoggedIn} = useJWT();
    const navigate = useNavigate();
    return(
        <section className='workshop-sidebar-container'>
            <article>
                <NavLink
                    label={<SidebarLabel text="ГОЛОВНА" />}
                    leftSection={<SidebarIcon link={home} size={"1.5em"}/>}
                    onClick={() => navigate('/workshop/main')}
                ></NavLink>
                <NavLink
                    label={<SidebarLabel text="ОПУБЛIКОВАНЕ" />}
                    leftSection={<SidebarIcon link={schema} size={"1.5em"}/>}
                    onClick={() => {isLoggedIn ? navigate('/workshop/published') : navigate("/log-in")}}
                ></NavLink>
                <NavLink
                    label={<SidebarLabel text="НЕОПУБЛIКОВАНЕ" />}
                    leftSection={<SidebarIcon link={privateSchema} size={"1.5em"}/>}
                    onClick={() => {isLoggedIn ? navigate('/workshop/unpublished'): navigate("/log-in")}}
                ></NavLink>
            </article>
        </section>
    );
}

export default WorkshopSidebar