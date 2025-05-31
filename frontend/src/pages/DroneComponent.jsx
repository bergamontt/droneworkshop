import { useFetch } from '../hooks/useFetch.jsx';
import { useParams } from 'react-router-dom';
import { Divider, Tabs  } from '@mantine/core';
import AttributeTable from '../components/common/AttributeTable.jsx';
import DistributorTable from '../components/common/DistributorTable.jsx';
import cart from '../assets/cart.svg'
import list from '../assets/list.svg'
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
                            <Tabs.Tab 
                                value="attributes"
                                leftSection={<img src={list} style={{"height" : "1em"}}/>}
                            >
                                <span className='tab-label'>Характеристики</span>
                            </Tabs.Tab>
                            <Tabs.Tab 
                                value="shops"
                                leftSection={<img src={cart} style={{"height" : "1em"}}/>}
                            >
                                <span className='tab-label'>Магазини</span>
                            </Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="attributes">
                            <AttributeTable component={component}/>
                        </Tabs.Panel>

                        <Tabs.Panel value="shops">
                            <DistributorTable distributors={component.distributors}/>
                        </Tabs.Panel>

                    </Tabs>
                </div>
            </article>
        </section>
    );
}

export default DroneComponent