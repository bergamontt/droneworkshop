import { TextInput, Kbd } from '@mantine/core';
import search from '../../assets/search.svg'
import { useState, useEffect } from 'react';

function Searchbar(props) {

    const [inputValue, setInputValue] = useState(props.value || '');

    useEffect(() => {
        setInputValue(props.value || '');
    }, [props.value]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        props.onChange(e.target.value); 
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            props.onSearch(inputValue);
        }
    };

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
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                size="md"
                width="md"
            />
        </div>
    );
}

export default Searchbar