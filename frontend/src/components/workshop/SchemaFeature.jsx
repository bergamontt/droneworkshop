import { Divider } from "@mantine/core";
import '../../styles/Schema.css'

function SchemaFeature({name, value}) {
    return(
        <article className="schema-feature-wrapper">
            <span className='schema-feature'>
                <span className='schema-feature-name'>
                    {name}
                </span>
                <span className='schema-feature-value'>
                    {value}
                </span>
            </span>
            <Divider size="sm"/>
        </article>
    );
}

export default SchemaFeature