
function SidebarIcon(props) {
    const style = {
        "height": "3.5em"
    }
    return(
        <img src={props.link} style={style}/>
    );
}

export default SidebarIcon