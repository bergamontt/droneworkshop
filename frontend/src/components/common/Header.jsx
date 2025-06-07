import logo from '../../assets/droneworkshop.png';
import login from '../../assets/login.svg'
import logout from '../../assets/logout.svg'
import pfp from '../../assets/profile_picture.svg';
import '../../styles/Header.css';
import {NavLink} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router";
import {useJWT} from "../../hooks/useJWT.jsx"
import {jwtService} from "../../services/JWTService.jsx";

function Header() {
    const navigate = useNavigate();

    const logOut = () => {
        jwtService.setToken(null);
        navigate('/log-in');
    }

    return(
        <section className="nav-container">
            <article className='nav-main-container'>
                <img src={logo} alt={"DRONE WORKSHOP"} className="nav-logo"/>
                <ul className='nav-category-container'>
                    <NavLink
                        label={<span className='nav-category'>КОМПОНЕНТИ</span>}
                        onClick={() => navigate('/drone_components/antenna_rx')}
                    />
                    <NavLink
                        label={<span className='nav-category'>МАЙСТЕРНЯ</span>}
                        onClick={() => navigate('/workshop/main')}
                    />
                    <NavLink
                        label={<span className='nav-category'>ФОРУМ</span>}
                        onClick={() => navigate('/forum/main')}
                    />
                    <NavLink
                        label={<span className='nav-category'>ТУТОРІАЛИ</span>}
                        onClick={() => navigate('/tutorials')}
                    />
                </ul>
            </article>
            {
                useJWT().isLoggedIn() ? (
                    <div className="nav-auth-container">
                        <Link to='/profile'>
                            <img
                                src={pfp}
                                alt="To Profile"
                                className="nav-login"
                            />
                        </Link>
                        <button className="nav-logout-button" onClick={logOut}>
                            <img
                                src={logout}
                                alt="Log Out"
                                className="nav-logout-icon"
                            />
                        </button>
                    </div>
                ) : (
                    <Link to='/log-in'>
                        <img
                            src={login}
                            alt="Log In"
                            className="nav-login"
                        />
                    </Link>
                )
            }
        </section>
    );
}

export default Header