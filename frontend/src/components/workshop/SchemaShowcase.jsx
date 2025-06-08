import { Divider, Paper, Tabs, Avatar, ActionIcon, Tooltip } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { addPublication } from '../../services/PublicationService';
import { useState } from 'react';
import SidebarIcon from '../common/SidebarIcon'
import SchemaComponents from './SchemaComponents';
import SchemaFeatures from './SchemaFeatures';
import defaultPhoto from '../../assets/default.jpg'
import components from '../../assets/components.svg'
import list from '../../assets/list.svg'
import publish from '../../assets/publish.svg'
import '../../styles/Schema.css'

function SchemaShowcase({schema}) {
    
    if(!schema) return (<></>);

    const [isPublished, setIsPublished] = useState(schema?.published ?? false);

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

    return(

        <section className='schema-data-container'>
            
            <article className='schema-main-data'>
                <Paper shadow="xs" radius="md" withBorder p="xl">
                    
                    <div className='schema-name-container'>
                        <span className='schema-name'>
                            {schema.droneName}
                        </span>
                        {
                            !isPublished &&
                            (<Tooltip label="Опублікувати">
                                <ActionIcon variant="light" onClick={handlePublication}>
                                    <SidebarIcon size="1em" link={publish}/>
                                </ActionIcon>
                            </Tooltip>)
                        }
                    </div>
                    
                    <Divider size={"sm"}/>
                    
                    <figure className='schema-photo-container'>
                        <img src={defaultPhoto} className='schema-photo'/>
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
                            <SchemaFeatures />
                        </Tabs.Panel>

                    </Tabs>
                </Paper>
            </article>
            
        </section>
    );
}

export default SchemaShowcase