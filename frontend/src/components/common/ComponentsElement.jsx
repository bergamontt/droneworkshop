import { useNavigate } from "react-router-dom";
import '../../styles/ComponentsElement.css'
import { Button } from "@mantine/core";

export default function ComponentsElement(props) {
    const navigate = useNavigate();
    const isSelected = props.selectedId?.toString() === props.id.toString();

    const handleClick = () => {
        navigate(`/drone_components/${props.name}/${props.id}`);
    }

    return(
        <div
            className="component-element-container"
            style={{
                cursor: 'pointer',
                height: props.isSelecting ? "420px" : "380px"}}
        >
            <figure className='component-photo-container' onClick={handleClick}>
                <img src={props.photoLink} alt={props.model} className="component-element-photo" />
            </figure>
            <div className='component-text-container' onClick={handleClick}>
                <div className="component-main-text">
                    <span className="component-element-model">
                        {props.model}
                    </span>
                    <span className="component-element-desc">
                        Виробник: {props.manufacturer ?? "-"}
                    </span>
                </div>
            </div>
            <div className="component-selection-wrapper">
                <span className="component-element-price" onClick={handleClick}>
                    Від {props.startingPrice}грн
                </span>
                {props.isSelecting &&
                    <Button
                        className="component-select-button"
                        variant="filled"
                        color= {isSelected ? "grey" : "green"}
                        onClick={() => props.select(props.id)}
                        disabled={isSelected}
                    >
                        {isSelected ? "Деталь обрано" : "Додати до схеми"}
                    </Button>
                }
            </div>
        </div>
    );
};