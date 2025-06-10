import { useFetch } from '../hooks/useFetch.jsx';
import { useParams } from 'react-router-dom';
import {Button, Divider, Tabs} from '@mantine/core';
import AttributeTable from '../components/common/AttributeTable.jsx';
import DistributorTable from '../components/common/DistributorTable.jsx';
import cart from '../assets/cart.svg'
import list from '../assets/list.svg'
import '../styles/DroneComponent.css'
import {useListSelect} from "../hooks/useListSelect.jsx";

function DroneComponent(props) {
    const { isSelecting, getSelectedDetailId, selectDetailId } = useListSelect();
    const selectedDetailId = getSelectedDetailId(props.name);

    const { componentId } = useParams();
    const { data: component } = useFetch(props.fetch, componentId);

    const isSelected = selectedDetailId.toString() === componentId.toString();
    const select = () => {
        selectDetailId(props.name, componentId);
    }
    
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
                    {isSelecting &&
                        <Button
                            size="lg"
                            variant="filled"
                            color="green"
                            onClick={select}
                            disabled={isSelected}
                            style={{marginRight: 'auto'}}
                        >
                            {isSelected ? "Деталь обрано" : "Додати до схеми"}
                        </Button>
                    }
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