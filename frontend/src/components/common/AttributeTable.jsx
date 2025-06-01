import { Divider } from '@mantine/core';
import {getAttributeName} from '../../utils/AttributeNameMapper'
import {getAttributeMetric} from '../../utils/AttributeMetricMapper'
import '../../styles/DroneComponent.css'

function AttributeTable(props) {
    const component = props.component;
    const isMappedAttribute = (attribute) => {
        return attribute != "id" && attribute != "model"
            && attribute != "photoLink" && attribute != "distributors"
            && attribute != "startingPrice";
    }
    return(
        <div className='tabs-panel-wrapper'>
            {Object.entries(component).map(entry => {
                let key = entry[0];
                let value = entry[1];
                if (!isMappedAttribute(key)) return;
                return (<>
                    <span className='component-attribute'>
                        <span style={{"fontWeight": "700"}}>
                            {getAttributeName(key)}
                        </span>
                        <span>
                            {getAttributeMetric(key, value)}
                        </span>
                    </span>
                    <Divider size="sm"/>
                </>);
            })}
        </div>
    );
}

export default AttributeTable