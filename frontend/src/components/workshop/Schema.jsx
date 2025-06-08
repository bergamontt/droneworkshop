import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch.jsx';
import SchemaShowcase from './SchemaShowcase';
import SchemaComments from './SchemaComments';
import '../../styles/Schema.css'

function Schema({
    fetch,
    personal,
    published
}) {

    const { schemaId: schemaId } = useParams();
    const { data: schema } = useFetch(fetch, schemaId);

    return(
        <section className="schema-page-container">
            <article className="schema-main-container">
                <SchemaShowcase schema={schema} />
            </article>
            {
                published ? 
                <article className='schema-comments-container' >
                    <SchemaComments />
                </article> : <></>
            }
        </section>
    );
}

export default Schema