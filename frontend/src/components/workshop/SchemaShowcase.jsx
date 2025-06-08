import { Divider, Paper, Tabs, Avatar } from '@mantine/core';
import SchemaComponents from './SchemaComponents';
import SchemaFeatures from './SchemaFeatures';
import defaultPhoto from '../../assets/default.jpg'
import components from '../../assets/components.svg'
import list from '../../assets/list.svg'
import '../../styles/Schema.css'

function SchemaShowcase({schema}) {
    if(!schema) return (<></>);
    return(
        <section className='schema-data-container'>
            <article className='schema-main-data'>
                <Paper shadow="xs" radius="md" withBorder p="xl">
                    <span className='schema-name'>{schema.droneName}</span>
                    <Divider size={"sm"}/>
                    <figure className='schema-photo-container'>
                        <img src={defaultPhoto} className='schema-photo'/>
                    </figure>
                    <Divider size={"sm"}/>
                    <dev className='creator-data-container'>
                        <Avatar radius="xl" color="blue" size="md" >
                            {schema.user?.username?.charAt(0)?.toUpperCase() ?? null}
                        </Avatar>
                        <span className='creator-username'>
                            {schema.user?.username ?? "Deleted user"}
                        </span>
                    </dev>
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