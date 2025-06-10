import { Divider, Paper, Tabs, Avatar, ActionIcon, Tooltip } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { addPublication } from '../../services/PublicationService';
import { deleteDroneById } from '../../services/DroneService';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import SidebarIcon from '../common/SidebarIcon'
import SchemaComponents from './SchemaComponents';
import SchemaFeatures from './SchemaFeatures';
import defaultPhoto from '../../assets/default.jpg';
import components from '../../assets/components.svg';
import list from '../../assets/list.svg';
import publish from '../../assets/publish.svg';
import deleteIcon from '../../assets/delete.svg';
import '../../styles/Schema.css';

function SchemaShowcase({schema, published = false}) {
    
    if(!schema) return (<></>);

    const navigate = useNavigate();
    const [isPublished, setIsPublished] = useState(published);

    useEffect(() => {
        setIsPublished(published);
    }, [published, schema]);

    const handlePublication = async () => {
        try {
            await addPublication(schema.droneId);
            setIsPublished(true); 
            notifications.show({
                title: 'Успіх!',
                message: 'Ваш дрон було опубліковано!',
                color: 'green',
            });
        } catch (error) {
            notifications.show({
                title: 'Помилка',
                message: 'Ваш дрон не було опубліковано. Спробуйте знову.',
                color: 'red',
            });
        }
    }

    const handleDeletion = async () => {
        try {
            await deleteDroneById(schema.droneId);
            navigate('/workshop/unpublished');
            notifications.show({
                title: 'Успіх!',
                message: 'Ваш дрон було видалено!',
                color: 'green',
            });
        } catch (error) {
            notifications.show({
                title: 'Помилка',
                message: 'Ваш дрон не було видалено. Спробуйте знову.',
                color: 'red',
            });
        }
    }

    const photo = schema.photo ? `data:image/jpeg;base64,${schema.photo}` : defaultPhoto;

    return(

        <section className='schema-data-container'>
            
            <article className='schema-main-data'>
                <Paper shadow="xs" radius="md" withBorder p="xl">
                    
                    <div className='schema-name-container'>
                        <span className='schema-name'>
                            {schema.droneName}
                        </span>
                        {!isPublished &&
                            (<div>
                                <Tooltip label="Опублікувати">
                                    <ActionIcon variant="light" color="cyan" onClick={handlePublication}>
                                        <SidebarIcon size="1em" link={publish}/>
                                    </ActionIcon>
                                </Tooltip>
                                <Tooltip label="Видалити">
                                    <ActionIcon variant="light" color="red" onClick={handleDeletion}>
                                        <SidebarIcon size="1em" link={deleteIcon}/>
                                    </ActionIcon>
                                </Tooltip>
                            </div>)
                        }
                    </div>
                    
                    <Divider size={"sm"}/>
                    
                    <figure className='schema-photo-container'>
                        <img src={photo} className='schema-photo'/>
                    </figure>
                    
                    <Divider size={"sm"}/>
                    
                    <div className='creator-data-container'>
                        <Avatar radius="xl" color="blue" size="md" >
                            {schema.username?.charAt(0)?.toUpperCase() ?? null}
                        </Avatar>
                        <span className='creator-username'>
                            {schema.username ?? "Deleted user"}
                        </span>
                    </div>

                </Paper>
            </article>
            
            <article className='schema-list-data'>
                <Paper shadow="xs" radius="md" withBorder p="xl">
                    
                    <Tabs defaultValue="components">
                        <Tabs.List>
                            
                            <Tabs.Tab 
                                value="components"
                                leftSection={<img src={components} style={{"height" : "1em"}}/>}
                            >
                                <span className='tab-label'>Компоненти</span>
                            </Tabs.Tab>
                            
                            <Tabs.Tab 
                                value="features"
                                leftSection={<img src={list} style={{"height" : "1em"}}/>}
                            >
                                <span className='tab-label'>Характеристики</span>
                            </Tabs.Tab>

                        </Tabs.List>

                        <Tabs.Panel value="components">
                            <SchemaComponents schema={schema}/>
                        </Tabs.Panel>

                        <Tabs.Panel value="features">
                            <SchemaFeatures schema={schema}/>
                        </Tabs.Panel>

                    </Tabs>
                </Paper>
            </article>
            
        </section>
    );
}

export default SchemaShowcase