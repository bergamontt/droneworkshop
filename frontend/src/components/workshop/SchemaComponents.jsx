import SchemaComponent from './SchemaComponent';
import '../../styles/Schema.css'

function SchemaComponents({schema}) {
    return (
        <section className="schema-components-wrapper">
            <SchemaComponent
                type={"RX Антена"}
                model={schema.rxAntenna.model}
                photoLink={schema.rxAntenna.photoLink}
            />
            <SchemaComponent
                type={"VTX Антена"}
                model={schema.vtxAntenna.model}
                photoLink={schema.vtxAntenna.photoLink}
            />
            <SchemaComponent
                type={"Батка"}
                model={schema.battery.model}
                photoLink={schema.battery.photoLink}
            />
            <SchemaComponent
                type={"Камера"}
                model={schema.camera.model}
                photoLink={schema.camera.photoLink}
            />
            <SchemaComponent
                type={"Рама"}
                model={schema.frame.model}
                photoLink={schema.frame.photoLink}
            />
            <SchemaComponent
                type={"Мотор"}
                model={schema.motor.model}
                photoLink={schema.motor.photoLink}
            />
            <SchemaComponent
                type={"Пропелери"}
                model={schema.propeller.model}
                photoLink={schema.propeller.photoLink}
            />
            <SchemaComponent
                type={"RX"}
                model={schema.rx.model}
                photoLink={schema.rx.photoLink}
            />
            <SchemaComponent
                type={"Стек"}
                model={schema.stack.model}
                photoLink={schema.stack.photoLink}
            />
            <SchemaComponent
                type={"VTX"}
                model={schema.vtx.model}
                photoLink={schema.vtx.photoLink}
            />
        </section>
    );
}

export default SchemaComponents