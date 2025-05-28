import {Flex} from '@mantine/core';
import TutorialsSection from "./TutorialsSection.jsx";

function TutorialsList(props) {
    if (!props.categories && !props.tutorials) return(<></>);
    return (
        <Flex
            mih={50}
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="column"
            wrap="wrap"
        >
            {props.categories.map((category) => (
                <TutorialsSection
                    category={category}
                    tutorials={props.tutorials.filter((tutorial) =>
                        (category.categoryId === tutorial.category.categoryId))}
                />
            ))}
        </Flex>
    )
}

export default TutorialsList;