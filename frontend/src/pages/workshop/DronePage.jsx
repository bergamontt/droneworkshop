import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom';
import { getDroneById } from '../../services/DroneService';
import SchemaShowcase from '../../components/workshop/SchemaShowcase';
import '../../styles/Workshop.css'

function DronePage() {

    const { droneId } = useParams();
    const { data: drone } = useFetch(getDroneById, droneId);

    return(
        <section className="schema-page-container">
            <article className="schema-main-container">
                <SchemaShowcase
                    schema={drone}
                />
            </article>
        </section>
    );

}

export default DronePage