import { Flex, Center, Pagination, NativeSelect } from '@mantine/core';
import WorkshopList from '../workshop/WorkshopList';
import Searchbar from '../common/Searchbar'
import '../../styles/Workshop.css'

function WorkshopWrapper ({
    name, data, 
    total, activePage, handlePageChange, 
    value, onChange, onSearch,
    sortValue, setSortValue
}) {
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
                    <NativeSelect
                        value={sortValue}
                        onChange={(event) => setSortValue(event.currentTarget.value)}
                        data={['Від нових до старих',
                               'Від старих до нових',
                               'За назвою від А до Z',
                               'За назвою від Z до А']}
                        style={{width: "280px", marginLeft: "1em"}}
                        size='md'
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