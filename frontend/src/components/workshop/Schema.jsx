import SchemaShowcase from './SchemaShowcase';
import '../../styles/Schema.css'

function Schema() {

    const data = {
        antenna: {
            model: "Антена BETAFPV Dipole T 915MHz / 868MHz",
            photoLink: "https://fpvua.com/image/cache/catalog/easyphoto/596/antena-betafpv-dipole-t-915mhz-868mhz-1-744x744.jpeg"
        },
        antenna1: {
            model: "Антена BETAFPV Dipole T 915MHz / 868MHz",
            photoLink: "https://fpvua.com/image/cache/catalog/easyphoto/596/antena-betafpv-dipole-t-915mhz-868mhz-1-744x744.jpeg"
        },
        antenna2: {
            model: "Антена BETAFPV Dipole T 915MHz / 868MHz",
            photoLink: "https://fpvua.com/image/cache/catalog/easyphoto/596/antena-betafpv-dipole-t-915mhz-868mhz-1-744x744.jpeg"
        },
        antenna3: {
            model: "Антена BETAFPV Dipole T 915MHz / 868MHz",
            photoLink: "https://fpvua.com/image/cache/catalog/easyphoto/596/antena-betafpv-dipole-t-915mhz-868mhz-1-744x744.jpeg"
        }
    }

    return(
        <section className="schema-page-container">
            <article className="schema-main-container">
                <SchemaShowcase />
            </article>
        </section>
    );
}

export default Schema