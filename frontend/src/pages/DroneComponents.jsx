import { useFetch } from '../hooks/useFetch.jsx';
import { useState, useEffect } from 'react';
import { Pagination, Center } from '@mantine/core';
import ComponentsList from '../components/common/ComponentsList.jsx'
import Searchbar from '../components/common/Searchbar.jsx';
import '../styles/DroneComponents.css'

function DroneComponents(props) {

    useEffect(() => {
        setPage(1); 
    }, [props.fetch, props.name]); 

    const [activePage, setPage] = useState(1);
    const { data: components } = useFetch(props.fetch, activePage - 1);
    
    if (!components) return <></>;
    
    const total = components.totalPages || 1;

    const handleChange = (page) => {
        setPage(page)
    }

    return(

        <section className='components-page-container'>
            <article className='components-main-container'>
                <Searchbar placeholder="Search"/>
                <ComponentsList data={components} name={props.name}/>
                <Center style={{"padding" : "1.5em"}}>
                    <Pagination total={total} value={activePage} onChange={handleChange} size="md"/>
                </Center>
            </article>
        </section>

    );
}

export default DroneComponents