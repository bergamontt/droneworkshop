import SchemaFeature from "./SchemaFeature";
import '../../styles/Schema.css'

function SchemaFeatures() {
    return(
        <section className="schema-features-wrapper">
            <SchemaFeature
                name="Приблизна маса дрона"
                value="5тонн"
            />
            <SchemaFeature
                name="Розмір дрона"
                value='5"'
            />
            <SchemaFeature
                name="Мінімальна ціна дрона"
                value="19180грн"
            />
        </section>
    );
}

export default SchemaFeatures