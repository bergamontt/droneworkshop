import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom';
import { getPublicationById } from '../../services/PublicationService'; 
import { getCommentsByPublicationtId } from '../../services/CommentService'
import SchemaShowcase from '../../components/workshop/SchemaShowcase';
import SchemaComments from '../../components/workshop/SchemaComments';
import '../../styles/Schema.css'

function PublicationPage() {

    const { publicationId } = useParams();
    const { data: publication } = useFetch(getPublicationById, publicationId);
    const { data: comments } = useFetch(getCommentsByPublicationtId, publicationId);

    if(!publication?.drone) return <></>;
    
    const drone = publication.drone;

    return(
        <section className="schema-page-container">
            <article className="schema-main-container">
                <SchemaShowcase
                    schema={drone}
                />
            </article>
            <article className='schema-comments-container' >
                <SchemaComments />
            </article> 
        </section>
    );
}

export default PublicationPage