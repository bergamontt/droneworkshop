import { Divider } from '@mantine/core';
import defaultPhoto from '../../assets/default.jpg'
import '../../styles/Schema.css'

function SchemaComponent({type, model}) {
    return(
        <article className='schema-component-wrapper'>
            <span className='schema-component'>
                <span className='schema-component-type'>
                    {type}
                </span>
                <div className='component-info-wrapper'>
                    <span className='schema-component-model'>
                        {model}
                    </span>
                    <img 
                        src={defaultPhoto} 
                        className='schema-component-photo'
                    />
                </div>
            </span>
            <Divider size="sm"/>
        </article>
    );
}

export default SchemaComponent