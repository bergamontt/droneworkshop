
function SidebarIcon(props) {
    return(
        <img 
            src={props.link} 
            alt={"Component icon"} 
            style={{
                height: `${props.size || "3.5em"}`
            }}
        />
    );
}

export default SidebarIcon