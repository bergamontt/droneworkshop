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

    useEffect(() => {
        setDroneNamePrefix('');
        setPage(1);
    }, [personal]);

    const { data: publications } = useFetchUnique(
        () => getAllPublications(activePage - 1, elementsPerPage, {
            droneNamePrefix,
            username: personal && currentUsername,
        }),[personal]
    );

    const handlePageChange = (page) => setPage(page);

    if (!publications?.content) return <></>;

    const total = publications?.totalPages || 1;
    const drones = publications.content.map((publication) => {
        return publication.drone
    });

    if (!drones) return <></>;

    console.log(drones);

    return(
        <WorkshopWrapper
            data={drones}
            total={total}
            activePage={activePage}
            handlePageChange={handlePageChange}
            name={"publication"}
        />
    );
}

export default PublicationsPage