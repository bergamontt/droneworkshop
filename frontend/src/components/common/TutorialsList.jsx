import {Flex} from '@mantine/core';
import TutorialsSection from "./TutorialsSection.jsx";

function TutorialsList({categories, tutorials}) {
    if (!tutorials || !categories) return(<></>);
    return (
        <Flex
            mih={50}
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="column"
            wrap="wrap"
        >
            {categories.map((category) => (
                <TutorialsSection
                    category={category}
                    tutorials={tutorials.filter((tutorial) =>
                        (category.categoryId === tutorial.category.categoryId))}
                />
            ))}
        </Flex>
    )
}

export default TutorialsList;