import { Flex, Center, Pagination } from '@mantine/core';
import WorkshopList from '../workshop/WorkshopList';
import Searchbar from '../common/Searchbar'
import '../../styles/Workshop.css'

function WorkshopWrapper ({name, data, total, activePage, handlePageChange, handlePrefixChange}) {
    return(
        <section className="workshop-main-wrapper">
            <article className='workshop-data-container'>
                <div className='workshop-searchbar-container'>
                    <Searchbar
                        placeholder="Пошук..."
                        onChange={handlePrefixChange}
                    />
                </div>
                <Flex>
                    <WorkshopList
                        name={name}
                        data={data}
                    />
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

export default WorkshopWrapper