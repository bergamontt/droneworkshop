
function SidebarLabel(props) {
    const style = {
        padding: "1em",
        fontFamily: 'WDXL Lubrifont TC',
        fontSize: '1.3em',
        textAlign: "left"
    }
    return(
        <span style={style}>
            {props.text}
        </span>
    );
}

export default SidebarLabel