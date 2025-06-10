import { Flex, Alert, Anchor  } from "@mantine/core";
import info from '../../assets/info.svg'
import SidebarIcon from '../common/SidebarIcon'
import defaultPhoto from '../../assets/default.jpg';
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
                        photoBase64={schema.photo
                             ? `data:image/jpeg;base64,${schema.photo}` 
                             : defaultPhoto
                        }
                    />
                ))}
                {
                    data.length === 0 && name === 'drone' &&
                    <Alert
                        variant="white"
                        color="blue"
                        title="Неопублікованих схем не знайдено"
                        icon={<SidebarIcon link={info} size="1.5em" />}
                        style={{width: "500px"}}
                    >
                        Ви можете створити власну схему дрона на сторінці&nbsp;
                        <Anchor href="http://localhost:5173/create-schema" target="_blank">
                            схем
                        </Anchor>.
                        Створивши схему, Ви зможете переглянути її на цій сторінці.
                    </Alert>
                }
                {
                    data.length === 0 && name === 'publication' &&
                    <Alert
                        variant="white"
                        color="blue"
                        title="Опублікованих схем не знайдено"
                        icon={<SidebarIcon link={info} size="1.5em" />}
                        style={{width: "500px"}}
                    >
                        Ви можете створити власну схему дрона на сторінці&nbsp;
                        <Anchor href="http://localhost:5173/create-schema" target="_blank">
                            схем
                        </Anchor>.
                        Створивши та опублікувавши схему, Ви зможете переглянути її на цій сторінці.
                    </Alert>
                }       
            </Flex>
        </div>
    );
}

export default WorkshopList