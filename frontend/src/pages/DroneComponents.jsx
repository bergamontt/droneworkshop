import { ActionIcon, Pagination, Center, Button, NativeSelect } from '@mantine/core';
import { useFetchUnique } from '../hooks/useFetchUnique.jsx'
import { useListSelect } from '../hooks/useListSelect.jsx';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { elementsPerPage } from '../services/ServiceConfig.jsx';
import ComponentsList from '../components/common/ComponentsList.jsx'
import FilterModel from '../components/common/FilterModel.jsx'
import Searchbar from '../components/common/Searchbar.jsx';
import filter from '../assets/filter.svg';
import '../styles/DroneComponents.css'
import {useJWT} from "../hooks/useJWT.jsx";

function DroneComponents(props) {

    const minDefaultPrice = 1;
    const maxDefaultPrice = 10000;

    const navigate = useNavigate();
    const [activePage, setPage] = useState(1);
    const [modelPrefix, setModelPrefix] = useState('');
    const { isSelecting } = useListSelect();
    const { isLoggedIn } = useJWT();
    const [priceRange, setPriceRange] = useState({ minPrice: minDefaultPrice, maxPrice: maxDefaultPrice });
    const [manufacturerNames, setManufacturerNames] = useState([]);
    const [distributorNames, setDistributorNames] = useState([]);
    const [allManufacturers, setAllManufacturers] = useState([]);
    const [allDistributors, setAllDistributors] = useState([]);
    const [sortValue, setSortValue] = useState('За моделлю від А до Z');
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
    
    const getFilters = () => {
        let sortBy = 'model';
        let sortDirection = 'ASC';

        switch (sortValue) {
            case 'Від дешевих до дорогих':
                sortBy = 'minPrice';
                sortDirection = 'ASC';
                break;
            case 'Від дорогих до дешевих':
                sortBy = 'minPrice';
                sortDirection = 'DESC';
                break;
            case 'За моделлю від А до Z':
                sortBy = 'model';
                sortDirection = 'ASC';
                break;
            case 'За моделлю від Z до А':
                sortBy = 'model';
                sortDirection = 'DESC';
                break;
            default:
                break;
        }

        return {
            modelPrefix,
            minPrice: priceRange.minPrice,
            maxPrice: priceRange.maxPrice,
            manufacturerNames,
            distributorNames,
            sortBy,
            sortDirection,
        };
    };
    
    const { data: components } = useFetchUnique(
        () => props.fetch(activePage - 1, elementsPerPage, getFilters()),
        [props.fetch, activePage, modelPrefix, priceRange.minPrice, priceRange.maxPrice, manufacturerNames, distributorNames, sortValue]
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
                <div className='components-main-wrapper'>
                    <div className='components-function-container'>
                        
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

                            <NativeSelect
                                value={sortValue}
                                onChange={(event) => setSortValue(event.currentTarget.value)}
                                data={['Від дешевих до дорогих',
                                       'Від дорогих до дешевих',
                                       'За моделлю від А до Z',
                                       'За моделлю від Z до А']}
                                style={{width: "320px", marginLeft: "1em"}}
                                size='md'
                            />

                        </div>

                        {
                            isSelecting && isLoggedIn &&
                            <Button
                                variant="filled"
                                style={{marginTop: "0.5em"}}
                                onClick={() => {navigate('/create-schema')}}
                            >
                                ← Повернутися до збірки
                            </Button>
                        }

                    </div>

                    <ComponentsList data={components} name={props.name} />

                </div>

                <Center style={{"padding" : "1.5em", "backgroundColor": "rgb(174, 177, 180)"}}>
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