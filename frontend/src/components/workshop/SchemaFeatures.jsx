import SchemaFeature from "./SchemaFeature";
import '../../styles/Schema.css'

function SchemaFeatures({schema}) {
    
    const getTotalMass = (obj) => {
        return Object.values(obj).reduce((sum, value) => {
            if (!value || typeof value !== 'object') return sum;
            return sum + ('mass' in value ? value.mass : 0) + getTotalMass(value);
        }, 0);
    }

    const getTotalMinPrice = (obj) => {
        return Object.values(obj).reduce((sum, value) => {
            if (!value || typeof value !== 'object') return sum;
            return sum + ('startingPrice' in value ? value.startingPrice : 0) + getTotalMinPrice(value);
        }, 0);
    }

    if(!schema) return <div style={{"backgroundColor": "rgba(109, 128, 125, 0.5)"}}/>;

    return(
        <section className="schema-features-wrapper">
            <SchemaFeature
                name="Приблизна маса дрона"
                value={`${getTotalMass(schema)}г`}
            />
            <SchemaFeature
                name="Розмір дрона"
                value={`${schema?.frame.propellersInches}"`}
            />
            <SchemaFeature
                name="Мінімальна ціна дрона"
                value={`${getTotalMinPrice(schema)}грн`}
            />
        </section>
    );
}

export default SchemaFeatures