import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom';
import { getPublicationById } from '../../services/PublicationService';
import SchemaShowcase from '../../components/workshop/SchemaShowcase';
import SchemaComments from '../../components/workshop/SchemaComments';
import '../../styles/Schema.css'

function PublicationPage() {

    const { publicationId } = useParams();
    const { data: publication } = useFetch(getPublicationById, publicationId);

    if(!publication?.drone) return <div style={{"backgroundColor": "rgba(109, 128, 125, 0.5)"}}/>;
    
    const drone = publication.drone;

    return(
        <section className="schema-page-container">
            <article className="schema-main-container">
                <SchemaShowcase
                    schema={drone}
                    published={!!drone}
                />
            </article>
            <article className='schema-comments-container' >
                <SchemaComments 
                    publicationId={publicationId}
                />
            </article> 
        </section>
    );
}

export default PublicationPage