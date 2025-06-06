import SchemaComponent from './SchemaComponent';
import '../../styles/Schema.css'

function SchemaComponents() {
    return (
        <section className="schema-components-wrapper">
            <SchemaComponent
                type={"RX Антена"}
                model={"Жаба"}
            />
            <SchemaComponent
                type={"VTX Антена"}
                model={"Ананас"}
            />
            <SchemaComponent
                type={"Батка"}
                model={"Скунс"}
            />
            <SchemaComponent
                type={"Камера"}
                model={"Окунь"}
            />
            <SchemaComponent
                type={"Рама"}
                model={"Опудало"}
            />
            <SchemaComponent
                type={"Мотор"}
                model={"Горох"}
            />
            <SchemaComponent
                type={"Пропелери"}
                model={"Лелека"}
            />
            <SchemaComponent
                type={"RX"}
                model={"Фіалка"}
            />
            <SchemaComponent
                type={"Стек"}
                model={"Оверфлоу"}
            />
            <SchemaComponent
                type={"VTX"}
                model={"Пепсі"}
            />
        </section>
    );
}

export default SchemaComponents