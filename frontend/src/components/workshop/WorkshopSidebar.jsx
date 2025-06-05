import { NavLink, Button } from '@mantine/core';
import SidebarIcon from '../common/SidebarIcon';
import SidebarLabel from '../common/SidebarLabel';
import home from '../../assets/home.svg'
import heart from '../../assets/heart.svg'
import schema from '../../assets/schema.svg'
import '../../styles/Workshop.css'

function WorkshopSidebar() {
    return(
        <section className='workshop-sidebar-container'>
            <article>
                <NavLink
                    label={<SidebarLabel text="ГОЛОВНА" />}
                    leftSection={<SidebarIcon link={home} size={"1.5em"}/>}
                ></NavLink>
                <NavLink
                    label={<SidebarLabel text="ВЛАСНI СПИСКИ" />}
                    leftSection={<SidebarIcon link={schema} size={"1.5em"}/>}
                ></NavLink>
                <NavLink
                    label={<SidebarLabel text="ВПОДОБАНЕ" />}
                    leftSection={<SidebarIcon link={heart} size={"1.5em"}/>}
                ></NavLink>
            </article>
            <Button
                onClick={() => {
                    jwtService.isLoggedIn() ? navigate("#required") : navigate("/log-in")
                }}
                fullWidth
            >
                + Створити схему
            </Button>
        </section>
    );
}

export default WorkshopSidebar