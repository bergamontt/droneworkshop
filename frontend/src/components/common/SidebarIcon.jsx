
function SidebarIcon({link, size}) {
    return(
        <img 
            src={link}  
            style={{
                height: `${size || "3.5em"}`
            }}
        />
    );
}

export default SidebarIcon