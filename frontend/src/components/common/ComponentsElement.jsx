import '../../styles/ComponentsElement.css'

function ComponentsElement(props) {
    return(
        <div className="component-element-container">
            <figure className='component-photo-container'>
                <img src={props.photoLink} className="component-element-photo" />
            </figure>
            <div className='component-text-container'>
                <span className="component-element-model">
                    {props.model}
                </span>
                <span className="component-element-desc">
                    Manufacturer: {props.manufacturer ? props.manufacturer : "-"}
                </span>
            </div>
        </div>
    );
}

export default ComponentsElement