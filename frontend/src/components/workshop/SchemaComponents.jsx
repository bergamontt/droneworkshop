import SchemaComponent from './SchemaComponent';
import '../../styles/Schema.css'

function SchemaComponents({schema}) {
    return (
        <section className="schema-components-wrapper">
            <SchemaComponent
                type={"RX Антена"}
                model={schema.rxAntenna.model}
                photoLink={schema.rxAntenna.photoLink}
                componentLink={`/drone_components/antenna_rx/${schema.rxAntenna.id}`}
            />
            <SchemaComponent
                type={"VTX Антена"}
                model={schema.vtxAntenna.model}
                photoLink={schema.vtxAntenna.photoLink}
                componentLink={`/drone_components/antenna_vtx/${schema.vtxAntenna.id}`}
            />
            <SchemaComponent
                type={"Батка"}
                model={schema.battery.model}
                photoLink={schema.battery.photoLink}
                componentLink={`/drone_components/battery/${schema.battery.id}`}
            />
            <SchemaComponent
                type={"Камера"}
                model={schema.camera.model}
                photoLink={schema.camera.photoLink}
                componentLink={`/drone_components/camera/${schema.camera.id}`}
            />
            <SchemaComponent
                type={"Рама"}
                model={schema.frame.model}
                photoLink={schema.frame.photoLink}
                componentLink={`/drone_components/frame/${schema.frame.id}`}
            />
            <SchemaComponent
                type={"Мотор"}
                model={schema.motor.model}
                photoLink={schema.motor.photoLink}
                componentLink={`/drone_components/motor/${schema.motor.id}`}
            />
            <SchemaComponent
                type={"Пропелери"}
                model={schema.propeller.model}
                photoLink={schema.propeller.photoLink}
                componentLink={`/drone_components/propeller/${schema.propeller.id}`}
            />
            <SchemaComponent
                type={"RX"}
                model={schema.rx.model}
                photoLink={schema.rx.photoLink}
                componentLink={`/drone_components/rx/${schema.rx.id}`}
            />
            <SchemaComponent
                type={"Стек"}
                model={schema.stack.model}
                photoLink={schema.stack.photoLink}
                componentLink={`/drone_components/stack/${schema.stack.id}`}
            />
            <SchemaComponent
                type={"VTX"}
                model={schema.vtx.model}
                photoLink={schema.vtx.photoLink}
                componentLink={`/drone_components/vtx/${schema.vtx.id}`}
            />
        </section>
    );
}

export default SchemaComponents