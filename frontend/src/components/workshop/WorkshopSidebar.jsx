import { NavLink, Button } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import SidebarIcon from '../common/SidebarIcon';
import SidebarLabel from '../common/SidebarLabel';
import home from '../../assets/home.svg'
import heart from '../../assets/heart.svg'
import schema from '../../assets/schema.svg'
import privateSchema from '../../assets/private.svg'
import '../../styles/Workshop.css'

function WorkshopSidebar() {
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
                    label={<SidebarLabel text="ВЛАСНI СХЕМИ" />}
                    leftSection={<SidebarIcon link={schema} size={"1.5em"}/>}
                ></NavLink>
                <NavLink
                    label={<SidebarLabel text="НЕОПУБЛIКОВАНЕ" />}
                    leftSection={<SidebarIcon link={privateSchema} size={"1.5em"}/>}
                ></NavLink>
                <NavLink
                    label={<SidebarLabel text="ВПОДОБАНЕ" />}
                    leftSection={<SidebarIcon link={heart} size={"1.5em"}/>}
                ></NavLink>
            </article>
            <Button
                onClick={() => {
                    navigate("/create-schema")
                }}
                fullWidth
            >
                + Створити схему
            </Button>
        </section>
    );
}

export default WorkshopSidebar