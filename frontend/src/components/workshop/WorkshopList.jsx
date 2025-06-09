import { Flex } from "@mantine/core";
import WorkshopElement from "./WorkshopElement";

function WorkshopList({name, data}) {

    if(!data) return <></>;

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
                {data.map((schema) => (
                    schema &&
                    <WorkshopElement
                        key={schema.droneId} 
                        droneName={schema.droneName}
                        username={schema.username}
                        name={name}
                        id={schema.droneId}
                    />
                ))}       
            </Flex>
        </div>
    );
}

export default WorkshopList