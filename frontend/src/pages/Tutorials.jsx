import { TableOfContents } from '@mantine/core';
import { useFetch } from '../hooks/useFetch.jsx';
import { getAllTutorialCategories } from '../services/TutorialCategoryService.jsx';
import { getAllTutorials } from '../services/TutorialService.jsx';
import TutorialsList from '../components/common/TutorialsList.jsx';
import '../styles/Tutorials.css'

function Tutorials() {
    const { data: categories } = useFetch(getAllTutorialCategories);
    const { data: tutorials } = useFetch(getAllTutorials);

    if (!categories || !tutorials) return(<h1>Error Occurred!</h1>);

    return(
        <section className='tutorials-page-container'>
            <div className='tutorials-main-container'>
                <TutorialsList categories={categories} tutorials={tutorials} />
            </div>
            <div className='tutorials-contents-table-container'>
                <TableOfContents
                    variant="light"
                    color="blue"
                    size="sm"
                    radius="sm"
                    scrollSpyOptions={{
                        selector: '[data-heading]',
                        getValue: (el) => el.getAttribute('data-heading'),
                        getId: (el) => el.id,
                    }}
                    getControlProps={({ data }) => ({
                        onClick: () => {
                            data.getNode().scrollIntoView({ behavior: 'smooth'});
                        },
                        children: data.value,
                    })}
                />
            </div>
        </section>
    );
}

export default Tutorials