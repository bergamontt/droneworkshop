import {Flex} from '@mantine/core';
import '../../styles/TutorialsSection.css';

function TutorialsSection(props) {
    if (!props.category && !props.tutorials) return(<></>);
    return (
        <div className="tutorial-category-container">
            <h2 className="tutorial-category-name">{props.category.categoryName}</h2>
            <p className="tutorial-category-desc">{props.category.description}</p>
            <Flex
                className="tutorial-list"
                mih={50}
                gap="md"
                justify="flex-start"
                align="flex-start"
                direction="column"
                wrap="wrap"
            >
                {props.tutorials.map((tutorial) => (
                    <div className="tutorial-element-container">
                        <a className="tutorial-element-name" href={tutorial.tutorialLink}>{tutorial.tutorialName}</a>
                        <p className="tutorial-element-desc">{tutorial.description}</p>
                    </div>
                ))}
            </Flex>
        </div>
    )
}

export default TutorialsSection;