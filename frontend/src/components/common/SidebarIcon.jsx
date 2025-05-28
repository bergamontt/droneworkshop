
function SidebarIcon(props) {
    const style = {
        "height": "3.5em"
    }
    return(
        <img src={props.link} alt={"Component icon"} style={style}/>
    );
}

export default SidebarIcon