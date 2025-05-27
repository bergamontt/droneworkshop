import { TextInput } from '@mantine/core';

function Searchbar(props) {

    const searchbarStyles = {
        "padding": "1em 8.5em",
    }

    return (
        <div style={searchbarStyles}>
            <TextInput
            label={props.label}
            description={props.description}
            placeholder={props.placeholder}
            mt="md"
            size="md"
        />
        </div>
    );
}

export default Searchbar