import SchemaComment from './SchemaComment';
import { Divider } from '@mantine/core'
import '../../styles/SchemaComments.css'

function SchemaComments() {
    return(
        <section className="schema-comments-container">
            <article className="comments-count-container">
                <span className="comments-count">
                    Коментарі (3)
                </span>
            </article>
            <article className="comments-container">
                <SchemaComment />
                <SchemaComment />
                <SchemaComment />
                <Divider size={"sm"}/>
            </article>
        </section>
    );
}

export default SchemaComments