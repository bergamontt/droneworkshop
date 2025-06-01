import { ActionIcon, Pagination, Center } from '@mantine/core';
import { useFetchUnique } from '../hooks/useFetchUnique.jsx'
import { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { elementsPerPage } from '../services/ServiceConfig.jsx';
import ComponentsList from '../components/common/ComponentsList.jsx'
import FilterModel from '../components/common/FilterModel.jsx'
import Searchbar from '../components/common/Searchbar.jsx';
import filter from '../assets/filter.svg';
import '../styles/DroneComponents.css'

function DroneComponents(props) {

    const minDefaultPrice = 10;
    const maxDefaultPrice = 10000;

    const [activePage, setPage] = useState(1);
    const [modelPrefix, setModelPrefix] = useState('');
    const [priceRange, setPriceRange] = useState({ minPrice: minDefaultPrice, maxPrice: maxDefaultPrice });
    const [opened, { open, close }] = useDisclosure(false);

    useEffect(() => {
        setModelPrefix('');
        setPage(1);
    }, [props.name]); 
    
    const { data: components } = useFetchUnique(
        () => props.fetch(activePage - 1, elementsPerPage, {
            modelPrefix,
            minPrice: priceRange.minPrice,
            maxPrice: priceRange.maxPrice,
        }),
        [props.fetch, activePage, modelPrefix, priceRange.minPrice, priceRange.maxPrice]
    );

    const handlePageChange = (page) => {
        setPage(page)
    }

    const handleModelPrefixChange = (value) => {
        setPage(1);
        setModelPrefix(value);
    }

    const handlePriceRangeChange = (value) => {
        setPage(1);
        setPriceRange({ minPrice: value[0], maxPrice: value[1] });
    }
    
    if (!components) return <div style={{"backgroundColor": "rgba(109, 128, 125, 0.5)"}}/>;
    const total = components.totalPages || 1;

    return(

        <section className='components-page-container'>
            <article className='components-main-container'>
                <div className='components-filter-container'>
                    <Searchbar
                        placeholder="Search"
                        onChange={handleModelPrefixChange}
                    />
                    
                    <FilterModel
                        minPrice={minDefaultPrice}
                        maxPrice={maxDefaultPrice}
                        opened={opened}
                        close={close}
                        onSave={handlePriceRangeChange}
                    />

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
                    <Pagination total={total} value={activePage} onChange={handlePageChange} size="md"/>
                </Center>

            </article>
        </section>

    );
}

export default DroneComponents