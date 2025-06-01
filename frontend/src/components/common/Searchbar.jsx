import { TextInput, Kbd } from '@mantine/core';
import { useState } from 'react';
import search from '../../assets/search.svg'

function Searchbar(props) {

    const [modelPrefix, setModelPrefix] = useState('');

    const handleChange = (e) => {
        setModelPrefix(e.target.value);
    }

    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            props.onChange(modelPrefix);
        }
    }

    return (
        <div style={{width : "100%"}}>
            <TextInput
                label={props.label}
                leftSection={<img src={search} style={{"height": "50%"}}/>}
                rightSection={<div style={{"display" : "flex", "marginRight" : "1.5em"}}>
                                <Kbd>Enter</Kbd>
                             </div>}
                description={props.description}
                placeholder={props.placeholder}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                size="md"
                width="md"
            />
        </div>
    );
}

export default Searchbar