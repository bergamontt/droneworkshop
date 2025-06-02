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

    const minDefaultPrice = 1;
    const maxDefaultPrice = 10000;

    const [activePage, setPage] = useState(1);
    const [modelPrefix, setModelPrefix] = useState('');
    const [priceRange, setPriceRange] = useState({ minPrice: minDefaultPrice, maxPrice: maxDefaultPrice });
    const [manufacturerNames, setManufacturerNames] = useState([]);
    const [distributorNames, setDistributorNames] = useState([]);
    const [allManufacturers, setAllManufacturers] = useState([]);
    const [allDistributors, setAllDistributors] = useState([]);
    const [opened, { open, close }] = useDisclosure(false);

    useEffect(() => {
        const fetchLists = async () => {
            try {
                const manufacturers = await props.fetchManufacturers();
                const distributors = await props.fetchDistributors();
                setAllManufacturers(manufacturers.map(m => ({ value: m, label: m })));
                setAllDistributors(distributors.map(d => ({ value: d, label: d })));
            } catch (e) { /* empty */ }
        };
        fetchLists();
    }, [props.name]);

    useEffect(() => {
        setModelPrefix('');
        setManufacturerNames([]);
        setDistributorNames([]);
        setAllDistributors([]);
        setAllManufacturers([]);
        setPriceRange({ minPrice: minDefaultPrice, maxPrice: maxDefaultPrice });
        setPage(1);
    }, [props.name]);
    
    const { data: components } = useFetchUnique(
        () => props.fetch(activePage - 1, elementsPerPage, {
            modelPrefix,
            minPrice: priceRange.minPrice,
            maxPrice: priceRange.maxPrice,
            manufacturerNames,
            distributorNames
        }),
        [props.fetch, activePage, modelPrefix, priceRange.minPrice,
            priceRange.maxPrice, manufacturerNames, distributorNames]
    );

    const handlePageChange = (page) => {
        setPage(page)
    }

    const handleModelPrefixChange = (value) => {
        setPage(1);
        setModelPrefix(value);
    }

    const handleFiltersChange = ({ priceRange, manufacturerNames, distributorNames }) => {
        setPage(1);
        setPriceRange(priceRange);
        setManufacturerNames(manufacturerNames);
        setDistributorNames(distributorNames);
    };
    
    if (!components) return <div style={{"backgroundColor": "rgba(109, 128, 125, 0.5)"}}/>;
    const total = components.totalPages || 1;

    return(

        <section className='components-page-container'>
            <article className='components-main-container'>
                <div className='components-filter-container'>
                    <Searchbar
                        placeholder="Пошук..."
                        onChange={handleModelPrefixChange}
                    />
                    
                    <FilterModel
                        name={props.name}
                        minPrice={minDefaultPrice}
                        maxPrice={maxDefaultPrice}
                        opened={opened}
                        close={close}
                        onSave={handleFiltersChange}
                        allManufacturerNames={allManufacturers}
                        allDistributorNames={allDistributors}
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
                    <Pagination 
                        total={total} 
                        value={activePage} 
                        onChange={handlePageChange} 
                        size="md"
                    />
                </Center>

            </article>
        </section>

    );
}

export default DroneComponents