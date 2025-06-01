import { useFetchUnique } from '../hooks/useFetchUnique.jsx'
import { useState, useEffect } from 'react';
import { Pagination, Center } from '@mantine/core';
import ComponentsList from '../components/common/ComponentsList.jsx'
import Searchbar from '../components/common/Searchbar.jsx';
import '../styles/DroneComponents.css'

import { useDisclosure } from '@mantine/hooks';
import { Modal, ActionIcon } from '@mantine/core';
import filter from '../assets/filter.svg';

import { RangeSlider, Text } from '@mantine/core';
import { elementsPerPage } from '../services/ServiceConfig.jsx';

function DroneComponents(props) {

    const minPrice = 10;
    const maxPrice = 10000;
    const midPrice = (minPrice + maxPrice) / 2;

    const [activePage, setPage] = useState(1);
    const [modelPrefix, setModelPrefix] = useState('');
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [opened, { open, close }] = useDisclosure(false);

    useEffect(() => {
        setModelPrefix('');
        setPage(1);
    }, [props.name]); 
    
    const { data: components } = useFetchUnique(
        () => props.fetch(activePage - 1, elementsPerPage, { modelPrefix }),
        [props.fetch, activePage, modelPrefix]
    );

    const handlePageChange = (page) => {
        setPage(page)
    }

    const handleModelPrefixChange = (value) => {
        setPage(1);
        setModelPrefix(value);
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
                    
                    <Modal opened={opened} onClose={close} title="Фільтри" centered size="auto">
                        <div style={{"padding": "2em", "paddingTop": "0", "width": "30rem"}}>
                            <Text size="md" mt="xl">Ціна</Text>
                            <RangeSlider 
                                color="blue"
                                min={minPrice}
                                max={maxPrice}
                                defaultValue={[minPrice, maxPrice]}
                                step={100}
                                marks={[
                                    { value: minPrice, label: `${minPrice}грн` },
                                    { value: midPrice, label: `${midPrice}грн`},
                                    { value: maxPrice, label: `${maxPrice}грн` },
                                ]}
                            />
                        </div>
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
                    <Pagination total={total} value={activePage} onChange={handlePageChange} size="md"/>
                </Center>

            </article>
        </section>

    );
}

export default DroneComponents