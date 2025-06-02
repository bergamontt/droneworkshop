import { useState, useEffect } from 'react';
import { Modal, Button, MultiSelect, Space, Divider, NumberInput } from '@mantine/core';
import { RangeSlider, Text } from '@mantine/core';
import '../../styles/FilterModel.css'

function FilterModel({
    name, minPrice, maxPrice,
    opened, close, onSave,
    allManufacturerNames, allDistributorNames
}) {

    const [priceRange, changeRange] = useState([minPrice, maxPrice]);
    const [manufacturerNames, setManufacturerNames] = useState(allManufacturerNames);
    const [distributorNames, setDistributorNames] = useState(allDistributorNames);

    useEffect(() => {
        setPriceRange([minPrice, maxPrice]);
    }, [minPrice, maxPrice]);

    useEffect(() => {
        handleReset();
    }, [name]);

    const setPriceRange = (value) => {
        changeRange(value);
    }

    const handleMinChange = (value) => {
        const parsedValue = Number(value) || minPrice;
        const newMin = Math.max(minPrice, Math.min(parsedValue, priceRange[1])); 
        setPriceRange([newMin, priceRange[1]]);
    };

    const handleMaxChange = (value) => {
        const parsedValue = Number(value) || priceRange[0]; 
        const newMax = Math.min(maxPrice, Math.max(parsedValue, priceRange[0])); 
        setPriceRange([priceRange[0], newMax]);
    };

    const handleSave = () => {
        onSave({
            priceRange: { minPrice: priceRange[0], maxPrice: priceRange[1] },
            manufacturerNames,
            distributorNames,
        });
        close();
    };

    const handleReset = () => {
        setPriceRange([minPrice, maxPrice]);
        setManufacturerNames([]);
        setDistributorNames([]);
    };

    return(
        <div>
            <Modal
                opened={opened} 
                onClose={handleSave} 
                title="Фільтри" 
                centered size="auto"
            >
                <Divider />
                <div className='price-component-wrapper'>
                    <Text size="md">Ціна, грн</Text>
                    <div className='number-input-wrapper'>
                        <NumberInput
                            style={{width: "50%", paddingRight: "1em"}}
                            hideControls
                            value={priceRange[0]} 
                            min={minPrice}
                            max={priceRange[1]}
                            onChange={handleMinChange}
                            allowNegative={false}
                            allowDecimal={false}
                        />
                        <Text>-</Text>
                        <NumberInput 
                            style={{width: "50%", paddingLeft: "1em"}}
                            hideControls
                            value={priceRange[1]} 
                            min={priceRange[0]}
                            max={maxPrice}
                            onChange={handleMaxChange}
                            allowNegative={false}
                            allowDecimal={false}
                            clampBehavior="strict"
                        />
                    </div>
                    <RangeSlider 
                        color="blue"
                        min={minPrice}
                        max={maxPrice}
                        defaultValue={[minPrice, maxPrice]}
                        marks={[
                            { value: minPrice, label: `${minPrice}грн` },
                            { value: maxPrice, label: `${maxPrice}грн` },
                        ]}
                        value={priceRange}
                        label={null}
                        onChange={setPriceRange}
                    />
                </div>
                <Space h="lg"/><Divider /><Space h="lg"/>
                <div className='filter-component-wrapper'>
                    <MultiSelect
                        label="Список виробників компонента"
                        placeholder="Оберіть виробника..."
                        data={allManufacturerNames}
                        value={manufacturerNames}
                        onChange={setManufacturerNames}
                        maxDropdownHeight={200}
                        nothingFoundMessage="Не знайдено..."
                        hidePickedOptions
                        searchable
                        clearable
                        limit={5}
                    />
                </div>
                <div className='filter-component-wrapper'>
                    <MultiSelect
                        label="Список магазинів компонента"
                        placeholder="Оберіть магазин..."
                        data={allDistributorNames}
                        value={distributorNames}
                        onChange={setDistributorNames}
                        maxDropdownHeight={200}
                        nothingFoundMessage="Не знайдено..."
                        hidePickedOptions
                        searchable
                        clearable
                        limit={5}
                    />
                </div>
                <Space h="lg"/><Divider /><Space h="lg"/>
                <Button
                    variant="light" 
                    fullWidth
                    onClick={handleReset}
                >
                    Обнулити
                </Button>
            </Modal>
        </div>
    );
}

export default FilterModel