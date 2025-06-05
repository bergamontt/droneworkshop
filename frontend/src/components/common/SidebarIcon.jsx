
function SidebarIcon(props) {
    return(
        <img 
            src={props.link}  
            style={{
                height: `${props.size || "3.5em"}`
            }}
        />
    );
}

export default SidebarIcon