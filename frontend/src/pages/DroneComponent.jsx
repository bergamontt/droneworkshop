import { useFetch } from '../hooks/useFetch.jsx';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getComponentName } from '../utils/ComponentNameMapper.jsx';
import {Button, Divider, Tabs, Breadcrumbs, Anchor} from '@mantine/core';
import AttributeTable from '../components/common/AttributeTable.jsx';
import DistributorTable from '../components/common/DistributorTable.jsx';
import cart from '../assets/cart.svg'
import list from '../assets/list.svg'
import '../styles/DroneComponent.css'
import {useListSelect} from "../hooks/useListSelect.jsx";
import {useJWT} from "../hooks/useJWT.jsx";

function DroneComponent(props) {
    
    const { isSelecting, getSelectedDetailId, selectDetailId } = useListSelect();
    const { isLoggedIn } = useJWT();
    const selectedDetailId = getSelectedDetailId(props.name);

    const navigate = useNavigate();
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
            
            <div className='drone-component-nav-wrapper'>
                <Breadcrumbs separator=">">
                    {isSelecting &&
                    <Anchor onClick={() => {navigate('/create-schema', { replace: true })}} target="_blank" c="black">
                        Збірка
                    </Anchor>}
                    <Anchor onClick={() => {navigate(-1)}} target="_blank" c="black">
                        {getComponentName(props.name)}
                    </Anchor>
                    <Anchor target="_blank" c="#005bac">
                        {component.model}
                    </Anchor>
                </Breadcrumbs>
            </div>
            
            <article className='component-main-data-container'>
                <article className='component-data-contaner'>
                    <div className='component-main-data'>
                        <div className='component-model-container'>
                            <span className='component-model'>{component.model}</span>
                            <Divider size="sm"/>
                        </div>
                        <img src={component.photoLink} className="component-photo" />
                        {isSelecting && isLoggedIn &&
                            <div className='selecting-component-container'>

                                <Button
                                    size='md'
                                    variant="filled"
                                    color="green"
                                    onClick={select}
                                    disabled={isSelected}
                                >
                                    {isSelected ? "Деталь обрано" : "Додати до схеми"}
                                </Button>
                            </div>
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
            </article>

        </section>
    );
}

export default DroneComponent