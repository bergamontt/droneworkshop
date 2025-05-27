import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Searchbar(props) {

    const searchbarStyles = {
        "padding": "1em 8.5em",
    }

    const icon = <IconSearch size={16} />;
    return (
        <div style={searchbarStyles}>
            <TextInput
            label={props.label}
            description={props.description}
            placeholder={props.placeholder}
            leftSection={icon}
            mt="md"
            size="md"
        />
        </div>
    );
}

export default Searchbar