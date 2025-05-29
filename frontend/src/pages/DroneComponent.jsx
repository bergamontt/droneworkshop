import { useFetch } from '../hooks/useFetch.jsx';
import { useParams } from 'react-router-dom';
import { Divider, Tabs } from '@mantine/core';
import AttributeTable from '../components/common/AttributeTable.jsx';
import '../styles/DroneComponent.css'

function DroneComponent(props) {

    const { componentId } = useParams();
    const { data: component } = useFetch(props.fetch, componentId);
    
    if(!component) return (
        <div style={{"backgroundColor": "rgba(109, 128, 125, 0.5)"}}/>
    );

    return(
        <section className="component-page-container">
            <article className='component-data-contaner'>
                <div className='component-main-data'>
                    <div className='component-model-container'>
                        <span className='component-model'>{component.model}</span>
                        <Divider size="sm"/>
                    </div>
                    <img src={component.photoLink} className="component-photo" />
                </div>
            </article>
            <article className='component-data-contaner'>
                <div className="component-attributes">
                    <Tabs defaultValue="attributes">
                        <Tabs.List>
                            <Tabs.Tab value="attributes">
                                <span className='tab-label'>Характеристики</span>
                            </Tabs.Tab>
                            <Tabs.Tab value="shops">
                                <span className='tab-label'>Магазини</span>
                            </Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="attributes">
                            <AttributeTable component={component}/>
                        </Tabs.Panel>

                        <Tabs.Panel value="shops">
    
                        </Tabs.Panel>

                    </Tabs>
                </div>
            </article>
        </section>
    );
}

export default DroneComponent