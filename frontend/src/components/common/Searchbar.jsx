import { TextInput, ActionIcon  } from '@mantine/core';
import { useState } from 'react';
import search from '../../assets/search.svg'
import send from '../../assets/send.svg'

function Searchbar(props) {

    const searchBarStyles = {
        "width" : "100%"
    }

    const [modelPrefix, setModelPrefix] = useState('');

    const handleSearchbar = (e) => {
        setModelPrefix(e.target.value);
    }

    const handleClick = () => {
        props.onChange(modelPrefix);
    }

    return (
        <div style={searchBarStyles}>
            <TextInput
                label={props.label}
                leftSection={<img src={search} style={{"height": "50%"}}/>}
                rightSection={<ActionIcon variant="subtle" onClick={handleClick}>
                                <img src={send} style={{"height": "70%"}}/>
                              </ActionIcon>}
                description={props.description}
                placeholder={props.placeholder}
                onChange={handleSearchbar}
                size="md"
                width="md"
            />
        </div>
    );
}

export default Searchbar