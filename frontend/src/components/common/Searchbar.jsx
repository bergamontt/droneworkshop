import { TextInput } from '@mantine/core';
import search from '../../assets/search.svg'

function Searchbar(props) {

    const searchBarStyles = {
        "width" : "100%"
    }

    return (
        <div style={searchBarStyles}>
            <TextInput
                label={props.label}
                leftSection={<img src={search} style={{"height": "50%"}}/>}
                description={props.description}
                placeholder={props.placeholder}
                size="md"
                width="md"
            />
        </div>
    );
}

export default Searchbar