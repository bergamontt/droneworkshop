import { useFetch } from '../hooks/useFetch.jsx';
import { useParams } from 'react-router-dom';
import '../styles/DroneComponent.css'

function DroneComponent(props) {

    const { componentId } = useParams();
    const { data: component } = useFetch(props.fetch, componentId);
    
    if(!component) return (
        <div style={{"backgroundColor": "rgba(109, 128, 125, 0.5)"}}/>
    );

    return(
        <section className="component-page-container">
            <article className='component-data-contaner'>
                <div className='component-main-data'>
                    <div className='component-model-container'>
                        <span className='component-model'>{component.model}</span>
                    </div>
                    <img src={component.photoLink} className="component-photo" />
                </div>
                <div className="component-attributes">
        
                </div>
            </article>
        </section>
    );
}

export default DroneComponent