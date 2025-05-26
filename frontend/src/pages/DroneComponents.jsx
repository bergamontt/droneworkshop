import { useFetch } from '../hooks/useFetch.jsx';
import { getAllAntennas } from '../services/AntennaService';

function DroneComponents() {
    
    const { data: antennas } = useFetch(getAllAntennas);

    if (!antennas) return(<h1>Error Occured!</h1>);

    return(
        <section className='components-page-container'>
            <ul className='components-container'>
                {antennas.map((antenna) => (
                    <li key={antenna.antennaId}>
                        {antenna.model}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default DroneComponents