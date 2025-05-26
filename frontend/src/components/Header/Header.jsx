import logo from '../../assets/droneworkshop.png';
import login from '../../assets/login.svg'
import './Header.css';

function Header() {
    return(
        <section className="nav-container">
            <article className='nav-main-container'>
                <img src={logo} className="nav-logo"/>
                <ul className='nav-category-container'>
                    <li className='nav-category'>COMPONENTS</li>
                    <li className='nav-category'>SCHEMAS</li>
                    <li className='nav-category'>FORUM</li>
                    <li className='nav-category'>TUTORIAL</li>
                </ul>
            </article>
            <img src={login} alt="" className='nav-login'/>
        </section>
    );
}

export default Header