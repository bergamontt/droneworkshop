import { useNavigate } from "react-router-dom";
import '../../styles/ComponentsElement.css'

function ComponentsElement(props) {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/drone_components/${props.name}/${props.id}`);
    }

    return(
        <div className="component-element-container" onClick={handleClick}>
            <figure className='component-photo-container'>
                <img src={props.photoLink} alt={props.model} className="component-element-photo" />
            </figure>
            <div className='component-text-container'>
                <span className="component-element-model">
                    {props.model}
                </span>
                <span className="component-element-desc">
                    Manufacturer: {props.manufacturer ?? "-"}
                </span>
            </div>
        </div>
    );
}

export default ComponentsElement