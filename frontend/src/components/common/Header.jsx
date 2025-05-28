import logo from '../../assets/droneworkshop.png';
import login from '../../assets/login.svg'
import '../../styles/Header.css';
import {NavLink} from "@mantine/core";

function Header() {
    return(
        <section className="nav-container">
            <article className='nav-main-container'>
                <img src={logo} alt={"DRONE WORKSHOP"} className="nav-logo"/>
                <ul className='nav-category-container'>
                    <NavLink
                        href="/drone_components/antenna"
                        label={<span className='nav-category'>COMPONENTS</span>}
                    />
                    <NavLink
                        href="#required-for-focus"
                        label={<span className='nav-category'>SCHEMAS</span>}
                    />
                    <NavLink
                        href="#required-for-focus"
                        label={<span className='nav-category'>FORUM</span>}
                    />
                    <NavLink
                        href="/tutorials"
                        label={<span className='nav-category'>TUTORIAL</span>}
                    />
                </ul>
            </article>
            <img src={login} alt="" className='nav-login'/>
        </section>
    );
}

export default Header