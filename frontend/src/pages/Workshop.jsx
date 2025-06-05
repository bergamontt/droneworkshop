import { Flex, Center, Pagination } from '@mantine/core';
import WorkshopList from '../components/workshop/WorkshopList';
import '../styles/Workshop.css'

function Workshop() {

    const data = [
        {
            droneName: "Супер пушка",
            username: "bob-dev"
        },
        {
            droneName: "Сушка-ватрушка",
            username: "alice123"
        }
    ]

    return(
        <section className="workshop-main-wrapper">
            <Flex>
                <WorkshopList data={data} />
            </Flex>
            <Center style={{"padding" : "1.5em"}}>
                <Pagination 
                    total={1} 
                    value={1}  
                    size="md"
                />
            </Center>
        </section>
    );
}

export default Workshop