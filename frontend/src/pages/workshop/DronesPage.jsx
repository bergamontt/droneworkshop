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

    useEffect(() => {
        setDroneNamePrefix('');
        setPage(1);
    }, []);

    const { data: drones } = useFetchUnique(
        () => getAllDrones(activePage - 1, elementsPerPage, {
            droneNamePrefix,
            username: currentUsername,
            isPublished: false
        }),[droneNamePrefix, currentUsername]
    );

    const handlePageChange = (page) => setPage(page);

    const handleDronePrefixChange = (value) => {
        setPage(1);
        setDroneNamePrefix(value);
    };

    if (!drones?.content) return <></>;
    
    const total = drones?.totalPages || 1;
    const data = drones.content;

    return(
        <WorkshopWrapper
            data={data}
            total={total}
            activePage={activePage}
            handlePageChange={handlePageChange}
            handleDronePrefixChange={handleDronePrefixChange}
            name={"drone"}
        />
    );
}

export default DronesPage