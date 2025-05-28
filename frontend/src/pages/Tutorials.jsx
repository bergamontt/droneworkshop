import { useFetch } from '../hooks/useFetch.jsx';
import { getAllTutorialCategories } from '../services/TutorialCategoryService.jsx';
import { getAllTutorials } from '../services/TutorialService.jsx';
import Searchbar from "../components/common/Searchbar.jsx";
import TutorialsList from '../components/common/TutorialsList.jsx';
import '../styles/Tutorials.css'

function Tutorials() {

    const mainContainerStyles = {
        "flex": "content",
        "backgroundColor": "rgba(109, 128, 125, 0.5)",
        "padding": "20px"
    };

    const { data: categories } = useFetch(getAllTutorialCategories);
    const { data: tutorials } = useFetch(getAllTutorials);

    if (!categories || !tutorials) return(<h1>Error Occurred!</h1>);

    return(

        <section className='tutorials-page-container'>

            <article className='tutorials-main-container' style={mainContainerStyles}>
                <Searchbar placeholder="Search"/>
                <TutorialsList categories={categories} tutorials={tutorials} />
            </article>

        </section>

    );
}

export default Tutorials