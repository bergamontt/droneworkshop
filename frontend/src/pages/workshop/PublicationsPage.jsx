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

    useEffect(() => {
        setCurrDroneNamePrefix('');
        setDroneNamePrefix('');
        setPage(1);
    }, []);

    const { data: publications } = useFetchUnique(
        () => getAllPublications(activePage - 1, elementsPerPage, {
            droneNamePrefix : currDroneNamePrefix,
            username: personal ? currentUsername : undefined,
        }),[activePage, currDroneNamePrefix, personal, currentUsername]
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
        />
    );
}

export default PublicationsPage