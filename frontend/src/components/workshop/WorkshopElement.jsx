import { useNavigate } from "react-router-dom";
import defaultPicture from '../../assets/default.jpg'
import '../../styles/Workshop.css'

function WorkshopElement({droneName, username}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(``);
    }
    return(
        <section 
            className="workshop-element-container"
            onClick={handleClick}
        >
            <figure className="workshop-photo-container">
                <img src={defaultPicture} className='workshop-photo'/>
            </figure>
            <article className='workshop-drone-text'>
                <span className='workshop-drone-name'>{droneName}</span>
                <span className='workshop-drone-creator'>Творець: {username}</span>
            </article>
        </section>
    );
}

export default WorkshopElement