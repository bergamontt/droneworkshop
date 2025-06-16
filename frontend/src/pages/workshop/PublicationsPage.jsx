import { useFetchUnique } from '../../hooks/useFetchUnique.jsx'
import { getAllPublications } from '../../services/PublicationService.jsx'
import { useJWT } from "../../hooks/useJWT.jsx";
import { elementsPerPage } from '../../services/ServiceConfig.jsx';
import { useState, useEffect } from 'react';
import WorkshopWrapper from '../../components/workshop/WorkshopWrapper.jsx';
import '../../styles/Workshop.css'

function PublicationsPage({personal = false}) {
    const { currentUsername } = useJWT();
    const [activePage, setPage] = useState(1);
    const [droneNamePrefix, setDroneNamePrefix] = useState('');
    const [currDroneNamePrefix, setCurrDroneNamePrefix] = useState('');
    const [sortValue, setSortValue] = useState('Від нових до старих');

    useEffect(() => {
        setSortValue('Від нових до старих');
        setCurrDroneNamePrefix('');
        setDroneNamePrefix('');
        setPage(1);
    }, []);

    const getFilters = () => {
        let sortBy = 'createdAt';
        let sortDirection = 'DESC'; 

        switch (sortValue) {
            case 'Від нових до старих':
                sortBy = 'createdAt';
                sortDirection = 'DESC';
                break;
            case 'Від старих до нових':
                sortBy = 'createdAt';
                sortDirection = 'ASC';
                break;
            case 'За назвою від А до Z':
                sortBy = 'droneName';
                sortDirection = 'ASC';
                break;
            case 'За назвою від Z до А':
                sortBy = 'droneName';
                sortDirection = 'DESC';
                break;
        }

        return {
            droneNamePrefix: currDroneNamePrefix,
            username: personal ? currentUsername : undefined,
            sortBy,
            sortDirection,
        };
    };

    const { data: publications } = useFetchUnique(
        () => getAllPublications(activePage - 1, elementsPerPage, getFilters()),
        [activePage, currDroneNamePrefix, personal, currentUsername, sortValue]
    );

    const handlePageChange = (page) => setPage(page);

    const handleCurrDronePrefixChange = (value) => {
        setPage(1);
        setCurrDroneNamePrefix(value);
    }

    const handleDronePrefixChange = (value) => {
        setDroneNamePrefix(value);
    };

    if (!publications?.content) return <div style={{"backgroundColor": "rgba(109, 128, 125, 0.5)"}}/>;

    const total = publications?.totalPages || 1;
    const drones = publications.content.map((publication) => {
        return publication.drone
    });

    if (!drones) return <div style={{"backgroundColor": "rgba(109, 128, 125, 0.5)"}}/>;

    return(
        <WorkshopWrapper
            data={drones}
            total={total}
            activePage={activePage}
            handlePageChange={handlePageChange}
            onChange={handleDronePrefixChange}
            onSearch={handleCurrDronePrefixChange}
            value={droneNamePrefix}
            name={"publication"}
            sortValue={sortValue}
            setSortValue={setSortValue}
        />
    );
}

export default PublicationsPage