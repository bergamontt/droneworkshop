import { Flex } from '@mantine/core';
import ComponentsElement from './ComponentsElement';

function ComponentsList(props) {
    if (!props.data) return(<></>);
    const content = props.data.content;
    if (!content) return <></>;
    return (
        <Flex
            mih={50}
            gap="md"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
            {content.map((component) => (
                <ComponentsElement
                    id={component.id}
                    name={props.name}
                    photoLink={component.photoLink}
                    model={component.model}
                    manufacturer={component.manufacturer}
                    startingPrice={component.startingPrice}
                />
            ))}
        </Flex>
    )
}

export default ComponentsList