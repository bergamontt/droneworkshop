import { Flex } from '@mantine/core';
import ComponentsElement from './ComponentsElement';

function ComponentsList(props) {
    if (!props.data) return(<></>);
    return (
        <Flex
            mih={50}
            gap="md"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
            {props.data.map((component) => (
                <ComponentsElement
                    id={component.id}
                    name={props.name}
                    photoLink={component.photoLink}
                    model={component.model}
                    manufacturer={component.manufacturer}
                />
            ))}
        </Flex>
    )
}

export default ComponentsList