import { Flex } from '@mantine/core';
import ComponentsElement from './ComponentsElement';
import {useListSelect} from "../../hooks/useListSelect.jsx";

function ComponentsList(props) {
    const { isSelecting, getSelectedDetailId, selectDetailId } = useListSelect();
    const selectedDetailId = getSelectedDetailId(props.name);

    const select = (id) => {
        selectDetailId(props.name, id);
    }

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
                    selectedId={selectedDetailId}
                    select={select}
                    isSelecting={isSelecting}
                />
            ))}
        </Flex>
    )
}

export default ComponentsList