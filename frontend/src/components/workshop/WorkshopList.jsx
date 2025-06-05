import { Flex } from "@mantine/core";
import WorkshopElement from "./WorkshopElement";

function WorkshopList(props) {
    if(!props.data) return <></>;
    return (
        <div className="workshop-list-container">
            <Flex
                mih={50}
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
            >
                {props.data.map((schema) => (
                    <WorkshopElement
                        droneName={schema.droneName}
                        username={schema.username}
                    />
                ))}            
            </Flex>
        </div>
    );
}

export default WorkshopList