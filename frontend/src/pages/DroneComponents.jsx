import { useFetch } from '../hooks/useFetch.jsx';
import { useState, useEffect } from 'react';
import { Pagination, Center } from '@mantine/core';
import ComponentsList from '../components/common/ComponentsList.jsx'
import Searchbar from '../components/common/Searchbar.jsx';
import '../styles/DroneComponents.css'

import { useDisclosure } from '@mantine/hooks';
import { Modal, ActionIcon  } from '@mantine/core';
import filter from '../assets/filter.svg';

function DroneComponents(props) {

    useEffect(() => {
        setPage(1); 
    }, [props.fetch, props.name]); 

    const [activePage, setPage] = useState(1);
    const { data: components } = useFetch(props.fetch, activePage - 1);
    const [opened, { open, close }] = useDisclosure(false);
    
    if (!components) return <div style={{"backgroundColor": "rgba(109, 128, 125, 0.5)"}}/>;
    
    const total = components.totalPages || 1;

    const handleChange = (page) => {
        setPage(page)
    }

    return(

        <section className='components-page-container'>
            <article className='components-main-container'>
                <div className='components-filter-container'>
                    <Searchbar placeholder="Search"/>
                    
                    <Modal opened={opened} onClose={close} title="Filters" centered>
                        {}
                    </Modal>

                    <ActionIcon
                        aria-label="Filter"
                        variant="light"
                        color="lightgray"
                        onClick={open}
                        size="xl"
                    >
                        <img src={filter} style={{"height": "50%"}}/>
                    </ActionIcon>
                </div>
                
                <ComponentsList data={components} name={props.name}/>
                <Center style={{"padding" : "1.5em"}}>
                    <Pagination total={total} value={activePage} onChange={handleChange} size="md"/>
                </Center>

            </article>
        </section>

    );
}

export default DroneComponents