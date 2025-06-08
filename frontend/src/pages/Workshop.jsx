import { Flex, Center, Pagination } from '@mantine/core';
import { useFetchUnique } from '../hooks/useFetchUnique.jsx'
import { jwtService } from '../services/JWTService.jsx';
import { getCurrentUser } from '../services/UserService.jsx';
import { elementsPerPage } from '../services/ServiceConfig.jsx';
import { useState, useEffect } from 'react';
import WorkshopList from '../components/workshop/WorkshopList';
import Searchbar from '../components/common/Searchbar'
import '../styles/Workshop.css'

function Workshop({
    fetch,
    personal = false,
    published = true
}) {

    const [activePage, setPage] = useState(1);
    const [droneNamePrefix, setDroneNamePrefix] = useState('');
    
    const { data: user } = useFetchUnique(
        getCurrentUser,
        [getCurrentUser],
        { enabled: personal && jwtService.isLoggedIn() } 
    );

    useEffect(() => {
        setDroneNamePrefix('');
        setPage(1);
    }, []);

    const { data: drones } = useFetchUnique(
        () =>
        fetch(activePage - 1, elementsPerPage, {
            droneNamePrefix,
            username: personal && user?.username ? user.username : undefined,
        }),
        [activePage, droneNamePrefix, personal, user?.username],
        { enabled: !personal || (personal && !!user?.username) }
    );

    const handlePageChange = (page) => setPage(page);

    const handleDroneNamePrefixChange = (value) => {
        setPage(1);
        setDroneNamePrefix(value);
    };

    const total = drones?.totalPages || 1;

    return(
        <section className="workshop-main-wrapper">
            <article className='workshop-data-container'>
                <div className='workshop-searchbar-container'>
                    <Searchbar />
                </div>
                <Flex>
                    <WorkshopList data={drones?.content} />
                </Flex>
            </article>
            <Center style={{"padding" : "1.5em"}}>
                <Pagination 
                    total={total} 
                    value={activePage} 
                    onChange={handlePageChange} 
                    size="md"
                />
            </Center>
        </section>
    );
}

export default Workshop