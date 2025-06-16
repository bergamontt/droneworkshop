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

    useEffect(() => {
        setCurrDroneNamePrefix('');
        setDroneNamePrefix('');
        setPage(1);
    }, []);

    const { data: drones } = useFetchUnique(
        () => getAllDrones(activePage - 1, elementsPerPage, {
            droneNamePrefix: currDroneNamePrefix,
            username: currentUsername,
            isPublished: false
        }),[currDroneNamePrefix, currentUsername]
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
        />
    );
}

export default DronesPage