import { Flex, Center } from '@mantine/core';
import ComponentsElement from './ComponentsElement';

function ComponentsList(props) {
    if (!props.data) return(<></>);
    const content = props.data.content;
    if (!content) return <></>;
    return (
        <Center>
            <Flex
                mih={50}
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
                style={{background: "#aeb1b4",
                        padding: "1em"}}
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
        </Center>
    )
}

export default ComponentsList