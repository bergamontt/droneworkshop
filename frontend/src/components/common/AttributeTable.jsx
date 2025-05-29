import { Divider, Tabs } from '@mantine/core';
import '../../styles/DroneComponent.css'

function AttributeTable(props) {
    const component = props.component;
    const isMappedAttribute = (attribute) => {
        return attribute != "id" && attribute != "model"
            && attribute != "photoLink";
    }
    return(
        <div className='tabs-panel-wrapper'>
            {Object.entries(component).map(entry => {
                let key = entry[0];
                let value = entry[1];
                if (!isMappedAttribute(key)) return;
                return (
                    <><span className='component-attribute'>
                        {key} : {value}
                    </span>
                    <Divider size="sm"/>
                </>);
            })}
        </div>
    );
}

export default AttributeTable