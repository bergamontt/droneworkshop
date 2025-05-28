import { useFetch } from '../hooks/useFetch.jsx';
import { getAllAntennas } from '../services/AntennaService';
import ComponentsList from '../components/common/ComponentsList.jsx'
import Searchbar from '../components/common/Searchbar.jsx';
import '../styles/DroneComponents.css'

function DroneComponents(props) {

    const { data: components } = useFetch(props?.fetch ?? getAllAntennas);

    return(

        <section className='components-page-container'>
            
            <article className='components-main-container'>
                <Searchbar placeholder="Search"/>
                <ComponentsList data={components} />
            </article>
            
        </section>

    );
}

export default DroneComponents