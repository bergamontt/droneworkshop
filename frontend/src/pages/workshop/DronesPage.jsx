import { useFetchUnique } from '../../hooks/useFetchUnique.jsx'
import { getAllDrones } from '../../services/DroneService.jsx';
import { elementsPerPage } from '../../services/ServiceConfig.jsx';
import { useState, useEffect } from 'react';
import WorkshopWrapper from '../../components/workshop/WorkshopWrapper.jsx';
import '../../styles/Workshop.css'
import {useJWT} from "../../hooks/useJWT.jsx";

function DronesPage() {
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
            case 'За назвою від Z до A':
                sortBy = 'droneName';
                sortDirection = 'DESC';
                break;
            default:
                break;
        }

        return {
            droneNamePrefix: currDroneNamePrefix,
            username: currentUsername,
            isPublished: false,
            sortBy,
            sortDirection,
        };
    };

    const { data: drones } = useFetchUnique(
        () => getAllDrones(activePage - 1, elementsPerPage, getFilters()),
        [activePage, currDroneNamePrefix, currentUsername, sortValue]
    );

    const handlePageChange = (page) => setPage(page);

    const handleCurrDronePrefixChange = (value) => {
        setPage(1);
        setCurrDroneNamePrefix(value);
    }

    const handleDronePrefixChange = (value) => {
        setDroneNamePrefix(value);
    };
    
    if (!drones?.content) return <div style={{"backgroundColor": "rgba(109, 128, 125, 0.5)"}}/>;
    
    const total = drones?.totalPages || 1;
    const data = drones.content;

    return(
        <WorkshopWrapper
            data={data}
            total={total}
            activePage={activePage}
            handlePageChange={handlePageChange}
            onChange={handleDronePrefixChange}
            onSearch={handleCurrDronePrefixChange}
            value={droneNamePrefix}
            name={"drone"}
            sortValue={sortValue}
            setSortValue={setSortValue}
        />
    );
}

export default DronesPage