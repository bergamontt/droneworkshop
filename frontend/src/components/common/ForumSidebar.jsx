import { NavLink, Button } from '@mantine/core';
import { Outlet, useNavigate } from "react-router-dom";
import {jwtService} from "../../services/JWTService.jsx";
import home from '../../assets/home.svg';
import questions from '../../assets/questions.svg';
import SidebarIcon from './SidebarIcon.jsx'
import SidebarLabel from './SidebarLabel.jsx'
import '../../styles/Forum.css';

function ForumSidebar() {
    const navigate = useNavigate();
    return(
        <div className='forum-page-container'>
            <div className='forum-sidebar-container'>
                <div className='forum-sidebar-wrapper'>
                    <div className='forum-navbar-container'>
                        <NavLink
                            label={<SidebarLabel text="ГОЛОВНА" />}
                            leftSection={<SidebarIcon link={home} size="1.8em"/>}
                            onClick={() => navigate('/forum/main')}
                        />
                        <NavLink
                            label={<SidebarLabel text="ВЛАСНI ПИТАННЯ" />}
                            leftSection={<SidebarIcon link={questions} size="1.8em"/>}    
                            onClick={() => navigate('/forum/personal')}          
                        />
                    </div>
                    <div className='button-container'>
                        <Button
                            onClick={() => {
                                jwtService.isLoggedIn() ? navigate("/write-post") : navigate("/log-in")
                            }}
                            fullWidth
                        >
                            + Написати пост
                        </Button>
                    </div>
                </div>
            </div>
        <Outlet/>
        </div>
    );
}

export default ForumSidebar