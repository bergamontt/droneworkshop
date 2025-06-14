import { Flex, Alert } from '@mantine/core';
import ComponentsElement from './ComponentsElement';
import SidebarIcon from './SidebarIcon.jsx';
import {useListSelect} from "../../hooks/useListSelect.jsx";
import info from '../../assets/info.svg'

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
            {
                content.length === 0 &&
                <Alert
                    variant="white"
                    color="blue"
                    title="За Вашим запитом не було знайдено подібних компонентів."
                    icon={<SidebarIcon link={info} size="1.5em" />}
                    style={{width: "500px"}}
                >
                    Спробуйте змінити префікс моделі або переналаштуйте фільтри.
                </Alert>
            }      
        </Flex>
    )
}

export default ComponentsList