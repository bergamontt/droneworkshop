import { Flex, Center, Pagination } from '@mantine/core';
import WorkshopList from '../workshop/WorkshopList';
import Searchbar from '../common/Searchbar'
import '../../styles/Workshop.css'

function WorkshopWrapper ({name, data, total, activePage, handlePageChange, value, onChange, onSearch}) {
    return(
        <section className="workshop-main-wrapper">
            <article className='workshop-data-container'>
                <div className='workshop-searchbar-container'>
                    <Searchbar
                        placeholder="Пошук..."
                        value={value}
                        onChange={onChange}
                        onSearch={onSearch}
                    />
                </div>
                <Flex justify={'center'}>
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