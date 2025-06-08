import { useFetchUnique } from '../../hooks/useFetchUnique.jsx'
import { getAllDrones } from '../../services/DroneService.jsx';
import { jwtService } from '../../services/JWTService.jsx';
import { elementsPerPage } from '../../services/ServiceConfig.jsx';
import { useState, useEffect } from 'react';
import WorkshopWrapper from '../../components/workshop/WorkshopWrapper.jsx';
import '../../styles/Workshop.css'

function DronesPage() {

    const [activePage, setPage] = useState(1);
    const [droneNamePrefix, setDroneNamePrefix] = useState('');
    const username = jwtService.isLoggedIn() ? jwtService.getUsername() : undefined;

    useEffect(() => {
        setDroneNamePrefix('');
        setPage(1);
    }, []);

    const { data: drones } = useFetchUnique(
        () => getAllDrones(activePage - 1, elementsPerPage, {
            droneNamePrefix,
            username: username,
            isPublished: false
        }),[]
    );

    const handlePageChange = (page) => setPage(page);

    if (!drones?.content) return <></>;
    
    const total = drones?.totalPages || 1;
    const data = drones.content;

    return(
        <WorkshopWrapper
            data={data}
            total={total}
            activePage={activePage}
            handlePageChange={handlePageChange}
            name={"drone"}
        />
    );
}

export default DronesPage