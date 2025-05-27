import { useFetch } from '../hooks/useFetch.jsx';
import { getAllAntennas } from '../services/AntennaService';
import ComponentsSidebar from '../components/common/ComponentsSidebar.jsx'
import ComponentsList from '../components/common/ComponentsList.jsx'
import Searchbar from '../components/common/Searchbar.jsx';
import '../styles/DroneComponents.css'

function DroneComponents(props) {
    
    const mainContainerStyles = {
        "flex": "content",
        "backgroundColor": "rgba(109, 128, 125, 0.5)",
        "padding": "20px"
    };

    const { data: components } = useFetch(props?.fetch ?? getAllAntennas);

    if (!components) return(<h1>Error Occurred!</h1>);

    return(

        <section className='components-page-container'>
            
            <article className='components-sidebar-container'>
                <ComponentsSidebar/>
            </article>
            
            <article className='components-main-container' style={mainContainerStyles}>
                <Searchbar placeholder="Search"/>
                <ComponentsList data={components} />
            </article>
            
        </section>

    );
}

export default DroneComponents