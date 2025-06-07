import SchemaShowcase from './SchemaShowcase';
import SchemaComments from './SchemaComments';
import '../../styles/Schema.css'

function Schema() {

    return(
        <section className="schema-page-container">
            <article className="schema-main-container">
                <SchemaShowcase />
            </article>
            <article className='schema-comments-container' >
                <SchemaComments />
            </article>
        </section>
    );
}

export default Schema