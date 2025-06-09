import { useNavigate } from "react-router-dom";
import defaultPicture from '../../assets/default.jpg'
import '../../styles/Workshop.css'

function WorkshopElement({name, id, droneName, username, photoBase64}) {
    
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/workshop/${name}/${id}`);
    }
    
    return(
        <section 
            className="workshop-element-container"
            onClick={handleClick}
        >
            <figure className="workshop-photo-container">
                <img src={photoBase64 ? photoBase64 : defaultPicture} className='workshop-photo'/>
            </figure>
            <article className='workshop-drone-text'>
                <span className='workshop-drone-name'>{droneName}</span>
                <span className='workshop-drone-creator'>Творець: {username}</span>
            </article>
        </section>
    );
}

export default WorkshopElement