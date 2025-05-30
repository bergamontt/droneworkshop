import logo from '../../assets/droneworkshop.png';
import login from '../../assets/login.svg'
import '../../styles/Header.css';
import {NavLink} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router";

function Header() {
    const navigate = useNavigate();
    return(
        <section className="nav-container">
            <article className='nav-main-container'>
                <img src={logo} alt={"DRONE WORKSHOP"} className="nav-logo"/>
                <ul className='nav-category-container'>
                    <NavLink
                        label={<span className='nav-category'>COMPONENTS</span>}
                        onClick={() => navigate('/drone_components/antenna')}
                    />
                    <NavLink
                        label={<span className='nav-category'>SCHEMAS</span>}
                        onClick={() => navigate('/schemas')}
                    />
                    <NavLink
                        label={<span className='nav-category'>FORUM</span>}
                        onClick={() => navigate('/forum')}
                    />
                    <NavLink
                        label={<span className='nav-category'>TUTORIAL</span>}
                        onClick={() => navigate('/tutorials')}
                    />
                </ul>
            </article>
            <Link to='/log-in'>
                <img
                    src={login}
                    alt="Log In"
                    className="nav-login"
                />
            </Link>
        </section>
    );
}

export default Header