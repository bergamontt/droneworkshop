import { useState, useEffect } from 'react';
import { Modal, Button } from '@mantine/core';
import { RangeSlider, Text } from '@mantine/core';

function FilterModel({minPrice, maxPrice, opened, close, onSave}) {
    const midPrice = (minPrice + maxPrice) / 2;
    const [priceRange, changeRange] = useState([minPrice, maxPrice]);

    const handleChange = (value) => {
        changeRange(value);
    }

    const handleSave = () => {
        onSave(priceRange);
        close();
    }

    return(
        <div>
            <Modal
                opened={opened} 
                onClose={close} 
                title="Фільтри" 
                centered size="auto"
            >
                <div style={{"padding": "2em", "width": "30rem"}}>
                    <Text size="md">Ціна</Text>
                    <RangeSlider 
                        color="blue"
                        min={minPrice}
                        max={maxPrice}
                        defaultValue={[minPrice, maxPrice]}
                        step={100}
                        marks={[
                            { value: minPrice, label: `${minPrice}грн` },
                            { value: midPrice, label: `${midPrice}грн`},
                            { value: maxPrice, label: `${maxPrice}грн` },
                        ]}
                        value={priceRange}
                        onChange={handleChange}
                    />
                </div>
                <Button
                    variant="light" 
                    fullWidth
                    onClick={handleSave}
                >
                    Save
                </Button>
            </Modal>
        </div>
    );
}

export default FilterModel